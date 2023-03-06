import { useEffect, useState, createContext } from 'react';

const JugadoresContext = createContext()

const JugadoresProvider = ({ children }) => {

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