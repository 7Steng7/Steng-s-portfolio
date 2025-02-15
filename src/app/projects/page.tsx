import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Aboutme() {
  return (
    <section className="flex flex-col justify-center items-center rounded-lg">
      <div className="mt-8 text-center w-full max-w-2xl">
        <h2 className="text-3xl font-semibold mb-4">Experiencia Laboral</h2>
        <h3 className="text-lg font-medium">Bicycle Capital</h3>
        <p className="text-white text-lg">Desarrollador FullStack</p>
        <p className="text-white mb-5 text-lg">Septiembre 2022 - Febrero 2025</p>
        <div className="p-6 rounded-lg shadow-md mt-4 transform transition-all duration-300 hover:scale-105 bg-darkSeaGreen">
          <h2 className="text-2xl font-semibold mb-4">Responsabilidades y Logros</h2>
          <div className="text-left rounded-lg">
            <h3 className="text-xl font-medium mb-2">Responsabilidades:</h3>
            <ul className="list-disc list-inside text-white mb-4 text-lg">
              <li>Gestión y mantenimiento de APIs, desarrollo de interfaces en <strong>React Native</strong> y creación de un dashboard en <strong>Angular</strong>.</li>
              <li>Configuración y administración de instancias <strong>EC2</strong>, gestión de DNS con <strong>Route53</strong> y balanceadores de carga.</li>
              <li>Implementación de autenticación con <strong>JWT</strong> en APIs construidas con <strong>Node.js</strong> y <strong>Nest.js</strong>.</li>
              <li>Colaboración en un equipo pequeño, liderando soluciones técnicas y participando en la toma de decisiones.</li>
            </ul>

            <h3 className="text-xl font-medium mb-2">Logros Destacados:</h3>
            <ul className="list-disc list-inside text-white text-lg">
              <li>Migración de la base de datos a <strong>MongoDB Atlas</strong>, implementando clusters de respaldo y mejorando el rendimiento de la instancia EC2.</li>
              <li>Diseño de endpoints paginados que redujeron el tiempo de carga de la aplicación móvil.</li>
              <li>Desarrollo de una aplicación móvil, un dashboard y APIs robustas, asegurando su sincronización y eficiencia.</li>
              <li>Reconocimiento constante por parte de colegas y superiores por la calidad del trabajo y la resolución efectiva de problemas.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full h-auto rounded-lg shadow-md flex flex-col justify-center items-center py-16">
        <h2 className="text-3xl font-semibold mb-4">Proyectos</h2>
        <div className="w-full max-w-4xl flex flex-col md:flex-row items-center gap-8 p-6">
      <div className="relative w-60 h-60 transform transition-all duration-300 group group-hover:scale-110">
        <img  
          src="/assets/ToDoList.png" 
          alt="ToDoList Project" 
          className="w-full h-full rounded-lg shadow-md text-center transition-all duration-300 filter"
        />
        <div className="absolute inset-0 bg-darkSeaGreen opacity-40 mix-blend-multiply rounded-lg transition-all duration-300 group-hover:opacity-0"></div>
        <div className="absolute bottom-2 right-2 flex space-x-2">
          <a 
            href="https://github.com/7Steng7/todolist" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all duration-300"
          >
            <FaGithub size={18} />
          </a>
          <a 
            href="https://todolist-steng.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all duration-300"
          >
            <FaExternalLinkAlt size={18} />
          </a>
        </div>
      </div>
      <div className="flex-1">
        <h2 className="text-2xl font-semibold mb-4">ToDoList</h2>
        <p className="text-white mb-4 text-lg">
          ToDoList es una aplicación sencilla y efectiva para gestionar tus tareas diarias. Esta app te permite crear, editar y eliminar tareas, así como clasificarlas en categorías y marcar su nivel de urgencia e importancia, siguiendo el enfoque de la Matriz de Eisenhower. Además, utiliza localStorage para guardar tus datos, lo que permite que tus tareas se mantengan disponibles incluso después de cerrar el navegador.
        </p>
        <h3 className="text-xl font-medium mb-2">Tecnologías Utilizadas:</h3>
        <div className="flex flex-wrap gap-2">
          <span className="bg-darkSeaGreen text-white px-3 py-1 rounded-full text-sm">React</span>
          <span className="bg-darkSeaGreen text-white px-3 py-1 rounded-full text-sm">Html5</span>
          <span className="bg-darkSeaGreen text-white px-3 py-1 rounded-full text-sm">Css3</span>
        </div>
      </div>
    </div>
        </div>
    </section>
  );
}