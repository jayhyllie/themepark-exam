import { motion } from "framer-motion";
import "./Button.css";

function Button({ title, className }) {
  return (
    <motion.button
      whileHover={{ scale: 1.3 }}
      whileTap={{ scale: 0.8 }}
      transition={{ ease: "easeInOut" }}
      className={`btn ${className}`}
    >
      {className === "secondary" ? <span>&#9758;</span> : <span>&#8826;</span>}{" "}
      {title}
    </motion.button>
  );
}

export default Button;
