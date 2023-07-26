import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import OuterNavBar from "./components/OuterNavBar/OuterNavBar";
import { LandingPageProvider } from "./components/LandingPageContext";
import Footer from "./components/Footer";
import InnerNavbar from "./components/inner-navbar";
import Architecture from "./components/Architecture";
import Performance from "./components/Performance";
import RayTracing from "./components/RayTracing";
import Dlss from "./components/Dlss";

function App() {
  return (
    <>
      <LandingPageProvider>
        <Header />
        <OuterNavBar />
        <LandingPage />
        <InnerNavbar />
        <Architecture />
        {/* insert accolades here  */}
        <Performance />
        <RayTracing />
        <Dlss />
        <Footer />
      </LandingPageProvider>
    </>
  );
}

export default App;
