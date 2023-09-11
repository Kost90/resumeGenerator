import { createContext, useContext, useReducer, useCallback } from 'react'

import { usersReducer } from './UsersReducer';
import { userActionsTypes } from './UsersActionTypes';
import { postUser } from './UsersApi';

const UsersContext = createContext()

const initialUsers = [];

const useUsersContext = () => {
  const context = useContext(UsersContext)

  if (typeof context === 'undefined') {
    throw new Error('useUsersContext must be used into UsersProvider!')
  }

  return context
}

export const UsersProvider = ({ children }) => {
  const [{ users }, dispatchUsers] = useReducer(usersReducer, {
    users: initialUsers,
  })

  const addUser = useCallback( async (newUser) => {
    await postUser(newUser)
    dispatchUsers({ type: userActionsTypes.ADD_USER, payload: { newUser } })
  }, [])


  return (
    <UsersContext.Provider
      value={{
        users,
        addUser,
      }}>
      {children}
    </UsersContext.Provider>
  )
}

export default useUsersContext
