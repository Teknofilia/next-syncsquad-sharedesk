"use client";
import React from "react";
import Link from "next/link";
import { Activity, Box, Receipt } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";
import Cookies from "js-cookie";

export const DashboardTemplate = ({ children }) => {
  const router = useRouter();

  async function handleSubmitLogout() {
    Cookies.remove("token");
    localStorage.removeItem("token");
    localStorage.removeItem("userId");

    let valToken = Cookies.get("token");

    if (valToken) {
      console.error("Error logout!");
      return;
    }

    setTimeout(() => router.push("/"), 2000);
  }

  return (
    <main className="flex h-screen">
      <aside className="w-[230px] border-r-2 p-8 flex flex-col justify-between">
        <div>
          <Link className="menu" href="/dashboard">
            <Activity size={15} />
            Dashboard
          </Link>
          <Link className="menu" href="/dashboard/products">
            <Box size={15} />
            Products
          </Link>
          <Link className="menu" href="/dashboard/orders">
            <Receipt size={15} />
            Orders
          </Link>
        </div>
        <div className="menu">
          <Button onClick={handleSubmitLogout}>Logout</Button>
        </div>
      </aside>
      <section className="w-[calc(100vw-230px)] p-8">
        <div className="max-w-5xl m-auto">{children}</div>
      </section>
    </main>
  );
};
