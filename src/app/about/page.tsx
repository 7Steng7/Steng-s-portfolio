import React, { useRef } from 'react';

export default function Aboutme() {

  return (
    <div className="w-3xl h-auto rounded-lg shadow-md flex flex-col items-center justify-center bg-deepNavyBlue py-16 rounded-lg">
      <h1 className="text-2xl font-semibold text-white-900 mb-4">Bitacora del capitán</h1>
      <img src="/assets/StengPirata.jpg" alt="About me" className="w-40 h-auto rounded-lg mb-6" />
      <section style={{ width : '80%' }}>
        <ul className="mt-4 space-y-4">
          <li className="text-white-700">
            <strong className="font-medium">Años de experiencia:</strong> <span className="flex items-center">3+ años en desarrollo y gestión de proyectos tecnológicos <span className="ml-2">⛵</span></span>
          </li>
          <li className="text-white-700">
            <strong className="font-medium">Tecnologías dominadas:</strong> <span className="flex items-center">React, Angular, Node.js, MongoDB, AWS, REST APIs <span className="ml-2">⚙️</span></span>
          </li>
          <li className="text-white-700">
            <strong className="font-medium">Aventuras y aprendizajes en el viaje:</strong>
            <p className="mt-2 text-white-700">Durante mi travesía como capitán del desarrollo web, he explorado diversos mares tecnológicos, acumulando experiencias valiosas y superando desafiantes tormentas. Cada logro no es más que una estrella en mi mapa, marcando las lecciones aprendidas y las destrezas adquiridas. Algunas de estas expediciones incluyen:</p>
            <ul className="ml-4 mt-2 list-disc list-inside space-y-2">
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">★</span>
                <span>Levantamiento de requerimientos y desarrollo de módulos: Diseño y construcción de dashboards, aplicaciones interactivas y APIs para ecosistemas integrados.</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">★</span>
                <span>App de movilidad sostenible: Desarrollo de una app interactiva en React Native, con un dashboard administrativo y de métricas en Angular.</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">★</span>
                <span>APIs REST escalables: Diseño y configuración de APIs con Node.js, utilizando Express, servicios Cron para peticiones semanales, y JWT para autenticación segura.</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">★</span>
                <span>Implementación de AWS: Configuración de instancias EC2, administración de bases de datos (RDS), integración de Route53, balanceadores de carga, y buckets S3.</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">★</span>
                <span>Bases de datos avanzadas: Diseño y administración de bases de datos en MongoDB con Atlas, optimizando el almacenamiento y manejo de datos.</span>
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </div>
  );
}
