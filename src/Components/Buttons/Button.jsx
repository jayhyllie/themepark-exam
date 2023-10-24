import { AnimatePresence, motion } from "framer-motion";
import { buttonVariants } from "../../utils/transitions";
import "./Button.css";

function Button({ title, className }) {
  return (
    <AnimatePresence>
      <motion.button variants={buttonVariants} className={`btn ${className}`}>
        <span>&#9758;</span> {title}
      </motion.button>
    </AnimatePresence>
  );
}

export default Button;
