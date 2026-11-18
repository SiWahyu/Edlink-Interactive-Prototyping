import { FILTERS } from '../data'

export default function TaskFilter({ active, onChange }) {
  return (
    <div className="no-scrollbar mt-5 flex gap-3 overflow-x-auto px-6 pb-1">
      {FILTERS.map((c) => {
        const isActive = c === active
        return (
          <button
            type="button"
            key={c}
            onClick={() => onChange(c)}
            className={`max-w-56 shrink-0 truncate rounded-lg border px-4 py-2 text-note ${
              isActive
                ? 'border-brand bg-chip font-semibold text-brand'
                : 'border-slate-200 bg-white hover:bg-slate-50'
            }`}
          >
            {c}
          </button>
        )
      })}
    </div>
  )
}
