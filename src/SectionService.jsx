import "./styles/SectionService.css"

function SectionService() {
  return (
    <div id="services" className="bg-black">
        <div className="title-service">
            <h1 className="text-service font-bold text-center text-white">Conoce nuestros servicios</h1>
        </div>
        <div  className="containerService">
            <div className=" max-w-sm rounded overflow-hidden shadow-lg text-center">
                <img
                    className="w-full"
                    src="https://images.pexels.com/photos/3998417/pexels-photo-3998417.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="foto del empleado"
                />
                <div className="px-6 ">
                    <p className="text-white text-base text-center font-semibold text-lg">
                    BARBA
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block px-3 py-1 text-sm text-white mr-2 mb-2">
                    El barbero quita el volumen de la barba con sus herramientas, luego empieza a retirar todos los vellos que están fuera del diseño de tu barba con su navaja.
                    </span>
                </div>
            </div>

            <div className=" max-w-sm rounded overflow-hidden shadow-lg text-center">
                <img
                    className="w-full"
                    src="https://images.pexels.com/photos/1453005/pexels-photo-1453005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="foto del empleado"
                />
                <div className="px-6 ">
                    <p className="text-white text-base text-center font-semibold text-lg">
                    CABELLO
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block px-3 py-1 text-sm text-white mr-2 mb-2">
                    Servicios de lujo de corte de cabello, con la asesoría de imagen de nuestros expertos, peinado acorde a tu fisionomía con ceras y productos importados.
                    </span>
                </div>
            </div>

            <div className=" max-w-sm rounded overflow-hidden shadow-lg text-center">
                <img
                    className="img-skin"
                    src="https://images.pexels.com/photos/8867483/pexels-photo-8867483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="foto del empleado"
                />
                <div className="px-6 ">
                    <p className="text-white text-base text-center font-semibold text-lg">
                    FACIALES
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block px-3 py-1 text-sm text-white mr-2 mb-2">
                    Procedimientos con cera, cuchillas, mascarillas, para retirar vellos , células muertas, puntos negros, mejorando la apariencia de la piel.
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SectionService