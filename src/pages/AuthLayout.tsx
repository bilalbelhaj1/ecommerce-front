import type React from "react";
import logo from "../assets/logo.png";

type authLayoutProps = {
  children: React.ReactNode;
  title: string;
  description: string;
};

const AuthLayout = ({ children, title, description }: authLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">

      {/* LEFT SIDE - BRAND / MARKETING */}
      <div className="md:w-1/2 relative flex items-center justify-center p-10 
      bg-gradient-to-br from-indigo-600 via-blue-600 to-purple-700 text-white">

        {/* background glow */}
        <div className="absolute inset-0 opacity-20 
        bg-[radial-gradient(circle_at_top,white,transparent)]" />

        <div className="relative max-w-md w-full flex flex-col gap-6">

          {/* logo */}
          <img
            src={logo}
            alt="NexaTech"
            className="h-70 w-auto object-contain"
          />

          {/* main heading */}
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            {title}
          </h1>

          {/* customer-focused message */}
          <p className="text-white/85 text-sm md:text-base leading-relaxed">
            {description}
          </p>

          {/* value points */}
          <div className="space-y-2 text-white/70 text-sm mt-2">
            <p>✓ Secure checkout experience</p>
            <p>✓ Fast order processing</p>
            <p>✓ Manage your purchases easily</p>
          </div>

          <div className="text-white/60 text-xs mt-3">
            Join thousands of customers shopping smarter with NexaTech
          </div>
        </div>
      </div>

      {/* RIGHT SIDE - FORM */}
      <div className="md:w-1/2 flex items-center justify-center bg-gray-100 dark:bg-gray-950 p-6">

        <div className="w-full max-w-md">
          <div className="bg-white/70 dark:bg-gray-900/60 
          backdrop-blur-xl p-6 md:p-8 rounded-2xl 
          shadow-xl border border-gray-200 dark:border-gray-800">

            {children}

          </div>
        </div>

      </div>
    </div>
  );
};

export default AuthLayout;