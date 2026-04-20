import type { ComponentPropsWithoutRef } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
    children: string,
}

const Button = (props: ButtonProps) => {
  return (
    <button
      {...props}
      className="w-full py-2.5 rounded-xl font-medium text-white
      bg-gradient-to-r from-blue-600 to-indigo-600
      hover:from-blue-700 hover:to-indigo-700
      transition shadow-md"
    >
      
    </button>
  );
};

export default Button;