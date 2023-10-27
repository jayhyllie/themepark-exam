import { motion } from "framer-motion";
import { cards, contactInfo, pages, socialLinks } from "../../utils/props";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <ul className="footer__nav" role="list">
        {pages.map((page) => (
          <motion.li key={page.id}>{page.title}</motion.li>
        ))}
      </ul>
      <ul className="footer__links" role="list">
        {cards.map((card, i) => (
          <motion.li key={i}>{card.title}</motion.li>
        ))}
      </ul>
      <section className="footer__info">
        <h2>{contactInfo.name}</h2>
        <p>{contactInfo.addressOne}</p>
        <p>{contactInfo.addressTwo}</p>
        <p>{contactInfo.phoneNr}</p>
        <ul className="footer__info-social" role="list">
          {socialLinks.map((social, i) => (
            <li className="footer__info-social--link" key={i}>
              <a href="">
                <img src={social.src} alt={social.alt} />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </footer>
  );
}

export default Footer;
