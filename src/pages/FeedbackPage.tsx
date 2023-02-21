import React from 'react'
import { FeedbackBackground } from '../components/FeedbackBackground/FeedbackBackground'
import { FeedbackForm } from '../components/FeedbackForm/FeedbackForm'
import { Map } from '../components/Map/Map'
import { Page } from '../hoc/Page/Page'

export const FeedbackPage: React.FC = () => {
  return (
    <Page>
      <FeedbackBackground />
      <FeedbackForm />
      <Map />
    </Page>
  )
}
