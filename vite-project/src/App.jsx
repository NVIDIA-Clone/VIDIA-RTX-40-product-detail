
import Header from './components/Header/Header';
import LandingPage from './components/LandingPage';
import OuterNavBar from './components/OuterNavBar/OuterNavBar';
import { LandingPageProvider } from './components/LandingPageContext';
import Footer from './components/Footer';
// import InnerNavbar from './components/InnerNavbar';
import Architecture from './components/Architecture/Architecture';
import Performance from './components/Performance';
import RayTracing from './components/RayTracing/RayTracing';
import Accolades from './components/Accolades/Accolades';
import Reflex from './components/Reflex';
import Dlss from './components/Dlss';
import Creative from './components/Creative/Creative';
import Specs from './components/Specs/Specs';
import { ArchitectureProvider } from './components/Architecture/ArchitectureContext';
import Shop from './components/Shop';
import Additional from './components/Additional/Additional';
import Gallery from './components/Gallery/Gallery';


function App() {
  return (
    <>
      <LandingPageProvider>
        <Header />
        <OuterNavBar />
        <LandingPage />
        <InnerNavbar /> 
        <Accolades />
        <ArchitectureProvider>
          <Architecture />
        </ArchitectureProvider>
        <Performance />
        <RayTracing />
        <Dlss />
        <Reflex />
        <Creative />
        <Additional />
        <Specs />
        <Gallery />
        <Shop />
        <Footer />
      </LandingPageProvider>
    </>
  );
}

export default App;
