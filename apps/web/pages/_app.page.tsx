import { PrivyProvider } from "@privy-io/react-auth";
import Head from "next/head";
import React, { Component } from "react";

const App = ({ Component, pageProps }: { Component: any; pageProps: any }) => {
  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </Head>
      <PrivyProvider
        appId={
          process.env.NEXT_PUBLIC_PRIVY_APP_ID || "cm6gbn8ch040ojivsuri5q2os"
        }
        config={{
          loginMethods: ["email", "wallet"],
          appearance: {
            theme: "light",
          },
        }}
      >
        <Component {...pageProps} />
      </PrivyProvider>
    </>
  );
};

export default App;
