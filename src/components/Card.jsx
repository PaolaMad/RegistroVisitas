import { useState } from "react";
import { MdOutlineStarBorder } from "react-icons/md";

const Card = () => {

    

    return (
        <div className="bg-yellow-700 rounded-2xl w-64 p-4 shadow-2xl flex-col flex items-center justify-center">
            <h1 className=" text-white font-bold bg-yellow-600 rounded-smd- p-1 shadow-md">nombre del lugar</h1>
            <p className="text-white font-thin mt-1 p-3">
                descripcion del lugar
            </p>

            {/* <div className="flex">
                <h1 className="text-white font-extralight mr-2">Calificación:</h1>
                {[...Array(5)].map((star, i) => (
                    <MdOutlineStarBorder key={i} className="text-2xl text-white" />
                ))}
            </div> */}


            

        </div>
    )
}



export default Card