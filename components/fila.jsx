import { useEffect, useState } from 'react'
import Casilla from './casilla'

const Fila = ({ dataKey, setElementos, elementos }) => {
    const [ fila, setFila ] = useState([]);
    let newId
    useEffect(() => {
        setFila([]);
        for (let i = 1; i < 31; i++) {
            if (i < 10) {
                newId = `${ dataKey }0${ i }`
            } else {
                newId = dataKey + i
            }
            const casilla = {
                id: newId,
                color: 'bg-orange-200'
            }
            setFila(fila => [ ...fila, casilla ]);
        }
    }, []);
    // setFila(casillas)

    return (
        <>
            <div className='flex '>
                { fila.map(casilla => (
                    <Casilla
                        key={ casilla.id }
                        casilla={ casilla }
                        setElementos={ setElementos }
                        elementos={ (elementos) }
                    />
                )) }
            </div>
        </>
    )
}

export default Fila