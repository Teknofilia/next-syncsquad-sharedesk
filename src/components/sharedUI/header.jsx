"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { IconCart } from "../cart/components/IconCart";

export const Header = () => {
  const router = useRouter();

  // function queryHandler(e) {
  //   e.preventDefault();
  //   const query = e.target.query.value;
  //   router.push(`?q=${query}`);
  // }

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
        <Link href="#" className="text-lg font-semibold">
          Temukan Lokasi
        </Link>
        <Link href="#" className="text-lg font-semibold">
          Jenis Ruangan
        </Link>
        <Link href="/login" className="text-lg font-semibold">
          Login
        </Link>
        {/* <Link href="/cart"><IconCart /></Link> */}
      </div>
    </header>
  );
};
