import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <Link href={`/`}>
        <a>NextAuth</a>
          </Link>
          
          <nav>
              <p>Nishat</p>
              <button>Logout</button>
          </nav>
    </div>
  );
};

export default Navbar;
