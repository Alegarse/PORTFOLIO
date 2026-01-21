import React, { useEffect, useState } from "react";

import NavbarLateral from "../../components/Challenges/NavbarLateral";
import ChallengeDetail from "../../components/Challenges/ChallengeDetail";
import ChallengesList from "../../components/Challenges/ChallengesList";
import {
  challengesData_EN,
  challengesData_ES,
} from "../../core/data/dataChallenges/challenges";
import { useDispatch, useSelector } from "react-redux";
import { setActivityAction } from "../../components/HeaderComponent/HeaderComponentActions";

function ChallengesPage() {
  const dispatch = useDispatch();
  const [devLanguageSelected, setDevLanguageSelected] = useState("html");
  const [challengeSelected, setChallengeSelected] = useState(null);

  const { language } = useSelector((state) => state.menuComponentReducer);

  const challengesData =
    language === "es" ? challengesData_ES : challengesData_EN;
  const devLanguages = Object.keys(challengesData);

  const handleSelectDevLang = (language) => {
    setDevLanguageSelected(language);
    setChallengeSelected(null);
  };

  const handleSelectChallenge = (challenge) => {
    setChallengeSelected(challenge);
  };

  const handleBack = () => {
    setChallengeSelected(null);
  };

  useEffect(() => {
    dispatch(setActivityAction("challenges"));
  }, []);

  return (
    <div className="app-container">
      <NavbarLateral
        devLanguages={devLanguages}
        devLanguageSelected={devLanguageSelected}
        onHandleSelectDevLang={handleSelectDevLang}
      />

      <main className="main-content">
        {challengeSelected ? (
          <ChallengeDetail desafio={challengeSelected} onVolver={handleBack} />
        ) : (
          <ChallengesList
            challenges={challengesData[devLanguageSelected]}
            devLanguageSelected={devLanguageSelected}
            onHandleSelectChallenge={handleSelectChallenge}
          />
        )}
      </main>
    </div>
  );
}

export default ChallengesPage;
