import React from "react";
import "./style.css";
import Jumbotron from "react-bootstrap/Jumbotron";


function Contact() {
  return (
    <Jumbotron className="contact-jumbotron">
      <div>
        <h3 id="contact-title">CONTACT ME</h3>
        <ul className="uk-list">
          <li>
            <a uk-icon="icon: mail" className="contact-icon contact-link-icon" href="mailto:karpagasathya@gmail.com"></a>
            <a className="contact-link contact-li uk-text-middle" href="mailto:karpagasathya@gmail.com">
              karpagasathya@gmail.com
            </a>
          </li>
          <li>
            <span className="contact-icon" uk-icon="icon: receiver"></span>
            <span className="contact-li uk-text-middle">6128402890</span>
          </li>
          <li>
            <span uk-icon="icon: home" className="contact-icon"></span>
            <span className="contact-li uk-text-bottom">Minnetonka, Minneapolis, Minnesota.</span>
          </li>
          <li>
            <a uk-icon="icon: github" href="https://github.com/karpagasathya" className="contact-icon contact-link-icon" target="_blank" rel="noopener noreferrer"></a>
            <a className="contact-link contact-li uk-text-middle" href="https://github.com/karpagasathya" target="_blank" rel="noopener noreferrer">
              karpagasathya
            </a>
          </li>
          <li>
            <a uk-icon="icon: linkedin" href="https://www.linkedin.com/in/karpagasathya-gurupandi-33bb0690/" className="contact-icon contact-link-icon" target="_blank" rel="noopener noreferrer"></a>
            <a className="contact-link contact-li uk-text-bottom" href="https://www.linkedin.com/in/karpagasathya-gurupandi-33bb0690/" target="_blank" rel="noopener noreferrer">
              karpagasathya
            </a>
          </li>
        </ul>
      </div>
    </Jumbotron>
  );
}

export default Contact;
