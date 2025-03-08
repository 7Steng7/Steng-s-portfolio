import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Bubbles from '../animations/bubbles';

export default function Aboutme() {

  const projectsData = {
    "projects": [
      {
        "title": "ToDoList",
        "description": "ToDoList es una aplicación sencilla y efectiva para gestionar tus tareas diarias. Esta app te permite crear, editar y eliminar tareas, así como clasificarlas en categorías y marcar su nivel de urgencia e importancia, siguiendo el enfoque de la Matriz de Eisenhower. Además, utiliza localStorage para guardar tus datos, lo que permite que tus tareas se mantengan disponibles incluso después de cerrar el navegador.",
        "technologies": ["React", "Html5", "Css3", "localStorage"],
        "image": "/assets/ToDoList.png",
        "github": "https://github.com/7Steng7/todolist",
        "deploy": "https://todolist-steng.vercel.app"
      },
      {
        "title": "API blog",
        "description": "Desarrollé una API RESTful para gestionar publicaciones de blog, usuarios y comentarios utilizando NestJS y MongoDB. La API incluye autenticación de usuarios, validación de datos, seguridad con contraseñas hasheadas y documentación automática con Swagger. Este proyecto demuestra mi habilidad para construir APIs escalables, modulares y bien documentadas. Además, generé una instancia en Google Cloud Platform (GCP) para desplegar la API, lo que me permitió gestionar infraestructura en la nube, configurar redes, y asegurar el despliegue de aplicaciones en un entorno profesional.",
        "technologies": ["NestJS", "MongoDB", "Mongoose", "API Integration", "Swagger", 'Bcrypt', "Jest", "GCP"],
        "image": "/assets/blogApi.png",
        "github": "https://github.com/7Steng7/stengsBlogAPI"
      }
    ]
  }

  return (
    <section className="flex flex-col justify-center items-center rounded-lg relative">
      <div className='absolute inset-0 z-0'>
          <Bubbles />
      </div>
      <div className="mt-8 text-center w-full max-w-2xl">
        <h2 className="text-3xl font-semibold mb-4 relative z-10">Experiencia Laboral</h2>
        <h3 className="text-lg md:text-xl font-medium relative z-10">Bicycle Capital</h3>
        <p className="text-white text-lg md:text-xl relative z-10">Desarrollador FullStack</p>
        <p className="text-white mb-5 text-lg md:text-xl relative z-10">Septiembre 2022 - Febrero 2025</p>
        <div className="p-6 rounded-lg shadow-md mt-4 transform transition-all duration-300 hover:scale-105 bg-darkSeaGreen">
          <h2 className="text-2xl font-semibold mb-4 relative z-10">Responsabilidades y Logros</h2>
          <div className="text-left rounded-lg">
            <h3 className="text-xl font-medium mb-2 relative z-10">Responsabilidades:</h3>
            <ul className="list-disc list-inside text-white mb-4 text-lg md:text-xl">
              <li>Gestión y mantenimiento de APIs, desarrollo de interfaces en <strong>React Native</strong> y creación de un dashboard en <strong>Angular</strong>.</li>
              <li>Configuración y administración de instancias <strong>EC2</strong>, gestión de DNS con <strong>Route53</strong> y balanceadores de carga.</li>
              <li>Implementación de autenticación con <strong>JWT</strong> en APIs construidas con <strong>Node.js</strong> y <strong>Nest.js</strong>.</li>
              <li>Colaboración en un equipo pequeño, liderando soluciones técnicas y participando en la toma de decisiones.</li>
            </ul>

            <h3 className="text-xl font-medium mb-2">Logros Destacados:</h3>
            <ul className="list-disc list-inside text-white text-lg md:text-xl">
              <li>Migración de la base de datos a <strong>MongoDB Atlas</strong>, implementando clusters de respaldo y mejorando el rendimiento de la instancia EC2.</li>
              <li>Diseño de endpoints paginados que redujeron el tiempo de carga de la aplicación móvil.</li>
              <li>Desarrollo de una aplicación móvil, un dashboard y APIs robustas, asegurando su sincronización y eficiencia.</li>
              <li>Reconocimiento constante por parte de colegas y superiores por la calidad del trabajo y la resolución efectiva de problemas.</li>
            </ul>
          </div>
        </div>
      </div>
    <div className="w-full h-auto rounded-lg shadow-md flex flex-col justify-center items-center py-16 relative z-10">
      <h2 className="text-3xl font-semibold mb-4">Proyectos</h2>
      <div className="w-full max-w-4xl mx-auto p-6">
      {projectsData.projects.map((project, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-center gap-8 mb-12"
        >
          {/* Imagen a la izquierda con iconos superpuestos */}
          <div className="w-full md:w-60 flex-shrink-0 relative flex justify-center">
            <div className="relative w-60 h-60 transform transition-all duration-300 group group-hover:scale-110 hover:rotate-6">
              <img
                src={project.image}
                alt={`${project.title} Project`}
                className="w-full h-full rounded-lg shadow-md text-center transition-all duration-300 filter"
              />
              <div className="absolute inset-0 bg-deepNavyBlue opacity-60 mix-blend-multiply rounded-lg transition-all duration-300 group-hover:opacity-0"></div>
              {/* Iconos superpuestos en la esquina inferior derecha */}
              <div className="absolute bottom-2 right-2 flex space-x-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all duration-300"
                >
                  <FaGithub size={18} />
                </a>
                {project.deploy && (
                  <a
                    href={project.deploy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all duration-300"
                  >
                    <FaExternalLinkAlt size={18} />
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">{project.title}</h2>
            <p className="text-white text-lg md:text-xl">{project.description}</p>
            <h3 className="text-xl font-medium">Tecnologías Utilizadas:</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="bg-darkSeaGreen text-white px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
    </section>
  );
}