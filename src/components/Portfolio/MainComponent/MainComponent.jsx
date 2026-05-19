import React from 'react';
import data from '../../../core/data/portfolioData';
import { useSelector } from 'react-redux';
import photo from '../../../assets/author-photo.png';
import icon_pdf from '../../../assets/pdf.svg';

const MainComponent = () => {
  const { language } = useSelector((state) => state.menuComponentReducer);
  let cvUrl = `${import.meta.env.BASE_URL}cv.html`;
  //if (language === 'en') cvUrl = `${import.meta.env.BASE_URL}cv_en.html`;
  return (
    <>
      <section className="info-box container">
        <div className="info-photo">
          <img
            src={photo}
            alt="Fotografía del autor"
            className="photo-author"
          />
        </div>

        <div className="info-text">
          <h1 className="info-title">Alejandro García Serrano</h1>
          <h3 className="info-title">{data.bit_me[language]}</h3>
          <span className="info-desc">{data.info_desc[language]}</span>
          <div className="info-link-container">
            <a
              className="info-link button"
              href={cvUrl}
              target="_blank"
              title="Visualizar el CV"
            >
              {data.more_info[language]}
              <img
                className="info_cv_icon"
                src={icon_pdf}
                alt="Icono del PDF"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainComponent;
