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
    text: `Soy desarrollador full stack y formador técnico en Málaga, con unos tres años y medio de experiencia entre desarrollo y soporte técnico.
Mi día a día gira en torno a JavaScript, React, Node.js, MongoDB y MySQL, tanto construyendo aplicaciones web como enseñando a otros a programar.
Actualmente profundizo en TypeScript y PostgreSQL, y aprendo a desplegar proyectos en servidores Linux para cubrir todo el ciclo de un proyecto.`,
  },
  stds: {
    text: `Programa Profesional en Desarrollo Web + Aplicaciones Móviles (Codespace Academy),
Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM),
Formación continua en programación, metodologías ágiles e IA.`,
  },
  exp: {
    text: `Formador técnico de desarrollo full stack,
Desarrollador full stack y soporte técnico de segundo nivel en un CRM en producción del sector automoción,
Desarrollo Android nativo con APIs REST (freelance).`,
  },
  mind: {
    text: `Me atrae especialmente el lado backend del desarrollo: diseñar APIs claras, integrar servicios y automatizar lo que se puede automatizar.
El soporte técnico me ha enseñado a mirar el sistema completo: cuando algo falla en producción, me interesa entender la causa y evitar que vuelva a pasar.
El rendimiento y la fiabilidad de las aplicaciones en producción son los terrenos donde quiero seguir profundizando los próximos años.`,
  },
  hobbys: {
    text: `Senderismo, cine, lectura, viajar, playa, un poco de todo.`,
  },
  contact: {
    email: 'agscm2@gmail.com',
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
    text: `I'm a full stack developer and tech educator based in Málaga, Spain, with about three and a half years of experience across development and technical support.
My day-to-day revolves around JavaScript, React, Node.js, MongoDB and MySQL, both building web applications and teaching others to code.
I'm currently going deeper into TypeScript and PostgreSQL, and learning to deploy projects on Linux servers so I can cover the full cycle of a project.`,
  },
  stds: {
    text: `Professional Program in Web and Mobile Application Development (Codespace Academy),
Advanced Vocational Diploma in Multi-platform Application Development (DAM),
Ongoing training in programming, agile methodologies and AI.`,
  },
  exp: {
    text: `Full Stack Development Instructor,
Full Stack Developer and second-level technical support on a CRM in production in the automotive sector,
Native Android development with REST APIs (freelance).`,
  },
  mind: {
    text: `I'm especially drawn to the backend side of development: designing clean APIs, integrating services and automating whatever can be automated.
Technical support has taught me to look at the whole system: when something fails in production, I want to understand the root cause and make sure it doesn't happen again.
Performance and reliability of applications in production are the areas where I want to keep going deeper over the next few years.`,
  },

  hobbys: {
    text: `Hiking, cinema, reading, traveling, the beach — a bit of everything.`,
  },

  contact: {
    email: 'agscm2@gmail.com',
    phone: '+34644321368',
    linkedin: 'https://www.linkedin.com/in/alegarse',
  },
};

export const chatBot_data = {
  icon_title: {
    es: 'Haz click aquí para recibir más información',
    en: 'Click here to obtain more info',
  },
  ppal_title: {
    es: 'Asistente Portfolio',
    en: 'Portfolio Help',
  },
  scnd_title: {
    es: 'Respuestas rápidas',
    en: 'Quick answers',
  },
  send_btn: {
    es: 'Enviar',
    en: 'Send',
  },
  plhldr_input: {
    es: 'Escribe un número (1-6) o una pregunta...',
    en: 'Write a number (1-6) or a question...',
  },
};
