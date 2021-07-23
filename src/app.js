import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

import Theme from './styles/theme';
import { HeaderContainer } from './containers/header';
import { AboutContainer } from './containers/about';
import { WorksContainer } from './containers/works';
import { ContactContainer } from './containers/contact';
import { SkillsContainer } from './containers/skills';

function App() {
  return (
    <Theme>
      <HeaderContainer />
      <AboutContainer />
      <SkillsContainer />
      <WorksContainer />
      <ContactContainer />
      <ReactNotification />
    </Theme>
  );
}

export default App;
