import { memo, useCallback } from "react";
import { useForm } from "react-hook-form";
// import useUsersContext from "../../../../api/usersContext/UsersContext";
// import useLoginContext from "../../../../api/loginContext/LoginContext";
import TextField from "@mui/material/TextField";
import Textarea from "@mui/joy/Textarea";
import Button from "@mui/material/Button";
import styles from "./ResumeForm.module.css";

import { string, number, object, mixed, boolean, date } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const phoneNumberRegex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;

const resumeSchema = {
  Firstname: string().trim().required().min(3).max(20).label("Your Firstname"),
  Lastname: string().trim().required().min(3).max(20).label("Your Lastname"),
  email: string()
    .email()
    .required()
    .matches(/@[^.]*\./).label("Your email"),
  phone: string()
    .matches(phoneNumberRegex, "Is not a number")
    .label("Phone Number"),
  workexpr: string().trim().required().min(3).label("Your work experience"),
  education: string().trim().required().min(3).label("Your work education"),
  skills: string().trim().required().min(3).label("Your work skills"),
};

const Form = memo(() => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(object().shape(resumeSchema)),
  });

  const onSubmit = useCallback(async (data) => {
    console.log(data);
    reset();
  }, []);

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

function ResumeForm() {
  // const { addUser } = useUsersContext();
  // const { addLoginUser } = useLoginContext();

  return <Form />;
}

export default ResumeForm;
