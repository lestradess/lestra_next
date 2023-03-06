import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Sidebar from '../components/Sidebar'
export default function Layout ({ children, title, description = '' }) {
    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <title>Lestradamus- { title }</title>
                <meta name="description" content={ description } />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div className='md:flex flex-row '>
                <aside className='md:w-4/12 xl:w-1/4 2xl:w-1/5'>
                    <div className="md:flex w-full h-full">
                        <Sidebar />
                    </div>
                </aside>
                <div className=" md:w-8/12 xl:w-3/4 2xl:w-4/5">
                    <div className="flex justify-center w-full h-full ">
                        <div className="w-full mx-3 md:mr-3 mt-5 py-5 px-1 md:px-3 bg-gradient-to-r from-yellow-900 via-yellow-100 to-yellow-900 rounded-xl border-2 border-stone-500 overflow-x-auto sombra">
                            { children }
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}
