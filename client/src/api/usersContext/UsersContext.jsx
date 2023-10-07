import { createContext, useContext, useReducer, useCallback } from "react";

import { usersReducer } from "./UsersReducer";
import { userActionsTypes } from "./UsersActionTypes";
import { postUser, getUser } from "./UsersApi";

const UsersContext = createContext();

const initialUsers = null;

const useUsersContext = () => {
  const context = useContext(UsersContext);

  if (typeof context === "undefined") {
    throw new Error("useUsersContext must be used into UsersProvider!");
  }

  return context;
};

export const UsersProvider = ({ children }) => {
  const [{ users }, dispatchUsers] = useReducer(usersReducer, {
    users: initialUsers,
  });

  const addUser = useCallback(async (data) => {
    const user = await postUser(data);
    dispatchUsers({ type: userActionsTypes.ADD_USER, payload: { user } });
  }, []);

  const fetchUser = useCallback(async (email) => {
    const {data, controller} = await getUser(email);
    dispatchUsers({
      type: userActionsTypes.ADD_USER,
      payload: { data },
    });
    return controller
  }, []);

  return (
    <UsersContext.Provider
      value={{
        users,
        addUser,
        fetchUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default useUsersContext;
