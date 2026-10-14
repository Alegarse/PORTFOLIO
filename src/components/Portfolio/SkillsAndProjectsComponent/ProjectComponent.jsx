import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import data from '../../../core/data/portfolioData';
import ImageCarousel from '../../ImageCarousel/ImageCarousel';

const ProjectComponent = (props) => {
  const { classSection, images } = props;

  const [content, setContent] = useState({
    title: '',
    desc: '',
    tags: '',
  });

  const { language } = useSelector((state) => state.menuComponentReducer);

  const setContentSection = () => {
    setContent({
      title: data[`project_${classSection}_title`][language],
      desc: data[`project_${classSection}_desc`][language],
      tags: data[`project_${classSection}_tags`],
      link: data[`project_${classSection}_link`],
      link2: data[`project_${classSection}_link_gh`] ?? '',
      link_desc: data[`project_${classSection}_link_desc`][language],
      link_desc2:
        data[`project_${classSection}_link_desc_gh`]?.[language] ?? '',
    });
  };

  useEffect(() => {
    setContentSection();
  }, [language, classSection]);

  return (
    <section className="skills-box container">
      <div className="skills-img">
        <ImageCarousel images={images} />
      </div>

      <div className="skills-text">
        <h3 className="skills-title">{content.title}</h3>
        <span className="skills-desc">{content.desc}</span>
        <>
          {classSection !== 'prtf' && (
            <a
              className="skills-link"
              href={content.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {content.link_desc}
            </a>
          )}

          {(classSection === 'filmax' || classSection === 'prtf') && (
            <a
              className="skills-link"
              href={content.link2}
              target="_blank"
              rel="noopener noreferrer"
            >
              {content.link_desc2}
            </a>
          )}
        </>

        <span className="skills-tags">{content.tags}</span>
      </div>
    </section>
  );
};

export default ProjectComponent;
