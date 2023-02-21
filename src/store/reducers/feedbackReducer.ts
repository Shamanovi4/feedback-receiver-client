import { IFeedbackAction, IFeedbackActionTypes, IFeedbackState } from '../types'

export const initialState = {
  feedbacks: [],
}

export const feedbackReducer = (
  state: IFeedbackState = initialState,
  action: IFeedbackAction
) => {
  switch (action.type) {
    case IFeedbackActionTypes.CREATE_FEEDBACK_SUCCESS:
      return { feedbacks: [...state.feedbacks, action.payload] }
    default:
      return state
  }
}
