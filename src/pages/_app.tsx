import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../layouts/Index";

import { Toaster } from "react-hot-toast";
import {NextUIProvider} from '@nextui-org/react'
import {useRouter} from 'next/router';

export default function App({ 
  Component,
  pageProps 
}:
 AppProps
) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <Layout>
        <Component {...pageProps} />
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
      </Layout>
    </NextUIProvider>
  )
}
