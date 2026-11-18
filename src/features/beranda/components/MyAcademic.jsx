export default function MyAcademic() {
  return (
    <section className="relative px-6 pb-6 pt-12">
      <button
        aria-label="Daily Quest"
        className="hexagon bg-gold absolute -top-4 right-3 flex h-20 w-24 items-center justify-center transition-transform hover:scale-105"
      >
        <span className="-rotate-6 text-center text-sm font-extrabold uppercase leading-none tracking-tight text-white drop-shadow">
          Daily
          <br />
          Quest
        </span>
      </button>
      <h2 className="text-xl font-semibold">MyAcademic</h2>
      <p className="text-slate-500">
        Gunakan menu ini untuk melihat informasi dan data akademik kamu.
      </p>
      <div className="mt-5 grid grid-cols-4 gap-3">
        <button className="flex flex-col items-center gap-2 rounded-xl border border-slate-200 py-3 text-note font-medium hover:bg-slate-50">
          <svg
            className="h-6 w-6 text-brand"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <rect x="5" y="3" width="14" height="18" rx="2" />
            <path d="M9 8h6M9 12h6M9 16h4" />
          </svg>
          KRS
        </button>
        <button className="flex flex-col items-center gap-2 rounded-xl border border-slate-200 py-3 text-note font-medium hover:bg-slate-50">
          <svg
            className="h-6 w-6 text-brand"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M22 10L12 5 2 10l10 5 10-5z" />
            <path d="M6 12v5c3 2 9 2 12 0v-5" />
          </svg>
          KHS
        </button>
        <button className="flex flex-col items-center gap-2 rounded-xl border border-slate-200 py-3 text-note font-medium hover:bg-slate-50">
          <svg
            className="h-6 w-6 text-brand"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
            <path d="M14 2v6h6M8 13h8M8 17h8" />
          </svg>
          Transkrip
        </button>
        <button className="flex flex-col items-center gap-2 rounded-xl border border-slate-200 py-3 text-note font-medium hover:bg-slate-50">
          <svg
            className="h-6 w-6 text-brand"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18M9 16l2 2 4-4" />
          </svg>
          Presensi
        </button>
      </div>
    </section>
  );
}
