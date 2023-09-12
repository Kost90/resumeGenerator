import { useEffect, useCallback } from "react";
import useLoginContext from "../api/loginContext/LoginContext";
import useUsersContext from "../api/usersContext/UsersContext";
import UserInfoItem from "../components/ui/userItem/UserInfoItem";
import ResumeForm from "../components/ui/forms/resumeForm/ResumeForm";

function Profilepage() {
  const { fetchUser } = useUsersContext();
  const { loginusers, removeLoginUser } = useLoginContext();

  const LogOut = (id) => {
    removeLoginUser(id);
  };

  useEffect(() =>{
    if(loginusers !== null){
      const Fetchdata = async () => {
        console.log('fetch user')
        const email = localStorage.getItem('email');
        await fetchUser(email);
      }
      Fetchdata();
    }
  },[]);

  return (
    <>
      {loginusers !== undefined ? (
        <>
          <UserInfoItem logout={LogOut} />
          <ResumeForm />
        </>
      ) : null}
    </>
  );
}

export default Profilepage;
