import { useRouter } from 'next/router'
import Layout from '../components/layout'
import Image from 'next/image'
import Link from 'next/link'



export default function Home () {


  return (
    <>
      <Layout
        title={ 'inicio' }
        description={ 'Juego de tablero' }
        
      >
        <div>
          <h2 className="text-2xl text-amber-900 font-bold text-center py-3">El juego</h2>
          <div className="container flex justify-center mb-10">
            <Link
              href="/contenedorJugadores"
              className="sombra bg-gradient-to-t from-yellow-900 via-yellow-100 to-yellow-900 rounded-lg p-2 m-2 sombra outline outline-offset-1 outline-stone-700 hover:bg-gradient-to-t hover:from-yellow-900 hover:via-yellow-300 hover:to-yellow-900 px-10 py-2 mt-10 "
            >
              <p
                className="font-bold text-center"
              >Jugadores</p>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  )
}
{/* <Layout
  title={ 'inicio' }
  description={ 'Juego de tablero' }
>
  <div className="container flex-row justify-center bg-gradient-to-r from-yellow-900 via-yellow-100 to-yellow-900 p-5 mt-5 rounded-xl border-2 border-stone-500">
    <h2 className="text-2xl text-amber-900 font-bold text-center py-3">El juego</h2>

    <div className="container flex justify-center mb-10">
      <Link
        href="/contenedorJugadores"
        className="sombra bg-gradient-to-t from-yellow-900 via-yellow-100 to-yellow-900 rounded-lg p-2 m-2 sombra outline outline-offset-1 outline-stone-700 hover:bg-gradient-to-t hover:from-yellow-900 hover:via-yellow-300 hover:to-yellow-900 px-10 py-2 mt-10 "
      >
        <p
          className="font-bold text-center"
        >Jugadores</p>
      </Link>
    </div>
  </div>
</Layout> */}