
import './App.css'
import EdzorbLaw from './components/EdzorbLaw'
import Bnfm from './components/BNFM'
import Footer from './components/Footer'
import Header from './components/Header'
import LatestVideo from './components/LatestVideo'
import Callback from './components/crousels/Callback'
import CrouselA from './components/crousels/CrouselA'
import CrouselB from './components/crousels/CrouselB'
import CrouselC from './components/crousels/CrouselC'
import CrouselD from './components/crousels/CrouselD'
import CrouselE from './components/crousels/CrouselE'
import CrouselF from './components/crousels/CrouselF'
import CrouselG from './components/crousels/CrouselG'
import GetStarted from './components/GetStarted'
import StrikeRate from './components/StrikeRate'

function App() {


  return (
    <>
      <Header/> 
      <CrouselA/>
      <CrouselB/>
      <CrouselC/>
      <CrouselD/>
      <CrouselE/>
      <CrouselF/>
      <CrouselG/>
      <Bnfm/>
      <StrikeRate/>
      <EdzorbLaw/>
      <LatestVideo/>
      <GetStarted/>
      <Callback/>
      <Footer/>
    </>
  )
}

export default App
