export default function MediaLibraryFooter({ selectedCount, onAdd }) {
  return (
    <div className="flex shrink-0 items-end justify-end gap-3 bg-white px-4 pb-3 pt-2">
      <button
        type="button"
        disabled
        aria-label="Unggah file"
        className="mb-2 flex h-14 w-14 cursor-not-allowed items-center justify-center rounded-xl bg-slate-800 text-white opacity-50 shadow-[0_10px_24px_-8px_rgba(0,0,0,0.5)]"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" d="M12 5v14M5 12h14" />
        </svg>
      </button>
      <button
        type="button"
        onClick={onAdd}
        disabled={selectedCount === 0}
        className="mb-2 h-12 max-w-[64%] flex-1 rounded-xl bg-brand px-4 text-base font-semibold text-white disabled:bg-slate-300"
      >
        Tambahkan {selectedCount} File
      </button>
    </div>
  )
}
