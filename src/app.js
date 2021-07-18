import Theme from './styles/theme';
import { HeaderContainer } from './containers/header';
import { AboutContainer } from './containers/about';
import { WorksContainer } from './containers/works';

function App() {
  return (
    <Theme>
      <HeaderContainer />
      <AboutContainer />
      <WorksContainer />
    </Theme>
  );
}

export default App;
