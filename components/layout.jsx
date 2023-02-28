import Head from 'next/head'
import Header from './header'
import Footer from './footer'
import Sidebar from './Sidebar'


export default function Layout ({ children, title, description='' }) {
    return (
        <>
            <Head>
                <title>Lestradamus- { title }</title>
                <meta name="description" content={description} />
            </Head>
            <Header />
            <div className='md:flex '>
                <aside className='md:w-4/12 xl:w-1/4 2xl:w-1/5 '>
                    <Sidebar />
                </aside>
                <main className=' h-screen  w-screen overflow-y-scroll'>
                    <div className="flex justify-center ">
                        <div className="w-screen sm:w-11/12 md:w-11/12 anchoMinimo  h-screen overflow-y-auto">
                            
                            <div className="px-2 ">
                                { children }
                            </div>
                            
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </>
    )
}
