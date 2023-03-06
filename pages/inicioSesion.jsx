import Layout from '../layout/layout'



export default function InicioSesion () {
    return (
        <>
            <Layout
                title={ 'Inicio de sesión' }
                description={ 'Juego de tablero' }
            >
                <div>
                    <h2 className="text-2xl text-amber-900 font-bold text-center py-3">Inicio de Sesión</h2>
                </div>
            </Layout>
        </>
    )
}