import { memo, useCallback } from "react";
import { useForm } from "react-hook-form";
import useUsersContext from "../../../../api/usersContext/UsersContext";
import useResumeContext from "../../../../api/resumeContext/ResumeContext";
import TextField from "@mui/material/TextField";
import Textarea from "@mui/joy/Textarea";
import Button from "@mui/material/Button";
import styles from "./ResumeForm.module.css";
import { postResumeAI } from "../../../../api/resumeContext/ResumeApi";
import Loader from "../../loader/Loader";

import { string, number, object } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const phoneNumberRegex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
const resumeSchema = {
  Firstname: string().trim().required().min(3).max(20).label("Your Firstname"),
  Lastname: string().trim().required().min(3).max(20).label("Your Lastname"),
  email: string()
    .email()
    .required()
    .matches(/@[^.]*\./)
    .label("Your email"),
  phone: string()
    .matches(phoneNumberRegex, "Is not a number")
    .label("Phone Number"),
  workexpr: string().trim().required().min(3).label("Your work experience"),
  education: string().trim().required().min(3).label("Your work education"),
  skills: string().trim().required().min(3).label("Your work skills"),
  UsersID: number().label("Users ID"),
};

const Form = memo(({ aftersubmit, id, show, setContent, setloading }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(object().shape(resumeSchema)),
  });

  const handelchange = () => {
    show();
  };

  const addContent = (content) => {
    setContent(content);
  };

  const toggleLoading = () => {
    setloading();
  };

  const onSubmit = useCallback(
    async (data, e) => {
      toggleLoading();
      const res = await postResumeAI(data);
      const response = {
        content: res.choices[0].message.content.trim(),
      };
      const newData = {
        ...response,
        UsersID: id,
      };
      await aftersubmit(newData);
      addContent(newData.content);
      toggleLoading();
      handelchange();
      reset();
    },
    [id]
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form_container}>
      <TextField
        label="Enter your Firstname"
        variant="outlined"
        type="text"
        {...register("Firstname", { required: true })}
      />
      {errors.Firstname?.message && (
        <div style={{ color: "red" }}>{errors.Firstname.message}</div>
      )}
      <TextField
        label="Enter your Lastname"
        variant="outlined"
        type="text"
        {...register("Lastname", { required: true })}
      />
      {errors.Lastname?.message && (
        <div style={{ color: "red" }}>{errors.Lastname.message}</div>
      )}

      <TextField
        label="Enter your email"
        variant="outlined"
        type="email"
        {...register("email", { required: true })}
      />
      {errors.email?.message && (
        <div style={{ color: "red" }}>{errors.email.message}</div>
      )}

      <TextField
        label="Enter your phone"
        variant="outlined"
        type="phone"
        {...register("phone", { required: true })}
      />
      {errors.phone?.message && (
        <div style={{ color: "red" }}>{errors.phone.message}</div>
      )}

      <Textarea
        minRows={2}
        size="lg"
        variant="outlined"
        maxRows={100}
        placeholder="Write your work experience"
        {...register("workexpr", { required: true })}
      />
      {errors.workexpr?.message && (
        <div style={{ color: "red" }}>{errors.workexpr.message}</div>
      )}

      <Textarea
        minRows={2}
        size="lg"
        variant="outlined"
        maxRows={100}
        placeholder="Write your education"
        {...register("education", { required: true })}
      />
      {errors.education?.message && (
        <div style={{ color: "red" }}>{errors.education.message}</div>
      )}

      <Textarea
        minRows={2}
        size="lg"
        variant="outlined"
        maxRows={100}
        placeholder="Write your skills"
        {...register("skills", { required: true })}
      />
      {errors.skills?.message && (
        <div style={{ color: "red" }}>{errors.skills.message}</div>
      )}

      <Button type="submit" variant="contained">
        Generate resume
      </Button>
    </form>
  );
});

function ResumeForm({ show }) {
  const {
    addResume,
    Handelchange,
    HandelchangeContent,
    ChangeLoading,
    loading,
  } = useResumeContext();
  const { users } = useUsersContext();

  const handelchange = () => {
    Handelchange();
  };

  const handelchangeLoading = () => {
    ChangeLoading();
  };

  const setContent = (content) => {
    HandelchangeContent(content);
  };

  const id = users[0]?.id;

  return (
    <>
      {loading === false ? (
        <div>
         <h1>Fill form for creating resume</h1>
        <Form
          aftersubmit={addResume}
          setloading={handelchangeLoading}
          id={id}
          show={handelchange}
          setContent={setContent}
        />
        </div>
      ) : (
        <Loader/>
      )}
    </>
  );
}

export default ResumeForm;
