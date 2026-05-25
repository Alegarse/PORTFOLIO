// Datos de conversación fijos para el Menú
export const speech_ES = {
  start: {
    text: `¡Hola! Estoy aquí para ayudarte a conocerme.
Elige una opción:
            
            1) Acerca de mi
            2) Formación
            3) Experiencia
            4) Inquietudes
            5) Hobbies
            6) Contacto
            
Escribe un número (1-6) o una pregunta....`,
    next: {
      1: 'about',
      2: 'stds',
      3: 'exp',
      4: 'mind',
      5: 'hobbys',
      6: 'contact',
    },
  },

  exit: {
    text: 'Escribe 0 para volver al menú.',
  },
  about: {
    text: `Soy un desarrollador full stack en constante evolución, apasionado por la tecnología y la creación de soluciones digitales.
Actualmente estoy ampliando formación en diversas tecnologías como Python, JavaScript, React, Node.js, MongoDB, SQL y PHP, con el objetivo de construir aplicaciones web eficientes, seguras y escalables`,
  },
  stds: {
    text: `BootCamp Full Stack,
Grado Superior Desarrollador aplicaciones multiplataforma,
Cursos relacionados programación`,
  },
  exp: {
    text: `Docente de programación Full Stack,
Jefe de equipo para desarrollo Full Stack,
Desarrollo de aplicaciónes Android Nativo`,
  },
  mind: {
    text: `Mi enfoque se centra en el aprendizaje continuo y la búsqueda de la optimización, con especial interés en el desarrollo backend, la integración de servicios y la automatización de procesos.
Además, estoy aprendiendo a desplegar proyectos en servidores propios con Ubuntu y gestionando dominios, lo que me permite ofrecer soluciones completas desde la programación hasta la infraestructura`,
  },
  hobbys: {
    text: `Senderismo, cine, lectura, viajar, playa, un poco de todo.`,
  },
  contact: {
    email: 'agscm2@mail.com',
    phone: '+34644321368',
    linkedin: 'https://www.linkedin.com/in/alegarse',
  },
};

export const speech_EN = {
  start: {
    text: `Hi! I'm here to help you get to know me.
Choose an option:

            1) About me
            2) Education
            3) Experience
            4) Interests
            5) Hobbies
            6) Contact

Type a number (1–6) or ask a question...`,
    next: {
      1: 'about',
      2: 'stds',
      3: 'exp',
      4: 'mind',
      5: 'hobbys',
      6: 'contact',
    },
  },

  exit: {
    text: 'Type 0 to return to the main menu.',
  },

  about: {
    text: `I am a full stack developer in constant evolution, passionate about technology and creating digital solutions.
I am currently expanding my training in various technologies such as Python, JavaScript, React, Node.js, MongoDB, SQL, and PHP, with the goal of building efficient, secure, and scalable web applications.`,
  },

  stds: {
    text: `Full Stack Bootcamp,
Higher Degree in Multiplatform Application Development,
Programming-related courses.`,
  },

  exp: {
    text: `Full Stack Programming Instructor,
Team Lead for Full Stack Development,
Native Android Application Development.`,
  },

  mind: {
    text: `My approach focuses on continuous learning and the pursuit of optimization, with a strong interest in backend development, service integration, and process automation.
In addition, I am learning how to deploy projects on my own Ubuntu servers and manage domains, allowing me to offer complete solutions from development to infrastructure.`,
  },

  hobbys: {
    text: `Hiking, cinema, reading, traveling, the beach — a bit of everything.`,
  },

  contact: {
    email: 'agscm2@mail.com',
    phone: '+34644321368',
    linkedin: 'https://www.linkedin.com/in/alegarse',
  },
};

export const chatBot_data = {
  icon_title: {
    es: "Haz click aquí para recibir más información",
    en: "Click here to obtain more info"
  }
}
