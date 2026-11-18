import { useEffect, useState } from 'react'
import { DEADLINE_MS, TASK } from '../data'

const pad = (n) => String(n).padStart(2, '0')

function useCountdown(deadline, active) {
  const [remaining, setRemaining] = useState(() =>
    Math.max(0, deadline - Date.now()),
  )

  useEffect(() => {
    if (!active) return
    const id = setInterval(() => {
      setRemaining(Math.max(0, deadline - Date.now()))
    }, 1000)
    return () => clearInterval(id)
  }, [deadline, active])

  return [
    Math.floor(remaining / 3.6e6),
    Math.floor((remaining % 3.6e6) / 6e4),
    Math.floor((remaining % 6e4) / 1e3),
  ]
    .map(pad)
    .join(':')
}

export default function TentangTugas({ submitted }) {
  const [expanded, setExpanded] = useState(true)
  const countdown = useCountdown(DEADLINE_MS, !submitted)

  return (
    <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
        <h2 className="text-base font-semibold">Tentang Tugas</h2>
        <span className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-2.5 py-1 text-note font-medium">
          <span className="h-1.5 w-1.5 rounded-full bg-purple-600"></span>
          {TASK.type}
        </span>
      </div>
      <div className="space-y-4 p-4">
        <h3 className="text-lg font-semibold">{TASK.title}</h3>

        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="text-note text-slate-500">Batas pengumpulan</p>
            <p>{TASK.deadlineLabel}</p>
          </div>
          {submitted ? (
            <span className="inline-flex items-center gap-1 rounded-md bg-chip px-2 py-0.5 text-note font-semibold text-brand">
              <svg
                className="h-4 w-4"
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
              Sudah Dikumpulkan
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 rounded-md bg-warn px-2 py-0.5 text-note font-semibold tabular-nums text-warn-fg">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="13" r="8" />
                <path d="M12 9v4l2 2M10 2h4" />
              </svg>
              <span>{countdown}</span>
            </span>
          )}
        </div>

        <div>
          <p className="text-note text-slate-500">Deskripsi</p>
          <p
            className={`mt-1 leading-relaxed ${
              expanded ? '' : 'line-clamp-2'
            }`}
          >
            {TASK.description}
          </p>
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="mt-1 text-note text-blue-600 underline underline-offset-2"
          >
            {expanded ? 'Lihat Lebih Sedikit' : 'Lihat Selengkapnya'}
          </button>
        </div>

        <div>
          <p className="mb-2 text-note text-slate-500">Lampiran</p>
          <a
            href="#"
            className="flex items-center gap-4 rounded-xl border border-slate-200 px-4 py-3 hover:bg-slate-50"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-red-600 text-sm font-extrabold text-white">
              PDF
            </div>
            <div className="min-w-0">
              <p className="truncate font-medium">{TASK.attachment.name}</p>
              <p className="text-note text-slate-500">{TASK.attachment.size}</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
