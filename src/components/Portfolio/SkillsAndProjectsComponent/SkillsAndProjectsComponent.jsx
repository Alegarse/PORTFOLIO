import data from '../../../core/data/portfolioData';
import SkillComponent from './SkillComponent';
import img_front from '../../../assets/skills_front.png';
import img_back from '../../../assets/skills_back.png';
import img_bbdd from '../../../assets/skills_bbdd.png';
import ProjectComponent from './ProjectComponent';

/** Iamges import */
import prtf1 from '../../../assets/prtf1.png';
import prtf2 from '../../../assets/prtf2.png';
import prtf3 from '../../../assets/prtf3.png';
import filmax1 from '../../../assets/filmax1.png';
import filmax2 from '../../../assets/filmax2.png';

const SkillsAndProjectsComponent = () => {
  return (
    <>
      {/*
      <div className="skills-container">
        <SkillComponent classSection="front" photoSrc={img_front} />
        <SkillComponent classSection="back" photoSrc={img_back} />
        <SkillComponent classSection="bbdd" photoSrc={img_bbdd} />
      </div>
     */}
      <div className="projects-container">
        <ProjectComponent
          classSection="prtf"
          photoSrc={img_front}
          images={[prtf1, prtf2, prtf3]}
        />
        <ProjectComponent
          classSection="filmax"
          photoSrc={img_front}
          images={[filmax1, filmax2]}
        />
      </div>
    </>
  );
};

export default SkillsAndProjectsComponent;
