import Header from "./components/Header";
import Footer from "./components/Footer";

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
