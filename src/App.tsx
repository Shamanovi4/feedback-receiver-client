import React from 'react'
import { Layout } from './hoc/Layout/Layout'
import { FeedbackPage } from './pages/FeedbackPage'
import './App.scss'

export const App: React.FC = () => {
  return (
    <Layout>
      <FeedbackPage />
    </Layout>
  )
}
