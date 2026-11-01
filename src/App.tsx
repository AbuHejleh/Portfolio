import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Footer,
  Hero,
  Navbar,
  StarsCanvas,
  Tech,
} from "./components";
import Marquee from "./components/Marquee";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-ink text-bone overflow-x-hidden">
        <div className="grain" />
        <Navbar />
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Tech />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
