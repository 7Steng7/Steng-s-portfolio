import React, { useRef } from 'react';

export default function Aboutme() {

  return (
    <section id="skills" className="bg-deepNavyBlue py-16 rounded-lg">
      <h2 className="text-3xl font-semibold text-center text-foreground mb-8">Herramientas del Capitán</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4">
        <div className="skill-item bg-darkSeaGreen p-6 rounded-lg shadow-md text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
          <img src="/assets/espadaSkills.png" alt="Frontend" className="mx-auto mb-4 w-16 h-16" />
          <h3 className="text-xl font-medium text-white mb-2">Frontend</h3>
          <p className="text-white">React, Next.js, HTML, CSS, Tailwind, Angular, Bootstrap</p>
        </div>
        <div className="skill-item bg-darkSeaGreen p-6 rounded-lg shadow-md text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
          <img src="/assets/timonSkills.png" alt="Backend" className="mx-auto mb-4 w-16 h-16" />
          <h3 className="text-xl font-medium text-white mb-2">Backend</h3>
          <p className="text-white">Node.js, Express, JWT, NestJS, API</p>
        </div>
        <div className="skill-item bg-darkSeaGreen p-6 rounded-lg shadow-md text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
          <img src="/assets/anclaSkills.png" alt="Servicios y Bases de Datos" className="mx-auto mb-4 w-16 h-16" />
          <h3 className="text-xl font-medium text-white mb-2">Otros Servicios</h3>
          <p className="text-white">AWS - EC2, RDS, S3, Route 53, MySQL, MongoDB</p>
        </div>
      </div>
    </section>
  );
}
