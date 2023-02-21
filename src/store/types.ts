export enum IFeedbackActionTypes {
  CREATE_FEEDBACK_SUCCESS = 'CREATE_FEEDBACK_SUCCESS',
  CREATE_FEEDBACK = 'CREATE_FEEDBACK',
  GET_FEEDBACKS = 'GET_FEEDBACKS',
  UPDATE_FEEDBACK = 'UPDATE_FEEDBACK',
  DELETE_FEEDBACK = 'CREATE_FEEDBACK',
}

export interface IFeedback {
  id: string
  name: string
  email: string
  message: string
}

export interface IFeedbackState {
  feedbacks: IFeedback[]
}

export interface IFeedbackReducer {
  feedbackReducer: IFeedbackState
}

export interface ICreateAction {
  type: IFeedbackActionTypes.CREATE_FEEDBACK_SUCCESS
  payload: {
    name: string
    email: string
    message: string
  }
}

export type IFeedbackAction = ICreateAction
