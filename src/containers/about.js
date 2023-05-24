import parse from 'html-react-parser';
import Typography from '../components/Typography';
import About from '../components/About';
import TimelineTile from '../components/Tile';

import aboutData from '../fixtures/about.json';
import { TimeLine } from '../components/TimeLine';
import { SkillCard, Skills } from '../components';

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
      <div style={{ marginTop: 30 }} />
      <Typography.SectionTitle>Experience</Typography.SectionTitle>
      {aboutData.timeline
        .filter((timeline) => timeline.type === 'work')
        .map((timeline) => (
          <TimeLine variant={timeline.type}>
            <TimelineTile.Title>{timeline.title}</TimelineTile.Title>
            <TimelineTile.Title style={{ color: '#2dd881' }}>{timeline.company}</TimelineTile.Title>
            <TimelineTile.Period>{timeline.period}</TimelineTile.Period>
            <TimelineTile.Info>{timeline.description}</TimelineTile.Info>
            <div style={{ marginTop: 16 }} />
            {timeline.tasks.map((task) => (
              <TimelineTile.Info>&rarr; {task}</TimelineTile.Info>
            ))}
            <Skills.ListContainer>
              <Skills.List start>
                {timeline.stack.map((lang, index) => (
                  <SkillCard name={lang.name} ico={lang.icon} key={index} border />
                ))}
              </Skills.List>
            </Skills.ListContainer>
          </TimeLine>
        ))}

      <div style={{ marginTop: 150 }} />
      <Typography.SectionTitle>Volunteering / Open source</Typography.SectionTitle>
      {aboutData.timeline
        .filter((timeline) => timeline.type === 'Open source')
        .map((timeline) => (
          <TimeLine variant={timeline.type}>
            <TimelineTile.Title>{timeline.title}</TimelineTile.Title>
            <TimelineTile.Period>{timeline.period}</TimelineTile.Period>
            <TimelineTile.Info>{timeline.description}</TimelineTile.Info>
            <div style={{ marginTop: 16 }} />
            {timeline.tasks.map((task) => (
              <TimelineTile.Info>&rarr; {task}</TimelineTile.Info>
            ))}
            <Skills.ListContainer>
              <Skills.List start>
                {timeline.stack.map((lang, index) => (
                  <SkillCard name={lang.name} ico={lang.icon} key={index} border />
                ))}
              </Skills.List>
            </Skills.ListContainer>
          </TimeLine>
        ))}

      <div style={{ marginTop: 150 }} />
      <Typography.SectionTitle>Education</Typography.SectionTitle>
      {aboutData.timeline
        .filter((timeline) => timeline.type === 'education')
        .map((timeline) => (
          <TimeLine variant={timeline.type}>
            <TimelineTile.Title>{timeline.title}</TimelineTile.Title>
            <TimelineTile.Period>{timeline.period}</TimelineTile.Period>
            <TimelineTile.Info>{timeline.description}</TimelineTile.Info>
            <div style={{ marginTop: 16 }} />
            {timeline.tasks.map((task) => (
              <TimelineTile.Info>&rarr; {task}</TimelineTile.Info>
            ))}
            <Skills.ListContainer>
              <Skills.List start>
                {timeline.stack.map((lang, index) => (
                  <SkillCard name={lang.name} ico={lang.icon} key={index} border />
                ))}
              </Skills.List>
            </Skills.ListContainer>
          </TimeLine>
        ))}
    </About>
  );
}
