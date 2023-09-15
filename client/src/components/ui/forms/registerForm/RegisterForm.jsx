import { memo, useCallback } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useUsersContext from "../../../../api/usersContext/UsersContext";
import useLoginContext from "../../../../api/loginContext/LoginContext";
import useResumeContext from "../../../../api/resumeContext/ResumeContext";
import Loader from "../../loader/Loader";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./RegisterForm.module.css";

import { string, object } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const registerSchema = {
  Firstname: string().trim().required().min(3).max(20).label("Your Firstname"),
  Lastname: string().trim().required().min(3).max(20).label("Your Lastname"),
  email: string()
    .email()
    .required()
    .matches(/@[^.]*\./),
  password: string().trim().required().label("password"),
};

const Form = memo(({ afterSubmit, addLogin, setloader }) => {
  const navigate = useNavigate();

  const toggleLoading = () => {
    setloader();
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(object().shape(registerSchema)),
  });

  const onSubmit = useCallback(async (data) => {
    toggleLoading();
    await afterSubmit(data);
    const logindata = {
      email: data.email,
      password: data.password,
    };
    localStorage.setItem("email", data.email);
    await addLogin(logindata);
    toggleLoading();
    navigate("/profilepage");
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
        label="Enter your password"
        variant="outlined"
        type="password"
        {...register("password", { required: true })}
      />
      {errors.password?.message && (
        <div style={{ color: "red" }}>{errors.password.message}</div>
      )}

      <Button type="submit" variant="contained">
        Register
      </Button>
    </form>
  );
});

function RegisterForm() {
  const { addUser } = useUsersContext();
  const { addLoginUser } = useLoginContext();
  const {ChangeLoading, loading} = useResumeContext();

 const handelchangeLoading = () => {
  ChangeLoading();
};

  return (
    <div className={styles.container}>
      {loading === false ? (<Form afterSubmit={addUser} addLogin={addLoginUser} setloader={ChangeLoading}/>):(<Loader/>)}
    </div>
    )
}

export default RegisterForm;
