import Image from 'next/image'



export default function Header () {
    return (
        <header>
            <div className="w-full  flex justify-center align-middle">
                <Image width={ 300 } height={ 100 } src='/assets/img/Hscreen.png' alt='Imagen logotipo' className="flex justify-center"/>
            </div>
        </header>
    )
}
