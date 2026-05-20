import data from '../../../core/data/portfolioData';
import SkillComponent from './SkillComponent';
import img_front from '../../../assets/skills_front.png';
import img_back from '../../../assets/skills_back.png';
import img_bbdd from '../../../assets/skills_bbdd.png';
import ProjectComponent from './ProjectComponent';

const SkillsAndProjectsComponent = () => {
  return (
    <>
      <div className="skills-container">
        <SkillComponent classSection="front" photoSrc={img_front} />
        <SkillComponent classSection="back" photoSrc={img_back} />
        <SkillComponent classSection="bbdd" photoSrc={img_bbdd} />
      </div>
      <div className="projects-container">
        <ProjectComponent classSection="prtf" photoSrc={img_front} />
      </div>
    </>
  );
};

export default SkillsAndProjectsComponent;
