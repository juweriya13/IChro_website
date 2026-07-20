import { Outlet } from "react-router-dom";
import Sidebar from "../../components/admin_dashboard/Sidebar";
import Topbar from "../../components/admin_dashboard/Topbar";

function Admin() {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Topbar />

        <main className="p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Admin;