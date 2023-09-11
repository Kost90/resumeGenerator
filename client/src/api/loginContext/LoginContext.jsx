import { createContext, useContext, useReducer, useCallback } from "react";

import { postLoginUser, getUserInfo, deleteLoginUser } from "./LoginApi";
import { loginReducer } from "./LoginReducer";
import { loginActionsTypes } from "./LoginActionTypes";

const LoginContext = createContext();

const initialLoginUsers = null;

const useLoginContext = () => {
  const context = useContext(LoginContext);

  if (typeof context === "undefined") {
    throw new Error("useUsersContext must be used into UsersProvider!");
  }

  return context;
};

export const LoginProvider = ({ children }) => {
  const [{ loginusers }, dispatchLogin] = useReducer(loginReducer, {
    loginusers: initialLoginUsers,
  });

  const addLoginUser = useCallback( async (loginUser) => {
    const data = await getUserInfo(loginUser);
    console.log(data);
    await postLoginUser(data);
    dispatchLogin({
      type: loginActionsTypes.ADD_LOGIN_USER,
      payload: { data },
    });
  }, []);

  const removeLoginUser = useCallback((userId) => {
    deleteLoginUser(userId);
    dispatchLogin({
      type: loginActionsTypes.REMOVE_LOGIN_USER,
      payload: { userId },
    });
  }, []);

  return (
    <LoginContext.Provider
      value={{
        loginusers,
        addLoginUser,
        removeLoginUser,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default useLoginContext;
