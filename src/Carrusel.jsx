import { useState } from "react"

import corte1 from "./assets/corte1.jpg"
import corte2 from "./assets/corte2.png"
import corte3 from "./assets/corte3.jpg"
import corte4 from "./assets/corte4.jpg"
import corte5 from "./assets/corte5.jpg"


import "./styles/Carrusel.css"


function Carrusel() {
    //coleccion de imagenes
    const images = [corte1,corte2,corte3,corte4,corte5];

    const [selectIndex, setSelectedIndex] = useState(0);

    // imagen previa ya seleccionada 
    const [selectedImage, setSelectedImage] = useState(images[0]);

    //metodo para navegar entre las imagenes hacia atras
    const previous = () => {
        const condition = selectIndex > 0;
        const nextIndex = condition ? selectIndex - 1 : images.length - 1;

        setSelectedImage(images[nextIndex]);
        setSelectedIndex(nextIndex);
    };

    const next = () =>{
        const condition = selectIndex < images.length - 1;
        const nextIndex = condition ? selectIndex + 1 : 0 ;

        setSelectedImage(images[nextIndex]);
        setSelectedIndex(nextIndex);
    };

  return (
    <div className="carruselContainer">
      <p className="titleCarrusel font-bold text-center text-white">Algunos de nuestros clientes</p>
      <div>
          <img className="carruselImg" src={selectedImage} alt="imagen de corte"/>
      </div>  
      <div>
          <button className="button" onClick={previous}>{"<"}</button>
          <button className="button" onClick={next}>{">"}</button>
      </div>
    </div>

  ) 
}

export default Carrusel