import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import NotificationProvider from "./features/notifikasi/NotificationProvider";
import SubmissionProvider from "./features/detail-tugas/SubmissionProvider";
import { router } from "./routes";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NotificationProvider>
      <SubmissionProvider>
        <RouterProvider router={router} />,
      </SubmissionProvider>
    </NotificationProvider>
  </StrictMode>,
);
