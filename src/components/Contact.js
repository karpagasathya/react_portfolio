import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const ContactForm = () => {
  return (
    <div id="contact">
      <h1 className="pt-4 text-center font-details-b pb-2">CONTACT ME</h1>
      <Jumbotron className="contact-jumbotron">
        <Row className="">
          <Col>
            <div className="col-md">
              <ul className="list-group list-group-flush">
                <li className="list-group-item border-top-0">
                  <i className="fas fa-phone-square"></i> 6128402890
                </li>
                <li className="list-group-item">
                  <i class="fas fa-envelope"></i> karpagasathya@gmail.com
                </li>
                <li className="list-group-item">
                  <i className="fas fa-home"></i>
                </li>
              </ul>
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            <div className="m-2">
              <a href="mailto:karpagasathya@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-danger">
                  <i className="fas fa-envelope-square"></i> Email Me
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.linkedin.com/in/karpagasathya-gurupandi-33bb0690/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="Visit my LinkedIn">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://github.com/karpagasathya" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-light" title="My other projects">
                  <i className="fab fa-github-square"></i> GitHub
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
};

export default ContactForm;
