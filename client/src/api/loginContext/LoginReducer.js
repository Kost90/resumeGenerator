import { loginActionsTypes } from "./LoginActionTypes"

export const loginReducer = (prevState, action) => {
  const { type, payload } = action

  switch (type) {
    case loginActionsTypes.ADD_LOGIN_USER:
      return {
        loginusers: payload.loginUser,
      }
    case loginActionsTypes.REMOVE_LOGIN_USER:
      return {
        loginusers: prevState.loginusers.filter(({ id }) => id !== payload.userId),
      }
    default:
      break
  }
}