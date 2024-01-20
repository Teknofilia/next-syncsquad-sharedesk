"use client";

import Link from "next/link";


export const Headerhome = () => {
  
 
  return (
    <header className="py-6 flex justify-between items-center border-b">
      <div className="flex items-center space-x-4">
        <Link
          href="/"
          className="text-lg font-semibold border-rounded rounded-lg p-2 border-2 outline"
        >
          ShareDesk
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        
        <Link href="/login" className="text-lg font-semibold">
          Login
        </Link>
        <Link href="/register" className="text-lg font-semibold">
          Register
        </Link>
      </div>
    </header>
  );
};
