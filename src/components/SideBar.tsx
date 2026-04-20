import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Users,
  LogOut,
} from "lucide-react";

const SideBar = ({ open }: { open: boolean }) => {
  const links = [
    { icon: <LayoutDashboard size={18} />, name: "Dashboard" },
    { icon: <Package size={18} />, name: "Products" },
    { icon: <ShoppingCart size={18} />, name: "Orders" },
    { icon: <Users size={18} />, name: "Customers" },
  ];

  return (
    <aside
      className={`
      fixed md:static top-16 left-0 h-[calc(100vh-64px)]
      w-64 flex flex-col
      bg-white dark:bg-gray-900
      border-r border-gray-200 dark:border-gray-800
      shadow-sm
      transform transition-transform duration-300
      ${open ? "translate-x-0" : "-translate-x-full"}
      md:translate-x-0
    `}
    >
      <div className="p-4">
        <div className="text-xs uppercase tracking-wider text-gray-400 mb-3">
          Admin Panel
        </div>

        <nav className="space-y-1">
          {links.map((link, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-3 py-2 rounded-xl
              text-gray-700 dark:text-gray-200
              hover:bg-blue-50 dark:hover:bg-gray-800
              cursor-pointer transition"
            >
              <span className="text-gray-500">{link.icon}</span>
              <span className="text-sm font-medium">{link.name}</span>
            </div>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-4">
        <button
          className="flex items-center gap-3 w-full px-3 py-2 rounded-xl
          text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20
          transition"
        >
          <LogOut size={18} />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default SideBar;