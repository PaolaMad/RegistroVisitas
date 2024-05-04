import { useState } from "react"

const NewPlace = () => {
    const [newPlace, setNewPlace] = useState({
        namePlace: '',
        description: '',
        score: '',
        location: '',
    });
    const handleSubmit = () => {
        e.preventDefault();
    }

    return (
        <div className="flex bg-yellow-700">
      <div className="flex flex-col justify-center items-center p-3 w-full h-full   md:h-screen">
        <h1 className="text-3xl text-white font-bold mb-6">Registra tu Visita</h1>
        <form
          onSubmit={handleSubmit}
          className="bg-blue-ligth rounded-md w-7/12 p-6">
          <div className="flex flex-col mb-4">
            <label className="text-white font-semibold mb-2">
              Nombre del lugar
            </label>
            <input
              className="border-2 w-full p-2 placeholder-gray-600 rounded-md"
              type="text"
              placeholder="Nombre del lugar"
              value={newPlace.namePlace}
              onChange={(e) => setNewPlace({ ...newPlace, namePlace: e.target.value })}
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="text-white font-semibold mb-2">Descripcion</label>
            <input
              className="border-2 w-full p-2 placeholder-gray-600 rounded-md"
              type="text"
              placeholder="Descripcion del lugar"
              value={newPlace.description}
              onChange={(e) => setNewPlace({ ...newPlace, description: e.target.value })}
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="text-white font-semibold mb-2">
              Calificación
            </label>
            <input
              className="border-2 w-full p-2 placeholder-gray-600 rounded-md"
              type="text"
              placeholder="Califica tu visita"
              value={newPlace.score}
              onChange={(e) => setNewPlace({ ...newPlace, score: e.target.value })}
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="text-white font-semibold mb-2">
              Ingresa las coordenadas
            </label>
            <input
              className="border-2 w-full p-2 placeholder-gray-600 rounded-md"
              type="text"
              placeholder="Ingresa las coordenadas"
              value={newPlace.location}
              onChange={(e) => setNewPlace({ ...newPlace, location: e.target.value })}
            />
          </div>


          <div className="text-white mt-3 flex items-center justify-center">
            <button type="button" className="bg-blue rounded-md p-2">Registrar Visita</button>

            <span
              className="bg-blue rounded-md p-2 ml-7 cursor-pointer"
              onClick={() => navigate("/home")}
            >
              Cancelar
            </span>
          </div>
        </form>
      </div>
    </div>
    )
}

export default NewPlace