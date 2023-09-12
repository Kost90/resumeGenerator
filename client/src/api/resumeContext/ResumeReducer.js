import {resumeActionsTypes} from './ResumeActionsTypes'

export const resumeReducer = (prevState, action) => {
  const { type, payload } = action

  switch (type) {
    case resumeActionsTypes.ADD_RESUME:
      return {
        resume: [...prevState.resume, payload.data],
      }
    case resumeActionsTypes.REMOVE_RESUME:
      return {
        resume:  prevState.resume.filter(({ id }) => id !== payload.userId),
      }
    default:
      break
  }
}