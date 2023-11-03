import { useState } from "react";
import AnimatedPage from "../../Components/Animations/AnimatedPage";
import RollerCouster from "../../Components/RollerCouster/RollerCouster";
import { contactInfo, socialLinks } from "../../utils/props";
import "./Contact.css";
import Modal from "../../Components/Modal/Modal";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleModal(e) {
    e.preventDefault();
    setIsOpen(true);
  }
  return (
    <AnimatedPage>
      <RollerCouster />
      <section className="contact">
        <section className="contact__form">
          <div className="form--heading">
            <h3>Reach out !</h3>
            <p>Let us help you to make your visit even better</p>
          </div>
          <form action="" className="form">
            <section className="form__inner">
              <input type="text" placeholder="First Name" id="first" />
              <input type="text" placeholder="Last Name" id="last" />
              <input type="text" placeholder="Mail" id="mail" />
              <input type="text" placeholder="Phone" id="phone" />
            </section>
            <input type="text" placeholder="Message" id="message" />
            <button type="submit" onClick={handleModal} className="form__button">Submit</button>
          </form>
        </section>
        <section className="contact__info">
          <h3 className="info__heading">Contact Information</h3>
          <section className="info__details">
            <h2>{contactInfo.name}</h2>
            <p>{contactInfo.addressOne}</p>
            <p>{contactInfo.addressTwo}</p>
            <br></br>
            <p>Call us: {contactInfo.phoneNr}</p>
            <br></br>
            <p>We are open Monday-Saturday</p>
            <p>08.00 am - 05.00 pm</p>
          </section>
          <section className="info__social">
            <h3 className="info__social--heading">Follow us</h3>
            <ul className="info__social--links" role="list">
              {socialLinks.map((social, i) => (
                <li className="info__social--link" key={i}>
                  {social.alt}
                </li>
              ))}
            </ul>
          </section>
        </section>
      </section>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </AnimatedPage>
  );
};

export default Contact;
