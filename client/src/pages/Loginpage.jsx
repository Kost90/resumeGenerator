import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import LoginForm from "../components/ui/forms/loginForm/LoginForm";
import useLoginContext from "../api/loginContext/LoginContext";


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
    <>
    {loginusers !== null ?(<Navigate to='/profilepage'/>):(<LoginForm/>)}
    </>
  )
}

export default Loginpage