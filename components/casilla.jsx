import { useEffect, useState } from 'react'

const Casilla = ({ casilla }) => {
    const [ id, setId ] = useState(0);
    const [ color, setColor ] = useState('bg-orange-200');

    const handleClick= ()=>{
        
        setColor('bg-red-800')
    }
    useEffect(() => {
        setId(casilla.id)
        setColor(casilla.color)
    }, []);

    return (
        <div
            className={ `rounded border border-stone-700 w-11 text-xs text-center m- ${ color } hover:cursor-pointer hover:bg-green-600` }
            id={ id }
            onClick={handleClick}
        >{ id }
        </div>
    )
}

export default Casilla