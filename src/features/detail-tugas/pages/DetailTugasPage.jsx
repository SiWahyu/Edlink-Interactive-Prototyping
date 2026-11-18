import { useNavigate } from "react-router-dom";
import BackHeader from "../../../components/BackHeader";
import usePageTitle from "../../../hooks/usePageTitle";
import { useNotifications } from "../../notifikasi/context";
import { useSubmission } from "../context";
import TentangTugas from "../components/TentangTugas";
import KelompokSection from "../components/KelompokSection";
import JawabanSection from "../components/JawabanSection";
import { TASK } from "../data";

export default function DetailTugasPage() {
  usePageTitle(`${TASK.title} | Detail Tugas`);
  const navigate = useNavigate();
  const { addSubmissionNotification } = useNotifications();
  const { submitted, submit } = useSubmission();

  const handleSubmit = () => {
    submit();
    addSubmissionNotification({
      course: TASK.course,
      subject: TASK.title,
    });
  };

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col bg-slate-100">
      <BackHeader
        onBack={() => navigate(-1)}
        title={TASK.title}
        subtitle={TASK.subtitle}
        className="gap-3 px-4 py-3"
        titleClassName="truncate text-lg font-semibold"
      />
      <main className="flex flex-1 flex-col gap-4 pb-6 pt-4">
        <TentangTugas submitted={submitted} />
        <KelompokSection />
        <JawabanSection onSubmit={handleSubmit} />
      </main>
    </div>
  );
}
