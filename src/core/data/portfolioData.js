const data = {
  name: 'Alejandro García Serrano',
  bit_me: {
    es: 'Un poco acerca de mí',
    en: 'A little about me',
  },
  info_desc: {
    es: 'Soy desarrollador full stack con unos tres años y medio de experiencia entre desarrollo y soporte técnico. Durante ese tiempo he mantenido y ampliado un CRM en producción para el sector automoción, trabajando en frontend y backend, y he dado soporte técnico de segundo nivel: analizaba y resolvía incidencias reales en un sistema en uso.\nEsa combinación es la que más valoro: entender el código lo suficiente para construir funcionalidades y entender el sistema lo suficiente para diagnosticar cuando algo falla. Me gusta reproducir los problemas de forma metódica, encontrar la causa y documentar la solución.\nTambién he dedicado tiempo a la formación técnica, enseñando a programar y revisando código de alumnos, lo que me ha obligado a explicar con claridad y a depurar con paciencia.\nActualmente profundizo en TypeScript y PostgreSQL. Me interesa especialmente diseñar aplicaciones robustas, mantenibles y seguras.',
    en: "I'm a full stack developer with about three and a half years of experience across development and technical support. Over that time I have maintained and extended a CRM in production for the automotive sector, working on both frontend and backend, and I have provided second-level technical support: analyzing and resolving real incidents in a system in use.\nThat combination is what I value most: understanding the code well enough to build features, and understanding the system well enough to diagnose when something fails. I like to reproduce problems methodically, find the root cause and document the fix.\nI've also spent time in technical training, teaching people to code and reviewing students' code, which pushed me to explain clearly and debug with patience.\nI'm currently going deeper into TypeScript and PostgreSQL. I'm especially interested in designing applications that are robust, maintainable and secure.",
  },
  more_info: {
    es: 'Más información técnica',
    en: 'More technical information',
  },
  nav_me: {
    es: 'Sobre mí',
    en: 'About me',
  },
  nav_skills: {
    es: 'Habilidades',
    en: 'Skills',
  },
  nav_proyects: {
    es: 'Proyectos',
    en: 'Projects',
  },
  skills_front_title: {
    es: 'frontEnd',
    en: 'frontEnd',
  },
  skills_front_desc: {
    es: 'Construyo interfaces web modernas con React, organizando el código en componentes reutilizables y cuidando que la aplicación funcione bien tanto en escritorio como en móvil.\nGestiono el estado de la aplicación con Redux, Zustand o TanStack Query según las necesidades del proyecto: estado global, server state o flujos más simples.\nMe importa que el resultado se sienta rápido y predecible para el usuario, y que el código sea cómodo de mantener para el siguiente que lo abra.',
    en: 'I build modern web interfaces with React, organizing code into reusable components and making sure the app works well on both desktop and mobile.\nI manage application state with Redux, Zustand or TanStack Query depending on the needs of each project: global state, server state, or simpler flows.\nI care about the result feeling fast and predictable for the user, and the code being comfortable to maintain for whoever opens it next.',
  },
  skills_front_tags:
    'HTML · CSS · JavaScript · React · Redux - Zustand - TanStack Query · Vite · Responsive Design',
  skills_back_title: {
    es: 'backEnd',
    en: 'backEnd',
  },
  skills_back_desc: {
    es: 'Construyo la lógica de servidor con Node.js y Express, diseñando APIs REST claras y bien organizadas.\nImplemento autenticación y autorización con JWT y bcrypt, gestionando usuarios, permisos y sesiones de forma segura.\nEstructuro el backend siguiendo el patrón MVC para separar rutas, controladores y lógica de negocio, lo que mantiene el código limpio y fácil de extender.\nTambién he trabajado con PHP en el mantenimiento de sistemas en producción.',
    en: "I build server-side logic with Node.js and Express, designing clean and well-organized REST APIs.\nI implement authentication and authorization with JWT and bcrypt, handling users, permissions and sessions securely.\nI structure the backend following the MVC pattern, separating routes, controllers and business logic, which keeps the code clean and easy to extend.\nI've also worked with PHP maintaining production systems.",
  },
  skills_back_tags:
    'Node.js · Express · JWT · Bcrypt · PHP · REST APIs · MVC Architecture',
  skills_bbdd_title: {
    es: 'Bases de Datos y Entorno',
    en: 'Databases & Environment',
  },
  skills_bbdd_desc: {
    es: 'Trabajo con bases de datos relacionales y no relacionales, diseñando el modelo de datos según lo que pida cada aplicación.\nTengo experiencia con MongoDB para estructuras flexibles y con MySQL para datos más estructurados; actualmente también me estoy familiarizando con PostgreSQL.\nIntegro servicios externos como Cloudinary para gestión de imágenes y archivos en producción.\nComo base del flujo de trabajo, uso Git y GitHub, junto con servidores Linux para despliegues, lo que me permite mantener proyectos estables a lo largo de su ciclo de vida.',
    en: "I work with both relational and non-relational databases, designing the data model based on what each application requires.\nI have experience with MongoDB for flexible structures and MySQL for more structured data; I'm also currently getting familiar with PostgreSQL.\nI integrate external services such as Cloudinary for image and file management in production.\nAs the base of my workflow, I use Git and GitHub, along with Linux servers for deployments, which lets me keep projects stable throughout their lifecycle.",
  },
  skills_bbdd_tags:
    'MongoDB · MySQL - PostgreSQL · Cloudinary · Git · GitHub · CI/CD · Linux Server',
  skills_support_title: {
    es: 'Soporte Técnico',
    en: 'Technical Support',
  },
  skills_support_desc: {
    es: 'Doy soporte técnico de segundo nivel sobre sistemas en producción: recibo las incidencias, reproduzco el problema de forma metódica, localizo la causa y propongo o aplico la solución.\nDocumento cada incidencia y su resolución para que el conocimiento quede disponible para el equipo y no dependa de una sola persona.\nTrabajo de forma coordinada con el equipo de desarrollo, trasladando los casos que requieren cambios de código y priorizándolos según su impacto para el usuario.',
    en: 'I provide second-level technical support on systems in production: I receive incidents, reproduce the problem methodically, locate the root cause and propose or apply the fix.\nI document each incident and its resolution so the knowledge stays available to the team and does not depend on a single person.\nI work in coordination with the development team, escalating cases that require code changes and prioritizing them by their impact on the user.',
  },
  skills_support_tags:
    'Soporte de segundo nivel · Resolución de incidencias · Análisis de causa raíz · Documentación técnica · Jira · Postman · Git · GitLab · Scrum',  
  nav_contact: {
    es: 'Contacto',
    en: 'Contact',
  },
  nav_chgs: {
    es: 'Retos de programación',
    en: "Developer's challenges",
  },
  contact_title: {
    es: '¿Hablamos?',
    en: 'Shall we talk?',
  },
  contact_description: {
    es: 'Hablemos de proyectos, retos técnicos o cualquier cosa interesante que tenga que ver con código y construir cosas.',
    en: "Let's talk about projects, technical challenges, or anything interesting that involves code and building things.",
  },
  contact_location: {
    es: 'Ubicación: Benalmádena, Málaga, Spain',
    en: 'Location: Benalmádena, Málaga, Spain',
  },
  project_prtf_title: {
    es: 'Portfolio Web personal',
    en: 'Personal Web Portfolio',
  },
  project_prtf_desc: {
    es: 'Este portfolio web personal desarrollado en React.js con gestión de estado global a través de redux, rutas dinámicas e interactividad.\nIncluye sección de habilidades, presentación profesional y enlace a repositorios, además de una sección aprendizaje y un chatBot personal',
    en: 'This personal web portfolio developed in React.js with global state management through redux, dynamic paths and interactivity.\nIncludes skills section, professional presentation and link to repositories; also include a learning section and personal chatbot',
  },
  project_prtf_tags:
    'HTML · CSS · JavaScript · React.JS · Redux · Vite · Responsive Design',
  project_prtf_link: 'https://portfolioags.arenalsoft.es/',
  project_prtf_link_gh: 'https://github.com/Alegarse/PORTFOLIO',
  project_prtf_link_desc: {
    es: 'Abrir en nueva pestaña',
    en: 'Open into new tab',
  },
  project_prtf_link_desc_gh: {
    es: 'Abrir repositorio',
    en: 'Open repository',
  },
  project_filmax_title: {
    es: 'Filmax',
    en: 'Filmax',
  },
  project_filmax_desc: {
    es: 'Filmax es una página de información de películas con distintos listados (actualidad, puntuación, etc.) y buscador por nombre.\nDesarrollada con React y TypeScript, usa Zustand para el estado del cliente y TanStack Query para la gestión del estado del servidor y caché de peticiones.',
    en: 'Filmax is a movie information website with different listings (trending, rated, etc.) and search by name.\nBuilt with React and TypeScript, it uses Zustand for client state and TanStack Query for server state management and request caching.',
  },
  project_filmax_tags:
    'HTML · CSS · JavaScript · React.TS · Zustand · TanStack Query · Vite',
  project_filmax_link: 'https://filmax.arenalsoft.es/',
  project_filmax_link_gh: 'https://github.com/Alegarse/Filmax',
  project_filmax_link_desc: {
    es: 'Abrir en nueva pestaña',
    en: 'Open into new tab',
  },
  project_filmax_link_desc_gh: {
    es: 'Abrir repositorio',
    en: 'Open repository',
  },
  project_apib_title: {
    es: 'Api REST',
    en: 'Restfull API',
  },
  project_apib_desc: {
    es: 'API REST para gestionar un catálogo de películas con usuarios autenticados. Permite registrarse, iniciar sesión, explorar películas, dejar comentarios y guardar favoritos.',
    en: 'REST API to manage a movie catalog with user authentication. Supports sign up, log in, browsing movies, leaving comments and saving favourites.',
  },
  project_apib_tags: 'NodeJS · Express · MongoDB · Mongoose · JWT · bcrypt',
  project_apib_link:
    'https://gist.github.com/Alegarse/312ccd79f59c3d384924276439613445',
  project_apib_link_desc: {
    es: 'Abrir repositorio en nueva pestaña',
    en: 'Open repo into new tab',
  },
};

export default data;
