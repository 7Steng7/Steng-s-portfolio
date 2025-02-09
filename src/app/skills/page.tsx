import React from 'react';
import { FaReact, FaNodeJs, FaAngular, FaBootstrap, FaAws, FaGit, FaDocker } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiExpress, SiJsonwebtokens, SiNestjs, SiMongodb, SiMysql, SiFirebase, SiPostman, SiTrello, SiGooglemaps } from 'react-icons/si';

export default function Aboutme() {

  const skillsData = [
    {
      title: "Frontend",
      icon: "/assets/espadaSkills.png",
      skills: [
        { name: "React", icon: <FaReact />, description: "Librería de JavaScript para interfaces interactivas." },
        { name: "Next.js", icon: <SiNextdotjs />, description: "Framework basado en React optimizado para SEO y rendimiento." },
        { name: "Tailwind", icon: <SiTailwindcss />, description: "Framework CSS para diseñar interfaces modernas y responsivas." },
        { name: "Angular", icon: <FaAngular />, description: "Framework de JavaScript para aplicaciones web dinámicas." }
      ]
    },
    {
      title: "Backend",
      icon: "/assets/timonSkills.png",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, description: "Entorno de ejecución de JavaScript del lado del servidor." },
        { name: "Express", icon: <SiExpress />, description: "Framework minimalista para la creación de APIs en Node.js." },
        { name: "JWT", icon: <SiJsonwebtokens />, description: "Autenticación basada en tokens JSON." },
        { name: "NestJS", icon: <SiNestjs />, description: "Framework escalable y modular para Node.js." }
      ]
    },
    {
      title: "Bases de datos",
      icon: "/assets/anclaSkills.png",
      skills: [
        { name: "MySQL", icon: <SiMysql />, description: "Sistema de gestión de bases de datos relacional." },
        { name: "MongoDB", icon: <SiMongodb />, description: "Base de datos NoSQL orientada a documentos." },
        { name: "Firebase", icon: <SiFirebase />, description: "Plataforma de desarrollo con base de datos en tiempo real." },
        { name: "AWS", icon: <FaAws />, description: "Servicio de computación en la nube para aplicaciones escalables." }
      ]
    },
    {
      title: "Otros Servicios",
      icon: "/assets/cofreSkills.png",
      skills: [
        { name: "Git", icon: <FaGit />, description: "Sistema de control de versiones distribuido." },
        { name: "Docker", icon: <FaDocker />, description: "Plataforma de contenedores para desarrollo y despliegue." },
        { name: "Postman", icon: <SiPostman />, description: "Herramienta para pruebas de APIs." },
        { name: "Trello", icon: <SiTrello />, description: "Plataforma de gestión de proyectos y tareas." }
      ]
    }
  ];

  return (
    <section className="flex flex-col justify-center items-center bg-darkSeaGreen rounded-lg py-16">
      <h2 className="text-3xl font-semibold text-center text-foreground mb-16">Herramientas del Capitán</h2>
      <div id="skills" className="rounded-lg flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-4 w-full md:w-5/6 lg:w-3/4">
          {skillsData.map((category, index) => (
            <div key={index} className="bg-deepNavyBlue p-6 rounded-lg shadow-md text-center">
              <img src={category.icon} alt={category.title} className="mx-auto mb-4 w-16 h-16" />
              <h3 className="text-xl font-medium text-white mb-4">{category.title}</h3>
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {category.skills.map((skill, idx) => (
                  <div 
                    key={idx} 
                    className="flex flex-col items-center group cursor-pointer"
                  >
                    {/* Ícono con animación */}
                    <div className="text-white text-5xl transition-transform transform group-hover:scale-110 duration-300">
                      {skill.icon}
                    </div>
                    
                    {/* Contenedor con altura inicial y expansión al hover/click */}
                    <div className="max-h-0 overflow-hidden transition-all duration-500 group-hover:max-h-60 group-focus:max-h-60">
                      <p className="text-white text-md mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {skill.name}
                      </p>
                      <p className="text-white text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center max-w-xs">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
