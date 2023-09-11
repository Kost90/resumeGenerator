import {memo, useCallback} from 'react';
import { useForm } from "react-hook-form";
import useUsersContext from '../../../../api/usersContext/UsersContext';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from './RegisterForm.module.css';

const Form = memo(({ afterSubmit }) => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Firstname: "",
      Lastname: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = useCallback((data) => {
    console.log(data);
    afterSubmit(data);
    reset();
  },[]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.form_container}
    >
      <TextField label="Enter your Firstname" variant="outlined"
      type="text" {...register("Firstname", { required: true })}/>
      {errors.name && <div style={{ color: "red" }}>Enter your Firstname</div>}
      <TextField label="Enter your Lastname" variant="outlined" 
      type="text" {...register("Lastname", { required: true })}/>
      {errors.name && <div style={{ color: "red" }}>Enter your Lastname</div>}

      <TextField label="Enter your email" variant="outlined" 
      type="email" {...register("email", { required: true })}/>
      {errors.name && <div style={{ color: "red" }}>Enter your email</div>}

      <TextField label="Enter your password" variant="outlined" 
      type="password" {...register("password", { required: true })}/>
      {errors.name && <div style={{ color: "red" }}>Enter your password</div>}

      <Button type='submit' variant="contained">
        Register
      </Button>
    </form>
  );
})



function RegisterForm() {

  const { addUser } = useUsersContext();

  return <Form afterSubmit={addUser} />
}

export default RegisterForm