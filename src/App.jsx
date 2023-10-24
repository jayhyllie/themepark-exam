import Navbar from "./Components/Navbar/Navbar";
import AnimatedRoutes from "./Components/Animations/AnimatedRoutes";
import { useEffect, useState } from "react";
import Splash from "./pages/Splash/Splash";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 6000)
  }, []);

  return  isLoading ? (
    <Splash />
  ) : (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <AnimatedRoutes />
      </main>
    </>
  );
}

export default App;
