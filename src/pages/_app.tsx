import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../layouts/Index";

import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </Layout>
  )
}
