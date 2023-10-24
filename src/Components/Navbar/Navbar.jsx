import { Link } from "react-router-dom";
import "./Navbar.css";
import { motion } from "framer-motion";
import { useState } from "react";

const pages = [
  { title: "Home", path: "/", id: 1},
  { title: "Tickets", path: "/tickets", id: 2 },
  { title: "About", path: "/about", id: 3 },
  { title: "Contact", path: "/contact", id: 4 },
];

const Navbar = () => {
  const [activeId, setActiveId] = useState(1);
  return (
    <div className="nav">
      <div className="nav_logo">
        <Link className="nav-link" to={pages[0].path} />
      </div>
      <ul className="nav_links" role="list">
        {pages &&
          pages.map((page, index) => (
            <motion.li
              className={"nav-item " + (activeId === page.id ? "active" : "")}
              onClick={() => setActiveId(page.id)}
              key={index}
              whileHover={{ scale: 1.3 }}
              transition={{ duration: 0.3, ease: "easeIn" }}
            >
              <Link className="nav-link" to={page.path}>
                {page.title}
              </Link>
            </motion.li>
          ))}
      </ul>
    </div>
  );
};

export default Navbar;
