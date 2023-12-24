import Head from 'next/head'
import Navbar from '../Navbar'
import Footer from '../Footer'

const Main = ({ children, router }: { children: any, router: any }) => {
    return (
        <div className="bg-neutral-100 dark:bg-neutral-900 min-h-screen">
            <Head>
                <title>Yang Tuấn Anh</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/images/waffle_logo.png" />
                <script async src='https://storage.ko-fi.com/cdn/scripts/overlay-widget.js'></script>
                <script async>
                    kofiWidgetOverlay.draw('yangtuananh', {
                        'type': 'floating-chat',
                    'floating-chat.donateButton.text': 'Support me',
                    'floating-chat.donateButton.background-color': '#00b9fe',
                    'floating-chat.donateButton.text-color': '#fff'
  });
                </script>
            </Head>

            <Navbar path={router.asPath} />
            <div className="p-10 pt-24 lg:px-80 lg:py-20  h-full">
                {children}
                <Footer />
            </div>
        </div>
    )
}

export default Main