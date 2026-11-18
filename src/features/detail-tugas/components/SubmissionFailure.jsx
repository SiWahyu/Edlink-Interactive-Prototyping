import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function SubmissionFailure({ onRetry, onClose }) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-60 bg-slate-100"
      role="dialog"
      aria-modal="true"
      aria-label="Tugas gagal dikumpulkan"
    >
      <div className="mx-auto flex h-full w-full max-w-md flex-col bg-white font-sans text-slate-800">
        <main className="flex min-h-0 flex-1 flex-col items-center justify-center overflow-y-auto px-6 py-8 text-center">
          <div className="flex h-40 w-40 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600">
            <svg
              className="h-20 w-20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="9" />
              <path strokeLinecap="round" d="M12 8v5" />
              <path strokeLinecap="round" d="M12 16.5h.01" />
            </svg>
          </div>
          <h1 className="mt-5 text-xl font-semibold">
            Gagal mengumpulkan tugas
          </h1>

          <p className="mt-1 max-w-xs text-sm text-slate-400">
            Terjadi kendala saat mengirim jawaban. Silakan coba lagi.
          </p>
        </main>

        <footer className="shrink-0 border-t-2 border-slate-200 p-4">
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              autoFocus
              onClick={onRetry}
              className="rounded-lg bg-brand py-3 font-semibold text-white hover:opacity-90 active:opacity-80"
            >
              Coba Lagi
            </button>
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-brand py-3 font-semibold text-brand hover:bg-chip"
            >
              Selesai
            </button>
          </div>
        </footer>
      </div>
    </div>,
    document.body,
  );
}
