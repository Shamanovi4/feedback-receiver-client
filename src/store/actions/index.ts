import { IFeedbackActionTypes } from '../types'

export const createFeedback = (
  name: string,
  email: string,
  message: string
) => {
  return {
    type: IFeedbackActionTypes.CREATE_FEEDBACK,
    payload: { name, email, message },
  }
}
