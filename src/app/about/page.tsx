"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { useAnimeText } from '../animations/hooks/useAnimeText';

export default function Aboutme() {

  const titleRef = useRef<HTMLElement>(null);
  useAnimeText(titleRef, { type: 'chars', loop: true, delay: 100 });

  const experiences = [
    {
      title: "Análisis de requerimientos y desarrollo de soluciones",
      description:
        "Transformación de necesidades en funcionalidades técnicas mediante el diseño de módulos, dashboards, formularios y APIs escalables.",
    },
    {
      title: "Experiencias digitales completas",
      description:
        "Desarrollo de aplicaciones móviles y web integradas, potenciando la interacción del usuario y la gestión de datos en tiempo real.",
    },
    {
      title: "Arquitectura de APIs escalables",
      description:
        "Construcción de servicios backend con énfasis en seguridad, eficiencia y capacidad de integración con distintos ecosistemas digitales.",
    },
    {
      title: "Infraestructura Cloud/Serverless",
      description:
        "Dominio en la configuración de entornos en AWS, incluyendo instancias, redes, almacenamiento y balanceadores para sistemas distribuidos.",
    },
    {
      title: "Gestión de bases de datos",
      description:
        "Diseño, optimización y mantenimiento de bases de datos SQL y NoSQL, garantizando integridad y escalabilidad en el manejo de la información.",
    },
  ];

  return (
  <main id="about" className="w-3xl h-auto flex flex-col items-center justify-center py-16 bg-deepNavyBlue">
      <h1 className="text-3xl font-semibold text-white-900 mb-4 text-center flex items-center justify-center">
        <span className="text-6xl opacity-30 animate-pulse z-0">📒</span>
        <span className="relative z-10" ref={titleRef}>Bitacora del capitán</span>
      </h1>
      <article className='w-5/6 md:5/6 lg:w-5/6'>
        <p className="text-foreground text-lg md:text-xl mb-6 w-full mt-4 mb">
          Durante mi travesía y aventuras como capitán del desarrollo web, he
          explorado diversos mares tecnológicos, acumulando experiencias valiosas
          y superando desafiantes tormentas. Cada logro no es más que una estrella
          en mi mapa, marcando las lecciones aprendidas y las destrezas
          adquiridas. Algunas de estas expediciones incluyen:
        </p>
      </article>
      <section className="w-4/5 md:w-full md:flex md:flex-row md:justify-center md:items-center lg:w-5/6 lg:justify-evenly mb-16">
      <figure className="relative flex justify-center items-center">
        <Image
          src="/assets/StengPirata.jpg"
          alt="About me"
          width={160}
          height={160}
          className="rounded-lg md:w-full md:ml-10 lg:w-60 fade-inward"
        />
      </figure>
      <aside className='lg:w-3/5'>
        <section className="bg-darkSeaGreen text-white p-6 rounded-2xl shadow-lg w-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg md:m-10 lg:w-5/6">
          <h2 className="text-xl md:text-2xl font-semibold">Experiencia</h2> 
          <div className="mt-2 flex items-center">
            <p className="ml-2 flex items-center text-lg md:text-xl">
            Actualmente cuento con 3+ años de experiencia en desarrollo y gestión de proyectos tecnológicos. Me especializo en desarrollo fullstack y aplicaciones móviles.
            <span className="ml-2 text-3xl animate-floating">⛵</span>
            </p>
          </div>
        </section>
        <section className="bg-darkSeaGreen text-white p-6 rounded-2xl shadow-lg mt-10 w-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg md:m-10 lg:w-5/6">
          <h2 className="text-xl md:text-2xl font-semibold">Tecnologías exploradas</h2>

          <div className="mt-4">
            <h3 className="text-lg md:text-xl lg:text-2xl font-medium">🖥️ Frontend</h3>
            <p className="ml-4 md:text-lg">React, Angular, Next.js, Tailwind CSS, Bootstrap, Material UI</p>
          </div>

          <div className="mt-4">
            <h3 className="text-lg md:text-xl lg:text-2xl font-medium">⚙️ Backend</h3>
            <p className="ml-4 md:text-lg">Node.js, Express, NestJS, JWT, REST APIs</p>
          </div>

          <div className="mt-4">
            <h3 className="text-lg md:text-xl lg:text-2xl font-medium">💾 Bases de datos</h3>
            <p className="ml-4 md:text-lg">MongoDB, MySQL, Firebase, AWS(RDS)</p>
          </div>

          <div className="mt-4">
            <h3 className="text-lg md:text-xl lg:text-2xl font-medium">📱 Desarrollo Mobile</h3>
            <p className="ml-4 md:text-lg">React Native (JavaScript/TypeScript)</p>
          </div>

          <div className="mt-4">
            <h3 className="text-lg md:text-xl lg:text-2xl font-medium">🛠️ Herramientas y Otros</h3>
            <p className="ml-4 md:text-lg">AWS, Firebase, Git, Postman, Trello, Docker, CI/CD, Google Maps API</p>
          </div>
        </section>
      </aside>
      </section>
      <aside className="w-5/6">
      <h1 className="text-3xl font-semibold text-white-900 mb-4 text-center relative">
        <span className="absolute bottom-0 text-6xl opacity-30 animate-pulse z-0">⚓</span>
        <span className="relative z-10">Diario de viaje: Islas descubiertas</span>
      </h1>
      <aside className="min-h-screen relative z-10">
        <div className="max-w-3xl mx-auto lg:max-w-6xl pt-16">
          <section>
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <span
                className={`relative top-0 text-6xl opacity-30 animate-pulse z-0 scale-x-[-1] ${
                  index % 2 === 0 ? "flex" : "hidden"
                }`}
                >🛥️</span>
                <div
                  className={`relative bg-center p-6 max-w-lg w-full bg-no-repeat ${
                    index % 2 === 0 ? "animate-floatingLeft" : "animate-floatingRight"
                  }`}
                  style={{ backgroundImage: "url('/assets/isla.svg')" }}
                >
                  <div className="bg-darkSeaGreen bg-opacity-80 p-4 rounded-lg transform transition-all duration-300 hover:scale-105">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold flex items-center text-yellow-400">
                      {index % 2 === 0 ? (
                        <>
                          <span className="mr-2">★</span>
                          {exp.title}
                        </>
                      ) : (
                        <>
                          <span className="ml-auto text-lg md:text-xl lg:text-2xl">{exp.title}</span>
                          <span className="ml-2">★</span>
                        </>
                      )}
                    </h3>
                    <p className="text-white-200 mt-2 text-lg md:text-xl lg:text-2xl">
                      {index % 2 === 0 ? (
                        <span className="text-left">{exp.description}</span>
                      ) : (
                        <span className="text-right">{exp.description}</span>
                      )}
                    </p>
                  </div>
                </div>
                <span
                className={`relative top-0 text-6xl opacity-30 animate-pulse z-0 ${
                  index % 2 === 0 ? "hidden" : "flex"
                }`}
                >🛥️</span>
              </div>
            ))}
          </section>
        </div>
      </aside>
      </aside>
    </main>
  );
}
