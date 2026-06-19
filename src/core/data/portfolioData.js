const data = {
  name: 'Alejandro García Serrano',
  bit_me: {
    es: 'Un poco acerca de mí',
    en: 'A little about me',
  },
  info_desc: {
    es: 'Soy desarrollador full stack y actualmente trabajo como formador técnico especializado en desarrollo. Antes de esto, trabajé tres años y medio como desarrollador Full Stack manteniendo un CRM en el sector automoción.\nMe apasiona el desarrollo de aplicaciones, la creación de proyectos de principio a fin y el trabajo en equipo bajo metodologías ágiles.\nEn mi día a día combino enseñar a programar desde cero con seguir aprendiendo yo: actualmente profundizo en TypeScript, PostgreSQL y ciberseguridad, esta última a través de un bootcamp en el que acabo de empezar.\nMe interesa especialmente entender cómo se diseñan aplicaciones robustas, mantenibles y seguras.',
    en: "I'm a full stack developer currently working as a technical instructor specialized in software development. Before this, I spent three and a half years as a Full Stack Developer maintaining a CRM in the automotive sector.\nI'm passionate about building applications end-to-end, project creation and teamwork under agile methodologies.\nMy day-to-day combines teaching others to code from scratch with continuing to learn myself: I'm currently going deeper into TypeScript, PostgreSQL and cybersecurity — the latter through a bootcamp I'm just starting.\nI'm especially interested in understanding how to design robust, maintainable and secure applications.",
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
  project_prtf_link_desc: {
    es: 'Abrir en nueva pestaña',
    en: 'Open into new tab',
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
