
import Projects from "../page";

const frontendProjects = [
    {
        "title": "ToDoList",
        "description": "ToDoList es una aplicación sencilla y efectiva para gestionar tus tareas diarias. Esta app te permite crear, editar y eliminar tareas, así como clasificarlas en categorías y marcar su nivel de urgencia e importancia, siguiendo el enfoque de la Matriz de Eisenhower. Además, utiliza localStorage para guardar tus datos, lo que permite que tus tareas se mantengan disponibles incluso después de cerrar el navegador.",
        "technologies": ["React", "Html5", "Css3", "localStorage"],
        "image": "/assets/ToDoList.png",
        "github": "https://github.com/7Steng7/todolist",
        "deploy": "https://todolist-steng.vercel.app"
    },
    {
        "title": "Frontend Crud React",
        "description": "Aplicativo web para gestionar usuarios con funcionalidades CRUD, grilla paginada y diseño responsive.",
        "technologies": ["React", "Tailwind", "typescript", "vite", "API Integration"],
        "image": "/assets/frontendCrud.png",
        "github": "https://github.com/7Steng7/CrudFrontend",
        "deploy": "https://crud-frontend-mocha.vercel.app"
    },
    {
        "title": "Login/Crud Angular",
        "description": "Aplicación web de gestión de proyectos y tareas desarrollada con Angular. Incluye autenticación simulada, operaciones CRUD, formularios reactivos, lazy loading, protección de rutas y consumo de APIs REST.",
        "technologies": ["Angular", "AngularMaterial", "localStorage", "Crypto-js", "API Integration"],
        "image": "/assets/ListAngular.png",
        "github": "https://github.com/7Steng7/ProjectsAndTasks",
        "deploy": "https://projects-and-tasks-rho.vercel.app"
    }
];

export default function FrontendPage() {
  return <Projects projects={frontendProjects} title="Proyectos Frontend" />;
}
