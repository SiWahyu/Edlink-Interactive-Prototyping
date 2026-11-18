import { createContext, useContext } from 'react'

export const SubmissionContext = createContext(null)

export function useSubmission() {
  const context = useContext(SubmissionContext)
  if (!context) {
    throw new Error('useSubmission must be used within SubmissionProvider')
  }
  return context
}
