import './styles/App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Token from './components/Token'
import Footer from './components/Footer'
import { useRef } from 'react'

function App() {
  const tokenomicsRef = useRef(null)
  const mainRef = useRef(null)
  const scrollToTokenomicsRef = () => {
    tokenomicsRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToMainRef = () => {
    mainRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className='h-screen w-screen overflow-x-hidden font-karma tracking-wide'>
      <Navbar
        scrollToMainRef={scrollToMainRef}
        scrollToTokenRef={scrollToTokenomicsRef}
      />
      <div className='w-full h-full' ref={mainRef}>
        <Main />
      </div>
      <div className='w-full' ref={tokenomicsRef}>
        <Token />
      </div>
      <Footer />
    </div>
  )
}

export default App