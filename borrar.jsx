const Jugadores = () => {

    return (
        <>
            <div className="" >
                <div className="bg-gradient-to-r from-blue-900 via-blue-600 to-blue-900 sombra rounded-xl border-2 border-stone-500 mt-2 overflow-x-auto">
                    <div className="flex px-3 py-2 " >
                        <div className='flex-none w-12 '>
                            <botton
                                type='boton'
                                className=''>
                                <Image src="/img/up.svg" width={ 20 } height={ 20 }
                                    alt='Inicio'
                                    className='bg-gradient-to-t from-yellow-900 via-yellow-100 to-yellow-900 rounded-lg  sombra outline outline-offset-1 outline-stone-800  hover:bg-gradient-to-t hover:from-yellow-900 hover:via-yellow-300 hover:to-yellow-900 h-8 min-w-min mb-3 flex-none'
                                />
                            </botton>
                            <botton
                                type='boton'
                                className=''>
                                <Image src="/img/down.svg" width={ 20 } height={ 20 }
                                    alt='Inicio'
                                    className='bg-gradient-to-t from-yellow-900 via-yellow-100 to-yellow-900 rounded-lg  sombra outline outline-offset-1 outline-stone-800  hover:bg-gradient-to-t hover:from-yellow-900 hover:via-yellow-300 hover:to-yellow-900 h-8 min-w-min flex-none '
                                />
                            </botton>
                        </div>
                        <div className="flex-none w-auto">
                            <div className='outline outline-stone-800 bg-gradient-to-t from-green-900 via-green-600 to-green-900 p-2 rounded-lg '>
                                <Image src="/img/imgJugadores/Dwarf_1.png" width={ 50 } height={ 50 }
                                    alt='Inicio'
                                    className="rounded-full min-w-min"
                                />
                            </div>
                        </div>
                        <form action="" className='flex ml-3'>
                            <input
                                id="color"
                                className='outline outline-stone-800 bg-gradient-to-t from-stone-400 via-yellow-100 to-stone-400 rounded-lg pl-2 flex-wrap'
                                type="text"
                                placeholder="Nombre jugador 1"
                            //             // onChange={ (e) => setNombre(e.target.value) }
                            />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}