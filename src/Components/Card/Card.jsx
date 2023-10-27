import { cardContent } from "../../utils/transitions";
import Button from "../Buttons/Button";
import "./Card.css";
import { motion } from "framer-motion";

function Card({ title_long, title, subTitle, link, buttonTitle, className, randomImage }) {

  return (
    <section className="card">
      <a href={`/${link}`} className="card__title">
        {title_long}
      </a>
      <section className="card__inner">
        <div className="card__inner--imageWrapper">
          <div
            className="card__inner--imageWrapper-img"
            style={{ backgroundImage: `url(${randomImage})` }}
          ></div>
        </div>
        <motion.div
          className="card__inner--content"
          initial="initial"
          animate="initial"
          whileHover="animate"
          transition="transition"
        >
          <div className="card__inner--content-header">
            <h3 className="card__inner--content-header__title">{title}</h3>
            <p className="card__inner--content-header__subTitle">{subTitle}</p>
          </div>
          <motion.div
            className="card__inner--content-body"
            variants={cardContent}
          >
            <a href={`/${link}`} className="card__inner--content-body__link">
              More info
            </a>
          </motion.div>
          <div className="card__inner--content-footer">
            <a href={`/${link}`} className="card__inner--content-footer__link">
              <Button title={buttonTitle} className={className} />
            </a>
          </div>
        </motion.div>
      </section>
    </section>
  );
}

export default Card;
