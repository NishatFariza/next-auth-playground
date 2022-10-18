import Navbar from "@/components/Navbar";
import { SessionProvider } from "next-auth/react";

import "@/styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    //@ts-ignore
    <SessionProvider session={pageProps.session}>
      <Navbar />
      <div className="mt-20">
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
}

export default MyApp;
