import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'



const Sidebar = () => {
    const router = useRouter();

    const pagina = (path) => {
        if (router.pathname === path) {
            return "bg-gradient-to-t from-green-900 via-green-200 to-green-900 rounded-lg p-2 m-2 sombra outline outline-offset-1 outline-stone-500 flex w-10 md:flex-none md:w-auto md:justify-center"
        }
        return "bg-gradient-to-t from-yellow-900 via-yellow-100 to-yellow-900 rounded-lg p-2 m-2 sombra outline outline-offset-1 outline-stone-800  hover:bg-gradient-to-t hover:from-yellow-900 hover:via-yellow-300 hover:to-yellow-900 flex w-10 md:flex-none md:w-auto md:justify-center"

    }
    return (
        <>
            <div className=" md:ml-3 mx-3 py-2 px-3 md:w-full bg-gradient-to-t md:bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900  sombra rounded-xl border-2 border-stone-500 mt-5 " >
                <div className="md:flex-col md:my-8 flex justify-star sm:justify-center overflow-x-auto" >
                    <Link
                        href="/"
                        className={ pagina('/') }
                    >
                        <Image src="/img/inicio.svg" width={ 25 } height={ 25 }
                            alt='Inicio'
                            className="flex-none"
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
                            className="flex-none"
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
                            className="flex-none"
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
                            className="flex-none"
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
                            className="flex-none"
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
                            className="flex-none"
                        />
                        <p
                            className="md:visible collapse ml-3 font-bold"
                        >Minas</p>
                    </Link>
                    <Link
                        href="/listadoJugadoresEnJuego"
                        className={ pagina('/listadoJugadoresEnJuego') }
                    >
                        <Image src="/img/gamers.png" width={ 25 } height={ 25 }
                            alt='Jugadores'
                            className="flex-none"
                        />
                        <p
                            className="md:visible collapse ml-3 font-bold"
                        >Jugadores</p>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Sidebar