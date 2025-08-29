import React from 'react';
import Image from 'next/image';

export default function Aboutme() {

  return (
    <section className="flex flex-col items-center justify-center p-8 bg-darkSeaGreen text-foreground rounded-b-md shadow-md relative z-10">
      <h2 className="text-3xl font-bold mb-6">Navega por mis redes</h2>
      <p className="text-center mb-6 max-w-md md:max-w-lg lg:max-w-xl text-lg md:text-xl lg:text-2xl">
        ¡Sigue mi estela! 🌊 Las olas digitales me llevan por tierras lejanas y mares desconocidos. 
        Únete a mi tripulación o sigue mis aventuras en las redes sociales.
      </p>
      <div className="flex space-x-8">
        <a href="https://github.com/7Steng7" target="_blank" rel="noopener noreferrer" className='flex flex-col items-center'>
          <Image
            src="/assets/github.png"
            alt="GitHub"
            width={64}
            height={64}
            className="w-16 h-16 transform hover:scale-110 transition-transform duration-300 hover:rotate-6"
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <p className="text-center text-lg md:text-xl lg:text-2xl pt-2">
            Github
          </p>
        </a>
        <a href="https://www.linkedin.com/in/sebastian-moreno-rodriguez-b65267183/" target="_blank" rel="noopener noreferrer" className='flex flex-col items-center'>
          <Image
            src="/assets/linkedIn.png"
            alt="LinkedIn"
            width={64}
            height={64}
            className="w-16 h-16 transform hover:scale-110 transition-transform duration-300 hover:rotate-6"
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <p className="text-center text-lg md:text-xl lg:text-2xl pt-2">
            LinkedIn
          </p>
        </a>
        <a href="/assets/CVSebastianMoreno.pdf" target="_blank" rel="noopener noreferrer" className='flex flex-col items-center'>
          <Image
            src="/assets/position.png"
            alt="Hoja de Vida"
            className="w-16 h-16 transform hover:scale-110 transition-transform duration-300 hover:rotate-6"
            style={{ filter: "brightness(0) invert(1)" }}
            width={64}
            height={64}
          />
          <p className="text-center text-lg md:text-xl lg:text-2xl pt-2">
            CV
          </p>
        </a>
      </div>
    </section>
  );
}
