import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className=" max-w-6xl mx-auto flex justify-between items-center h-20">
      <Link href={`/`}>
        <a>NextAuth</a>
          </Link>
          
          <nav className="flex ">
              <p>Nishat</p>
              <button>Logout</button>
          </nav>
    </div>
  );
};

export default Navbar;
