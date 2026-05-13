import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProductViewer from "./components/ProductViewer";

const App = () => {
  return (
    <main className="bg-black h-screen">
      <Navbar />
      <Hero />
      <ProductViewer />
    </main>
  );
};

export default App;
