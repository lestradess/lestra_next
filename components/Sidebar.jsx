import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'



const Sidebar = () => {
    const router = useRouter();

    const pagina = (path) => {
        if (router.pathname === path) {
            return "bg-gradient-to-t from-red-900 via-red-200 to-red-900 rounded-lg p-2 m-2 sombra outline outline-offset-1 outline-stone-500 flex w-10 md:flex-none md:w-auto md:justify-center"
        }
        return "bg-gradient-to-t from-yellow-900 via-yellow-100 to-yellow-900 rounded-lg p-2 m-2 sombra outline outline-offset-1 outline-stone-800  hover:bg-gradient-to-t hover:from-yellow-900 hover:via-yellow-300 hover:to-yellow-900 flex w-10 md:flex-none md:w-auto md:justify-center"

    }
    return (
        <>
            <div className=" md:ml-3 mx-3 md:w-full" >
                <div className="bg-gradient-to-r from-blue-900 via-blue-600 to-blue-900  sombra rounded-xl border-2 border-stone-500 mt-5">
                    <div className="md:flex-col md:ml-2 md:my-8 flex justify-center px-3 py-2 overflow-x-auto" >
                        <Link
                            href="/"
                            className={ pagina('/') }
                        >
                            <Image src="/img/inicio.svg" width={ 25 } height={ 25 }
                                alt='Inicio'
                                className=""
                            />
                            <p
                                className="md:visible collapse ml-3 font-bold"
                            >Inicio</p>
                        </Link>
                        <Link
                            href="/mapa"
                            className={ pagina('/mapa') }
                        >
                            <Image src="/img/map.svg" width={ 25 } height={ 25 }
                                alt='Calabera'
                                className=""
                            />
                            <p
                                className="md:visible collapse ml-3 font-bold"
                            >Mapa</p>
                        </Link>
                        <Link
                            href="/enemigos"
                            className={ pagina('/enemigos') }
                        >
                            <Image src="/img/skull.svg" width={ 25 } height={ 25 }
                                alt='Calabera'
                                className=""
                            />
                            <p
                                className="md:visible collapse ml-3 font-bold"
                            >Enemigos</p>
                        </Link>
                        <Link
                            href="/arboles"
                            className={ pagina('/arboles') }
                        >
                            <Image src="/img/tree.svg" width={ 25 } height={ 25 }
                                alt='Arboles'
                                className=""
                            />
                            <p
                                className="md:visible collapse ml-3 font-bold"
                            >Árboles</p>
                        </Link>
                        <Link
                            href="/animales"
                            className={ pagina('/animales') }
                        >
                            <Image src="/img/animal.svg" width={ 25 } height={ 25 }
                                alt='Animales'
                                className=""
                            />
                            <p
                                className="md:visible collapse ml-3 font-bold"
                            >Animales</p>
                        </Link>
                        <Link
                            href="/minas"
                            className={ pagina('/minas') }
                        >
                            <Image src="/img/stone.svg" width={ 25 } height={ 25 }
                                alt='Minas'
                                className=""
                            />
                            <p
                                className="md:visible collapse ml-3 font-bold"
                            >Minas</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar