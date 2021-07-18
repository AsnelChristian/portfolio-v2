import Theme from './styles/theme';
import { HeaderContainer } from './containers/header';
import { AboutContainer } from './containers/about';

function App() {
  return (
    <Theme>
      <HeaderContainer />
      <AboutContainer />
    </Theme>
  );
}

export default App;
