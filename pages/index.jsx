
import Link from 'next/link'
import Layout from '../components/layout'



export default function Home() {
  return (
    <>
      <Layout
      title={'inicio'}
      description={'Juego de tablero'}
      
      >
        <h1 className="text-2xl font-bold text-orange-400 mt-10">Inicio</h1>
        
      </Layout>
    </>
  )
}
