import Header from './components/Header';
import LandingPage from './components/LandingPage';
import OuterNavBar from './components/OuterNavBar';
import { LandingPageProvider } from './components/LandingPageContext';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <LandingPageProvider>
        <Header />
        <OuterNavBar />
        <LandingPage />
        <Footer />
      </LandingPageProvider>
    </>
  );
}

export default App;
