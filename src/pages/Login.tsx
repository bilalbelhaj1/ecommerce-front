import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Login:", form);
  };

  return (
    <AuthLayout
      title="Welcome Back to NexaTech"
      description="Sign in to access your dashboard, track your orders, and continue shopping with a seamless experience."
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        Login
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
        />

        <Input
          label="Password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="••••••••"
        />

        <Button type="submit">Login</Button>
      </form>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 text-center">
        Don’t have an account?{" "}
        <Link
          to="/register"
          className="text-blue-600 hover:text-blue-700 font-medium hover:underline"
        >
          Create one
        </Link>
      </p>
    </AuthLayout>
  );
};

export default Login;