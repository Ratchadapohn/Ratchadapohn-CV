import React from "react";
import "./Footer.css";
import { MdAttachEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiOutlineCursorArrowRipple } from "react-icons/hi2";

const Footer = () => {
  return (
    <div id="contact">
      <div className="contact-container">
        <p className="text-1">Get in Touch</p>
        <h1 className="title-contact">Contact Me</h1>
        <div className="sub-contact-container">
          <div className="email">
            <p>
              <MdAttachEmail />
            </p>
            <div className="hotmail">nanratchada@hotmail.com</div>
          </div>
          <div className="tel">
            <p>
              <BsFillTelephoneFill />
            </p>
            <div className="call">
              <a href="tel:+66836783565">+66836783565</a>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright">
        Copyright 2024 RatchadapohnM.com - All right Deserved.
      </div>
      <p className="backhome">
        <a href="#navbar">
          <HiOutlineCursorArrowRipple />
        </a>
      </p>
    </div>
  );
};

export default Footer;
