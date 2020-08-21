import React from "react";
import "./style.css";
import Jumbotron from "react-bootstrap/Jumbotron";

const Contact=()=> {
  return (
    <Jumbotron className="contact-jumbotron">
      <div>
        <h3 id="contact-title">CONTACT ME</h3>
        <ul className="uk-list">
          <li>
            <a uk-icon="icon: mail; ratio: 2" className="contact-icon contact-link-icon" href="mailto:karpagasathya@gmail.com"></a>
            <a className="contact-link contact-li uk-text-left" href="mailto:karpagasathya@gmail.com">
              karpagasathya@gmail.com
            </a>
          </li>
          <li>
            <span className="contact-icon" uk-icon="icon: receiver; ratio: 2"></span>
            <span className="contact-li uk-text-left">6128402890</span>
          </li>
          <li>
            <span uk-icon="icon: home; ratio: 2" className="contact-icon"></span>
            <span className="contact-li uk-text-left"> Minneapolis, Minnesota.</span>
          </li>
          <li>
            <a uk-icon="icon: github; ratio: 2" href="https://github.com/karpagasathya" className="contact-icon contact-link-icon" target="_blank" rel="noopener noreferrer"></a>
            <a className="contact-link contact-li uk-text-left" href="https://github.com/karpagasathya" target="_blank" rel="noopener noreferrer">
              karpagasathya
            </a>
          </li>
          <li>
            <a
              uk-icon="icon: linkedin; ratio: 2"
              href="https://www.linkedin.com/in/karpagasathya-gurupandi-33bb0690/"
              className="contact-icon contact-link-icon"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <a className="contact-link contact-li uk-text-left" href="https://www.linkedin.com/in/karpagasathya-gurupandi-33bb0690/" target="_blank" rel="noopener noreferrer">
              karpagasathya
            </a>
          </li>
        </ul>
      </div>
    </Jumbotron>
  );
}

export default Contact;
