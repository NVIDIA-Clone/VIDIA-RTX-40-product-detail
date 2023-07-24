import Header from './components/Header';
import LandingPage from './components/LandingPage';
import OuterNavBar from './components/OuterNavBar';
import { LandingPageProvider } from './components/LandingPageContext';
import Accolades from './components/Accolades/Accolades';
import { AccoladesItemsProvider } from './components/Accolades/AccoladesItemsContext';
import Footer from './components/Footer';
import InnerNavbar from './components/inner-navbar';

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
        <Footer />
      </LandingPageProvider>
    </>
  );
}

export default App;
