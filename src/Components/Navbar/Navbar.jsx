import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { pages } from "../../utils/props";
import "./Navbar.css";
import {
  ListItemVariants,
  ListVariants,
  sidebar,
  useDimensions,
} from "../../utils/transitions";
import Toggle from "./Toggle/Toggle";

const Navbar = () => {
  const [activeId, setActiveId] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav
      initial={false}
      animate={isMenuOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className={isMenuOpen ? "active" : ""}
    >
      <motion.div className="background" variants={sidebar} />
      <motion.ul variants={ListVariants} className="nav__links">
        {pages &&
          pages.map((page, index) => (
            <motion.li
              className={"nav-item " + (activeId === page.id ? "active" : "")}
              onClick={() => {
                setActiveId(page.id);
                setIsMenuOpen(false);
              }}
              variants={ListItemVariants}
              key={index}
              whileHover={{ scale: 1.3 }}
            >
              <Link className="nav-link" to={page.path}>
                {page.title}
              </Link>
            </motion.li>
          ))}
      </motion.ul>
      <Toggle toggle={toggleMenu} isOpen={isMenuOpen} />
    </motion.nav>
  );
};

export default Navbar;
