import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { ProjectsListProps } from '../types/Project';
import Waves from '../animations/Waves';

export default function ProjectsList({ projects , title }: ProjectsListProps) {
return (
    <div className="w-full h-auto rounded-lg shadow-md flex flex-col justify-center items-center py-16 relative z-10">
    <Waves />
      {title && <h2 className="text-3xl font-semibold pt-12 mb-8">{title}</h2>}

      <div className="w-full p-6 flex flex-col md:flex-row flex-wrap justify-around">
        {projects?.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center gap-8 mb-12 w-full xl:w-2/5"
          >
            <div className="w-full md:w-60 flex-shrink-0 relative flex justify-center">
              <div className="relative w-60 h-60 transform transition-all duration-300 group hover:scale-105 hover:rotate-2">
                <img
                  src={project.image}
                  alt={`${project.title} Project`}
                  className="w-full h-full rounded-lg shadow-md transition-all"
                />
                <div className="absolute inset-0 bg-deepNavyBlue opacity-60 mix-blend-multiply rounded-lg transition-all duration-300 group-hover:opacity-0"></div>
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
  );
}