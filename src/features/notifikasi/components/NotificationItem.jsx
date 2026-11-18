import OwlAvatar from '../../../components/OwlAvatar'
import { LABEL } from '../data'

function MateriBadge() {
  return (
    <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-md border-2 border-white bg-materi-soft text-materi">
      <svg
        className="h-3.5 w-3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M12 22H6a2 2 0 01-2-2V4a2 2 0 012-2h8l6 6v3" />
        <path d="M14 2v6h6M18.4 13.6a2 2 0 112.8 2.8L16 21.6l-3.5 1 1-3.5z" />
      </svg>
    </span>
  )
}

function TugasBadge() {
  return (
    <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-md border-2 border-white bg-task text-white">
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      >
        <path d="M8 21V8l4-5 4 5v13" />
        <path d="M8 8h8M12 11v10" />
      </svg>
    </span>
  )
}

function PengumpulanBadge() {
  return (
    <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-md border-2 border-white bg-brand text-white">
      <svg
        className="h-3.5 w-3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 13l4 4L19 7"
        />
      </svg>
    </span>
  )
}

export default function NotificationItem({ kind, course, subject, date }) {
  return (
    <li className="flex gap-4 py-4">
      <div className="relative h-12 w-12 shrink-0">
        <OwlAvatar />
        {kind === 'materi' ? (
          <MateriBadge />
        ) : kind === 'pengumpulan' ? (
          <PengumpulanBadge />
        ) : (
          <TugasBadge />
        )}
      </div>
      <div className="min-w-0">
        <p className="font-semibold leading-snug">
          {LABEL[kind]} @{course}
        </p>
        <p className="text-base">{subject}</p>
        <p className="text-note text-slate-500">{date}</p>
      </div>
    </li>
  )
}
