import { userActionsTypes } from "./UsersActionTypes"

export const usersReducer = (prevState, action) => {
  const { type, payload } = action

  switch (type) {
    case userActionsTypes.ADD_USER:
      return {
        users: [...prevState.users, payload.newUser],
      }
    case userActionsTypes.REMOVE_USER:
      return {
        users: prevState.users.filter(({ id }) => id !== payload.userId),
      }
    default:
      break
  }
}
