import Typewriter from 'typewriter-effect';
import { SkillCard, Typography, Skills, Terminal } from '../components';
import stackData from '../fixtures/stack.json';

export function SkillsContainer() {
  return (
    <Skills.Section id="Skills">
      <Typography.SectionTitle>Skills</Typography.SectionTitle>
      <Skills>
        <Skills.TerminalContainer>
          <Terminal>
            <Terminal.ControlBar />
            <Terminal.ControlScreen>
              <span>>></span>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(250)
                    .typeString('I have used several stack and languages so far.')
                    .pauseFor(700)
                    .deleteAll()
                    .typeString('<strong><span style="color: #27ae60;">Coding</span></strong> is like writing poems.')
                    .pauseFor(1000)
                    .deleteChars(19)
                    .typeString('all about <strong><span style="color: #e36397;"> practice.</span></strong>')
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString('Python | JavaScript | Java | React.js | RestAPI ...')
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString(
                      '<span style="color: #27ae60;">Beautiful</span> is better than <span style="color: #e36397;">ugly</span>. <br/>'
                    )
                    .pauseFor(300)
                    .typeString(
                      '<span style="color: #27ae60;">Explicit</span> is better than <span style="color: #e36397;">implicit</span>. <br/>'
                    )
                    .pauseFor(300)
                    .typeString(
                      '<span style="color: #27ae60;">Simple</span> is better than <span style="color: #e36397;">complex</span>. <br/>'
                    )
                    .pauseFor(1000)
                    .start();
                }}
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 60,
                  deleteSpeed: 20,
                }}
                style={{ display: 'inline-flex' }}
              />
            </Terminal.ControlScreen>
          </Terminal>
        </Skills.TerminalContainer>
        <Skills.ListContainer>
          <Skills.List>
            {stackData.map((lang, index) => (
              <SkillCard name={lang.name} ico={lang.icon} key={index} />
            ))}
          </Skills.List>
        </Skills.ListContainer>
      </Skills>
    </Skills.Section>
  );
}
