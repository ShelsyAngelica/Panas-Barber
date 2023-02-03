import React from 'react'
import { Link } from "react-router-dom";

function Menu() {

    const handleClick = () =>{
        window.open('https://wa.me/573008552138?text=Hola%20vengo%20de%20la%20pagina%20web%2C%20deseo%20agendar%20una%20cita','_blank');
    }
    
  return (
    <div  className="w-full block flex-grow lg:flex lg:items-center lg:w-auto visible" >
          <div className="text-sm lg:flex-grow">
            <a 
              onClick={handleClick}
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Reserva
            </a>
            <Link to="/team">
              <a 
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              >
                Team
              </a>
            </Link>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"

            >
                Contactanos
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
            >
              Redes sociales
            </a>
          </div>
          <div>
            <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
          </div>
    </div>
    
  )
}

export default Menu