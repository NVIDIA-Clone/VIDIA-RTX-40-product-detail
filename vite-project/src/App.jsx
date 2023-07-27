import Header from "./components/Header/Header";
import LandingPage from "./components/LandingPage";
import OuterNavBar from "./components/OuterNavBar/OuterNavBar";
import { LandingPageProvider } from "./components/LandingPageContext";
import Footer from "./components/Footer";
import InnerNavbar from "./components/InnerNavbar";
import Architecture from "./components/Architecture/Architecture";
import Performance from "./components/Performance";
import RayTracing from "./components/RayTracing/RayTracing";
import Accolades from "./components/Accolades/Accolades";
import Reflex from "./components/Reflex";
import Dlss from "./components/Dlss";
import Specs from "./components/Specs";
import Creative from "./components/Creative/Creative";
import Shop from "./components/Shop";

function App() {
  return (
    <>
      <LandingPageProvider>
        <Header />
        <OuterNavBar />
        <LandingPage />
        <InnerNavbar />
        <Accolades />
        <Architecture />
        <Performance />
        <RayTracing />
        <Dlss />
        <Reflex />
        <Specs />
        <Creative />
        <Shop />
        <Footer />
      </LandingPageProvider>
    </>
  );
}

export default App;

