import Image from 'next/image'
import Link from 'next/link'

export default function Header () {
    return (
        <header className='flex justify-center'>         
                <Link href='/'>
                    <Image width={ 334 } height={ 75 } src='/img/lestradamus.png' alt='Imagen logotipo' className="flex justify-center" />
                </Link>
        </header>
    )
}
