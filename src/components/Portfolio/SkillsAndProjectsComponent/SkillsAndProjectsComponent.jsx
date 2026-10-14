import data from '../../../core/data/portfolioData';
import SkillComponent from './SkillComponent';
import img_front from '../../../assets/skills_front.png';
import img_back from '../../../assets/skills_back.png';
import img_bbdd from '../../../assets/skills_bbdd.png';
import img_support from '../../../assets/skills_support.png';
import ProjectComponent from './ProjectComponent';

/** Iamges import */
import prtf1 from '../../../assets/prtf1.png';
import prtf2 from '../../../assets/prtf2.png';
import prtf3 from '../../../assets/prtf3.png';
import filmax1 from '../../../assets/filmax1.png';
import filmax2 from '../../../assets/filmax2.png';
import api1 from '../../../assets/api1.png';
import api2 from '../../../assets/api2.png';
import api3 from '../../../assets/api3.png';
import { useSelector } from 'react-redux';

const SkillsAndProjectsComponent = () => {
  const { portfolioLocation } = useSelector(
    (state) => state.portfolioPageReducer
  );
  return (
    <>
      {portfolioLocation === 'skills' ? (
        <div className="skills-container">
          <SkillComponent classSection="front" photoSrc={img_front} />
          <SkillComponent classSection="back" photoSrc={img_back} />
          <SkillComponent classSection="bbdd" photoSrc={img_bbdd} />
          <SkillComponent classSection="support" photoSrc={img_support} />
        </div>
      ) : (
        <div className="projects-container">
          <ProjectComponent classSection="apib" images={[api1, api2]} />
          <ProjectComponent classSection="filmax" images={[filmax1, filmax2]} />
          <ProjectComponent
            classSection="prtf"
            images={[prtf1]}
          />
        </div>
      )}
    </>
  );
};

export default SkillsAndProjectsComponent;
