export const challengesData_EN = {
  html: {
    title: 'HTML',
    description: 'Markup language for structuring web content',
    color: colours.html,
    challenges: [
      {
        id: 'html-1',
        title: 'Basic HTML5 Structure',
        level: 'Beginner',
        description:
          'Create the basic structure of an HTML5 document with all the necessary semantic tags.',
        targets: [
          'Declaration DOCTYPE',
          'Elements <html>, <head>, <body>',
          'Metadata (charset, viewport, title)',
          'Semantic labels (<header>, <nav>, <main>, <section>, <footer>)'
        ],
        initialCode: `<!DOCTYPE html>
<html lang="es">
<head>
  <!-- Your code here -->
</head>
<body>
  <!-- Your code here -->
</body>
</html>`,
        solution: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My fiers web</title>
</head>
<body>
  <header>
    <h1>Welcome to my Web</h1>
  </header>
  <nav>
    <ul>
      <li><a href="#init">Home</a></li>
      <li><a href="#about">About me</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
  <main>
    <section id="init">
      <h2>Init</h2>
      <p>thiw is my first web page with semantic HTML5.</p>
    </section>
  </main>
  <footer>
    <p>&copy; 2024 My Portfolio</p>
  </footer>
</body>
</html>`,
        concepts: ['DOCTYPE', 'Semantic HTML5', 'Metadata', 'Accesibility']
      },
      {
        id: 'html-2',
        title: 'Contact Form',
        level: 'Intermediate',
        description:
          'Create a complete contact form with different input types and basic validation.',
        targets: [
          'Inputs text, email, textarea',
          'Oblogatory fields (required)',
          'Asociate labels',
          'Submit button'
        ],
        initialCode: `<form>
  <!-- Make your formulary here -->
  <!-- Include: name, email, subject, message -->
</form>`,
        solution: `<form action="/send" method="POST">
  <div>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
  </div>
  <div>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
  </div>
  <div>
    <label for="subject">Subject:</label>
    <select id="subject" name="subject">
      <option value="">Select a subject</option>
      <option value="ask">General question</option>
      <option value="money">Money form</option>
      <option value="support">Support</option>
    </select>
  </div>
  <div>
    <label for="message">Message:</label>
    <textarea id="message" name="message" rows="5" required></textarea>
  </div>
  <button type="submit">Submit message</button>
</form>`,
        concepts: ['HTML forms', 'Input types', 'Validate HTML5', 'Accesibility']
      },
      {
        id: 'html-3',
        title: 'Image Gallery',
        level: 'Intermediate',
        description:
          'Create a responsive image gallery using figure, figcaption, and links.',
        targets: [
          'Labels <figure> y <figcaption>',
          'Responsive images with srcset',
          'Links to full iamges',
          'Grid layout with CSS (soon)'
        ],
        initialCode: `<div class="gallery">
  <!-- Create you 4 images gallery -->
</div>`,
        solution: `<div class="gallery">
  <figure>
    <a href="img/grande-1.jpg">
      <img src="img/pequena-1.jpg" alt="Descripción imagen 1">
    </a>
    <figcaption>Imagen 1</figcaption>
  </figure>
  <figure>
    <a href="img/grande-2.jpg">
      <img src="img/pequena-2.jpg" alt="Descripción imagen 2">
    </a>
    <figcaption>Imagen 2</figcaption>
  </figure>
  <figure>
    <a href="img/grande-3.jpg">
      <img src="img/pequena-3.jpg" alt="Descripción imagen 3">
    </a>
    <figcaption>Imagen 3</figcaption>
  </figure>
  <figure>
    <a href="img/grande-4.jpg">
      <img src="img/pequena-4.jpg" alt="Descripción imagen 4">
    </a>
    <figcaption>Imagen 4</figcaption>
  </figure>
</div>`,
        concepts: ['Figure y figcaption', 'Optimización de imágenes', 'Galerías', 'Accesibilidad visual']
      }
    ]
  },

  css: {
    title: 'CSS',
    description: 'Styles for designing and positioning web elements',
    color: colours.css,
    challenges: [
      {
        id: 'css-1',
        title: 'Flexbox Centering',
        level: 'Beginner',
        description:
          'Center an element both horizontally and vertically using Flexbox.',
        targets: [
          'display: flex',
          'justify-content: center',
          'align-items: center',
          'height: 100vh'
        ],
        initialCode: `.contenedor {
  /* Your code here */
}

.caja {
  width: 200px;
  height: 200px;
  background: #3498db;
}`,
        solution: `.contenedor {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.caja {
  width: 200px;
  height: 200px;
  background: #3498db;
}`,
        concepts: ['Flexbox', 'Centrado vertical/horizontal', 'Viewport height', 'Reset básico']
      },
      {
        id: 'css-2',
        title: 'Responsive Grid Layout',
        level: 'Intermediate',
        description:
          'Create a grid layout that adapts to different screen sizes.',
        targets: [
          'display: grid',
          'grid-template-columns con repeat() y auto-fit',
          'gap entre elementos',
          'Media queries para personalización'
        ],
        initialCode: `.gallery {
  /* Make a responsive grid */
}

.tarjeta {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}`,
        solution: `.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.tarjeta {
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.tarjeta:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 12px rgba(0,0,0,0.15);
}

@media (max-width: 600px) {
  .gallery {
    grid-template-columns: 1fr;
    padding: 16px;
    gap: 16px;
  }
}`,
        concepts: ['CSS Grid', 'auto-fit y minmax', 'Responsive design', 'Media queries', 'Hover effects']
      },
      {
        id: 'css-3',
        title: 'Button Animation',
        level: 'Intermediate',
        description:
          'Create an interactive button with hover effects and animations.',
        targets: [
          'transition for soft animations',
          'transform y translate',
          'Pseudoclass (:hover, :active)',
          'Animaion keyframes'
        ],
        initialCode: `.btn {
  padding: 12px 24px;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  /* Your code here */
}`,
        solution: `.btn {
  padding: 14px 28px;
  background: linear-gradient(135deg, #3498db, #2980b9);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255,255,255,0.2),
    transparent
  );
  transition: left 0.5s;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(52, 152, 219, 0.4);
}

.btn:hover::before {
  left: 100%;
}

.btn:active {
  transform: translateY(0);
}`,
        concepts: ['Transitions', 'Gradients', 'Trnasforms', 'Pseudoelements', 'Overflow hidden']
      }
    ]
  },

  javascript: {
    title: 'JavaScript',
    description: 'Programming language for web interactivity',
    color: colours.javascript,
    challenges: [
      {
        id: 'js-1',
        title: 'Simple Calculator',
        level: 'Beginner',
        description:
          'Create basic functions to perform mathematical operations.',
        targets: [
          'Params funtions',
          'Aritmetic operators',
          'Values return',
          'Numbres handler'
        ],
        initialCode: `// Create functions for:
// - Sum two numbers
// - Subtract two numbers
// - Multiply two numbers
// - Division two numbers (validate zero division)

function sum(a, b) {
  // Your code here
}

function restar(a, b) {
  // Your code here
}

// Crea las funciones multiplicar y dividir`,
        solution: `function sum(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    console.error('Error: No se puede dividir por cero');
    return null;
  }
  return a / b;
}

// Ejemplos de uso:
console.log(sum(5, 3));      // 8
console.log(restar(10, 4));    // 6
console.log(multiplicar(6, 7)); // 42
console.log(dividir(20, 4));   // 5
console.log(dividir(20, 0));   // null + mensaje de error`,
        concepts: ['Funciones', 'Parámetros y argumentos', 'Return', 'Condicionales', 'Operadores']
      },
      {
        id: 'js-2',
        title: 'DOM Manipulation',
        level: 'Intermediate',
        description:
          'Create, modify, and remove DOM elements dynamically.',
        targets: [
          'document.querySelector / querySelectorAll',
          'createElement, appendChild, remove',
          'Modificar textContent y classList',
          'Event listeners'
        ],
        initialCode: `// Crea una lista de tareas donde puedas:
// 1. Agregar nuevas tareas
// 2. Marcar tareas como completadas
// 3. Eliminar tareas

const lista = document.getElementById('lista');
const input = document.getElementById('input');
const boton = document.getElementById('agregar');

// Your code here`,
        solution: `const lista = document.getElementById('lista');
const input = document.getElementById('input');
const boton = document.getElementById('agregar');

function agregarTarea(texto) {
  if (!texto.trim()) return;
  
  const li = document.createElement('li');
  
  const textoTarea = document.createElement('span');
  textoTarea.textContent = texto;
  
  const btnCompletar = document.createElement('button');
  btnCompletar.textContent = '✓';
  btnCompletar.addEventListener('click', () => {
    textoTarea.classList.toggle('completado');
  });
  
  const btnEliminar = document.createElement('button');
  btnEliminar.textContent = '✕';
  btnEliminar.addEventListener('click', () => {
    li.remove();
  });
  
  li.appendChild(textoTarea);
  li.appendChild(btnCompletar);
  li.appendChild(btnEliminar);
  lista.appendChild(li);
  
  input.value = '';
}

boton.addEventListener('click', () => {
  agregarTarea(input.value);
});

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    agregarTarea(input.value);
  }
});`,
        concepts: ['DOM manipulation', 'Event listeners', 'ClassList', 'Template literals', 'Conditional logic']
      },
      {
        id: 'js-3',
        title: 'API Fetch and Async/Await',
        level: 'Advanced',
        description:
          'Consume data from a public API using async/await.',
        targets: [
          'fetch API',
          'async/await',
          'try/catch para errores',
          'Manipulación de JSON'
        ],
        initialCode: `// Consume datos de JSONPlaceholder
// Muestra los primeros 5 posts con su título y cuerpo

async function obtenerPosts() {
  try {
    // Your code here
  } catch (error) {
    console.error('Error:', error);
  }
}

obtenerPosts();`,
        solution: `async function obtenerPosts() {
  try {
    const respuesta = await fetch(
      'https://jsonplaceholder.typicode.com/posts?_limit=5'
    );
    
    if (!respuesta.ok) {
      throw new Error('Error en la respuesta');
    }
    
    const posts = await respuesta.json();
    
    const contenedor = document.getElementById('posts');
    contenedor.innerHTML = '';
    
    posts.forEach(post => {
      const article = document.createElement('article');
      article.innerHTML = \`
        <h3>\${post.title}</h3>
        <p>\${post.body}</p>
      \`;
      contenedor.appendChild(article);
    });
    
  } catch (error) {
    console.error('Error:', error);
    document.getElementById('posts').innerHTML = 
      '<p>Error al cargar los posts</p>';
  }
}

obtenerPosts();`,
        concepts: ['Fetch API', 'Async/Await', 'Try/Catch', 'JSON handling', 'DOM manipulation']
      }
    ]
  },

  react: {
    title: 'React JS',
    description: 'Library for building user interfaces',
    color: colours.react,
    challenges: [
      {
        id: 'react-1',
        title: 'My First Component',
        level: 'Beginner',
        description:
          'Create and render a basic functional component.',
        targets: [
          'Crear componentes funcionales',
          'Props básicas',
          'JSX syntax',
          'Renderizado de componentes'
        ],
        initialCode: `// Crea un componente Saludo que reciba un prop "nombre"
// y muestre: "Hola, [nombre]! Bienvenido a React"

function Saludo({ nombre }) {
  // Your code here
}

export default Saludo;`,
        solution: `import React from 'react';

function Saludo({ nombre, idioma = 'es' }) {
  const mensajes = {
    es: 'Hola',
    en: 'Hello',
    fr: 'Bonjour'
  };
  
  return (
    <div className="saludo">
      <h2>{mensajes[idioma]}, {nombre}! 👋</h2>
      <p>Bienvenido a aprender React</p>
    </div>
  );
}

export default Saludo;

// Uso:
// <Saludo nombre="Carlos" idioma="es" />
// <Saludo nombre="John" idioma="en" />`,
        concepts: ['Componentes funcionales', 'Props', 'JSX', 'Valores por defecto', 'Renderizado']
      },
      {
        id: 'react-2',
        title: 'Counter with useState',
        level: 'Beginner',
        description:
          'Create an interactive counter with buttons to increment and decrement.',
        targets: [
          'useState hook',
          'Event handlers',
          'Renderizado condicional',
          'State updates'
        ],
        initialCode: `import { useState } from 'react';

function Contador() {
  // Declara el estado "account" con useState
  
  return (
    <div className="contador">
      {/* Muestra el contador actual */}
      
      <div className="botones">
        {/* Botones para incrementar y decrementar */}
      </div>
    </div>
  );
}

export default Contador;`,
        solution: `import { useState } from 'react';

function Contador({ valorInicial = 0, paso = 1 }) {
  const [account, setCuenta] = useState(valorInicial);
  const [historial, setHistorial] = useState([]);

  const incrementar = () => {
    setCuenta(c => c + paso);
    setHistorial(h => [...h, account + paso]);
  };

  const decrementar = () => {
    if (account - paso >= 0) {
      setCuenta(c => c - paso);
      setHistorial(h => [...h, account - paso]);
    }
  };

  const reiniciar = () => {
    setCuenta(valorInicial);
    setHistorial([]);
  };

  return (
    <div className="contador">
      <h3>Contador: {account}</h3>
      
      <div className="botones">
        <button onClick={decrementar} disabled={account - paso < 0}>
          - {paso}
        </button>
        <button onClick={reiniciar}>Reiniciar</button>
        <button onClick={incrementar}>+ {paso}</button>
      </div>
      
      {historial.length > 0 && (
        <div className="historial">
          <h4>Historial:</h4>
          <ul>
            {historial.map((valor, i) => (
              <li key={i}>{valor}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Contador;`,
        concepts: ['useState', 'Event handlers', 'Conditional rendering', 'Arrays in state', 'Immutability']
      },
      {
        id: 'react-3',
        title: 'Todo List with useEffect',
        level: 'Intermediate',
        description:
          'Create a complete task manager with local persistence.',
        targets: [
          'useState para arrays',
          'useEffect para efectos secundarios',
          'localStorage para persistencia',
          'CRUD básico'
        ],
        initialCode: `import { useState, useEffect } from 'react';

function ListaTareas() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');
  
  // Cargar tareas de localStorage al montar
  
  // Guardar en localStorage cuando cambien las tareas
  
  const agregarTarea = () => {
    // Your code here
  };
  
  const toggleTarea = (id) => {
    // Your code here
  };
  
  const eliminarTarea = (id) => {
    // Your code here
  };
  
  return (
    <div className="lista-tareas">
      {/* Tu JSX aquí */}
    </div>
  );
}

export default ListaTareas;`,
        solution: `import { useState, useEffect } from 'react';

function ListaTareas() {
  const [tareas, setTareas] = useState(() => {
    const guardadas = localStorage.getItem('tareas');
    return guardadas ? JSON.parse(guardadas) : [];
  });
  const [nuevaTarea, setNuevaTarea] = useState('');
  const [filtro, setFiltro] = useState('todas');

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  const agregarTarea = () => {
    if (!nuevaTarea.trim()) return;
    
    const tarea = {
      id: Date.now(),
      texto: nuevaTarea,
      completada: false,
      fecha: new Date().toLocaleDateString()
    };
    
    setTareas([...tareas, tarea]);
    setNuevaTarea('');
  };

  const toggleTarea = (id) => {
    setTareas(tareas.map(t =>
      t.id === id ? { ...t, completada: !t.completada } : t
    ));
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter(t => t.id !== id));
  };

  const tareasFiltradas = tareas.filter(t => {
    if (filtro === 'completadas') return t.completada;
    if (filtro === 'pendientes') return !t.completada;
    return true;
  });

  return (
    <div className="lista-tareas">
      <h2>Mis Tareas</h2>
      
      <div className="entrada">
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && agregarTarea()}
          placeholder="Nueva tarea..."
        />
        <button onClick={agregarTarea}>Agregar</button>
      </div>
      
      <div className="filtros">
        <button onClick={() => setFiltro('todas')} className={filtro === 'todas' ? 'activo' : ''}>
          Todas ({tareas.length})
        </button>
        <button onClick={() => setFiltro('pendientes')} className={filtro === 'pendientes' ? 'activo' : ''}>
          Pendientes ({tareas.filter(t => !t.completada).length})
        </button>
        <button onClick={() => setFiltro('completadas')} className={filtro === 'completadas' ? 'activo' : ''}>
          Completadas ({tareas.filter(t => t.completada).length})
        </button>
      </div>
      
      <ul className="tareas-lista">
        {tareasFiltradas.map(tarea => (
          <li key={tarea.id} className={tarea.completada ? 'completada' : ''}>
            <span onClick={() => toggleTarea(tarea.id)}>
              {tarea.texto}
              <small>{tarea.fecha}</small>
            </span>
            <button onClick={() => eliminarTarea(tarea.id)} className="eliminar">
              ✕
            </button>
          </li>
        ))}
      </ul>
      
      {tareasFiltradas.length === 0 && (
        <p className="vacio">No hay tareas para mostrar</p>
      )}
    </div>
  );
}

export default ListaTareas;`,
        concepts: ['useState', 'useEffect', 'localStorage', 'Array methods (map, filter)', 'Conditional classes']
      }
    ]
  },

  redux: {
    title: 'Redux',
    description: 'Predictable state management for JavaScript applications',
    color: colours.redux,
    challenges: [
      {
        id: 'redux-1',
        title: 'Store and Reducers',
        level: 'Intermediate',
        description:
          'Set up a Redux store with a basic reducer.',
        targets: [
          'createStore de Redux',
          'Funciones reducer',
          'Acciones con type y payload',
          'Dispatch de acciones'
        ],
        initialCode: `import { createStore } from 'redux';

// Define tu initialState

// Crea tu reducer que maneje acciones tipo:
// - 'INCREMENTAR'
// - 'DECREMENTAR'
// - 'SET_VALOR'

// Crea el store

// EJEMPLO DE USO:
// store.dispatch({ type: 'INCREMENTAR' })
// console.log(store.getState())`,
        solution: `import { createStore } from 'redux';

// Initial state
const estadoInicial = {
  contador: 0,
  valorPersonalizado: null
};

// Actions
const actions = {
  INCREMENTAR: 'INCREMENTAR',
  DECREMENTAR: 'DECREMENTAR',
  SET_VALOR: 'SET_VALOR',
  RESET: 'RESET'
};

// Action creators
export const incrementar = () => ({ type: actions.INCREMENTAR });
export const decrementar = () => ({ type: actions.DECREMENTAR });
export const setValor = (valor) => ({ type: actions.SET_VALOR, payload: valor });
export const reset = () => ({ type: actions.RESET, payload: 0 });

// Reducer
const contadorReducer = (state = estadoInicial, action) => {
  switch (action.type) {
    case actions.INCREMENTAR:
      return { ...state, contador: state.contador + 1 };
    case actions.DECREMENTAR:
      return { ...state, contador: state.contador - 1 };
    case actions.SET_VALOR:
      return { ...state, valorPersonalizado: action.payload };
    case actions.RESET:
      return { ...state, contador: 0, valorPersonalizado: null };
    default:
      return state;
  }
};

// Store
const store = createStore(contadorReducer);

// Suscribe para ver cambios
store.subscribe(() => console.log('Estado:', store.getState()));

// Uso
store.dispatch(incrementar());
store.dispatch(incrementar());
store.dispatch(setValor(100));
store.dispatch(reset());

export default store;`,
        concepts: ['Store', 'Reducers', 'Actions', 'Dispatch', 'State management']
      },
      {
        id: 'redux-2',
        title: 'Modern Redux Toolkit',
        level: 'Intermediate',
        description:
          'Use Redux Toolkit to simplify the setup.',
        targets: [
          'configureStore',
          'createSlice',
          'createAsyncThunk (opcional)',
          'Selectors'
        ],
        initialCode: `import { configureStore, createSlice } from '@reduxjs/toolkit';

// Crea un slice para gestión de tareas
// con estado inicial, reducers y acciones

// Configura el store con el reducer

// Exporta las acciones y el selector`,
        solution: `import { configureStore, createSlice, createSelector } from '@reduxjs/toolkit';

// Slice de tareas
const tareasSlice = createSlice({
  name: 'tareas',
  initialState: {
    items: [],
    filtro: 'todas',
    cargando: false,
    error: null
  },
  reducers: {
    agregarTarea: (state, action) => {
      state.items.push({
        id: Date.now(),
        texto: action.payload,
        completada: false,
        fecha: new Date().toISOString()
      });
    },
    toggleTarea: (state, action) => {
      const tarea = state.items.find(t => t.id === action.payload);
      if (tarea) {
        tarea.completada = !tarea.completada;
      }
    },
    eliminarTarea: (state, action) => {
      state.items = state.items.filter(t => t.id !== action.payload);
    },
    setFiltro: (state, action) => {
      state.filtro = action.payload;
    },
    clearCompletadas: (state) => {
      state.items = state.items.filter(t => !t.completada);
    }
  }
});

// Exportar acciones
export const {
  agregarTarea,
  toggleTarea,
  eliminarTarea,
  setFiltro,
  clearCompletadas
} = tareasSlice.actions;

// Selectors
export const selectTareas = state => state.tareas.items;
export const selectFiltro = state => state.tareas.filtro;

export const selectTareasFiltradas = state => {
  const tareas = state.tareas.items;
  const filtro = state.tareas.filtro;
  
  switch (filtro) {
    case 'completadas':
      return tareas.filter(t => t.completada);
    case 'pendientes':
      return tareas.filter(t => !t.completada);
    default:
      return tareas;
  }
};

export const selectEstadisticas = createSelector(
  [selectTareas],
  (tareas) => ({
    total: tareas.length,
    completadas: tareas.filter(t => t.completada).length,
    pendientes: tareas.filter(t => !t.completada).length
  })
);

// Store
const store = configureStore({
  reducer: {
    tareas: tareasSlice.reducer
  }
});

export default store;`,
        concepts: ['Redux Toolkit', 'createSlice', 'configureStore', 'Selectors', 'Immer (mutaciones seguras)']
      }
    ]
  },

  nodejs: {
    title: 'Node.js',
    description: 'JavaScript runtime environment on the server',
    color: colours.nodejs,
    challenges: [
      {
        id: 'nodejs-1',
        title: 'Basic HTTP Server',
        level: 'Beginner',
        description:
          'Create a simple HTTP server with Node.js using the http module.',
        targets: [
          'Módulo http de Node.js',
          'Crear servidor con createServer',
          'Escuchar en puerto específico',
          'Responder a peticiones GET'
        ],
        initialCode: `const http = require('http');

// Crea un servidor que:
// 1. Responda "Hola, Mundo!" en la ruta raíz
// 2. Responda "Página de Contacto" en /contacto
// 3. Responda 404 en rutas no encontradas

const servidor = http.createServer((req, res) => {
  // Your code here
});

const puerto = 3000;
servidor.listen(puerto, () => {
  console.log(\`Servidor escuchando en puerto \${puerto}\`);
});`,
        solution: `const http = require('http');

const servidor = http.createServer((req, res) => {
  // Configurar headers
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  
  // Rutas
  if (req.url === '/' && req.method === 'GET') {
    res.statusCode = 200;
    res.end('<h1>¡Hola, Mundo!</h1><p>Bienvenido a mi servidor Node.js</p>');
  } 
  else if (req.url === '/contacto' && req.method === 'GET') {
    res.statusCode = 200;
    res.end('<h1>Página de Contacto</h1><p>Email: contacto@ejemplo.com</p>');
  }
  else if (req.url === '/api/datos' && req.method === 'GET') {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.end(JSON.stringify({ 
      mensaje: 'Datos del servidor',
      timestamp: new Date().toISOString()
    }));
  }
  else {
    res.statusCode = 404;
    res.end('<h1>404 - Página no encontrada</h1>');
  }
});

const puerto = 3000;
servidor.listen(puerto, () => {
  console.log(\`Servidor escuchando en http://localhost:\${puerto}\`);
});`,
        concepts: ['Módulo http', 'Servidor HTTP', 'Rutas', 'Status codes', 'Headers']
      },
      {
        id: 'nodejs-2',
        title: 'Express.js - Routes and Middleware',
        level: 'Intermediate',
        description:
          'Create a REST API with Express.js including routes and middleware.',
        targets: [
          'Framework Express.js',
          'Definir rutas GET, POST, PUT, DELETE',
          'Middleware personalizado',
          'Manejo de errores'
        ],
        initialCode: `const express = require('express');
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Middleware personalizado para logging
// Your code here

// Array de usuarios (simulando base de datos)
let usuarios = [
  { id: 1, nombre: 'Juan', email: 'juan@ejemplo.com' },
  { id: 2, nombre: 'María', email: 'maria@ejemplo.com' }
];

// GET - Obtener totwo los usuarios
app.get('/api/usuarios', (req, res) => {
  // Your code here
});

// GET - Obtener usuario por ID
app.get('/api/usuarios/:id', (req, res) => {
  // Your code here
});

// POST - Crear nuevo usuario
app.post('/api/usuarios', (req, res) => {
  // Your code here
});

// PUT - Actualizar usuario
app.put('/api/usuarios/:id', (req, res) => {
  // Your code here
});

// DELETE - Eliminar usuario
app.delete('/api/usuarios/:id', (req, res) => {
  // Your code here
});

const puerto = 3000;
app.listen(puerto, () => {
  console.log(\`API escuchando en puerto \${puerto}\`);
});`,
        solution: `const express = require('express');
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Middleware personalizado para logging
app.use((req, res, next) => {
  console.log(\`[\${new Date().toISOString()}] \${req.method} \${req.url}\`);
  next();
});

// Array de usuarios (simulando base de datos)
let usuarios = [
  { id: 1, nombre: 'Juan', email: 'juan@ejemplo.com' },
  { id: 2, nombre: 'María', email: 'maria@ejemplo.com' }
];

let proximoId = 3;

// GET - Obtener totwo los usuarios
app.get('/api/usuarios', (req, res) => {
  res.json({
    success: true,
    data: usuarios,
    total: usuarios.length
  });
});

// GET - Obtener usuario por ID
app.get('/api/usuarios/:id', (req, res) => {
  const usuario = usuarios.find(u => u.id === parseInt(req.params.id));
  
  if (!usuario) {
    return res.status(404).json({
      success: false,
      mensaje: 'Usuario no encontrado'
    });
  }
  
  res.json({
    success: true,
    data: usuario
  });
});

// POST - Crear nuevo usuario
app.post('/api/usuarios', (req, res) => {
  const { nombre, email } = req.body;
  
  if (!nombre || !email) {
    return res.status(400).json({
      success: false,
      mensaje: 'Nombre y email son requeritwo'
    });
  }
  
  const nuevoUsuario = {
    id: proximoId++,
    nombre,
    email
  };
  
  usuarios.push(nuevoUsuario);
  
  res.status(201).json({
    success: true,
    mensaje: 'Usuario creado',
    data: nuevoUsuario
  });
});

// PUT - Actualizar usuario
app.put('/api/usuarios/:id', (req, res) => {
  const usuario = usuarios.find(u => u.id === parseInt(req.params.id));
  
  if (!usuario) {
    return res.status(404).json({
      success: false,
      mensaje: 'Usuario no encontrado'
    });
  }
  
  if (req.body.nombre) usuario.nombre = req.body.nombre;
  if (req.body.email) usuario.email = req.body.email;
  
  res.json({
    success: true,
    mensaje: 'Usuario actualizado',
    data: usuario
  });
});

// DELETE - Eliminar usuario
app.delete('/api/usuarios/:id', (req, res) => {
  const indice = usuarios.findIndex(u => u.id === parseInt(req.params.id));
  
  if (indice === -1) {
    return res.status(404).json({
      success: false,
      mensaje: 'Usuario no encontrado'
    });
  }
  
  const usuarioEliminado = usuarios.splice(indice, 1);
  
  res.json({
    success: true,
    mensaje: 'Usuario eliminado',
    data: usuarioEliminado[0]
  });
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    mensaje: 'Error interno del servidor'
  });
});

const puerto = 3000;
app.listen(puerto, () => {
  console.log(\`API escuchando en http://localhost:\${puerto}\`);
});`,
        concepts: ['Express.js', 'Rutas REST', 'Middleware', 'Status codes', 'Validación', 'CRUD']
      },
      {
        id: 'nodejs-3',
        title: 'Authentication with JWT',
        level: 'Advanced',
        description:
          'Implement authentication with JSON Web Tokens (JWT).',
        targets: [
          'Generar tokens JWT',
          'Verificar tokens',
          'Middleware de autenticación',
          'Contraseñas hasheadas'
        ],
        initialCode: `const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());

const SECRET_KEY = 'tu_clave_secreta_muy_segura';

// Usuarios simulatwo
let usuarios = [
  { id: 1, email: 'usuario@ejemplo.com', password: 'hasheada' }
];

// Middleware para verificar JWT
const verificarToken = (req, res, next) => {
  // Your code here
};

// POST - Login
app.post('/login', (req, res) => {
  // Your code here
});

// GET - Datos protegitwo
app.get('/perfil', verificarToken, (req, res) => {
  // Your code here
});

app.listen(3000, () => console.log('Servidor en puerto 3000'));`,
        solution: `const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());

const SECRET_KEY = 'tu_clave_secreta_muy_segura_cambiar_en_produccion';

// Usuarios simulatwo (en producción usar base de datos)
let usuarios = [
  { 
    id: 1, 
    email: 'usuario@ejemplo.com', 
    password: '$2b$10$...' // Contraseña hasheada
  }
];

// Middleware para verificar JWT
const verificarToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({
      success: false,
      mensaje: 'Token no proporcionado'
    });
  }
  
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.usuario = decoded;
    next();
  } catch (error) {
    return res.status(403).json({
      success: false,
      mensaje: 'Token inválido o expirado'
    });
  }
};

// POST - Login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      mensaje: 'Email y contraseña requeritwo'
    });
  }
  
  try {
    // Buscar usuario
    const usuario = usuarios.find(u => u.email === email);
    
    if (!usuario) {
      return res.status(401).json({
        success: false,
        mensaje: 'Credenciales inválidas'
      });
    }
    
    // Verificar contraseña
    const esValida = await bcrypt.compare(password, usuario.password);
    
    if (!esValida) {
      return res.status(401).json({
        success: false,
        mensaje: 'Credenciales inválidas'
      });
    }
    
    // Generar token
    const token = jwt.sign(
      { id: usuario.id, email: usuario.email },
      SECRET_KEY,
      { expiresIn: '24h' }
    );
    
    res.json({
      success: true,
      mensaje: 'Login exitoso',
      token,
      usuario: { id: usuario.id, email: usuario.email }
    });
    
  } catch (error) {
    res.status(500).json({
      success: false,
      mensaje: 'Error en el servidor'
    });
  }
});

// GET - Datos protegitwo
app.get('/perfil', verificarToken, (req, res) => {
  res.json({
    success: true,
    mensaje: 'Acceso permitido',
    usuario: req.usuario
  });
});

// POST - Registro
app.post('/registro', async (req, res) => {
  const { email, password } = req.body;
  
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      mensaje: 'Email y contraseña requeritwo'
    });
  }
  
  try {
    // Verificar si usuario existe
    if (usuarios.find(u => u.email === email)) {
      return res.status(400).json({
        success: false,
        mensaje: 'El usuario ya existe'
      });
    }
    
    // Hashear contraseña
    const passwordHasheada = await bcrypt.hash(password, 10);
    
    // Crear usuario
    const nuevoUsuario = {
      id: usuarios.length + 1,
      email,
      password: passwordHasheada
    };
    
    usuarios.push(nuevoUsuario);
    
    res.status(201).json({
      success: true,
      mensaje: 'Usuario registrado exitosamente',
      usuario: { id: nuevoUsuario.id, email: nuevoUsuario.email }
    });
    
  } catch (error) {
    res.status(500).json({
      success: false,
      mensaje: 'Error en el servidor'
    });
  }
});

app.listen(3000, () => {
  console.log('Servidor de autenticación en puerto 3000');
});`,
        concepts: ['JWT', 'Autenticación', 'Bcrypt', 'Middleware', 'Seguridad', 'Tokens']
      }
    ]
  },

  mongodb: {
    title: 'MongoDB',
    description: 'NoSQL document-oriented database',
    color: { principal: '#13AA52', secundario: '#47A248', fondo: '#E8F5E9' },
    challenges: [
      {
        id: 'mongodb-1',
        title: 'Connection and Basic Operations',
        level: 'Beginner',
        description:
          'Connect to MongoDB and perform basic CRUD operations.',
        targets: [
          'Conectar a MongoDB con mongoose',
          'Crear esquemas y modelos',
          'Insertar documentos',
          'Consultar documentos'
        ],
        initialCode: `const mongoose = require('mongoose');

// Conectar a MongoDB
// mongoose.connect('mongodb://localhost:27017/mibasedatos');

// Definir esquema de usuario
const usuarioSchema = new mongoose.Schema({
  nombre: String,
  email: String,
  edad: Number,
  createdAt: { type: Date, default: Date.now }
});

// Crear modelo
const Usuario = mongoose.model('Usuario', usuarioSchema);

// Crear un nuevo usuario
// Your code here

// Buscar totwo los usuarios
// Your code here

// Buscar usuario por email
// Your code here`,
        solution: `const mongoose = require('mongoose');

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/mibasedatos', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Definir esquema de usuario
const usuarioSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  edad: {
    type: Number,
    min: 0,
    max: 150
  },
  activo: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Crear modelo
const Usuario = mongoose.model('Usuario', usuarioSchema);

// Crear un nuevo usuario
async function crearUsuario() {
  try {
    const nuevoUsuario = new Usuario({
      nombre: 'Juan Pérez',
      email: 'juan@ejemplo.com',
      edad: 28
    });
    
    await nuevoUsuario.save();
    console.log('Usuario creado:', nuevoUsuario);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Buscar totwo los usuarios
async function obtenerTotwo() {
  try {
    const usuarios = await Usuario.find();
    console.log('Usuarios:', usuarios);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Buscar usuario por email
async function buscarPorEmail(email) {
  try {
    const usuario = await Usuario.findOne({ email });
    console.log('Usuario encontrado:', usuario);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Actualizar usuario
async function actualizarUsuario(id, datos) {
  try {
    const usuarioActualizado = await Usuario.findByIdAndUpdate(
      id,
      datos,
      { new: true }
    );
    console.log('Usuario actualizado:', usuarioActualizado);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Eliminar usuario
async function eliminarUsuario(id) {
  try {
    const usuarioEliminado = await Usuario.findByIdAndDelete(id);
    console.log('Usuario eliminado:', usuarioEliminado);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Ejecutar funciones
crearUsuario();
obtenerTotwo();
buscarPorEmail('juan@ejemplo.com');`,
        concepts: ['Mongoose', 'Esquemas', 'Modelos', 'CRUD', 'Validación', 'Async/Await']
      },
      {
        id: 'mongodb-2',
        title: 'Relationships and Population',
        level: 'Intermediate',
        description:
          'Work with references between collections and use populate.',
        targets: [
          'Crear referencias entre documentos',
          'Usar populate para obtener datos relacionatwo',
          'Validar referencias',
          'Consultas con múltiples colecciones'
        ],
        initialCode: `const mongoose = require('mongoose');

// Esquema de Autor
const autorSchema = new mongoose.Schema({
  nombre: String,
  email: String
});

// Esquema de Libro con referencia a Autor
const libroSchema = new mongoose.Schema({
  title: String,
  autor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Autor'
  },
  año: Number,
  paginas: Number
});

const Autor = mongoose.model('Autor', autorSchema);
const Libro = mongoose.model('Libro', libroSchema);

// Crear un autor
// Your code here

// Crear un libro con referencia al autor
// Your code here

// Obtener libro con datos del autor (populate)
// Your code here`,
        solution: `const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/biblioteca');

// Esquema de Autor
const autorSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true
  },
  pais: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Esquema de Libro con referencia a Autor
const libroSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  autor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Autor',
    required: true
  },
  año: Number,
  paginas: Number,
  genero: String,
  disponible: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Autor = mongoose.model('Autor', autorSchema);
const Libro = mongoose.model('Libro', libroSchema);

// Crear un autor
async function crearAutor() {
  try {
    const autor = new Autor({
      nombre: 'Gabriel García Márquez',
      email: 'gabriel@ejemplo.com',
      pais: 'Colombia'
    });
    
    await autor.save();
    console.log('Autor creado:', autor);
    return autor._id;
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Crear un libro con referencia al autor
async function crearLibro(autorId) {
  try {
    const libro = new Libro({
      title: 'Cien años de soledad',
      autor: autorId,
      año: 1967,
      paginas: 417,
      genero: 'Realismo mágico'
    });
    
    await libro.save();
    console.log('Libro creado:', libro);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Obtener libro con datos del autor (populate)
async function obtenerLibroConAutor() {
  try {
    const libro = await Libro.findOne({ title: 'Cien años de soledad' })
      .populate('autor');
    
    console.log('Libro con autor:', libro);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Obtener totwo los libros de un autor
async function obtenerLibrosPorAutor(nombreAutor) {
  try {
    const autor = await Autor.findOne({ nombre: nombreAutor });
    
    if (!autor) {
      console.log('Autor no encontrado');
      return;
    }
    
    const libros = await Libro.find({ autor: autor._id })
      .populate('autor');
    
    console.log(\`Libros de \${nombreAutor}:\`, libros);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Actualizar disponibilidad de libro
async function actualizarDisponibilidad(libroId, disponible) {
  try {
    const libro = await Libro.findByIdAndUpdate(
      libroId,
      { disponible },
      { new: true }
    ).populate('autor');
    
    console.log('Libro actualizado:', libro);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Ejecutar funciones
(async () => {
  const autorId = await crearAutor();
  await crearLibro(autorId);
  await obtenerLibroConAutor();
  await obtenerLibrosPorAutor('Gabriel García Márquez');
})();`,
        concepts: ['Referencias', 'Populate', 'Relaciones', 'ObjectId', 'Consultas relacionales']
      },
      {
        id: 'mongodb-3',
        title: 'Aggregations and Analysis',
        level: 'Advanced',
        description:
          'Use the aggregation pipeline for complex analysis.',
        targets: [
          'Pipeline de agregación',
          'Stages: $match, $group, $sort, $limit',
          'Cálculos agregatwo',
          'Análisis de datos'
        ],
        initialCode: `const mongoose = require('mongoose');

// Esquema de Venta
const ventaSchema = new mongoose.Schema({
  producto: String,
  cantidad: Number,
  precio: Number,
  fecha: Date,
  vendedor: String
});

const Venta = mongoose.model('Venta', ventaSchema);

// Obtener total de ventas por producto
// Your code here

// Obtener vendedor con más ventas
// Your code here

// Obtener ventas por mes
// Your code here`,
        solution: `const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ventas');

// Esquema de Venta
const ventaSchema = new mongoose.Schema({
  producto: String,
  cantidad: Number,
  precio: Number,
  total: {
    type: Number,
    default: function() { return this.cantidad * this.precio; }
  },
  fecha: {
    type: Date,
    default: Date.now
  },
  vendedor: String,
  estado: {
    type: String,
    enum: ['completada', 'pendiente', 'cancelada'],
    default: 'completada'
  }
});

const Venta = mongoose.model('Venta', ventaSchema);

// Obtener total de ventas por producto
async function ventasPorProducto() {
  try {
    const resultado = await Venta.aggregate([
      {
        $match: { estado: 'completada' }
      },
      {
        $group: {
          _id: '$producto',
          totalVentas: { $sum: '$total' },
          cantidadVendida: { $sum: '$cantidad' },
          promedioVenta: { $avg: '$total' }
        }
      },
      {
        $sort: { totalVentas: -1 }
      }
    ]);
    
    console.log('Ventas por producto:', resultado);
    return resultado;
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Obtener vendedor con más ventas
async function vendedorTopVentas() {
  try {
    const resultado = await Venta.aggregate([
      {
        $match: { estado: 'completada' }
      },
      {
        $group: {
          _id: '$vendedor',
          totalVentas: { $sum: '$total' },
          cantidadTransacciones: { $sum: 1 },
          promedioTransaccion: { $avg: '$total' }
        }
      },
      {
        $sort: { totalVentas: -1 }
      },
      {
        $limit: 5
      }
    ]);
    
    console.log('Top 5 vendedores:', resultado);
    return resultado;
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Obtener ventas por mes
async function ventasPorMes() {
  try {
    const resultado = await Venta.aggregate([
      {
        $match: { estado: 'completada' }
      },
      {
        $group: {
          _id: {
            año: { $year: '$fecha' },
            mes: { $month: '$fecha' }
          },
          totalVentas: { $sum: '$total' },
          cantidadVentas: { $sum: 1 }
        }
      },
      {
        $sort: { '_id.año': 1, '_id.mes': 1 }
      }
    ]);
    
    console.log('Ventas por mes:', resultado);
    return resultado;
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Estadísticas generales
async function estadisticasGenerales() {
  try {
    const resultado = await Venta.aggregate([
      {
        $match: { estado: 'completada' }
      },
      {
        $facet: {
          resumen: [
            {
              $group: {
                _id: null,
                totalVentas: { $sum: '$total' },
                cantidadTransacciones: { $sum: 1 },
                promedioTransaccion: { $avg: '$total' },
                ventaMaxima: { $max: '$total' },
                ventaMinima: { $min: '$total' }
              }
            }
          ],
          productosMasVenditwo: [
            {
              $group: {
                _id: '$producto',
                cantidad: { $sum: '$cantidad' }
              }
            },
            { $sort: { cantidad: -1 } },
            { $limit: 3 }
          ]
        }
      }
    ]);
    
    console.log('Estadísticas generales:', resultado);
    return resultado;
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Ejecutar funciones
(async () => {
  await ventasPorProducto();
  await vendedorTopVentas();
  await ventasPorMes();
  await estadisticasGenerales();
})();`,
        concepts: ['Agregación', 'Pipeline', '$group', '$match', '$sort', 'Análisis de datos']
      }
    ]
  },

  mysql: {
    title: 'MySQL',
    description: 'Relational SQL database',
    color: { principal: '#00758F', secundario: '#0066CC', fondo: '#E3F2FD' },
    challenges: [
      {
        id: 'mysql-1',
        title: 'Connection and Basic Queries',
        level: 'Beginner',
        description:
          'Connect to MySQL and perform SELECT, INSERT, UPDATE, and DELETE queries.',
        targets: [
          'Conectar a MySQL con Node.js',
          'Ejecutar consultas SELECT',
          'Insertar registros',
          'Actualizar y eliminar datos'
        ],
        initialCode: `const mysql = require('mysql2/promise');

// Crear conexión
const conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'tu_contraseña',
  database: 'mibasedatos'
});

// Crear tabla de usuarios
// CREATE TABLE usuarios (
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   nombre VARCHAR(100),
//   email VARCHAR(100) UNIQUE,
//   edad INT
// );

// Insertar usuario
// Your code here

// Obtener totwo los usuarios
// Your code here

// Actualizar usuario
// Your code here

// Eliminar usuario
// Your code here`,
        solution: `const mysql = require('mysql2/promise');

// Crear pool de conexiones
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'tu_contraseña',
  database: 'mibasedatos',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Crear tabla de usuarios
async function crearTabla() {
  const conexion = await pool.getConnection();
  try {
    await conexion.execute(\`
      CREATE TABLE IF NOT EXISTS usuarios (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        edad INT,
        activo BOOLEAN DEFAULT true,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    \`);
    console.log('Tabla creada exitosamente');
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    conexion.release();
  }
}

// Insertar usuario
async function insertarUsuario(nombre, email, edad) {
  const conexion = await pool.getConnection();
  try {
    const [resultado] = await conexion.execute(
      'INSERT INTO usuarios (nombre, email, edad) VALUES (?, ?, ?)',
      [nombre, email, edad]
    );
    console.log('Usuario insertado:', resultado);
    return resultado.insertId;
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    conexion.release();
  }
}

// Obtener totwo los usuarios
async function obtenerTotwo() {
  const conexion = await pool.getConnection();
  try {
    const [usuarios] = await conexion.execute(
      'SELECT * FROM usuarios WHERE activo = true'
    );
    console.log('Usuarios:', usuarios);
    return usuarios;
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    conexion.release();
  }
}

// Obtener usuario por ID
async function obtenerPorId(id) {
  const conexion = await pool.getConnection();
  try {
    const [usuarios] = await conexion.execute(
      'SELECT * FROM usuarios WHERE id = ?',
      [id]
    );
    console.log('Usuario encontrado:', usuarios[0]);
    return usuarios[0];
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    conexion.release();
  }
}

// Actualizar usuario
async function actualizarUsuario(id, nombre, email, edad) {
  const conexion = await pool.getConnection();
  try {
    const [resultado] = await conexion.execute(
      'UPDATE usuarios SET nombre = ?, email = ?, edad = ? WHERE id = ?',
      [nombre, email, edad, id]
    );
    console.log('Usuario actualizado:', resultado);
    return resultado;
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    conexion.release();
  }
}

// Eliminar usuario
async function eliminarUsuario(id) {
  const conexion = await pool.getConnection();
  try {
    const [resultado] = await conexion.execute(
      'DELETE FROM usuarios WHERE id = ?',
      [id]
    );
    console.log('Usuario eliminado:', resultado);
    return resultado;
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    conexion.release();
  }
}

// Ejecutar funciones
(async () => {
  await crearTabla();
  await insertarUsuario('Juan', 'juan@ejemplo.com', 28);
  await insertarUsuario('María', 'maria@ejemplo.com', 25);
  await obtenerTotwo();
  await obtenerPorId(1);
  await actualizarUsuario(1, 'Juan Pérez', 'juan.perez@ejemplo.com', 29);
  await obtenerTotwo();
})();`,
        concepts: ['Conexión MySQL', 'Pool de conexiones', 'Prepared statements', 'CRUD', 'Async/Await']
      },
      {
        id: 'mysql-2',
        title: 'Relationships and JOINs',
        level: 'Intermediate',
        description:
          'Work with relationships between tables using JOINs.',
        targets: [
          'Crear tablas relacionadas',
          'Foreign keys',
          'INNER JOIN, LEFT JOIN',
          'Consultas con múltiples tablas'
        ],
        initialCode: `const mysql = require('mysql2/promise');

// Tablas:
// usuarios (id, nombre, email)
// peditwo (id, usuario_id, total, fecha)

// Crear tablas
// Your code here

// Insertar datos
// Your code here

// Obtener usuario con sus peditwo (JOIN)
// Your code here

// Obtener peditwo con datos del usuario
// Your code here`,
        solution: `const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'tu_contraseña',
  database: 'tienda'
});

// Crear tablas
async function crearTablas() {
  const conexion = await pool.getConnection();
  try {
    // Tabla usuarios
    await conexion.execute(\`
      CREATE TABLE IF NOT EXISTS usuarios (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    \`);
    
    // Tabla peditwo
    await conexion.execute(\`
      CREATE TABLE IF NOT EXISTS peditwo (
        id INT AUTO_INCREMENT PRIMARY KEY,
        usuario_id INT NOT NULL,
        total DECIMAL(10, 2),
        estado VARCHAR(50) DEFAULT 'pendiente',
        fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
      )
    \`);
    
    console.log('Tablas creadas exitosamente');
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    conexion.release();
  }
}

// Insertar datos
async function insertarDatos() {
  const conexion = await pool.getConnection();
  try {
    // Insertar usuarios
    await conexion.execute(
      'INSERT INTO usuarios (nombre, email) VALUES (?, ?)',
      ['Juan', 'juan@ejemplo.com']
    );
    
    await conexion.execute(
      'INSERT INTO usuarios (nombre, email) VALUES (?, ?)',
      ['María', 'maria@ejemplo.com']
    );
    
    // Insertar peditwo
    await conexion.execute(
      'INSERT INTO peditwo (usuario_id, total, estado) VALUES (?, ?, ?)',
      [1, 150.50, 'completado']
    );
    
    await conexion.execute(
      'INSERT INTO peditwo (usuario_id, total, estado) VALUES (?, ?, ?)',
      [1, 200.00, 'pendiente']
    );
    
    await conexion.execute(
      'INSERT INTO peditwo (usuario_id, total, estado) VALUES (?, ?, ?)',
      [2, 75.25, 'completado']
    );
    
    console.log('Datos insertatwo exitosamente');
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    conexion.release();
  }
}

// Obtener usuario con sus peditwo (INNER JOIN)
async function obtenerUsuarioConPeditwo(usuarioId) {
  const conexion = await pool.getConnection();
  try {
    const [resultado] = await conexion.execute(\`
      SELECT 
        u.id,
        u.nombre,
        u.email,
        p.id as pedido_id,
        p.total,
        p.estado,
        p.fecha
      FROM usuarios u
      INNER JOIN peditwo p ON u.id = p.usuario_id
      WHERE u.id = ?
    \`, [usuarioId]);
    
    console.log('Usuario con peditwo:', resultado);
    return resultado;
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    conexion.release();
  }
}

// Obtener totwo los usuarios con sus peditwo (LEFT JOIN)
async function obtenerTotwoConPeditwo() {
  const conexion = await pool.getConnection();
  try {
    const [resultado] = await conexion.execute(\`
      SELECT 
        u.id,
        u.nombre,
        u.email,
        COUNT(p.id) as total_peditwo,
        SUM(p.total) as total_gastado
      FROM usuarios u
      LEFT JOIN peditwo p ON u.id = p.usuario_id
      GROUP BY u.id, u.nombre, u.email
    \`);
    
    console.log('Usuarios con resumen de peditwo:', resultado);
    return resultado;
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    conexion.release();
  }
}

// Obtener peditwo con datos del usuario
async function obtenerPeditwoConUsuario() {
  const conexion = await pool.getConnection();
  try {
    const [resultado] = await conexion.execute(\`
      SELECT 
        p.id,
        p.total,
        p.estado,
        p.fecha,
        u.nombre as usuario_nombre,
        u.email as usuario_email
      FROM peditwo p
      INNER JOIN usuarios u ON p.usuario_id = u.id
      ORDER BY p.fecha DESC
    \`);
    
    console.log('Peditwo con usuario:', resultado);
    return resultado;
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    conexion.release();
  }
}

// Obtener estadísticas
async function obtenerEstadisticas() {
  const conexion = await pool.getConnection();
  try {
    const [resultado] = await conexion.execute(\`
      SELECT 
        COUNT(DISTINCT u.id) as total_usuarios,
        COUNT(p.id) as total_peditwo,
        SUM(p.total) as total_ventas,
        AVG(p.total) as promedio_pedido,
        MAX(p.total) as pedido_maximo
      FROM usuarios u
      LEFT JOIN peditwo p ON u.id = p.usuario_id
    \`);
    
    console.log('Estadísticas:', resultado[0]);
    return resultado[0];
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    conexion.release();
  }
}

// Ejecutar funciones
(async () => {
  await crearTablas();
  await insertarDatos();
  await obtenerUsuarioConPeditwo(1);
  await obtenerTotwoConPeditwo();
  await obtenerPeditwoConUsuario();
  await obtenerEstadisticas();
})();`,
        concepts: ['Foreign keys', 'INNER JOIN', 'LEFT JOIN', 'GROUP BY', 'Relaciones', 'Agregaciones']
      },
      {
        id: 'mysql-3',
        title: 'Transactions and Procedures',
        level: 'Advanced',
        description:
          'Use transactions and stored procedures in MySQL.',
        targets: [
          'Transacciones ACID',
          'BEGIN, COMMIT, ROLLBACK',
          'Procedimientos almacenatwo',
          'Manejo de errores'
        ],
        initialCode: `const mysql = require('mysql2/promise');

// Transferencia de dinero entre accounts
// Debe ser atómica (todo o nada)

async function transferirDinero(accountOrigen, accountDestino, monto) {
  const conexion = await pool.getConnection();
  
  try {
    // Iniciar transacción
    await conexion.beginTransaction();
    
    // Verificar saldo de account origen
    const [origen] = await conexion.execute(
      'SELECT saldo FROM accounts WHERE numero_account = ? FOR UPDATE',
      [accountOrigen]
    );
    
    if (!origen[0] || origen[0].saldo < monto) {
      throw new Error('Saldo insuficiente');
    }
    
    // Subtract account origen
    await conexion.execute(
      'UPDATE accounts SET saldo = saldo - ? WHERE numero_account = ?',
      [monto, accountOrigen]
    );
    
    // Sumar account destiny
    await conexion.execute(
      'UPDATE accounts SET saldo = saldo + ? WHERE numero_account = ?',
      [monto, accountDestino]
    );
    
    // Confirmar transacción
    await conexion.commit();
    
    console.log(\`Transferencia exitosa: \${monto} de \${accountOrigen} a \${accountDestino}\`);
    return true;
    
  } catch (error) {
    // Revertir transacción
    await conexion.rollback();
    console.error('Error en transferencia:', error.message);
    return false;
  } finally {
    conexion.release();
  }
}

// Procedimiento almacenado
async function crearProcedimiento() {
  const conexion = await pool.getConnection();
  try {
    await conexion.execute(\`
      CREATE PROCEDURE IF NOT EXISTS obtener_saldo(
        IN p_numero_account VARCHAR(20),
        OUT p_saldo DECIMAL(15, 2)
      )
      BEGIN
        SELECT saldo INTO p_saldo
        FROM accounts
        WHERE numero_account = p_numero_account;
      END
    \`);
    
    console.log('Procedimiento creado');
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    conexion.release();
  }
}

// Llamar procedimiento almacenado
async function llamarProcedimiento(numeroCuenta) {
  const conexion = await pool.getConnection();
  try {
    const [resultado] = await conexion.execute(
      'CALL obtener_saldo(?, @saldo)',
      [numeroCuenta]
    );
    
    const [saldo] = await conexion.execute('SELECT @saldo as saldo');
    console.log('Saldo:', saldo[0].saldo);
    return saldo[0].saldo;
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    conexion.release();
  }
}

// Insertar datos de prueba
async function insertarDatos() {
  const conexion = await pool.getConnection();
  try {
    await conexion.execute(
      'INSERT INTO accounts (numero_account, titular, saldo) VALUES (?, ?, ?)',
      ['001', 'Juan Pérez', 1000.00]
    );
    
    await conexion.execute(
      'INSERT INTO accounts (numero_account, titular, saldo) VALUES (?, ?, ?)',
      ['002', 'María García', 500.00]
    );
    
    console.log('Datos insertatwo');
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    conexion.release();
  }
}

// Ejecutar funciones
(async () => {
  await crearTabla();
  await insertarDatos();
  await transferirDinero('001', '002', 250.00);
  await transferirDinero('001', '002', 2000.00); // Fallará por saldo insuficiente
  await crearProcedimiento();
  await llamarProcedimiento('001');
})();`,
        concepts: ['Transacciones', 'ACID', 'BEGIN/COMMIT/ROLLBACK', 'Procedimientos', 'Integridad de datos']
      }
    ]
  }
};