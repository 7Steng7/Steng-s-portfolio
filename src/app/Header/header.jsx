'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Typewiter from './typewriter';


export default function Header() {

    const [showHeader, setShowHeader] = useState(false);
    
    const toggleHeader = () => {
        setShowHeader((prev) => !prev);
    };
    const closeHeader = () => {
        setShowHeader(false);
    };

    const categories = [
        {
          title: 'Home',
          description: 'Explora la página principal y sus funciones.',
          imgSrc: '/assets/home.png',
          bgColor: '#002144', // deep navy blue
          link: '/home'
        },
        {
          title: 'Capitán',
          description: 'Creando experiencias digitales y compartiendo conocimiento.',
          imgSrc: '/assets/about.png',
          bgColor: '#004466', // dark sea green
          link: '/about'
        },
        {
          title: 'Skills',
          description: 'Conoce las tecnologías y habilidades en las que me especializo.',
          imgSrc: '/assets/skills.png',
          bgColor: '#004466',
          link: '/skills'
        },
        {
          title: 'Projects',
          description: 'Explora los proyectos más destacados.',
          imgSrc: '/assets/projects.png',
          bgColor: '#002144',
          link: '/projects'
        },
        {
          title: '¡Hablemos a bordo!',
          description: 'Tienes preguntas o ideas que compartir. ¡Conecta conmigo y zarpemos hacia nuevos proyectos!',
          imgSrc: '/assets/experience.png',
          bgColor: '#002144',
          link: '/contact'
        },
        {
          title: 'Blog',
          description: 'Artículos, reflexiones e información interesante.',
          imgSrc: '/assets/blog.png',
          bgColor: '#004466',
          link: '/blog'
        },
      ];

  return (
    <>
      <div className="flex justify-between items-center p-4">
      <div className="relative overflow-hidden whitespace-nowrap w-full">
        <Typewiter />
      </div>
          {/* Botón para mostrar/ocultar el menú */}
        <button
          onClick={toggleHeader}
        >
          <img
            src="/assets/mapa.png"
            width={60}
            height={60}
            alt="arrow-down"
            className="transition-all duration-200"
          />
        </button>
      </div>
      <div
  className="transition-all duration-500 ease-in-out"
  style={{
    width: '100%',
    height: showHeader ? '100vh' : '0',
    overflow: 'hidden',
    position: 'fixed',  // Cambiado de absolute a fixed
    top: 0,             // Asegura que esté en la parte superior
    left: 0,            // Alinea a la izquierda
    zIndex: 9999,       // Asegura que esté por encima de otros elementos
    backgroundColor: 'rgb(0 51 85 / var(--tw-bg-opacity, 1))',
  }}
>
  <section
    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4"
    style={{ height: '100%' }}
  >
    {categories.map((category, index) => (
      <div
        key={index}
        className="flex flex-col items-center justify-center text-white shadow-md rounded-md p-4 transition-all duration-300 ease-in-out"
        style={{
          background: category.bgColor,
          height: '100%',
          width: '100%',
          textAlign: 'center',
          transition: 'background 0.3s ease',
        }}
      >
        <Link href={category.link} onClick={closeHeader} className="flex flex-col items-center justify-center text-center">
          <img
            src={category.imgSrc}
            alt={category.title}
            className="h-16 w-16 mb-2 transition-transform transform hover:scale-110"
          />
          <h2 className="text-lg font-medium">{category.title}</h2>
          <p className="text-xs mt-1">{category.description}</p>
        </Link>
      </div>
    ))}
  </section>
</div>
    </>
  );
}
