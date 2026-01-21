import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setLanguageAction } from './MenuComponentActions';
import data from '../../core/data/portfolioData';
import { setPortfolioLocation } from '../../pages/PortfolioPage/PortfolioPageActions';

const MenuComponent = () => {
  const dispatch = useDispatch();
  const { language } = useSelector((state) => state.menuComponentReducer);

  const setLanguage = (lang) => {
    dispatch(setLanguageAction(lang));
  };

  const onClickLinkHandler = (linkTo) => {
    let locPortfolio = linkTo;
    dispatch(setPortfolioLocation(locPortfolio));
  }

  return (
    <nav className="header-menu-list">
      <Link className="link-button" to="/" onClick={() => onClickLinkHandler("main")}>
      {data.nav_me[language]}
      </Link>
      <Link className="link-button" to="/" onClick={() => onClickLinkHandler("skills")}>
      {data.nav_skills[language]}
      </Link>
      <Link className="link-button" to="/" onClick={() => onClickLinkHandler("contact")}>
      {data.nav_contact[language]}
      </Link>
      <span className="separator-navbar">|</span>
      <Link className="link-button" to="/challenges" onClick={() => onClickLinkHandler("challenges")}>
        {data.nav_chgs[language]}
      </Link>
      <div>
        <select
          className="lang-select"
          id='lang-select'
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          aria-label="Seleccionar idioma"
        >
          <option value="es">ES</option>
          <option value="en">EN</option>
        </select>
      </div>
    </nav>
  );
};

export default MenuComponent;
