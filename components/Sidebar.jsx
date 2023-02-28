import Image from 'next/image'
import Link from 'next/link'



const Sidebar = () => {
    return (
        <>
            <div className="md:flex flex-col h-full gap-2  pt-10">
                <Link href="/nosotros" className=" bg-amber-300 hover:bg-orange-400 rounded-lg p-2 m-2 sombra">Nosotros</Link>
                <Link href="/" className=" bg-amber-300 hover:bg-orange-400 rounded-lg p-2 m-2 sombra" >Ir a inicio</Link>
            </div>
        </>
    )
}

export default Sidebar