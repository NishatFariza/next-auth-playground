import React from "react";
import { signIn } from "next-auth/react";

const loginPage = () => {
  return (
    <div className="max-w-6xl mx-auto py-20 h-[calc(100vh-3.5rem)]">
      <div className="w-6/12 md:w-4/12 mx-auto">
        <h1 className="text-2xl font-semibold text-center">
          Login to your account
        </h1>

        <form action="#" className="flex flex-col gap-2">
          <div>
            <label htmlFor="email">Email</label>
            <input className="w-full" type="email" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              className="w-full"
              type="password"
              name="password"
              id="password"
            />
          </div>
          <div className="text-center mt-3">
            <button className="bg-teal-600 py-2 px-8 rounded-md text-white">
              Login
            </button>
          </div>
        </form>

        <div className="flex flex-col gap-3 mt-8">
          <button className=" border rounded py-2 px-4 flex justify-center ">
            <svg
              className="h-5 w-5 mr-2 fill-[#4285F4]"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Google</title>
              <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
            </svg>
            <span>Log in with Google</span>
          </button>
          <button
            onClick={() => signIn("github")}
            className=" border rounded py-2 px-4 flex justify-center "
          >
            <svg
              className="h-5 w-5 mr-2 fill-[#181717]"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>GitHub</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            <span> Log in with GitHub</span>
          </button>
          <button className=" border rounded py-2 px-4 flex justify-center items-center ">
            <svg
              className="h-5 w-5 mr-2 fill-[#1DA1F2]"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Twitter</title>
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
            <span>Log in with Twitter</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default loginPage;
