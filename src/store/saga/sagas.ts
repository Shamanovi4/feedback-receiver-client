import { call, Effect, put, takeEvery } from 'redux-saga/effects'
import { FeedbackApi } from '../../api'
import { ICreateAction, IFeedback, IFeedbackActionTypes } from '../types'

function* sagaCreateFeedback(action: ICreateAction): Generator<Effect, void> {
  try {
    const feedbackObject: Partial<IFeedback> = {
      name: action.payload.name,
      email: action.payload.email,
      message: action.payload.message,
    }

    const feedback = yield call(FeedbackApi.createFeedback, feedbackObject)

    yield put({
      type: IFeedbackActionTypes.CREATE_FEEDBACK_SUCCESS,
      payload: feedback,
    })
  } catch (error) {
    console.log('Error', error)
  }
}

export function* sagaWatcher(): Generator<Effect, void> {
  yield takeEvery(IFeedbackActionTypes.CREATE_FEEDBACK, sagaCreateFeedback)
}
