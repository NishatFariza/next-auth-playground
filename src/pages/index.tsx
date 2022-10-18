import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="h-[calc(100vh-3.5rem)] flex justify-center items-center bg-teal-200">
      <h1 className="text-xl font-semibold">Hello Next Auth</h1>
    </div>
  );
};

export default Home;
