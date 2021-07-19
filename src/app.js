import Theme from './styles/theme';
import { HeaderContainer } from './containers/header';
import { AboutContainer } from './containers/about';
import { WorksContainer } from './containers/works';
import { ContactContainer } from './containers/contact';

function App() {
  return (
    <Theme>
      <HeaderContainer />
      <AboutContainer />
      <WorksContainer />
      <ContactContainer />
    </Theme>
  );
}

export default App;
