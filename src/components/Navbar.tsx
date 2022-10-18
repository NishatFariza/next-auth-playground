import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";
import { Session } from "inspector";

const Navbar = () => {
  const session = useSession();
  return (
    <div className=" max-w-6xl mx-auto flex justify-between items-center h-20">
      <Link href={`/`}>
        <a className="text-2xl font-semibold">NextAuth</a>
      </Link>

      <nav className="flex items-center gap-2">
        {session.status === "authenticated" ? (
          <>
            <p>{JSON.stringify(session.data.user, null, 2)}</p>
            <button className="bg-gray-200 px-4 rounded">Logout</button>
          </>
        ) : (
          <button className="bg-gray-200 px-4 rounded">Login</button>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
