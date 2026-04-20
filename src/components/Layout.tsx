import NavBar from "./NavBar";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
      <NavBar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      <div className="flex">
        <SideBar open={sidebarOpen} />

        <main className="flex-1 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;