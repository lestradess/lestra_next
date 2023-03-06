import { useState } from 'react';
import Layout from '../layout/layout'
import { useRouter } from 'next/router';

export default function Configuracion () {
    const router = useRouter();
    const [ ancho, setAncho ] = useState(16);
    const [ fondo, setFondo ] = useState(16);
    const [ autoTirada, setAutoTirada ] = useState('No');
    const [ runa, setRuna ] = useState('No');
    const [ ordenJug, setOrdenJug ] = useState('No');

    const handleAutoTirada = (e) => {
        if (autoTirada === 'No') {
            setAutoTirada('Si')
        }
        if (autoTirada === 'Si') {
            setAutoTirada('No')
        }
    }
    const handleRuna = (e) => {
        if (runa === 'No') {
            setRuna('Si')
        }
        if (runa === 'Si') {
            setRuna('No')
        }
    }
    const handleOrdenJug = (e) => {
        if (ordenJug === 'No') {
            setOrdenJug('Si')
        }
        if (ordenJug === 'Si') {
            setOrdenJug('No')
        }
    }
    const handleContinuar = () => {
        if (!confirm(`El tablero de juego tiene: \n
            ${ ancho } casillas X ${ fondo } casillas.\n
            La tirada de dados automática ${ autoTirada === 'Si' ? '' : 'no' } está activa.\n
            Los monstruos ${ runa === 'Si' ? '' : 'no' } dejan runa.\n
            El orden de los jugadores ${ ordenJug === 'Si' ? '' : 'no' } es automático.\n
            Si todo es correcto pulsa "Aceptar"`)) return;
        router.push('/')
    }
    return (
        <>
            <Layout
                title={ 'Ajustes' }
                description={ 'Juego de tablero' }
            >
                <div className="flex flex-col justify-center items-center space-y-4" >
                    <div className='w-5/6'>
                        <h2 className='text-amber-900 my-4 mb-8 font-extrabold text-2xl text-center'>Configuracion del juego</h2>

                        <div className='border border-amber-900 rounded-lg p-3'>
                            <h3 className=" text-amber-900 mb-2 font-bold text-center text-xl">Tablero</h3>
                            <div className='flex justify-around mb-2 '>
                                <p className='font-bold'>Ancho</p>
                                <input type="range" className="form-range basis-4/6 "
                                    min="16" max="30"
                                    step="1"
                                    id="ancho"
                                    value={ ancho }
                                    onChange={ (e) => setAncho(e.target.value) } />
                                <p className='font-extrabold  text-amber-900 '>{ ancho }</p>
                            </div>
                            <div className='flex justify-around'>
                                <p className='font-bold'>Fondo</p>
                                <input type="range" className="form-range basis-4/6 "
                                    min="10" max="20"
                                    step="1"
                                    id="fondo"
                                    value={ fondo }
                                    onChange={ (e) => setFondo(e.target.value) } />
                                <p className='font-extrabold  text-amber-900 '>{ fondo }</p>
                            </div>
                        </div>
                        <div className='border border-amber-900 rounded-lg p-3 mt-2'>
                            <div className='flex justify-between mb-2 '>
                                <div className="form-check ml-3">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value={ autoTirada }
                                        id="autoTirada"
                                        onChange={ handleAutoTirada } />
                                    <label className="font-bold ml-3">
                                        Auto tirada de dados
                                    </label>
                                </div>
                                <p className='font-extrabold  text-amber-900 mr-4'>{ autoTirada }</p>
                            </div>
                            <div className='flex justify-between mb-2 '>
                                <div className="form-check ml-3">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value={ runa }
                                        id="autoTirada"
                                        onChange={ handleRuna } />
                                    <label className="font-bold ml-3">
                                        ¿Los monstruos dejan runa?
                                    </label>
                                </div>
                                <p className='font-extrabold  text-amber-900 mr-4 '>{ runa }</p>
                            </div>
                            <div className='flex justify-between mb-2 '>
                                <div className="form-check ml-3">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value={ ordenJug }
                                        id="autoTirada"
                                        onChange={ handleOrdenJug } />
                                    <label className="font-bold ml-3">
                                        ¿Orden de jugagores automático?
                                    </label>
                                </div>
                                <p className='font-extrabold  text-amber-900 mr-4 '>{ ordenJug }</p>
                            </div>
                        </div>
                        <div className='flex justify-center mt-5'>
                            <button
                                type='button'
                                className="w-1/2 bg-gradient-to-t from-yellow-900 via-yellow-100 to-yellow-900 rounded-lg p-2 sombra outline outline-offset-1 outline-stone-700 hover:bg-gradient-to-t hover:from-yellow-900 hover:via-yellow-300 hover:to-yellow-900 font-bold text-center"
                                value='Pulsa para continuar'
                                onClick={ handleContinuar }
                            >Pulsa para continuar</button>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}