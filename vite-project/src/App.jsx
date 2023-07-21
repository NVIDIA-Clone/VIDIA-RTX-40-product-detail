import Header from './components/Header';
import LandingPage from './components/LandingPage';
import { useContext } from 'react';
import { LandingPageProvider } from './components/LandingPageContext';
function App() {
  useContext(LandingPageProvider);
  return (
    <LandingPageProvider>
      <Header />
      <LandingPage />
    </LandingPageProvider>
  );
}

export default App;
