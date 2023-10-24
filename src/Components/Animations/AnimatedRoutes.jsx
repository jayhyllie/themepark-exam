import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router";
import Home from "../../pages/Home/Home";
import Tickets from "../../pages/Tickets/Tickets";
import About from "../../pages/About/About";
import Contact from "../../pages/Contact/Contact";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
