import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";

// Auth Pages
import LoginPage from "./pages/auth/LoginPage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import ResetPasswordPage from "./pages/auth/ResetPasswordPage";

// Dashboard Layouts
import DashboardLayout from "./components/layout/DashboardLayout";

// Student Pages
import StudentDashboard from "./pages/student/StudentDashboard";
import SubmitProposal from "./pages/student/SubmitProposal";
import UploadFiles from "./pages/student/UploadFiles";
import SupervisorPage from "./pages/student/SupervisorPage";
import FeedbackPage from "./pages/student/FeedbackPage";
import NotificationsPage from "./pages/student/NotificationsPage";

// Teacher Pages
import TeacherDashboard from "./pages/teacher/TeacherDashboard";
import PendingRequests from "./pages/teacher/PendingRequests";
import AssignedStudents from "./pages/teacher/AssignedStudents";
import TeacherFiles from "./pages/teacher/TeacherFiles";

// Admin Pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageStudents from "./pages/admin/ManageStudents";
import ManageTeachers from "./pages/admin/ManageTeachers";
import AssignSupervisor from "./pages/admin/AssignSupervisor";
import DeadlinesPage from "./pages/admin/DeadlinesPage";
import ProjectsPage from "./pages/admin/ProjectsPage";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { Loader } from "lucide-react";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        closeOnClick
        pauseOnHover
        theme="light"
        toastClassName={(context) => {
          const type = context?.type;

          return `
      !w-[420px]
      !min-h-[64px]
      !rounded-lg
      !shadow-md
      !border
      !px-4
      !py-3
      !text-black

      !flex
      !items-center
      !flex-row

      ${
        type === "success"
          ? "!bg-green-50/60 !border-green-200 !border-l-4 !border-l-green-500"
          : ""
      }

      ${
        type === "error"
          ? "!bg-red-50/60 !border-red-200 !border-l-4 !border-l-red-500"
          : ""
      }

      ${
        type === "warning"
          ? "!bg-yellow-50/60 !border-yellow-200 !border-l-4 !border-l-yellow-500"
          : ""
      }

      ${
        type === "info"
          ? "!bg-blue-50/60 !border-blue-200 !border-l-4 !border-l-blue-500"
          : ""
      }
    `;
        }}
        toastStyle={{
          display: "flex",
          alignItems: "center",
        }}
        bodyClassName="
    !p-0
    !m-0
    !flex
    !flex-row
    !items-center
    !gap-3
    !w-full
    !text-black
  "
      />
    </BrowserRouter>
  );
};

export default App;
