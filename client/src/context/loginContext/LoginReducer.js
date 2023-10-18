import { loginActionsTypes } from "./LoginActionTypes"

export const loginReducer = (prevState, action) => {
  const { type, payload } = action

  switch (type) {
    case loginActionsTypes.ADD_LOGIN_USER:
      return {
        loginusers: payload.response,
      }
    case loginActionsTypes.REMOVE_LOGIN_USER:
      return {
        loginusers: null,
      }
    default:
      break
  }
}