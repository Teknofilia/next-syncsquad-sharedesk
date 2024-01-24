import React from "react";
import Image from "next/image";
export const AuthLayout = ({ children }) => {
  return (
    <main className="grid grid-cols-2 h-screen">
      <section className="bg-zinc-100">
        <div className="py-20 flex justify-center backdrop-blur-lg">
        <Image className="rounded-xl shadow-md border-2 border-zinc-300"
      src="/assets/workingspace.png"
      width={600}
      height={600}
      alt="Pic Layout"
    />
    <div className="absolute inset-45 flex items-center z-10 pt-20">
      <h1 className="text-emerald-500 font-extrabold text-6xl">Sharedesk</h1>
    </div>
    </div>
      </section>
      <section className="flex justify-center items-center">{children}</section>
    </main>
  );
};
