import { useState, useEffect } from 'react';
import Image from 'next/image';
import ImgJugadores from '../helpers/ImgJugadores'
import useJugadores from '../hooks/useJugadores'

const Jugadores = ({ color,idJug }) => {
    const { jugadores, setJugadores } = useJugadores();
    const [ imgJug, setimgJug ] = useState(0);
    const [ nombre, setNombre ] = useState('');
    //const [ id, setId ] = useState(idJug);

    const jugadorOb = {
        nombre,
        imgJug,
        id : idJug
    }

    useEffect(() => {
        const jugadorEditado = jugadores.map(jug => jug.id === jugadorOb.id ? jugadorOb : jug);
        //console.log('JEdit' + jugadorEditado);
        setJugadores(jugadorEditado);
    }, [ jugadorOb.nombre, imgJug ]);

    const btnMas = () => {
        if (imgJug >= 44) {
            setimgJug(0);
        } else {
            setimgJug(imgJug + 1);
        }
        //setAvatar(imgJug);
    }
    const btnMenos = () => {
        if (imgJug <= 0) {
            setimgJug(44)
        } else {
            setimgJug(imgJug - 1)
        }
        //setAvatar(imgJug);
    }
    return (
        <>
            <div className="bg-gradient-to-t from-indigo-900 via-indigo-500 to-indigo-900 sombra rounded-xl border-2 border-stone-500 mt-2 overflow-x-auto p-2 bg-" >
                <div className="">
                    <div className='flex'>
                        <div className="flex mr-2 ">
                            <div className='botones flex-none w-12 '>
                                <botton
                                    type='boton'
                                    className=''
                                    onClick={ btnMas }
                                >
                                    <Image src="/img/up.svg" width={ 20 } height={ 20 }
                                        alt='Inicio'
                                        className='bg-gradient-to-t from-yellow-900 via-yellow-100 to-yellow-900 rounded-lg  sombra outline outline-offset-1 outline-stone-800  hover:bg-gradient-to-t hover:from-yellow-900 hover:via-yellow-300 hover:to-yellow-900 h-8 min-w-min mb-3 flex-none'
                                    />
                                </botton>
                                <botton
                                    type='boton'
                                    className=''
                                    onClick={ btnMenos }
                                >
                                    <Image src="/img/down.svg" width={ 20 } height={ 20 }
                                        alt='Inicio'
                                        className='bg-gradient-to-t from-yellow-900 via-yellow-100 to-yellow-900 rounded-lg  sombra outline outline-offset-1 outline-stone-800  hover:bg-gradient-to-t hover:from-yellow-900 hover:via-yellow-300 hover:to-yellow-900 h-8 min-w-min flex-none '
                                    />
                                </botton>
                            </div>
                            <div className="jugador flex-none w-20">
                                <div className={ `outline outline-stone-800 ${ color } p-2 rounded-lg` }>
                                    <ImgJugadores id={ imgJug } />
                                </div>
                            </div>
                        </div>
                        <div className='flex ml-2 '>
                            <input
                                id="color"
                                className='pl-2 outline outline-stone-800 bg-gradient-to-t from-stone-400 via-yellow-100 to-stone-400 rounded-lg mr-2 w-40'
                                type="text"
                                placeholder="Nombre jugador"
                                value={ nombre }
                                onChange={ (e) => setNombre(e.target.value) }
                            />
                        </div>
                        <div className="jugador flex-none w-20 mx-auto">
                            <div className='p-2'>
                                <Image src="/img/sello.png" width={ 50 } height={ 50 }
                                    alt='Inicio'
                                    className="rounded-full min-w-min"
                                />
                            </div>
                        </div>
                        <div className='bg-black  rounded-lg overflow-x-auto flex-none collapse sm:visible'>
                            <h2 className='text-center px-3 text-amber-400 align-middle mx-auto py-2 '>
                                El jugador declina toda responsabilidad de los Enemigos, 
                            </h2>
                            <h2 className='text-center px-3 text-amber-400 align-middle mx-auto py-2 '>
                                sobre la muerte de su personaje.</h2>
                        </div>
                    </div>
                </div>
            </div>
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