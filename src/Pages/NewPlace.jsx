import { useState } from "react"
import { constants } from "../helpers/constants";
import { useNavigate } from "react-router-dom";
import { MdOutlineStarBorder } from "react-icons/md";
import { MdOutlineStar } from "react-icons/md";

const NewPlace = () => {

    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState('');

    const [newPlace, setNewPlace] = useState({
        placeName: '',
        description: '',
        rating: '',
        latitude: '',
        longitude: '',
    });

    const navigate = useNavigate();

    const { API_URL } = constants();

    const handleRating = (currentRating) => {
        setRating(currentRating);
        setNewPlace({ ...newPlace, rating: currentRating });
        console.log(currentRating);

    }

    const handleSubmit = async () => {

        e.preventDefault();

        try {
            const response = await fetch(`https://localhost:7252/api/place`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${user.token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newPlace)
            });

            if (!response.ok) {
                throw new Error('Error al añadir la visita');
            }


            setNewPlace(newPlace)

        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div className="flex bg-yellow-700">

            <div className="flex flex-col justify-center items-center p-3 w-full h-full   md:h-screen">

                <div className="container flex flex-col justify-center items-center shadow-2xl bg-yellow-600 rounded-xl p-4">

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

                        <div className="flex">
                            <label className="text-white font-semibold mr-2 mb-2">
                                Calificacion
                            </label>
                            {[...Array(5)].map((_, i) => {
                                const currentRating = i + 0;
                                return (
                                    <label key={i}>

                                        <input
                                            type="radio"
                                            name="rating"
                                            style={{ display: 'none' }}
                                            value={currentRating}
                                            onClick={() => handleRating(currentRating)}
                                        />
                                        {currentRating <= hover ? (
                                            <MdOutlineStar

                                                className="cursor-pointer text-2xl text-white ml-1 mr-1"

                                            />
                                        ) : (
                                            <MdOutlineStarBorder
                                                className="cursor-pointer text-2xl text-white ml-1 mr-1"
                                                onMouseEnter={() => setHover(i)}
                                                onMouseLeave={() => setHover(null)}
                                            />
                                        )}
                                    </label>
                                );
                            })}
                        </div>

                        <div className="flex flex-col mb-4">
                            <label className="text-white font-semibold mb-2">
                                Ingresa las coordenadas
                            </label>
                            <div>
                                <input
                                    className="border-2 w-full p-2 placeholder-gray-600 rounded-md"
                                    type="text"
                                    placeholder="Latitud"
                                    value={newPlace.latitude}
                                    onChange={(e) => setNewPlace({ ...newPlace, latitude: e.target.value })}
                                />
                                <input
                                    className="border-2 w-full p-2 mt-6 placeholder-gray-600 rounded-md"
                                    type="text"
                                    placeholder="Longitud"
                                    value={newPlace.longitude}
                                    onChange={(e) => setNewPlace({ ...newPlace, longitude: e.target.value })}
                                />
                            </div>
                        </div>


                        <div className="text-white mt-3 flex items-center justify-center">
                            <button type="button" className="bg-yellow-700 rounded-md p-2">
                                Registrar Visita
                            </button>

                            <span
                                className="bg-yellow-700 rounded-md p-2 ml-7 cursor-pointer"
                                onClick={() => navigate("/home")}
                            >
                                Cancelar
                            </span>
                        </div>
                    </form>

                </div>

            </div>
        </div>
    )
}

export default NewPlace