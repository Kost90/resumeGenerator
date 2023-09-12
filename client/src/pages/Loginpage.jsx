import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import LoginForm from "../components/ui/forms/loginForm/LoginForm";
import useLoginContext from "../api/loginContext/LoginContext";
import styles from './LoginPage.module.css'


function Loginpage() {
const {loginusers, fetchLoginUser} = useLoginContext();

useEffect(() =>{
  if(loginusers === null){
    const Fetchdata = async () => {
      const email = localStorage.getItem('email');
      await fetchLoginUser(email);
    }
    Fetchdata();
  }
},[]);

  return (
    <div className={styles.login_page}>
    <h1>LOGIN FORM:</h1>
    {loginusers !== null ?(<Navigate to='/profilepage'/>):(<LoginForm/>)}
    </div>
  )
}

export default Loginpage