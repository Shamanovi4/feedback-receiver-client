import axios from 'axios'
import { IFeedback, IFeedbackState } from '../store/types'

export class FeedbackApi {
  static async createFeedback(
    feedback: Partial<IFeedback>
  ): Promise<IFeedbackState[]> {
    const res = await axios.post('http://localhost:3000/feedbacks', feedback)
    return res.data
  }
}
