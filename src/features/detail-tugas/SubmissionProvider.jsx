import { useCallback, useMemo, useState } from 'react'
import { SubmissionContext } from './context'
import { fileKey } from './utils'

export default function SubmissionProvider({ children }) {
  const [submission, setSubmission] = useState({
    files: [],
    submitted: false,
    submittedAt: null,
  })

  const addFiles = useCallback((newFiles) => {
    setSubmission((prev) => {
      if (prev.submitted) return prev
      return { ...prev, files: [...prev.files, ...newFiles] }
    })
  }, [])

  const removeFile = useCallback((target) => {
    setSubmission((prev) => {
      if (prev.submitted) return prev
      return {
        ...prev,
        files: prev.files.filter((file) => fileKey(file) !== fileKey(target)),
      }
    })
  }, [])

  const submit = useCallback(() => {
    setSubmission((prev) => {
      if (prev.submitted || prev.files.length === 0) return prev
      return { ...prev, submitted: true, submittedAt: new Date() }
    })
  }, [])

  const value = useMemo(
    () => ({ ...submission, addFiles, removeFile, submit }),
    [submission, addFiles, removeFile, submit],
  )

  return (
    <SubmissionContext.Provider value={value}>
      {children}
    </SubmissionContext.Provider>
  )
}
