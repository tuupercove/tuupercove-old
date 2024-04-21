import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../layouts/Index";
import { Itim, Kanit } from "next/font/google";
import { useReportWebVitals } from 'next/web-vitals'
import { appWithTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation, Trans } from 'next-i18next'
import nextI18NextConfig from '../../next-i18next.config.js'

import {ThemeProvider as NextThemesProvider} from 'next-themes'
import { Toaster } from "react-hot-toast";
import {NextUIProvider} from '@nextui-org/react'
import {useRouter} from 'next/router';
import { AnimatePresence } from "framer-motion";

const itim = Itim({ 
  weight: "400", 
  style: "normal", 
  subsets: ["latin"] 
});

const kanit = Kanit({
  weight: ["300", "400", "500", "600", "700"],
  style: "normal",
  subsets: ["latin"]
})

const App = ({ 
  Component,
  pageProps
}:
  AppProps
) => {
  const router = useRouter()

  useReportWebVitals((metric) => {
    console.log(metric)
  })

  return (
    <NextUIProvider navigate={router.push} className={itim.className}>
      <NextThemesProvider>
        <AnimatePresence mode="wait" initial={false}>
          <Layout>
            <Component {...pageProps} key={router.asPath} />
            <Toaster
              position="top-center"
              reverseOrder={false}
            />
          </Layout>
        </AnimatePresence>
      </NextThemesProvider>
    </NextUIProvider>
  )
}

export default appWithTranslation(App);