import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProductViewer from "./components/ProductViewer";
import Showcase from "./components/Showcase";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Performance from "./components/Performance";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main className="bg-black ">
      <Navbar />
      <Hero />
      <ProductViewer />
      <Showcase />
      <Performance />
    </main>
  );
};

export default App;
