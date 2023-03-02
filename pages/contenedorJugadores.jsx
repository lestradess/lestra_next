import Layout from '../components/layout'
import Jugadores from '../components/Jugadores'

export default function ContenedorJugadores () {
    return (
        <>
            <Layout
                title={ 'Jugadores' }
                description={ 'Juego de tablero' }
            >
                <div >
                    <h2 className="text-2xl text-amber-900 font-bold text-center py-3">Jugadores</h2>
                    <Jugadores />
                </div>
            </Layout>
        </>
    )
}
