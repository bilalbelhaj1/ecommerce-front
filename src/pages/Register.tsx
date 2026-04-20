import { useState, type ChangeEvent, type FormEvent } from "react";
import AuthLayout from "./AuthLayout";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Register:", form);
  };

  return (
    <AuthLayout
      title="Start Shopping with NexaTech"
      description="Create your account in seconds and unlock a faster, smarter way to browse and purchase products."
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        Sign Up
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Input
            label="First Name"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            placeholder="John"
          />

          <Input
            label="Last Name"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            placeholder="Doe"
          />
        </div>

        <Input
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
        />

        <Input
          label="Address"
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="Your address"
        />

        <Input
          label="Password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="••••••••"
        />

        <Button type="submit">Create Account</Button>
      </form>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 text-center">
            Already have an Account{" "}
            <Link
            to="/login"
            className="text-blue-600 hover:text-blue-700 font-medium hover:underline"
            >
            Sign in
            </Link>
        </p>
    </AuthLayout>
  );
};

export default Register;