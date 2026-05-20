import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import data from '../../../core/data/portfolioData';
import ImageCarousel from '../../ImageCarousel/ImageCarousel';

const ProjectComponent = (props) => {
  const { classSection, photoSrc, images } = props;

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
    });
  };

  useEffect(() => {
    setContentSection();
  }, []);

  return (
    <section className="skills-box container">
      <div className="skills-img">
        <ImageCarousel images={images} />
      </div>

      <div className="skills-text">
        <h3 className="skills-title">{content.title}</h3>
        <span className="skills-desc">{content.desc}</span>
        <span className="skills-tags">{content.tags}</span>
      </div>
    </section>
  );
};

export default ProjectComponent;
