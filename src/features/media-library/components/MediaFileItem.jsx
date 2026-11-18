import { SAMPLE_IMAGE } from '../data'
import { formatKb } from '../utils'

function CheckIcon() {
  return (
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
  )
}

export default function MediaFileItem({ file, view, selected, onToggle }) {
  const ringClass = selected
    ? 'border-brand ring-2 ring-brand'
    : 'border-slate-200 hover:border-green-300'

  if (view === 'grid') {
    return (
      <li>
        <button
          type="button"
          onClick={onToggle}
          aria-pressed={selected}
          className={`relative w-full overflow-hidden rounded-xl border bg-slate-50 text-left transition ${ringClass}`}
        >
          {selected && (
            <span className="absolute right-2 top-2 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-brand text-white">
              <CheckIcon />
            </span>
          )}
          <div className="flex aspect-[5/4] items-center justify-center">
            {file.type === 'pdf' ? (
              <span className="flex aspect-square w-[46%] items-center justify-center rounded-xl bg-red-600 text-2xl font-extrabold tracking-wide text-white">
                PDF
              </span>
            ) : (
              <img
                src={SAMPLE_IMAGE}
                alt={file.name}
                className="h-full w-full object-cover"
              />
            )}
          </div>
          <div className="flex gap-2 px-4 pb-3">
            {file.type === 'pdf' && (
              <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-[4px] bg-red-600 text-[6px] font-extrabold text-white">
                PDF
              </span>
            )}
            <div className="min-w-0">
              <p className="truncate text-base">{file.name}</p>
              <p className="text-sm text-slate-400">{formatKb(file.kb)}</p>
            </div>
          </div>
        </button>
      </li>
    )
  }

  return (
    <li>
      <button
        type="button"
        onClick={onToggle}
        aria-pressed={selected}
        className={`flex w-full items-center gap-3 rounded-xl border bg-slate-50 p-3 text-left transition ${ringClass}`}
      >
        {file.type === 'pdf' ? (
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-red-600 text-xs font-extrabold text-white">
            PDF
          </span>
        ) : (
          <img
            src={SAMPLE_IMAGE}
            alt={file.name}
            className="h-12 w-12 shrink-0 rounded-lg object-cover"
          />
        )}
        <div className="min-w-0 flex-1">
          <p className="truncate text-base">{file.name}</p>
          <p className="text-note text-slate-400">{formatKb(file.kb)}</p>
        </div>
        {selected && (
          <span className="text-brand">
            <CheckIcon />
          </span>
        )}
      </button>
    </li>
  )
}
