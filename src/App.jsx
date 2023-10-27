import Navbar from "./Components/Navbar/Navbar";
import AnimatedRoutes from "./Components/Animations/AnimatedRoutes";
import { useEffect, useState } from "react";
import Splash from "./pages/Splash/Splash";
import Footer from "./Components/Footer/Footer";
import Button from "./Components/Buttons/Button";

function App() {
  const [showSplash, setShowSplash] = useState(localStorage.getItem('splashShown') !== 'true');
  
  useEffect(() => {
    if (showSplash) {
      const timer = setTimeout(() => {
        setShowSplash(false);
        localStorage.setItem('splashShown', 'true');
      }, 2000);
  
      return () => clearTimeout(timer);
    }
  }, [showSplash]);

  return showSplash ? (
    <Splash />
  ) : (
    <>
      <header>
        <Navbar />
        <a href="/" className="header_logo"><div className="header_logo"></div></a>
      <Button title="Buy tickets" className="secondary" /> 
      </header>
      <main>
        <AnimatedRoutes />
      </main>
      <Footer />
    </>
  );
}

export default App;
