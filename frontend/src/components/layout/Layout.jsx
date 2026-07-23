import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;