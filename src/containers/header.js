import { NavHashLink } from 'react-router-hash-link';
import { Navigation, Typography, NavLink, Button, Header, BgAnimation, StickyInfo } from '../components';

import contactData from '../fixtures/contact.json';
import heroData from '../fixtures/hero.json';

export function HeaderContainer() {
  const nav = ['Home', 'About', 'Skills', 'Work', 'Contact'];

  return (
    <>
      <Navigation>
        <Typography.HeroSub>Me.</Typography.HeroSub>
        <Navigation.Nav>
          {nav.map((item, index) => (
            <NavHashLink smooth to={`/#${item}`}>
              <NavLink orient={index % 2}>{item}</NavLink>
            </NavHashLink>
          ))}

          <Button primary>
            <span>Resume</span>
          </Button>
        </Navigation.Nav>
      </Navigation>

      <Header id="Home">
        <Header.Hero>
          <Typography.HeroSub>{heroData.salutation}</Typography.HeroSub>
          <Typography.HeroMain>{heroData.name}</Typography.HeroMain>
          {heroData.catchPhrases.map((phrase) => (
            <Typography.HeroMini>{phrase}</Typography.HeroMini>
          ))}
          <Header.CTA>
            <Button primary>
              <span>Resume</span>
            </Button>
            <Button>
              <span>Get in touch</span>
            </Button>
          </Header.CTA>
        </Header.Hero>
        <Header.Background>
          <BgAnimation />
        </Header.Background>
      </Header>

      <StickyInfo loc="left">
        {contactData.socialMedia.map((media) => (
          <StickyInfo.Link ico={media.name} linksTo={media.linksTo} />
        ))}
      </StickyInfo>
      <StickyInfo loc="right">
        <StickyInfo.Link text={contactData.email} linksTo={`mailto:${contactData.email}`} />
      </StickyInfo>
    </>
  );
}
