import Layout from '../layout/layout'
import { useEffect, useState } from 'react'
import Fila from '../components/fila'
import Image from 'next/image';


export default function Mapa () {
    const [ casilla, setCasilla ] = useState({});
    const [ fila, setFila ] = useState([]);
    const [ mapa, setMapa ] = useState([]);
    const [ elementos, setElementos ] = useState([]);
    const casillaOb = document.querySelector("#A06");
    let contadorLetra = 0;
    let contador = 0;
    const contadorNumero = () => {
        const i = contador++
        return i
    }
    const letra = () => {
        const i = contadorLetra++
        return String.fromCharCode(i + 65)
    }

    useEffect(() => {
        console.log('mapa')
        setMapa([]);
        for (let i = 0; i < 20; i++) {

            setMapa(mapa => [ ...mapa, fila ])
        }
    }, []);
    return (
        <Layout
            title={ 'nosotros' }
            description={ 'Sobre nosostros' }
            className="bg-orange-400"
        >
            <div>
                <h2 className="text-2xl text-amber-900 font-bold text-center py-3">Mapa</h2>
            </div>
            <div className='grid overflow-x-scroll scrollbar  scroll-p-9 round mt-3 mb-1 '>
                <div className="mb-5 border border-stone-800">
                    {
                        mapa.map(fila => (
                            <Fila
                                key={ contadorNumero() }
                                dataKey={ letra() }
                                fila={ fila }
                                setFila={ setFila }
                                elementos={ elementos }
                                setElementos={ setElementos }
                            />
                        ))
                    }
                </div>

            </div>
            
        </Layout>
    )
}