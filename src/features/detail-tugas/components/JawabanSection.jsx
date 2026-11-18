import { useState } from "react";
import MediaLibraryModal from "../../media-library/components/MediaLibraryModal";
import AnswerFileRow from "./AnswerFileRow";
import SubmissionSuccess from "./SubmissionSuccess";
import SubmissionFailure from "./SubmissionFailure";
import { useSubmission } from "../context";
import { fileKey, formatSubmittedAt } from "../utils";

const MAX_SIZE = 10 * 1024 * 1024;

export default function JawabanSection({ onSubmit }) {
  const { files, submitted, submittedAt, addFiles, removeFile } =
    useSubmission();
  const [error, setError] = useState("");
  const [libraryOpen, setLibraryOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [failureOpen, setFailureOpen] = useState(false);

  const handleAdd = (selectedFiles) => {
    if (submitted) return;

    const mapped = selectedFiles.map((f) => ({
      name: f.name,
      size: Math.round(f.kb * 1024),
      type: f.type,
      failed: f.failed,
    }));
    const existing = new Set(files.map(fileKey));
    const fresh = mapped.filter((f) => !existing.has(fileKey(f)));
    const total =
      files.reduce((sum, f) => sum + f.size, 0) +
      fresh.reduce((sum, f) => sum + f.size, 0);

    if (total > MAX_SIZE) {
      setError("Total ukuran file melebihi 10 MB.");
      return;
    }

    addFiles(fresh);
    setError("");
  };

  const handleRemove = (target) => {
    if (submitted) return;
    removeFile(target);
    setError("");
  };

  const handleSubmit = () => {
    if (files.length === 0 || submitted) return;
    setLibraryOpen(false);
    setError("");
    if (files.some((file) => file.failed)) {
      setFailureOpen(true);
      return;
    }
    onSubmit();
    setSuccessOpen(true);
  };

  const handleRetry = () => {
    setFailureOpen(false);
    onSubmit();
    setSuccessOpen(true);
  };

  return (
    <section className="sticky bottom-0 z-10 mt-auto rounded-xl border border-slate-200 bg-white shadow-[0_-4px_16px_rgba(0,0,0,0.06)]">
      <div className="border-b border-slate-200 px-4 py-3">
        <h2 className="text-base font-semibold">Jawaban Anda</h2>
        {submitted && submittedAt && (
          <p className="mt-0.5 text-sm text-slate-500">
            Dikumpulkan {formatSubmittedAt(submittedAt)}
          </p>
        )}
      </div>
      <div className="space-y-3 p-4">
        {files.length > 0 && (
          <div className="max-h-48 space-y-2 overflow-y-auto">
            {files.map((file) => (
              <AnswerFileRow
                key={fileKey(file)}
                file={file}
                onRemove={submitted ? undefined : handleRemove}
              />
            ))}
          </div>
        )}
        {error && <p className="text-note text-red-600">{error}</p>}

        {submitted ? (
          <button
            type="button"
            disabled
            className="w-full cursor-not-allowed rounded-lg bg-slate-200 py-2.5 font-semibold text-slate-500"
          >
            Sudah dikumpulkan
          </button>
        ) : files.length > 0 ? (
          <div className="grid grid-cols-1 gap-2">
            <button
              type="button"
              onClick={() => setLibraryOpen(true)}
              className="rounded-lg border border-brand py-2.5 font-semibold text-brand hover:bg-chip"
            >
              Tambahkan Jawaban Lain
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="rounded-lg bg-brand py-2.5 font-semibold text-white hover:opacity-90 active:opacity-80"
            >
              Kumpulkan Jawaban
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setLibraryOpen(true)}
            className="w-full rounded-lg bg-brand py-3 font-semibold text-white hover:opacity-90 active:opacity-80"
          >
            Tambahkan jawaban (Max 10 MB)
          </button>
        )}
      </div>

      {!submitted && libraryOpen && (
        <MediaLibraryModal
          onClose={() => setLibraryOpen(false)}
          onAdd={handleAdd}
        />
      )}

      {successOpen && submittedAt && (
        <SubmissionSuccess
          files={files}
          submittedAt={submittedAt}
          onClose={() => setSuccessOpen(false)}
        />
      )}

      {failureOpen && (
        <SubmissionFailure
          onRetry={handleRetry}
          onClose={() => setFailureOpen(false)}
        />
      )}
    </section>
  );
}
