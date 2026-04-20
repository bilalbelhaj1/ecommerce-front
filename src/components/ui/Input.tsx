import type { ComponentPropsWithoutRef } from "react";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
    label: string
};
const Input = ({label, ...props}: InputProps) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm text-gray-600 dark:text-gray-300">
          {label}
        </label>
      )}
      <input
        {...props}
        className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 
        bg-white/70 dark:bg-gray-900/60 backdrop-blur-md
        text-gray-900 dark:text-white outline-none
        focus:ring-2 focus:ring-blue-500 transition"
      />
    </div>
  );
};

export default Input;