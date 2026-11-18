import { useCallback, useMemo, useState } from 'react'
import { NOTIFS } from './data'
import { NotificationContext } from './context'

function formatNotificationDate(date) {
  const formatted = new Intl.DateTimeFormat('id-ID', {
    timeZone: 'Asia/Jakarta',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)
  return `${formatted} WIB`
}

export default function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState(NOTIFS)

  const addSubmissionNotification = useCallback(({ course, subject }) => {
    const id = `submission-${course}-${subject}`
    const notification = {
      id,
      kind: 'pengumpulan',
      course,
      subject,
      date: formatNotificationDate(new Date()),
    }

    setNotifications((prev) => [
      notification,
      ...prev.filter((item) => item.id !== id),
    ])
  }, [])

  const value = useMemo(
    () => ({ notifications, addSubmissionNotification }),
    [notifications, addSubmissionNotification],
  )

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  )
}
