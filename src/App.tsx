import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import DashboardLayout from "./pages/DashboardLayout";
import Home from "./pages/Home";
import Costs from "./pages/Costs";
import Inventory from "./pages/Inventory";
import Partners from "./pages/Partners";
import System from "./pages/System";
import Reports from "./pages/Reports";
import HR from "./pages/HR";
import ModulePage from "./pages/ModulePage";
import Attendance from "./pages/Attendance";

// A simple auth guard component
function RequireAuth({ children }: { children: JSX.Element }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route
          path="/"
          element={
            <RequireAuth>
              <DashboardLayout />
            </RequireAuth>
          }
        >
          <Route index element={<Home />} />
          <Route path="costs" element={<Costs />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="partners" element={<Partners />} />
          <Route path="system" element={<System />} />
          <Route path="reports" element={<Reports />} />
          <Route path="hr" element={<HR />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="module/:id" element={<ModulePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
