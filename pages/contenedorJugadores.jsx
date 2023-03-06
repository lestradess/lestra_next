import Layout from '../layout/layout'
import Jugadores from '../components/Jugadores'
import useJugadores from '../hooks/useJugadores'
import { useRouter } from 'next/router';



export default function ContenedorJugadores () {
    const router = useRouter();
    const { colores, jugadores, setJugadores } = useJugadores();

    const handleJugadores = () => {

        let cantidad = 0;
        for (let i = 0; i < 6; i++) {
            if (jugadores[ i ].nombre !== '') {
                cantidad++;
            }
        }

        if (cantidad === 1) {
            if (!confirm("¿Vas a jugar sol@?")) return;
            router.push("/listadoJugadoresEnJuego")
            return;
        }
        if (cantidad > 1) {
            if (!confirm(`Empezamos la partida para ${ cantidad } jugador@s`)) return;
            router.push("/listadoJugadoresEnJuego")
            return;
        }
        alert("Lamentablemente sin jugadores la partida está decidida.\n\n¡¡ los malos ganan !!.\n\nAñade jugadores para que esto sea más divertido")
    }
    return (
        <>
            <Layout
                title={ 'Jugadores' }
                description={ 'Juego de tablero' }
            >
                <div className='flex-row'>
                    <h2 className="text-3xl text-amber-900 font-bold text-center py-3 overflow-x-auto bg-s">Jugadores</h2>
                    <Jugadores color={ "bg-gradient-to-t from-green-900 via-green-600 to-green-900" } idJug={ 1 } />
                    <Jugadores color={ "bg-gradient-to-t from-red-900 via-red-500 to-red-900" } idJug={ 2 } />
                    <Jugadores color={ "bg-gradient-to-t from-yellow-600 via-yellow-200 to-yellow-600" } idJug={ 3 } />
                    <Jugadores color={ "bg-gradient-to-t from-blue-900 via-blue-600 to-blue-900" } idJug={ 4 } />
                    <Jugadores color={ "bg-gradient-to-t from-violet-900 via-violet-600 to-violet-900" } idJug={ 5 } />
                    <Jugadores color={ "bg-gradient-to-t from-stone-900 via-stone-600 to-stone-900" } idJug={ 6 } />
                </div>
                <div className='flex justify-center my-8 mx-1'>
                    <button
                        type='submit'
                        className='bg-gradient-to-t from-yellow-900 via-yellow-100 to-yellow-900 rounded-lg outline outline-offset-1 outline-stone-800  hover:bg-gradient-to-t hover:from-yellow-900 hover:via-yellow-300 hover:to-yellow-900  p-5 w-full text-center font-bold'
                        value='Pulsa para continuar'
                        onClick={ handleJugadores }
                    >Pulsa para continuar</button>
                </div>
            </Layout>
        </>
    )
}
