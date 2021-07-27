import parse from 'html-react-parser';
import Typography from '../components/Typography';
import About from '../components/About';
import TimelineTile from '../components/Tile';

import aboutData from '../fixtures/about.json';

export function AboutContainer() {
  return (
    <About id="About">
      <Typography.SectionTitle>About me</Typography.SectionTitle>
      <About.Description>
        <About.DescriptionStory>
          <Typography.AboutMain>{aboutData.main}</Typography.AboutMain>
          {aboutData.clauses.map((clause) => (
            <Typography.Clause>{parse(clause)}</Typography.Clause>
          ))}
        </About.DescriptionStory>
        <About.DescriptionImage />
      </About.Description>
      {/* <Typography.SubSectionTitle>My timeline</Typography.SubSectionTitle> */}
      <About.Timeline>
        {aboutData.timeline.map((timeline) => (
          <TimelineTile row={timeline.row} length={timeline.length} start={timeline.start}>
            <TimelineTile.Description>
              <TimelineTile.Title>{timeline.title}</TimelineTile.Title>
              <TimelineTile.Info>{timeline.description}</TimelineTile.Info>
            </TimelineTile.Description>
            <TimelineTile.Period>{timeline.period}</TimelineTile.Period>
          </TimelineTile>
        ))}
      </About.Timeline>
    </About>
  );
}
