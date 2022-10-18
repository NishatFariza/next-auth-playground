import Link from "next/link";
import React from "react";
import { useSession, signOut } from "next-auth/react";

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
            <img
              className="w-8 h-8 rounded-full"
              src={session.data.user?.image}
              alt={session.data.user?.name}
            />
            <p>{session.data.user?.name}</p>
            <button
              onClick={() => signOut()}
              className="bg-gray-200 px-4 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <Link href="/auth/login">
            <a className="bg-gray-200 px-4 rounded">Login</a>
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
