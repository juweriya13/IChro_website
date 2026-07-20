import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  MessageSquareText,
  User,
  LogOut,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/admin",
  },
  {
    title: "Enquiries",
    icon: MessageSquareText,
    path: "/admin/enquiries",
  },
  {
    title: "Profile",
    icon: User,
    path: "/admin/profile",
  },
];

function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 shadow-sm h-screen flex flex-col">
      {/* Logo */}
      <div className="px-6 py-6 border-b">
        <h2 className="text-2xl font-bold text-sky-700">
          ICHRO Admin
        </h2>
      </div>

      {/* Navigation */}
      <nav className="flex-1 mt-6">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.title}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-6 py-3 transition-all
                ${
                  isActive
                    ? "bg-sky-100 text-sky-700 border-r-4 border-sky-600"
                    : "text-gray-600 hover:bg-gray-100"
                }`
              }
            >
              <Icon size={20} />
              {item.title}
            </NavLink>
          );
        })}
      </nav>

      {/* Logout */}
      <button className="flex items-center gap-3 px-6 py-4 border-t text-red-500 hover:bg-red-50">
        <LogOut size={20} />
        Logout
      </button>
    </aside>
  );
}

export default Sidebar;