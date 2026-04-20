import { useState, useEffect } from "react";
import { Menu, Moon, Sun } from "lucide-react";
import logo from "../assets/logo.png";
const NavBar = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <nav className="h-16 px-4 md:px-6 flex items-center justify-between 
    bg-white dark:bg-gray-800 shadow-md">

      <div className="flex items-center gap-3">
        <button
          className="md:hidden text-gray-700 dark:text-gray-200"
          onClick={toggleSidebar}
        >
          <Menu size={22} />
        </button>

        <div className="flex items-center gap-2">
            <img 
                src={logo} 
                alt="NexaTech" 
                className="h-39"
            />
        </div>
      </div>
      <button
        onClick={() => setDark(!dark)}
        className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        {dark ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </nav>
  );
};

export default NavBar;