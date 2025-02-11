import React, { useRef } from 'react';

export default function Aboutme() {

  return (
    <section className="flex flex-col items-center justify-center p-8 bg-darkSeaGreen text-foreground rounded-md shadow-md">
      <h2 className="text-3xl font-bold mb-6">Navega por mis redes</h2>
      <p className="text-center mb-6 max-w-md text-lg">
        ¡Sigue mi estela! 🌊 Las olas digitales me llevan por tierras lejanas y mares desconocidos. 
        Únete a mi tripulación o sigue mis aventuras en las redes sociales.
      </p>
      <div className="flex space-x-8">
        {/* Icono de GitHub */}
        <a href="https://github.com/7Steng7" target="_blank" rel="noopener noreferrer">
          <img
            src="/assets/github.png"
            alt="GitHub"
            className="w-16 h-16 transform hover:scale-110 transition-transform duration-300 hover:rotate-6"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </a>
        {/* Icono de LinkedIn */}
        <a href="https://www.linkedin.com/in/sebastian-moreno-rodriguez-b65267183/" target="_blank" rel="noopener noreferrer">
          <img
            src="/assets/linkedIn.png"
            alt="LinkedIn"
            className="w-16 h-16 transform hover:scale-110 transition-transform duration-300 hover:rotate-6"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </a>
        {/* Hoja de vida */}
        <a href="/assets/CV.pdf" target="_blank" rel="noopener noreferrer">
          <img
            src="/assets/position.png"
            alt="Hoja de Vida"
            className="w-16 h-16 transform hover:scale-110 transition-transform duration-300 hover:rotate-6"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </a>
      </div>
    </section>
  );
}
