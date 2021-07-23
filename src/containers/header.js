import { useState } from 'react';
import { NavHashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { Navigation, Typography, NavLink, Button, Header, BgAnimation, StickyInfo } from '../components';
import useDocumentScrollThrottled from '../hooks/useDocumentScrollThrottled';

import contactData from '../fixtures/contact.json';
import heroData from '../fixtures/hero.json';

import resumePdf from '../lebenslauf.pdf';

export function HeaderContainer() {
  const [showNavBar, setShowNavBar] = useState(true);
  const [showShadow, setShowShadow] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);

  const nav = ['Home', 'About', 'Skills', 'Work', 'Contact'];
  const MINIMUM_SCROLL = 80;
  const TIMEOUT_DELAY = 400;

  useDocumentScrollThrottled((callbackData) => {
    const [previousScrollTop, currentScrollTop] = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setShowShadow(currentScrollTop > 2);

    setTimeout(() => {
      setShowNavBar(!(isScrolledDown && isMinimumScrolled));
    }, TIMEOUT_DELAY);
  });

  const handleShowDrawer = () => {
    setShowDrawer((previousShowDrawer) => !previousShowDrawer);
  };

  return (
    <>
      <Navigation toggleDrawer={handleShowDrawer} showDrawer={showDrawer} show={showNavBar} shadow={showShadow}>
        <Typography.HeroSub>Me.</Typography.HeroSub>
        <Navigation.Nav>
          {nav.map((item, index) => (
            <NavHashLink smooth to={`/#${item}`} key={`${item}-${index}`}>
              <NavLink orient={index % 2}>{item}</NavLink>
            </NavHashLink>
          ))}

          <Link to={resumePdf} target="_blank" download="asnel_resume.pdf" rel="noopener noreferrer">
            <Button primary>
              <span>Resume</span>
            </Button>
          </Link>
        </Navigation.Nav>
      </Navigation>
      <Navigation.MenuContainer showDrawer={showDrawer}>
        <Navigation.Menu>
          {nav.map((item, index) => (
            <NavHashLink onClick={handleShowDrawer} smooth to={`/#${item}`} key={`${item}-${index}-menu`}>
              <NavLink orient={index % 2}>{item}</NavLink>
            </NavHashLink>
          ))}
        </Navigation.Menu>
      </Navigation.MenuContainer>

      <Header id="Home">
        <Header.Hero>
          <Typography.HeroSub>{heroData.salutation}</Typography.HeroSub>
          <Typography.HeroMain>{heroData.name}</Typography.HeroMain>
          {heroData.catchPhrases.map((phrase) => (
            <Typography.HeroMini>{phrase}</Typography.HeroMini>
          ))}
          <Header.CTA>
            <Link to={resumePdf} target="_blank" download="asnel_resume.pdf" rel="noopener noreferrer">
              <Button primary>
                <span>Resume</span>
              </Button>
            </Link>
            <NavHashLink smooth to="#Contact">
              <Button>
                <span>Get in touch</span>
              </Button>
            </NavHashLink>
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
