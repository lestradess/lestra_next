import { JugadoresProvider } from '../context/JugadoresProvider'
import '/styles/globals.css'
import { Range } from 'reactstrap'


export default function App ({ Component, pageProps }) {
  return (
    <JugadoresProvider>
      <Component { ...pageProps } />
    </JugadoresProvider>
  )
}
