import { createContext, useContext, useReducer, useCallback } from 'react'
import LoginApi from '../../api/LoginApi/LoginApi'
import { getUserInfo } from '../../api/LoginApi/LoginApi'
import { loginReducer } from './LoginReducer'
import { loginActionsTypes } from './LoginActionTypes'

const LoginContext = createContext()

const initialLoginUsers = null

const useLoginContext = () => {
  const context = useContext(LoginContext)

  if (typeof context === 'undefined') {
    throw new Error('useUsersContext must be used into UsersProvider!')
  }

  return context
}

export const LoginProvider = ({ children }) => {
  const [{ loginusers }, dispatchLogin] = useReducer(loginReducer, {
    loginusers: initialLoginUsers,
  })

  const fetchLoginUser = useCallback(async email => {
    const { response, controller } = await LoginApi.getLoginUser(email)
    dispatchLogin({
      type: loginActionsTypes.ADD_LOGIN_USER,
      payload: { response },
    })
    return controller
  }, [])

  const addLoginUser = useCallback(async loginUser => {
    const { response, controller } = await getUserInfo(loginUser)
    await LoginApi.postLoginUser(response)
    dispatchLogin({
      type: loginActionsTypes.ADD_LOGIN_USER,
      payload: { response },
    })
    controller.abort()
  }, [])

  const removeLoginUser = useCallback(userId => {
    LoginApi.deleteLoginUser(userId)
    localStorage.clear()
    dispatchLogin({
      type: loginActionsTypes.REMOVE_LOGIN_USER,
      payload: { userId },
    })
  }, [])

  return (
    <LoginContext.Provider
      value={{
        loginusers,
        addLoginUser,
        removeLoginUser,
        fetchLoginUser,
      }}>
      {children}
    </LoginContext.Provider>
  )
}

export default useLoginContext
