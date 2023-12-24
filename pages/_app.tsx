import '../styles/globals.css'
import { ThemeProvider } from 'next-themes';

import Layout from "../components/layouts/main"
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config'

export default function App({ Component, pageProps, router }: AppProps)
{
  const kofi = `<script>
  kofiWidgetOverlay.draw('yangtuananh', {
    'type': 'floating-chat',
  'floating-chat.donateButton.text': 'Support me',
  'floating-chat.donateButton.background-color': '#00b9fe',
  'floating-chat.donateButton.text-color': '#fff'
});
</script>`
  return (
    <>
      <ThemeProvider enableSystem={true} attribute="class">
        <Layout router={router}>
          <AnimatePresence initial={false}>
            <DefaultSeo {...SEO}/>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
        <div dangerouslySetInnerHTML={{ __html: kofi }} />
      </ThemeProvider>
      
    </>
  )
}
