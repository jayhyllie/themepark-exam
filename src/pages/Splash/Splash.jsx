import { animate, useMotionValue, useTransform, motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./Splash.css";
import logo from "/images/dreams-logos.jpeg?url";
import RollerCouster from "../../Components/RollerCouster/RollerCouster";

const SplashAnimation = () => {
  const count = useMotionValue(0);
  const calc = useTransform(count, Math.round);
  const [isCounting, setIsCounting] = useState(true);

  useEffect(() => {
    const animation = animate(count, 100, { duration: 2 });
    setTimeout(() => {
      setIsCounting(false);
    }, 3000);
    return animation.stop;
  }, [count]);

  return isCounting ? (
    <div className="loading">
      <RollerCouster />
      <motion.h1 className="splash__calc">{calc}</motion.h1>
    </div>
  ) : (
    <motion.h1 className="splash__logo">
      <img src={logo} alt="logo" />
    </motion.h1>
  );
};

function Splash() {
  return (
    <main id="splash">
      <div className="splash__wrapper">
        <SplashAnimation />
      </div>
    </main>
  );
}

export default Splash;
