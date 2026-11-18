import { Link } from "react-router-dom";
import OwlAvatar from "../../../components/OwlAvatar";
import { USER } from "../data";
import { todayLabel } from "../utils";

export default function HeaderJadwal() {
  return (
    <section className="bg-header px-4 pb-5 pt-6 text-white">
      <div className="flex items-center gap-3">
        <OwlAvatar className="h-12 w-12 shrink-0 rounded-full ring-2 ring-white/30" />
        <button className="min-w-0 flex-1 text-left">
          <span className="flex items-center gap-1">
            <span className="truncate text-lg font-bold">{USER.name}</span>
            <svg
              className="h-5 w-5 shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </span>
          <span className="block truncate text-note opacity-90">{USER.role}</span>
        </button>
        <div className="flex items-center gap-4">
          <button aria-label="Bantuan" className="hover:opacity-80">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M21 12a9 9 0 01-13.5 7.8L3 21l1.2-4.5A9 9 0 1121 12z" />
              <path d="M9.5 9.5a2.5 2.5 0 114 2c-.9.5-1.5 1-1.5 2M12 17h.01" />
            </svg>
          </button>
          <button aria-label="Peringkat" className="hover:opacity-80">
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
              <path d="M12 2.5l1 2 2.2.3-1.6 1.5.4 2.2-2-1-2 1 .4-2.2-1.6-1.5 2.2-.3z" />
              <rect x="9" y="10" width="6" height="11" rx="1" />
              <rect x="2.5" y="14" width="5.5" height="7" rx="1" />
              <rect x="16" y="12" width="5.5" height="9" rx="1" />
            </svg>
          </button>
          <Link
            to="/notifikasi"
            aria-label="Notifikasi"
            className="relative hover:opacity-80"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2a6 6 0 00-6 6c0 7-3 9-3 9h18s-3-2-3-9a6 6 0 00-6-6zM10 20a2 2 0 004 0z" />
            </svg>
            <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-header bg-notify"></span>
          </Link>
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-white text-slate-800">
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
          <div>
            <p className="text-note text-slate-500">Jadwal Hari Ini</p>
            <p className="text-base font-semibold capitalize">{todayLabel()}</p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-xl bg-chip px-4 py-2 font-semibold text-brand hover:opacity-80">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="M16 2v4M8 2v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
            </svg>
            Lihat Jadwal
          </button>
        </div>
        <p className="px-6 py-12 text-center">Tidak ada kelas di hari ini.</p>
      </div>
    </section>
  );
}
