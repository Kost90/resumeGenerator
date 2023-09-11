import {memo, useCallback} from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useLoginContext from '../../../../api/loginContext/LoginContext';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from './LoginForm.module.css';

const Form = memo(({ afterSubmit }) => {
  const navigate = useNavigate();
  // const location = useLocation();
  // const fromPage = location.state?.from?.pathname;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = useCallback(async (data) => {
    await afterSubmit(data);
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
      {errors.name && <div style={{ color: "red" }}>Enter your email</div>}

      <TextField label="Enter your password" variant="outlined" 
      type="password" {...register("password", { required: true })}/>
      {errors.name && <div style={{ color: "red" }}>Enter your password</div>}

      <Button type='submit' variant="contained">
        Log In
      </Button>
    </form>
  );
})

function LoginForm() {
 const {addLoginUser} = useLoginContext();

 return <Form afterSubmit={addLoginUser} />
}

export default LoginForm