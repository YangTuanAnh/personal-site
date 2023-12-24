import '../styles/globals.css'
import { ThemeProvider } from 'next-themes';

import Layout from "../components/layouts/main"
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config'

export default function App({ Component, pageProps, router }: AppProps)
{

  return (
    <>
      <ThemeProvider enableSystem={true} attribute="class">
        <Layout router={router}>
          <AnimatePresence initial={false}>
            <DefaultSeo {...SEO}/>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
      </ThemeProvider>
      
    </>
  )
}
