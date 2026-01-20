import React from 'react'
import notfound from '../../assets/error-404.png'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { mainData } from '../../core/data/layoutData';

const NotFoundPage = () => {
    const navigate = useNavigate();
    const { language } = useSelector((state) => state.menuComponentReducer);

    const goHome = () => {
        navigate("/")
    }
  return (
    <>
      <div className="body-404-container">
        <div className="page-404-container">
          <img className="" src={notfound} alt="Imagen de adorno de la página 404"/>
          <div className="info-404-container">
            <h2 className="title-error-404" title={mainData.error_404_title[language]}>{mainData.error_404[language]}</h2>
            <h2>
              {mainData.text_404[language]}
            </h2>
            <button className="btn-to-home" onClick={goHome}>
              {mainData.go_home[language]}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFoundPage