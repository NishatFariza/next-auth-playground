import Link from "next/link";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

const Navbar = () => {
  const session = useSession();
  return (
    <div className="bg-gray-100 shadow-sm">
      <div className=" max-w-6xl mx-auto flex justify-between items-center h-14">
        <Link href={`/`}>
          <a className="text-2xl font-semibold">NextAuth</a>
        </Link>

        <nav className="flex items-center gap-2">
          {session.status === "authenticated" ? (
            <>
              <Image
                className="w-8 h-8 rounded-full"
                layout="fixed"
                width={32}
                height={32}
                src={session.data.user?.image as string}
                alt={session.data.user?.name as string}
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
    </div>
  );
};

export default Navbar;
