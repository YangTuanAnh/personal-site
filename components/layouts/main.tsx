import Head from 'next/head'
import Navbar from '../Navbar'
import Footer from '../Footer'

const Main = ({children, router}: {children:any, router:any}) => {
    return (
        <div className="bg-neutral-100 dark:bg-neutral-900 min-h-screen">
            <Head>
                <title>Yang Tuấn Anh</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/images/waffle_logo.png" />
            </Head>

            <Navbar path={router.asPath}/>
            <div className="p-20 md:px-80 md:py-20  h-full">
                {children}
                <Footer/>
            </div>
            
        </div>
    )
}

export default Main