import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { LayoutDashboard, FileBarChart, Users, LogOut, Building2, Wallet, Package, UsersRound, Settings } from "lucide-react";
import { cn } from "@/src/lib/utils";

export default function DashboardLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  const navItems = [
    { name: "Tổng quan", path: "/", icon: LayoutDashboard },
    { name: "Chi phí", path: "/costs", icon: Wallet },
    { name: "Quản lý Kho", path: "/inventory", icon: Package },
    { name: "Đối tác", path: "/partners", icon: UsersRound },
    { name: "Nhân sự", path: "/hr", icon: Users },
    { name: "Báo cáo", path: "/reports", icon: FileBarChart },
    { name: "Hệ thống", path: "/system", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white border-r border-slate-200 flex flex-col">
        <div className="p-6 border-b border-slate-200 flex items-center gap-3">
          <div className="h-10 w-10 bg-emerald-100 rounded-lg flex items-center justify-center shrink-0">
            <Building2 className="h-6 w-6 text-emerald-600" />
          </div>
          <div>
            <h1 className="font-bold text-slate-900 leading-tight">CDX</h1>
            <p className="text-xs text-slate-500">Quản lý thi công</p>
          </div>
        </div>
        
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  isActive
                    ? "bg-emerald-50 text-emerald-700"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                )
              }
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-200">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2 w-full rounded-md text-sm font-medium text-slate-600 hover:bg-red-50 hover:text-red-600 transition-colors"
          >
            <LogOut className="h-5 w-5" />
            Đăng xuất
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
