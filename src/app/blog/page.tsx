import React from 'react';
import { FaFile } from 'react-icons/fa';

export default function Aboutme() {

  return (
    <div className="w-full md:w-60 h-60 m-auto rounded-lg shadow-md mb-6 mt-6 flex flex-col justify-center items-center bg-darkSeaGreen p-6">
      <FaFile className="h-12 w-12 text-white mb-4" />
      <p className="text-white text-lg font-medium mb-2 text-center">No hay contenido todavía</p>
      <p className="text-white text-sm text-center">
        Parece que aún no se ha agregado nada aquí. ¡Vuelve pronto!
      </p>
    </div>
  );
}
