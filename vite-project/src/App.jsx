import Header from "./components/Header/Header";
import LandingPage from "./components/LandingPage";
import OuterNavBar from "./components/OuterNavBar/OuterNavBar";
import { LandingPageProvider } from "./components/LandingPageContext";
import Footer from "./components/Footer";
import InnerNavbar from "./components/inner-navbar";
import Architecture from "./components/Architecture";
import Performance from "./components/Performance";
import RayTracing from "./components/RayTracing/RayTracing";
import Accolades from "./components/Accolades/Accolades";
import Reflex from "./components/Reflex";
import Dlss from "./components/Dlss";

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
        <Footer />
      </LandingPageProvider>
    </>
  );
}

export default App;
