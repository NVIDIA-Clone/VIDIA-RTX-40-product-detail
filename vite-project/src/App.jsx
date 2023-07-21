import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import { LandingPageProvider } from "./components/LandingPageContext";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <LandingPageProvider>
        <Header />
        <LandingPage />
        <Footer />
      </LandingPageProvider>
    </>
  );
}

export default App;
