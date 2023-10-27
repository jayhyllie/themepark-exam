import { motion } from "framer-motion";

const animations = {
  initial: { scaleY: 0, opacity: 0 },
  animate: { scaleY: 1, opacity: 1 },
  exit: { scaleY: 0, opacity: 0 },
  transition: { duration: 1, ease: "easeInOut", delay: 1},
};

const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition="transition"
      style={{ maxWidth: "100vw" }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
