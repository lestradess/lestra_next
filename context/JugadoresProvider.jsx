import { useEffect, useState, createContext } from 'react';

const JugadoresContext = createContext()

const JugadoresProvider = ({ children }) => {
    const colores = [ 0,
        'bg-gradient-to-t from-green-900 via-green-600 to-green-900',
        'bg-gradient-to-t from-red-900 via-red-500 to-red-900',
        'bg-gradient-to-t from-yellow-600 via-yellow-200 to-yellow-600',
        'bg-gradient-to-t from-blue-900 via-blue-600 to-blue-900',
        'bg-gradient-to-t from-violet-900 via-violet-600 to-violet-900',
        'bg-gradient-to-t from-stone-900 via-stone-600 to-stone-900' ]
    const [ jugadores, setJugadores ] = useState([
        { id: 1, nombre: '', avatar: 0 },
        { id: 2, nombre: '', avatar: 0 },
        { id: 3, nombre: '', avatar: 0 },
        { id: 4, nombre: '', avatar: 0 },
        { id: 5, nombre: '', avatar: 0 },
        { id: 6, nombre: '', avatar: 0 },
    ]);

    return (
        <JugadoresContext.Provider
            value={ {
                colores,
                jugadores,
                setJugadores
            } }
        >
            { children }
        </JugadoresContext.Provider>
    )
}

export {
    JugadoresProvider
}
export default JugadoresContext