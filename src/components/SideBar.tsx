import { LayoutDashboard, ShoppingCart, Package } from "lucide-react";

const SideBar = ({ open }: { open: boolean }) => {
  return (
    <aside
      className={`
      fixed md:static top-16 left-0 h-[calc(100vh-64px)]
      w-64 bg-white dark:bg-gray-800 shadow-lg
      transform transition-transform duration-300
      ${open ? "translate-x-0" : "-translate-x-full"}
      md:translate-x-0
    `}
    >
      <ul className="p-4 space-y-2 text-gray-700 dark:text-gray-200">
        <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-100 dark:hover:bg-gray-700 cursor-pointer">
          <LayoutDashboard size={18} />
          Dashboard
        </li>

        <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-100 dark:hover:bg-gray-700 cursor-pointer">
          <Package size={18} />
          Products
        </li>

        <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-100 dark:hover:bg-gray-700 cursor-pointer">
          <ShoppingCart size={18} />
          Orders
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;