import Header from './components/Header';
import LandingPage from './components/LandingPage';
import OuterNavBar from './components/OuterNavBar';
import { LandingPageProvider } from './components/LandingPageContext';
import Footer from './components/Footer';
import InnerNavbar from './components/inner-navbar';
import Performance from './components/Performance';
import Accolades from './components/Accolades/Accolades';
import { AccoladesItemsProvider } from './components/Accolades/AccoladesItemsContext';

function App() {
  return (
    <>
      <LandingPageProvider>
        <Header />
        <OuterNavBar />
        <LandingPage />
        <InnerNavbar />
        <AccoladesItemsProvider>
          <Accolades />
        </AccoladesItemsProvider>
        <Performance />
        <Footer />
      </LandingPageProvider>
    </>
  );
}

export default App;
