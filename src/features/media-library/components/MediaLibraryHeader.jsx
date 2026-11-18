export default function MediaLibraryHeader({
  tabs,
  activeTab,
  onTabChange,
  searchOpen,
  query,
  onQueryChange,
  onOpenSearch,
  onCloseSearch,
  onBack,
}) {
  return (
    <header className="shrink-0 bg-white shadow-[0_4px_10px_-6px_rgba(0,0,0,0.18)]">
      {searchOpen ? (
        <div className="flex h-16 items-center gap-4 px-5">
          <svg
            className="h-5 w-5 text-slate-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="7" />
            <path strokeLinecap="round" d="M20 20l-3.5-3.5" />
          </svg>
          <input
            autoFocus
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Cari file..."
            className="flex-1 bg-transparent text-base outline-none placeholder:text-slate-400"
          />
          <button type="button" onClick={onCloseSearch} aria-label="Tutup pencarian">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
      ) : (
        <div className="flex h-16 items-center gap-4 px-5">
          <button
            type="button"
            onClick={onBack}
            aria-label="Kembali"
            className="-ml-1 p-1"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <h1 className="flex-1 text-lg font-semibold">Media Library</h1>
          <button
            type="button"
            onClick={onOpenSearch}
            aria-label="Cari"
            className="p-1 text-slate-600"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="7" />
              <path strokeLinecap="round" d="M20 20l-3.5-3.5" />
            </svg>
          </button>
        </div>
      )}
      <nav
        className="no-scrollbar flex overflow-x-auto px-3"
        role="tablist"
      >
        {tabs.map((tab) => {
          const active = tab === activeTab
          return (
            <button
              type="button"
              role="tab"
              aria-selected={active}
              key={tab}
              onClick={() => onTabChange(tab)}
              className={`relative shrink-0 px-5 pb-3 pt-1 text-base ${
                active
                  ? 'font-semibold text-brand'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {tab}
              {active && (
                <span className="absolute inset-x-5 bottom-0 h-[3px] rounded-full bg-brand"></span>
              )}
            </button>
          )
        })}
      </nav>
    </header>
  )
}
