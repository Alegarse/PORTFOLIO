import React, { useEffect, useState } from 'react';

import NavbarLateral from '../../components/Challenges/NavbarLateral';
import ChallengeDetail from '../../components/Challenges/ChallengeDetail';
import ChallengesList from '../../components/Challenges/ChallengesList';
import {
  challengesData_EN,
  challengesData_ES,
} from '../../core/data/dataChallenges/challenges';
import { useDispatch, useSelector } from 'react-redux';
import { setActivityAction } from '../../components/HeaderComponent/HeaderComponentActions';

function ChallengesPage() {
  const dispatch = useDispatch();
  const [devLanguageSelected, setDevLanguageSelected] = useState('html');
  const [challengeSelected, setChallengeSelected] = useState(null);

  const [isNavOpen, setIsNavOpen] = useState(false);
  const { language } = useSelector((state) => state.menuComponentReducer);

  const challengesData =
    language === 'es' ? challengesData_ES : challengesData_EN;
  const devLanguages = Object.keys(challengesData);

  const handleSelectDevLang = (language) => {
    setDevLanguageSelected(language);
    setChallengeSelected(null);
    setIsNavOpen(false);
  };

  const handleSelectChallenge = (challenge) => {
    setChallengeSelected(challenge);
    setIsNavOpen(false);
  };

  const handleBack = () => {
    setChallengeSelected(null);
  };

  useEffect(() => {
    dispatch(setActivityAction('challenges'));
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setIsNavOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <div className="app-container">
      <button
        className="burger-btn"
        onClick={() => setIsNavOpen((v) => !v)}
        aria-label={isNavOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={isNavOpen}
      >
        {isNavOpen ? '✕' : '☰'}
      </button>
      {isNavOpen && (
        <div
          className="navbar-overlay"
          onClick={() => setIsNavOpen(false)}
          aria-hidden="true"
        />
      )}
      <NavbarLateral
        className={isNavOpen ? 'open' : ''}
        devLanguages={devLanguages}
        devLanguageSelected={devLanguageSelected}
        onHandleSelectDevLang={handleSelectDevLang}
      />

      <main className="main-content">
        {challengeSelected ? (
          <ChallengeDetail
            desafio={challengeSelected}
            general={challengesData.general}
            onVolver={handleBack}
          />
        ) : (
          <ChallengesList
            challenges={challengesData[devLanguageSelected]}
            general={challengesData.general}
            devLanguageSelected={devLanguageSelected}
            onHandleSelectChallenge={handleSelectChallenge}
          />
        )}
      </main>
    </div>
  );
}

export default ChallengesPage;
