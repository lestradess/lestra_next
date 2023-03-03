import d1 from '../public/img/imgJugadores/Dwarf_1.png'
import d2 from '../public/img/imgJugadores/Dwarf_2.png'
import d3 from '../public/img/imgJugadores/Dwarf_3.png'
import d4 from '../public/img/imgJugadores/Dwarf_4.png'
import d5 from '../public/img/imgJugadores/Dwarf_5.png'
import d6 from '../public/img/imgJugadores/Dwarf_6.png'
import d7 from '../public/img/imgJugadores/Dwarf_7.png'
import d8 from '../public/img/imgJugadores/Dwarf_8.png'
import d9 from '../public/img/imgJugadores/Dwarf_9.png'
import d10 from '../public/img/imgJugadores/Dwarf_10.png'
import d11 from '../public/img/imgJugadores/Dwarf_11.png'
import d12 from '../public/img/imgJugadores/Dwarf_12.png'
import d13 from '../public/img/imgJugadores/Dwarf_13.png'
import d14 from '../public/img/imgJugadores/Dwarf_14.png'
import d15 from '../public/img/imgJugadores/Dwarf_15.png'
import e1 from '../public/img/imgJugadores/Elf_1.png'
import e2 from '../public/img/imgJugadores/Elf_2.png'
import e3 from '../public/img/imgJugadores/Elf_3.png'
import e4 from '../public/img/imgJugadores/Elf_4.png'
import e5 from '../public/img/imgJugadores/Elf_5.png'
import e6 from '../public/img/imgJugadores/Elf_6.png'
import e7 from '../public/img/imgJugadores/Elf_7.png'
import e8 from '../public/img/imgJugadores/Elf_8.png'
import e9 from '../public/img/imgJugadores/Elf_9.png'
import e10 from '../public/img/imgJugadores/Elf_10.png'
import e11 from '../public/img/imgJugadores/Elf_11.png'
import e12 from '../public/img/imgJugadores/Elf_12.png'
import e13 from '../public/img/imgJugadores/Elf_13.png'
import e14 from '../public/img/imgJugadores/Elf_14.png'
import e15 from '../public/img/imgJugadores/Elf_15.png'
import h1 from '../public/img/imgJugadores/Human_1.png'
import h2 from '../public/img/imgJugadores/Human_2.png'
import h3 from '../public/img/imgJugadores/Human_3.png'
import h4 from '../public/img/imgJugadores/Human_4.png'
import h5 from '../public/img/imgJugadores/Human_5.png'
import h6 from '../public/img/imgJugadores/Human_6.png'
import h7 from '../public/img/imgJugadores/Human_7.png'
import h8 from '../public/img/imgJugadores/Human_8.png'
import h9 from '../public/img/imgJugadores/Human_9.png'
import h10 from '../public/img/imgJugadores/Human_10.png'
import h11 from '../public/img/imgJugadores/Human_11.png'
import h12 from '../public/img/imgJugadores/Human_12.png'
import h13 from '../public/img/imgJugadores/Human_13.png'
import h14 from '../public/img/imgJugadores/Human_14.png'
import h15 from '../public/img/imgJugadores/Human_15.png'
import Image from 'next/image'


const ImgJugadores = ({ id }) => {
    const image = [ d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13, e14, e15, h1, h2, h3, h4, h5, h6, h7, h8, h9, h10, h11, h12, h13, h14, h15 ]
    return (

        <div
            alt='Inicio'
            className="rounded-full min-w-min">
            <Image 
            src={ image[ id ] } 
            width={ 50 } height={ 50 } 
            className="rounded-full min-w-min" alt="imagen" 
            />
        </div>
    )
}
export default ImgJugadores