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
  <div className="w-3xl h-auto shadow-md flex flex-col items-center justify-center py-16 bg-deepNavyBlue">
      <h1 className="text-3xl font-semibold text-white-900 mb-4">Bitacora del capitán</h1>
      <div className='w-5/6 md:5/6 lg:w-5/6'>
        <p className="text-foreground text-lg mb-6 w-full mt-4 mb">
          Durante mi travesía y aventuras como capitán del desarrollo web, he
          explorado diversos mares tecnológicos, acumulando experiencias valiosas
          y superando desafiantes tormentas. Cada logro no es más que una estrella
          en mi mapa, marcando las lecciones aprendidas y las destrezas
          adquiridas. Algunas de estas expediciones incluyen:
        </p>
      </div>
      <section className="w-4/5 md:w-full md:flex md:flex-row md:justify-center md:items-center lg:w-5/6 lg:justify-evenly mb-16">
      <div className="relative flex justify-center items-center">
        <img 
          src="/assets/StengPirata.jpg" 
          alt="About me" 
          className="w-40 h-auto rounded-lg md:w-full md:ml-10 lg:w-60 fade-inward"
        />
      </div>
      <div className='lg:w-3/5'>
        <div className="bg-darkSeaGreen text-white p-6 rounded-2xl shadow-lg w-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg md:m-10 lg:w-5/6">
          <h2 className="text-xl font-semibold">Experiencia</h2> 
          <div className="mt-2 flex items-center">
            <p className="ml-2 flex items-center">
            Actualmente cuento con 3+ años de experiencia en desarrollo y gestión de proyectos tecnológicos. Me especializo en desarrollo fullstack y aplicaciones móviles.
            <span className="ml-2 text-3xl animate-floating">⛵</span>
            </p>
          </div>
        </div>
        <div className="bg-darkSeaGreen text-white p-6 rounded-2xl shadow-lg mt-10 w-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg md:m-10 lg:w-5/6">
          <h2 className="text-xl font-semibold">Tecnologías más utilizadas</h2>

          <div className="mt-4">
            <h3 className="text-lg font-medium">🖥️ Frontend</h3>
            <p className="ml-4">React, Angular, Next.js, Tailwind CSS, Bootstrap, Material UI</p>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-medium">⚙️ Backend</h3>
            <p className="ml-4">Node.js, Express, NestJS, JWT, REST APIs</p>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-medium">💾 Bases de datos</h3>
            <p className="ml-4">MongoDB, MySQL, Firebase, AWS(RDS)</p>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-medium">📱 Desarrollo Mobile</h3>
            <p className="ml-4">React Native (JavaScript/TypeScript)</p>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-medium">🛠️ Herramientas y Otros</h3>
            <p className="ml-4">AWS, Firebase, Git, Postman, Trello, Docker, CI/CD, Google Maps API</p>
          </div>
        </div>
      </div>
      </section>
      <section className="w-5/6">
      <h1 className="text-3xl font-semibold text-white-900 mb-4 text-center relative">
        <span className="absolute bottom-0 text-6xl opacity-30 animate-pulse z-0">⚓</span>
        <span className="relative z-10">Diario de viaje: Islas descubiertas</span>
      </h1>
      <div className="min-h-screen">
        <div className="max-w-3xl mx-auto lg:max-w-6xl pt-16">
          <div>
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`flex ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`relative bg-center p-6 max-w-md w-full bg-no-repeat ${
                    index % 2 === 0 ? "animate-floatingLeft" : "animate-floatingRight"
                  }`}
                  style={{ backgroundImage: "url('/assets/isla.svg')" }}
                >
                  <div className="bg-darkSeaGreen bg-opacity-80 p-4 rounded-lg transform transition-all duration-300 hover:scale-105">
                    <h3 className="text-lg font-bold flex items-center text-yellow-400">
                      {index % 2 === 0 ? (
                        <>
                          <span className="mr-2">★</span>
                          {exp.title}
                        </>
                      ) : (
                        <>
                          <span className="ml-auto">{exp.title}</span>
                          <span className="ml-2">★</span>
                        </>
                      )}
                    </h3>
                    <p className="text-white-200 mt-2">
                      {index % 2 === 0 ? (
                        <span className="text-left">{exp.description}</span>
                      ) : (
                        <span className="text-right">{exp.description}</span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </section>
    </div>
  );
}
