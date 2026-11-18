import { STORAGE } from '../data'

export default function MediaLibraryToolbar({
  sort,
  onSortChange,
  view,
  onViewChange,
}) {
  const activeClass = 'border-brand text-brand'
  const inactiveClass = 'border-slate-300 text-slate-800'

  return (
    <>
      <div className="h-3 w-full overflow-hidden rounded-full bg-chip">
        <div
          className="h-full rounded-full bg-brand"
          style={{ width: `${STORAGE.percent}%` }}
        ></div>
      </div>
      <p className="mt-2 text-note text-slate-700">{STORAGE.label}</p>

      <div className="mt-3 flex items-center justify-between">
        <div className="relative">
          <select
            aria-label="Urutkan"
            value={sort}
            onChange={(e) => onSortChange(e.target.value)}
            className="h-12 w-36 appearance-none rounded-xl border border-slate-300 bg-white px-3 text-base outline-none focus:border-brand"
          >
            <option value="az">A - Z</option>
            <option value="za">Z - A</option>
          </select>
          <svg
            className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 9l6 6 6-6"
            />
          </svg>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Tampilan daftar"
            aria-pressed={view === 'list'}
            onClick={() => onViewChange('list')}
            className={`flex h-11 w-11 items-center justify-center rounded-xl border ${
              view === 'list' ? activeClass : inactiveClass
            }`}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                d="M9 6h11M9 12h11M9 18h11M4 6h.01M4 12h.01M4 18h.01"
              />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Tampilan kotak"
            aria-pressed={view === 'grid'}
            onClick={() => onViewChange('grid')}
            className={`flex h-11 w-11 items-center justify-center rounded-xl border ${
              view === 'grid' ? activeClass : inactiveClass
            }`}
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <rect x="4" y="4" width="7" height="7" rx="1.5" />
              <rect x="13" y="4" width="7" height="7" rx="1.5" />
              <rect x="4" y="13" width="7" height="7" rx="1.5" />
              <rect x="13" y="13" width="7" height="7" rx="1.5" />
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}
