
import ProjectsList from "../ProjectList";

const backendProjects = [
    {
        "title": "API blog",
        "description": "Desarrollé una API RESTful para gestionar publicaciones de blog, usuarios y comentarios utilizando NestJS y MongoDB. La API incluye autenticación de usuarios, validación de datos, seguridad con contraseñas hasheadas y documentación automática con Swagger. Además, generé una instancia en Google Cloud Platform (GCP) para desplegar la API, lo que me permitió gestionar infraestructura en la nube, configurar redes, y asegurar el despliegue de aplicaciones en un entorno profesional.",
        "technologies": ["NestJS", "MongoDB", "Mongoose", "API Integration", "Swagger", 'Bcrypt', "Jest", "GCP"],
        "image": "/assets/blogApi.png",
        "github": "https://github.com/7Steng7/stengsBlogAPI"
    },
    {
        "title": "API JWT-Token-Refresh",
        "description": "Este proyecto es una API REST desarrollada con NestJS y Node.js, utilizando MongoDB como base de datos. Implementa un sistema de autenticación con JWT, proporcionados por un sistema de login, gestión de usuarios y recuperación de contraseña mediante correo electrónico.",
        "technologies": ["NestJS", "MongoDB", "Mongoose", "API Integration", "Swagger", 'JWT', 'Nodemailer'],
        "image": "/assets/tokenRefresh.png",
        "github": "https://github.com/7Steng7/Nestjs-token-refresh"
    },
    {
        "title": "API Movies",
        "description": "API Rest para gestión de películas y usuarios. Desarrollada en Node.js y Express, con MariaDB. Incluye creación de usuarios, películas, filtrado, paginación, y gestión de películas vistas. Además de documentación en Postman y modelo relacional.",
        "technologies": ["Nodejs", "Express", "Sequalize", "MariaDB", "Postman", 'ExpressValidation'],
        "image": "/assets/apiMovies.png",
        "github": "https://github.com/7Steng7/Express-Movies"
    },
];

export default function FrontendPage() {
  return <ProjectsList projects={backendProjects} title="Proyectos Backend" />;
}
