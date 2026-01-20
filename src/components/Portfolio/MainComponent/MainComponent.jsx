import React from 'react';
import data from '../../../core/data/portfolioData';
import { useSelector } from 'react-redux';
import photo from '../../../assets/author-photo2.png';
import icon_pdf from '../../../assets/pdf.svg';
import cv_pdf from '../../../assets/docs/cv_ags.pdf';

const MainComponent = () => {
  const { language } = useSelector((state) => state.menuComponentReducer);
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
              href={cv_pdf}
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
