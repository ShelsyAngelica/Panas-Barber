function CardTeam() {
  return (
    <div>
        <h1 className="font-bold text-5xl my-5 text-center">Equipo de trabajo </h1>
        <div className="my-16 flex justify-center">
            <div className=" max-w-sm rounded overflow-hidden shadow-lg text-center">
                <img
                    className="w-full"
                    src="https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg"
                    alt="foto del empleado"
                />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Jorge Veloza</div>
                    <p className="text-gray-700 text-base text-center">
                    Barbero
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    Artista, especialista en Corte Urbano, Barbas y Mostachos.
                    </span>
                </div>
            </div>
        </div>
    </div>
    
    
  );
}

export default CardTeam;
