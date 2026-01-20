import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainComponent from "../../components/Portfolio/MainComponent/MainComponent";
import { setActivityAction } from "../../components/HeaderComponent/HeaderComponentActions";

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
    </div>
  );
};

export default PortfolioPage;
