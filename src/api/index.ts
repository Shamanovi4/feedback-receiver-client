import axios from 'axios'
import { IFeedback, IFeedbackState } from '../store/types'

export class FeedbackApi {
  static async createFeedback(
    feedback: Partial<IFeedback>
  ): Promise<IFeedbackState[]> {
    const res = await axios.post(`${process.env.REACT_APP_URL}`, feedback)
    return res.data
  }
}
