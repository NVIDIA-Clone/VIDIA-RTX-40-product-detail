import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import OuterNavBar from "./components/OuterNavBar";
import { LandingPageProvider } from "./components/LandingPageContext";
import Footer from "./components/Footer";
import InnerNavbar from "./components/inner-navbar";
import Architecture from "./components/Architecture"

function App() {
  return (
    <>
      <LandingPageProvider>
        <Header />
        <OuterNavBar />
        <LandingPage />
        <InnerNavbar />
        <Architecture />
        <Footer />
      </LandingPageProvider>
    </>
  );
}

export default App;
