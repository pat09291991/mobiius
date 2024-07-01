"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleLogin = () => {
    setError("");
    if (!credentials.email || !credentials.password) {
      setError("Please input email or password");
      return;
    }

    if (
      credentials.email != "admin@email.com" ||
      credentials.password != "123456"
    ) {
      setError("Email or password is incorrect");
      return;
    }

    router.push(`/admin/dashboard`);
  };
  return (
    <div className="flex flex-col h-screen items-center justify-center px-4">
      <div className="p-4 flex flex-col gap-y-6 bg-gray-700 rounded-xl text-start w-full sm:w-96 shadow">
        <Label className="text-xl">Admin Login</Label>
        <div className="flex flex-col gap-y-2">
          {error && (
            <Label className="bg-red-700 text-white w-full p-2 rounded-sm">
              {error}
            </Label>
          )}
          <Label>Email</Label>
          <Input
            type="email"
            className="bg-gray-900"
            placeholder="Enter your email here"
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
          />
          <Label>Password</Label>
          <Input
            type="password"
            className="bg-gray-900"
            placeholder="Enter your password here"
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
          />
        </div>
        <Button
          type="submit"
          className="bg-button-gradient"
          onClick={handleLogin}
        >
          Login
        </Button>
      </div>
    </div>
  );
}
