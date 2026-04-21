import { useLocation, Link } from "react-router-dom";
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Users,
  LogOut,
  ChevronRight,
} from "lucide-react";

const SideBar = ({ open }: { open: boolean }) => {
  const { pathname } = useLocation();

  const links = [
    { icon: <LayoutDashboard size={18} />, name: "Dashboard", path: "/admin/" },
    { icon: <Package size={18} />, name: "Products", path: "/admin/products" },
    { icon: <ShoppingCart size={18} />, name: "Orders", path: "/admin/orders" },
    { icon: <Users size={18} />, name: "Customers", path: "/admin/customers" },
  ];

  return (
    <aside
      className={`
        fixed md:static top-16 md:top-0 left-0 
        h-[calc(100vh-64px)] md:h-screen 
        w-64 flex flex-col
        bg-white dark:bg-gray-950
        border-r border-gray-200 dark:border-gray-800
        z-40 transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0
      `}
    >
      <div className="p-4">
        <div className="px-3 text-[10px] uppercase tracking-[0.15em] font-bold text-gray-400 dark:text-gray-500 mb-4">
          Admin Panel
        </div>

        <nav className="space-y-1.5">
          {links.map((link) => {
            const isActive = pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                className={`
                  group relative flex items-center justify-between px-3 py-2.5 rounded-xl
                  transition-all duration-200
                  ${isActive 
                    ? "bg-blue-50 dark:bg-blue-600/10 text-blue-600 dark:text-blue-400" 
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900 hover:text-gray-900 dark:hover:text-white"
                  }
                `}
              >
                <div className="flex items-center gap-3">
                  {isActive && (
                    <div className="absolute left-0 w-1 h-5 bg-blue-600 rounded-r-full shadow-[0_0_10px_rgba(37,99,235,0.5)]" />
                  )}
                  
                  <span className={`
                    transition-colors duration-200
                    ${isActive ? "text-blue-600 dark:text-blue-400" : "text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-200"}
                  `}>
                    {link.icon}
                  </span>
                  
                  <span className={`text-sm font-semibold transition-transform duration-200 ${isActive ? "translate-x-1" : ""}`}>
                    {link.name}
                  </span>
                </div>

                {isActive && (
                  <ChevronRight size={14} className="opacity-40" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="mt-auto p-4 border-t border-gray-100 dark:border-gray-800">
        <button
          className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl
          text-gray-500 hover:text-red-600 hover:bg-red-50 
          dark:text-gray-400 dark:hover:text-red-400 dark:hover:bg-red-900/10
          transition-all duration-200 group font-medium"
        >
          <LogOut size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default SideBar;