import { useEffect, useCallback } from "react";
import useLoginContext from "../api/loginContext/LoginContext";
import UserInfoItem from "../components/ui/userItem/UserInfoItem";
import ResumeForm from "../components/ui/forms/resumeForm/ResumeForm";

function Profilepage() {
  const { loginusers, removeLoginUser } = useLoginContext();

  const LogOut = (id) => {
    removeLoginUser(id);
  };

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
