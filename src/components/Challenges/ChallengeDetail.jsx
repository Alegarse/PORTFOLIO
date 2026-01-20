import React, { useState } from 'react'
import { ArrowLeft, Copy, Check, ChevronDown, ChevronUp, Lightbulb } from 'lucide-react'
import { textNBCh } from '../../core/data/dataChallenges/dataChallengesPage'
import { useSelector } from 'react-redux'

function ChallengeDetail({ desafio, onVolver }) {
  const [mostrarSolucion, setMostrarSolucion] = useState(false)
  const [codigoCopiado, setCodigoCopiado] = useState(null)
  const [targetsExpandidos, setObjetivosExpandidos] = useState(true)

  const { language } = useSelector((state) => state.menuComponentReducer);

  const copiarCodigo = async (codigo, id) => {
    try {
      await navigator.clipboard.writeText(codigo)
      setCodigoCopiado(id)
      setTimeout(() => setCodigoCopiado(null), 2000)
    } catch (err) {
      console.error('Error al copiar:', err)
    }
  }

  return (
    <div className="detalle-desafio">
      <button className="boton-volver" onClick={onVolver}>
        <ArrowLeft size={20} />
        <span>{textNBCh.backToCh[language]}</span>
      </button>

      <header className="header-desafio">
        <span className={`level-badge-large ${desafio.level.includes('Principiante') ? 'principiante' : desafio.level.includes('Intermedio') ? 'intermedio' : 'avanzado'}`}>
          <Lightbulb size={18} />
          {desafio.level}
        </span>
        
        <h1>{desafio.title}</h1>
        <p className="description-principal">{desafio.description}</p>
      </header>

      <section className="seccion-targets">
        <button 
          className="toggle-seccion"
          onClick={() => setObjetivosExpandidos(!targetsExpandidos)}
        >
          <h3>
            <TargetIcon size={20} />
            Objetivos de Aprendizaje
          </h3>
          {targetsExpandidos ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
        
        {targetsExpandidos && (
          <ul className="lista-targets">
            {desafio.targets.map((objetivo, i) => (
              <li key={i}>
                <span className="check-icon">✓</span>
                {objetivo}
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="seccion-codigo">
        <div className="header-codigo">
          <h3>
            <CodeIcon size={20} />
            Código Inicial
          </h3>
          <button 
            className="boton-copiar"
            onClick={() => copiarCodigo(desafio.initialCode, 'inicial')}
          >
            {codigoCopiado === 'inicial' ? <Check size={16} /> : <Copy size={16} />}
            {codigoCopiado === 'inicial' ? 'Copiado' : 'Copiar'}
          </button>
        </div>
        
        <pre className="codigo-block">
          <code>{desafio.initialCode}</code>
        </pre>
      </section>

      <section className="seccion-concepts">
        <h3>
          <BookIcon size={20} />
          Conceptos Clave
        </h3>
        <div className="tags-concepts">
          {desafio.concepts.map((concepto, i) => (
            <span key={i} className="concepto-tag">
              {concepto}
            </span>
          ))}
        </div>
      </section>

      <section className="seccion-solution">
        <button 
          className={`boton-mostrar-solution ${mostrarSolucion ? 'mostrada' : ''}`}
          onClick={() => setMostrarSolucion(!mostrarSolucion)}
        >
          {mostrarSolucion ? 'Ocultar Solución' : 'Mostrar Solución'}
        </button>
        
        {mostrarSolucion && (
          <div className="solution-container">
            <div className="header-codigo">
              <h3>
                <CheckCircleIcon size={20} />
                Solución Propuesta
              </h3>
              <button 
                className="boton-copiar"
                onClick={() => copiarCodigo(desafio.solution, 'solution')}
              >
                {codigoCopiado === 'solution' ? <Check size={16} /> : <Copy size={16} />}
                {codigoCopiado === 'solution' ? 'Copiado' : 'Copiar'}
              </button>
            </div>
            <pre className="codigo-block solution">
              <code>{desafio.solution}</code>
            </pre>
          </div>
        )}
      </section>

      <div className="navigation-detalle">
        <button className="boton-volver-large" onClick={onVolver}>
          <ArrowLeft size={20} />
          <span>Volver a la lista de desafíos</span>
        </button>
      </div>
    </div>
  )
}

// Icons inline para evitar imports adicionales
const TargetIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
)

const CodeIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="16,18 22,12 16,6"/>
    <polyline points="8,6 2,12 8,18"/>
  </svg>
)

const BookIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
  </svg>
)

const CheckCircleIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
)

export default ChallengeDetail