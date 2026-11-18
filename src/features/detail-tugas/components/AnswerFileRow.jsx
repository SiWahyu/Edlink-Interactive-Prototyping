import { formatFileSize } from '../utils'

export default function AnswerFileRow({ file, onRemove }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2.5">
      {file.type === 'pdf' ? (
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-red-600 text-[10px] font-extrabold text-white">
          PDF
        </span>
      ) : (
        <svg
          className="h-5 w-5 shrink-0 text-brand"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
          <path d="M14 2v6h6M12 18v-6M9 15l3-3 3 3" />
        </svg>
      )}
      <div className="min-w-0 flex-1">
        <p className="truncate text-note font-medium">{file.name}</p>
        <p className="text-sm text-slate-500">{formatFileSize(file.size)}</p>
      </div>
      {onRemove ? (
        <button
          type="button"
          aria-label={`Hapus ${file.name}`}
          onClick={() => onRemove(file)}
          className="rounded-full p-1 text-slate-500 hover:bg-slate-100"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      ) : (
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-chip text-brand">
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
        </span>
      )}
    </div>
  )
}
