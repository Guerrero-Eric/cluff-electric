import React from "react";
import gpt3Logo from "../../images/cluff-electric-logo.png";
import "./footer.css";

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="cluff_logo" />
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
      </div>
    </div>{" "}
    <div className="gpt3__footer-copyright">
      <p>
        All information provided is provided for information purposes only and
        does not constitute a legal contract between Cluff Electric, and any
        person or entity unless otherwise specified. Information is subject to
        change without prior notice. Although every reasonable effort is made to
        present current and accurate information, LinkNow™ Media makes no
        guarantees of any kind.
      </p>
    </div>
  </div>
);

export default Footer;
