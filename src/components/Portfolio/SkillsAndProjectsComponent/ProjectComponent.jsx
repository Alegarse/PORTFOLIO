import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import data from '../../../core/data/portfolioData';
import ImageCarousel from '../../ImageCarousel/ImageCarousel';

/** Iamges import */
import img1 from '../../../assets/prtf1.png';
import img2 from '../../../assets/prtf2.png';
import img3 from '../../../assets/prtf3.png';
import img4 from '../../../assets/prtf4.png';

const ProjectComponent = (props) => {
  const { classSection, photoSrc } = props;

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
        <ImageCarousel images={[img1, img2, img3, img4]} />
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
