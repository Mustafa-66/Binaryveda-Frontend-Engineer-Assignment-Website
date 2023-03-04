import "./App.css";
import NavBar from "./components/navbar";
import HeroSection from "./components/heroSection";
import CardsSection from "./components/cardSection";
import SplitContent from "./components/splitContent";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <CardsSection />
      <SplitContent />
      <Footer />
    </>
  );
}

export default App;
