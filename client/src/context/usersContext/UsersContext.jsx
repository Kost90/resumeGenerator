import UsersApi from '../../api/UsersApi/UsersApi'
import { createContext, useContext, useReducer, useCallback } from 'react'
import { usersReducer } from './UsersReducer'
import { userActionsTypes } from './UsersActionTypes'


const UsersContext = createContext()

const initialUsers = null

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

  const addUser = useCallback(async data => {
    const { response } = await UsersApi.postUser(data)
    dispatchUsers({ type: userActionsTypes.ADD_USER, payload: { response } })
  }, [])

  const fetchUser = useCallback(async email => {
    const { response, controller } = await UsersApi.getUser(email)
    dispatchUsers({
      type: userActionsTypes.ADD_USER,
      payload: { response },
    })
    return controller
  }, [])

  return (
    <UsersContext.Provider
      value={{
        users,
        addUser,
        fetchUser,
      }}>
      {children}
    </UsersContext.Provider>
  )
}

export default useUsersContext
