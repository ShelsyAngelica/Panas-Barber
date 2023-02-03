import Carrusel from "./Carrusel"
import Footer from "./Footer"
import SectionService from "./SectionService"
import "./styles/section.css"

function Section() {
  return (
    <div>
        <div 
        className="image bg-contain bg-cover"></div>
        <SectionService/>
        <Carrusel/>
        <Footer/>
    </div>
  )
}

export default Section