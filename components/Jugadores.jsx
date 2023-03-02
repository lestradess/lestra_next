import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Input } from 'postcss';
import boton from '../helpers/boton';
import Link from 'next/link';



const Jugadores = () => {

    return (
        <>
            <>
                <div className="mx-3" >
                    <div className="bg-gradient-to-r from-blue-900 via-blue-600 to-blue-900  sombra rounded-xl border-2 border-stone-500 mt-5">
                        <div className="flex justify-start px-3 py-2 overflow-x-auto" >

                            <div className='w-1/12'>
                                <botton
                                    type='boton'
                                    className=''>
                                    <Image src="/img/up.svg" width={ 20 } height={ 20 }
                                        alt='Inicio'
                                        className='bg-gradient-to-t from-yellow-900 via-yellow-100 to-yellow-900 rounded-lg  sombra outline outline-offset-1 outline-stone-800  hover:bg-gradient-to-t hover:from-yellow-900 hover:via-yellow-300 hover:to-yellow-900 h-8 min-w-min mb-3 '
                                    />
                                </botton>
                                <botton
                                    type='boton'
                                    className=''>
                                    <Image src="/img/up.svg" width={ 20 } height={ 20 }
                                        alt='Inicio'
                                        className='bg-gradient-to-t from-yellow-900 via-yellow-100 to-yellow-900 rounded-lg  sombra outline outline-offset-1 outline-stone-800  hover:bg-gradient-to-t hover:from-yellow-900 hover:via-yellow-300 hover:to-yellow-900 h-8 min-w-min '
                                    />
                                </botton>
                            </div>
                            <div className="w-1/4">
                                <div className='outline outline-stone-800 bg-gradient-to-t from-green-900 via-green-600 to-green-900 p-2 rounded-lg '>
                                    <Image src="/img/imgJugadores/Dwarf_1.png" width={ 50 } height={ 50 }
                                        alt='Inicio'
                                        className="rounded-full min-w-min"
                                    />
                                </div>
                            </div>
                            <div>
                                <form action="" className='w-2/4'>
                                    <input
                                        id="color"
                                        className='min-w-min outline outline-stone-800 bg-gradient-to-t from-stone-400 via-yellow-100 to-stone-400 rounded-lg'
                                        type="text"
                                        placeholder="Nombre jugador"
                                    //             // onChange={ (e) => setNombre(e.target.value) }
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </>
    )
}

export default Jugadores
    // <div div className = "contenedor" >
    //     <div className="flex">
    //         <div className='outline outline-stone-800 bg-gradient-to-t from-green-900 via-green-600 to-green-900 p-2 rounded-lg '>
    //             <Image src="/img/imgJugadores/Dwarf_1.png" width={ 50 } height={ 50 }
    //                 alt='Inicio'
    //                 className="rounded-full"
    //             />
    //         </div>
    //         <div className="flex-col">
    //             <div className={ boton() }>
    //                 <Image src="/img/up.svg" width={ 20 } height={ 20 }
    //                     alt='Inicio'
    //                     className=''
    //                 />
    //             </div>
    //             <div className={ boton() }>
    //                 <Image src="/img/down.svg" width={ 20 } height={ 20 }
    //                     alt='Inicio'
    //                 />
    //             </div>
    //         </div>
    //         <form action="" className=''>
    //             <input
    //                 id="color"
    //                 className='outline outline-stone-800 bg-gradient-to-t from-stone-400 via-yellow-100 to-stone-400 rounded-lg p-6 ml-3'
    //                 type="text"
    //                 placeholder="Nombre jugador"

    //             // onChange={ (e) => setNombre(e.target.value) }
    //             />
    //         </form>

    //     </div>
    //             </div >