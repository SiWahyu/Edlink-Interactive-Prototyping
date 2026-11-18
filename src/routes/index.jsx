import { createBrowserRouter } from "react-router-dom";
import BerandaPage from "../features/beranda/pages/BerandaPage";
import NotifikasiPage from "../features/notifikasi/pages/NotifikasiPage";
import NotifikasiLayarPage from "../features/notifikasi-layar/pages/NotifikasiLayarPage";
import DetailTugasPage from "../features/detail-tugas/pages/DetailTugasPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <BerandaPage />,
  },
  {
    path: "*",
    element: <BerandaPage />,
  },
  {
    path: "/notifikasi",
    element: <NotifikasiPage />,
  },
  {
    path: "/notifikasi-layar",
    element: <NotifikasiLayarPage />,
  },
  {
    path: "/detail-tugas",
    element: <DetailTugasPage />,
  },
]);
