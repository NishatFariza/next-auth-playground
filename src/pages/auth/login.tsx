import React from "react";

const loginPage = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="w-6/12 mx-auto">
        <h1 className="text-2xl font-semibold text-center">Login to your account</h1>

        <div className="flex flex-col gap-3 mt-8">
          <button className="text-lg border rounded py-2 px-4">
            Log in with Google
          </button>
          <button className="text-lg border rounded py-2 px-4">
            Log in with GitHub
          </button>
          <button className="text-lg border rounded py-2 px-4">
            Log in with Twitter
          </button>
        </div>
      </div>
    </div>
  );
};

export default loginPage;
