import Header from './components/Header';
//LANDING PAGE
import LandingPage from './components/LandingPage';
import { LandingPageProvider } from './components/LandingPageContext';

import { useContext, useState } from 'react';
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
