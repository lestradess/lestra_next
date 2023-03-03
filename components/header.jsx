import Image from 'next/image'
import Link from 'next/link'

export default function Header () {
    return (
        <header className='flex justify-center mt-5'>         
                <Link href='/'>
                    <Image width={ 647 } height={ 93 } src='/img/lestradamus.png' alt='Imagen logotipo' className="flex justify-center" />
                    <h1 className='text-1xl text-amber-500 text-center'>El juego de mesa</h1>
                </Link>
        </header>
    )
}
