import { Link } from 'react-router-dom'
import BackHeader from '../../../components/BackHeader'
import usePageTitle from '../../../hooks/usePageTitle'
import NotificationItem from '../components/NotificationItem'
import { useNotifications } from '../context'

export default function NotifikasiPage() {
  usePageTitle('Notifikasi | Materi & Tugas Baru')
  const { notifications } = useNotifications()

  return (
    <div className="mx-auto min-h-screen max-w-md bg-white">
      <BackHeader
        to="/"
        title="Notifikasi"
        titleClassName="text-lg font-semibold"
        action={
          <Link
            to="/notifikasi-layar"
            aria-label="Lihat notifikasi layar kunci"
            title="Lihat notifikasi layar kunci"
            className="block rounded-full p-1.5 text-slate-600 hover:bg-slate-100"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <rect x="7" y="2" width="10" height="20" rx="2" />
              <path d="M11 18h2" />
            </svg>
          </Link>
        }
      />
      <ul className="divide-y divide-slate-200 px-6">
        {notifications.map((notification) => (
          <NotificationItem
            key={notification.id}
            kind={notification.kind}
            course={notification.course}
            subject={notification.subject}
            date={notification.date}
          />
        ))}
      </ul>
    </div>
  )
}
