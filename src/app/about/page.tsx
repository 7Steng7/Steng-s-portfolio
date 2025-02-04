import React, { useRef } from 'react';

export default function Aboutme() {

  const experiences = [
    {
      title: "Levantamiento de requerimientos y desarrollo de módulos",
      description:
        "Diseño y construcción de dashboards, aplicaciones interactivas y APIs para ecosistemas integrados.",
    },
    {
      title: "App de movilidad sostenible",
      description:
        "Desarrollo de una app interactiva en React Native, con un dashboard administrativo y de métricas en Angular.",
    },
    {
      title: "APIs REST escalables",
      description:
        "Diseño y configuración de APIs con Node.js, utilizando Express, servicios Cron para peticiones semanales, y JWT para autenticación segura.",
    },
    {
      title: "Implementación de AWS",
      description:
        "Configuración de instancias EC2, administración de bases de datos (RDS), integración de Route53, balanceadores de carga, y buckets S3.",
    },
    {
      title: "Bases de datos avanzadas",
      description:
        "Diseño y administración de bases de datos en MongoDB con Atlas, optimizando el almacenamiento y manejo de datos.",
    },
  ];

  return (
    <div className="w-3xl h-auto rounded-lg shadow-md flex flex-col items-center justify-center bg-deepNavyBlue py-16 rounded-lg">
      <h1 className="text-3xl font-semibold text-white-900 mb-4">Bitacora del capitán</h1>
      <section className="w-4/5 md:flex md:flex-row md:justify-center md:items-center lg:w-1/2">
      <div className='md:w-1/2 flex flex-col justify-center items-center'>
        <img src="/assets/StengPirata.jpg" alt="About me" className="w-40 h-auto rounded-lg mb-6 md:mb-0 md:w-full md:ml-10 lg:w-60" />
      </div>
      <div>
        <div className="bg-darkSeaGreen text-white p-6 rounded-2xl shadow-lg w-md md:m-10 lg:w-5/6">
          <h3 className="text-xl font-semibold">Experiencia</h3>
          <div className="mt-2 flex items-center">
            <span className="ml-2 flex items-center">
              Actualmente cuento con 3+ años en desarrollo y gestión de proyectos tecnológicos
              <span className="ml-2">⛵</span>
            </span>
          </div>
        </div>
        <div className="bg-darkSeaGreen text-white p-6 rounded-2xl shadow-lg mt-10 w-md md:m-10 lg:w-5/6">
          <h3 className="text-xl font-semibold">Tecnologías dominadas</h3>
          <div className="mt-2 flex items-center">
            <span className="ml-2">⚙️</span>
            <span className="ml-2 flex items-center">
            React, Angular, Node.js, MongoDB, AWS, REST APIs
            </span>
          </div>
        </div>
      </div>
        </section>
        <section className="w-5/6">
        <div className="max-w-3xl mx-auto">
          <p className="text-foreground text-lg mb-6 w-full mt-4">
            Durante mi travesía y aventuras como capitán del desarrollo web, he
            explorado diversos mares tecnológicos, acumulando experiencias valiosas
            y superando desafiantes tormentas. Cada logro no es más que una estrella
            en mi mapa, marcando las lecciones aprendidas y las destrezas
            adquiridas. Algunas de estas expediciones incluyen:
          </p>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`flex ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div className="bg-neutralBlue text-white p-4 rounded-2xl shadow-lg max-w-md w-full">
                  <h3 className="text-lg font-bold flex items-center">
                    {/* Cambia la posición de la estrella */}
                    {index % 2 === 0 ? (
                      <>
                        <span className="text-yellow-400 mr-2">★</span>
                        {exp.title}
                      </>
                    ) : (
                      <>
                        <span className="ml-auto">{exp.title}</span>
                        <span className="text-yellow-400 ml-2">★</span>
                      </>
                    )}
                  </h3>
                  <p className="text-gray-300 mt-2">
                    {/* Cambia la alineación del texto */}
                    {index % 2 === 0 ? (
                      <span className="text-left">{exp.description}</span>
                    ) : (
                      <span className="text-right">{exp.description}</span>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
