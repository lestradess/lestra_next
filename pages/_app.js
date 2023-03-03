import { JugadoresProvider } from '../context/JugadoresProvider'
import '/styles/globals.css'


export default function App({ Component, pageProps }) {
  return (
    <JugadoresProvider>
      <Component { ...pageProps } />
    </JugadoresProvider>
  )
}
