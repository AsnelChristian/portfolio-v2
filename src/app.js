import Theme from './styles/theme';
import Button from './components/button';
import NavLink from './components/NavLink';
import BgAnimation from './components/BgAnimation';
import Navigation from './containers/NavBar';
import Header from './containers/Hero';

function App() {
  const nav = [
    { text: 'Home', linksTo: '#' },
    { text: 'About', linksTo: '#' },
    { text: 'Skills', linksTo: '#' },
    { text: 'Work', linksTo: '#' },
    { text: 'Contact', linksTo: '#' },
  ];
  return (
    <Theme>
      <Navigation>
        <div />
        <Navigation.Nav>
          {nav.map((item, index) => (
            <NavLink orient={index % 2} href={item.linksTo}>
              {item.text}
            </NavLink>
          ))}

          <Button primary>
            <span>Resume</span>
          </Button>
        </Navigation.Nav>
      </Navigation>

      <Header>
        <Header.Hero>
          <Header.Hero.Sub>Hello. I am </Header.Hero.Sub>
          <Header.Hero.Main>Asnel Christian </Header.Hero.Main>
          <Header.Hero.Mini>I make stuffs that run on the web.</Header.Hero.Mini>
          <Header.Hero.Mini>I make sense of data</Header.Hero.Mini>
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
    </Theme>
  );
}

export default App;
