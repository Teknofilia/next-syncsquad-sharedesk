"use client";

import { Button, Input } from "@nextui-org/react";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const Login = () => {
  const router = useRouter();

  async function handleLogin(event) {
    event.preventDefault(); // prevent auto refresh
    const email = event.target.email.value;
    const password = event.target.password.value;

    const res = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    const { message, errorMessage } = await res.json();

    if (errorMessage) {
      console.log(errorMessage);
      return;
    }

    console.log(message);
    router.push("/dashboard");
  }

  return (
    <div className="w-[360px] space-y-8">
      <div>
        <h3 className="font-semibold text-xl">Login</h3>
        <p className="font-light text-zinc-500 pt-2">Welcome back, grab the best deal of your working space here</p>
      </div>
      <form onSubmit={handleLogin}>
        <div className="space-y-3">
          <Input name="email" placeholder="Email" />
          <Input name="password" placeholder="Password" type="password" />
          <Button type="submit" color="primary" className="w-full">
            Login
          </Button>
          <h5 className="p-1 text-sm font-light">
            Don't have an account ?{" "}
            <Link href="/register" className="text-primary font-bold">
              Register
            </Link>
          </h5>
        </div>
      </form>
    </div>
  );
};
