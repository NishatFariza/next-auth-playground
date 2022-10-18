import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className=" max-w-6xl mx-auto flex justify-between items-center h-20">
      <Link href={`/`}>
        <a className="text-2xl font-semibold">NextAuth</a>
      </Link>

      <nav className="flex items-center gap-2">
        <p>Nishat</p>
        <button className="bg-gray-200 px-4 rounded">Logout</button>
      </nav>
    </div>
  );
};

export default Navbar;
