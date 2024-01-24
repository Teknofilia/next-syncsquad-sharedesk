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
      <aside className="w-[230px] border-r-2 p-8 flex flex-col justify-between sticky bg-teal-50">
        <div className="">
          <h3 className="items-center text-center text-emerald-500">Sharedesk</h3>
          <Link className="menu flex items-center font-semibold p-2" href="/dashboard">
            <Activity size={15}/><p className="ml-2">Dashboard</p>
          </Link>
          <Link className="menu flex items-center font-semibold p-2" href="/dashboard/products">
            <Box size={15} />
            <p className="ml-2">Products</p>
          </Link>
          <Link className="menu flex items-center font-semibold p-2" href="/dashboard/orders">
            <Receipt size={15} />
            <p className="ml-2">Orders</p>
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
