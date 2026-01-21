import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import data from '../../../core/data/portfolioData';

const SkillComponent = (props) => {

    const { classSection, photoSrc } = props;

    const [content, setContent] = useState({
        title: "",
        desc: "", 
        tags: ""
    })

    const { language } = useSelector((state) => state.menuComponentReducer);

    const setContentSection = () => {
        setContent({
            title:data[`skills_${classSection}_title`][language],
            desc:data[`skills_${classSection}_desc`][language],
            tags:data[`skills_${classSection}_tags`],
        })
    }
 
    useEffect(() => {
        setContentSection()
    }, [])

  return (
    <section className="skills-box container">
        <div className="skills-img">
          <img
            src={photoSrc}
            alt="Fotografía del autor"
            className="img-section"
          />
        </div>

        <div className="skills-text">
          <h3 className="skills-title">{content.title}</h3>
          <span className="skills-desc">{content.desc}</span>
          <span className="skills-tags">{content.tags}</span>
        </div>
      </section>
  )
}

export default SkillComponent