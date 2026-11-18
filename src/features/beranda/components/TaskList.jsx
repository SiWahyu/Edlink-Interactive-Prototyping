import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deadlineLabel } from '../utils'

function TaskIcon() {
  return (
    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-task text-white">
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      >
        <path d="M8 21V8l4-5 4 5v13" />
        <path d="M8 8h8M12 11v10" />
      </svg>
    </div>
  )
}

export default function TaskList({ tasks }) {
  const [openMenu, setOpenMenu] = useState(null)

  useEffect(() => {
    const close = () => setOpenMenu(null)
    document.addEventListener('click', close)
    return () => document.removeEventListener('click', close)
  }, [])

  return (
    <ul className="mt-6 divide-y divide-slate-200 border-y border-slate-200">
      {tasks.map((t, i) => {
        const body = (
          <>
            <TaskIcon />
            <div className="min-w-0 flex-1">
              <p className="truncate text-base font-medium">{t.title}</p>
              <p className="truncate text-note text-slate-500">
                {deadlineLabel(t.deadline)}
              </p>
            </div>
          </>
        )

        return (
          <li
            key={`${t.title}-${i}`}
            className="flex items-center gap-2 pr-3 hover:bg-slate-50"
          >
            {t.href ? (
              <Link
                to={t.href}
                className="flex min-w-0 flex-1 items-center gap-4 py-4 pl-6"
              >
                {body}
              </Link>
            ) : (
              <div className="flex min-w-0 flex-1 items-center gap-4 py-4 pl-6">
                {body}
              </div>
            )}
            <div className="relative">
              <button
                type="button"
                aria-label={`Menu ${t.title}`}
                onClick={(e) => {
                  e.stopPropagation()
                  setOpenMenu(openMenu === i ? null : i)
                }}
                className="rounded-full p-2 text-slate-500 hover:bg-slate-100"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="5" r="2" />
                  <circle cx="12" cy="12" r="2" />
                  <circle cx="12" cy="19" r="2" />
                </svg>
              </button>
              <div
                className={`absolute right-0 top-10 z-30 w-60 rounded-lg border border-slate-200 bg-white py-1 text-note shadow-lg ${
                  openMenu === i ? '' : 'hidden'
                }`}
              >
                {t.href ? (
                  <Link
                    to={t.href}
                    className="block px-3 py-2 hover:bg-slate-100"
                  >
                    Lihat detail
                  </Link>
                ) : (
                  <p className="px-3 py-2 text-slate-400">
                    Detail belum tersedia
                  </p>
                )}
                <p className="px-3 py-2 text-slate-400">{t.course}</p>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
