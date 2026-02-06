import React from 'react';
import { ChevronRight, Star, Award, Target } from 'lucide-react';
import { useSelector } from 'react-redux';

const ChallengesList = ({
  challenges,
  general,
  devLanguageSelected,
  onHandleSelectChallenge,
}) => {
  const { language } = useSelector((state) => state.menuComponentReducer);

  return (
    <div className="lista-challenges">
      <header className="header-lenguaje">
        <div className="info-lenguaje">
          <h1>{challenges.title}</h1>
          <p>{challenges.description}</p>
        </div>
        <div className="stats-lenguaje">
          <span className="badge-cantidad">
            {challenges.challenges.length} {general.challenge}
          </span>
        </div>
      </header>

      <div className="grid-challenges">
        {challenges.challenges.map((challenge, index) => (
          <article
            key={challenge.id}
            className="tarjeta-desafio"
            onClick={() => onHandleSelectChallenge(challenge)}
            style={{ '--delay': `${index * 0.1}s` }}
          >
            <div className="numero-desafio">
              {String(index + 1).padStart(2, '0')}
            </div>

            <div className="contenido-tarjeta">
              <span
                className={`level-badge ${challenge.level.includes('Principiante') ? 'principiante' : challenge.level.includes('Intermedio') ? 'intermedio' : 'avanzado'}`}
              >
                {challenge.level.split(' ')[0]}
              </span>

              <h3>{challenge.title}</h3>
              <p>{challenge.description}</p>

              <div className="targets-preview">
                <Target size={16} />
                <span>
                  {challenge.targets.length} {general.target}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="tarjeta-inspiradora">
        <div className="icono-inspiradora">
          <Award size={40} />
        </div>
        <div className="texto-inspirador">
          <h3>{general.title}</h3>
          <p>{general.paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default ChallengesList;
