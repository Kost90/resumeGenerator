import {memo, useCallback} from 'react';
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useLoginContext from '../../../../api/loginContext/LoginContext';
import useUsersContext from "../../../../api/usersContext/UsersContext";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from './LoginForm.module.css';

import { string, object,} from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const loginSchema = {
  email: string()
  .email()
  .required()
  .matches(/@[^.]*\./).label("Your email"),
  password: string().trim().required().label("password"),
}

const Form = memo(({ afterSubmit}) => {
  const navigate = useNavigate();
 
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(object().shape(loginSchema)),
  });

  const onSubmit = useCallback(async (data) => {
    await afterSubmit(data);
    localStorage.setItem('email',data.email);
    navigate('/profilepage');
    reset();
  },[]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.form_container}
    >
      <TextField label="Enter your email" variant="outlined" 
      type="email" {...register("email", { required: true })}/>
      {errors.email?.message && <div style={{ color: "red" }}>{errors.email.message}</div>}

      <TextField label="Enter your password" variant="outlined" 
      type="password" {...register("password", { required: true })}/>
      {errors.password?.message && <div style={{ color: "red" }}>{errors.password.message}</div>}

      <Button type='submit' variant="contained">
        Log In
      </Button>
    </form>
  );
})

function LoginForm() {
 const {addLoginUser} = useLoginContext();
 const { addUser } = useUsersContext();

 return <Form afterSubmit={addLoginUser}/>
}

export default LoginForm