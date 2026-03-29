import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";

import Index from "@/pages/Index";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import ForgotPassword from "@/pages/ForgotPassword";
import ResetPassword from "@/pages/ResetPassword";
import Dashboard from "@/pages/Dashboard";
import Jobs from "@/pages/Jobs";
import Learn from "@/pages/Learn";
import Mentorship from "@/pages/Mentorship";
import MentorBrowse from "@/pages/MentorBrowse";
import MentorDashboard from "@/pages/MentorDashboard";
import Reconciliation from "@/pages/Reconciliation";
import EmployerDashboard from "@/pages/EmployerDashboard";
import AdminPortal from "@/pages/AdminPortal";
import CCIBranch from "@/pages/CCIBranch";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/mentorship" element={<Mentorship />} />
            <Route path="/mentors" element={<ProtectedRoute><MentorBrowse /></ProtectedRoute>} />
            <Route path="/reconciliation" element={<Reconciliation />} />
            <Route path="/cci-branch" element={<CCIBranch />} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/employer" element={<ProtectedRoute><EmployerDashboard /></ProtectedRoute>} />
            <Route path="/mentor-dashboard" element={<ProtectedRoute><MentorDashboard /></ProtectedRoute>} />
            <Route path="/admin" element={<ProtectedRoute><AdminPortal /></ProtectedRoute>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
