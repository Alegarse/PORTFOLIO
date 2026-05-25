import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainComponent from "../../components/Portfolio/MainComponent/MainComponent";
import { setActivityAction } from "../../components/HeaderComponent/HeaderComponentActions";
import SkillsAndProjectsComponent from "../../components/Portfolio/SkillsAndProjectsComponent/SkillsAndProjectsComponent";
import ContactComponent from "../../components/Portfolio/ContactComponent/ContactComponent";
import { setPortfolioLocation } from "./PortfolioPageActions";

const PortfolioPage = () => {
  const dispatch = useDispatch();
  const { portfolioLocation } = useSelector(
    (state) => state.portfolioPageReducer,
  );
  useEffect(() => {
    dispatch(setActivityAction("portfolio"));
  }, []);
  return (
    <div className="portfolio-container">
      {portfolioLocation === "main" && <MainComponent />}
      {portfolioLocation === "skills" && <SkillsAndProjectsComponent />}
      {portfolioLocation === "projects" && <SkillsAndProjectsComponent />}
      {portfolioLocation === "contact" && <ContactComponent />}
    </div>
  );
};

export default PortfolioPage;
