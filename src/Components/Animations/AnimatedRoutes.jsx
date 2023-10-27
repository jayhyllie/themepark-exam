import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router";
import Home from "../../pages/Home/Home";
import Media from "../../pages/Media/Media"
import Contact from "../../pages/Contact/Contact";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false} style={{ maxWidth: "100%" }}>
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path="/media" element={<Media />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
