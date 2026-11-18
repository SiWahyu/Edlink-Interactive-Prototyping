import { useEffect } from "react";
import { createPortal } from "react-dom";
import { formatSubmittedAt } from "../utils";

import successCheck from "../../../assets/success-check.svg";

export default function SubmissionSuccess({ submittedAt, onClose }) {
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
      aria-label="Tugas berhasil dikumpulkan"
    >
      <div className="mx-auto flex h-full w-full max-w-md flex-col bg-white font-sans text-slate-800">
        <main className="flex min-h-0 flex-1 flex-col items-center justify-center overflow-y-auto px-6 py-8 text-center">
          <div className="flex h-40 w-40 shrink-0 items-center justify-center rounded-full bg-chip text-brand">
            <img src={successCheck} alt="Tugas berhasil dikumpulkan" />
          </div>
          <h1 className="mt-5 text-xl font-semibold">
            Tugas berhasil dikumpulkan
          </h1>

          <p className="mt-1 text-sm text-slate-400">
            Dikumpulkan {formatSubmittedAt(submittedAt)}
          </p>
        </main>

        <footer className="shrink-0 border-t-2 border-slate-200 p-4">
          <button
            type="button"
            autoFocus
            onClick={onClose}
            className="w-full rounded-lg bg-brand py-3 font-semibold text-white hover:opacity-90 active:opacity-80"
          >
            Selesai
          </button>
        </footer>
      </div>
    </div>,
    document.body,
  );
}
