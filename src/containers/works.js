import Typography from '../components/Typography';
import WorkInstance from '../components/WorkInstance';
import SkillCard from '../components/skillCard';

import portfolioData from '../fixtures/protfolio.json';

export function WorksContainer() {
  return (
    <WorkInstance.Container id="Projects">
      <Typography.SectionTitle>Projects</Typography.SectionTitle>
      {portfolioData.map((work, index) => (
        <WorkInstance flow={index % 2}>
          <WorkInstance.View flow={index % 2} img={work.image} linksTo={work.link} />
          <WorkInstance.Info flow={index % 2}>
            <WorkInstance.Title linksTo={work.link}>{work.title}</WorkInstance.Title>
            <WorkInstance.Desc flow={index % 2}>
              <span>{work.description}</span>
            </WorkInstance.Desc>
            <WorkInstance.Tools flow={index % 2}>
              {work.technologies.map((lang) => (
                <SkillCard ico={lang.icon} name={lang.name} />
              ))}
            </WorkInstance.Tools>
          </WorkInstance.Info>
        </WorkInstance>
      ))}
    </WorkInstance.Container>
  );
}
