import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setLanguageAction } from './MenuComponentActions';
import data from '../../core/data/portfolioData';

const MenuComponent = () => {
  const dispatch = useDispatch();
  const { language } = useSelector((state) => state.menuComponentReducer);

  const setLanguage = (lang) => {
    dispatch(setLanguageAction(lang));
  };

  return (
    <nav className="header-menu-list">
      <Link className="link-button" to="/">
      {data.nav_me[language]}
      </Link>
      <span className="separator-navbar">|</span>
      <Link className="link-button" to="/challenges">
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
