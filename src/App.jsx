import { Navigate, Route, Routes } from "react-router-dom";
import BerandaPage from "./features/beranda/pages/BerandaPage";
import NotifikasiPage from "./features/notifikasi/pages/NotifikasiPage";
import NotifikasiLayarPage from "./features/notifikasi-layar/pages/NotifikasiLayarPage";
import DetailTugasPage from "./features/detail-tugas/pages/DetailTugasPage";

function App() {
  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-800">
      <Routes>
        <Route path="/" element={<BerandaPage />} />
        <Route path="/notifikasi" element={<NotifikasiPage />} />
        <Route path="/notifikasi-layar" element={<NotifikasiLayarPage />} />
        <Route path="/detail-tugas" element={<DetailTugasPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
