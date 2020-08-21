
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";
import Profile from "../assets/images/profile.png";
import Image from "react-bootstrap/Image";


const About = () => {
  return (
    <div id="about">
      <div className="about">
        <Container>
          <br />
          <br />
          <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end myimage" alt="profile" src={Profile} thumbnail fluid />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded myname">
                I am <strong >&nbsp;Karpagasathya Gurupandi.</strong>
                <br />
                I like to be called as Sathya. I was born in TamilNadu, southern part of India and grew up there. I did my Masters in Computer Applications. Currently I live in Minneapolis,
                Minnesota.
                <br />
                Now I'm doing Coding Bootcamp Certification in University of Minnesota to become a Full-Stack Developer. I'm so focused and creative on developing web Applications. I love spending 
                time with my family. I enjoy listening music, watching movies and playing board games.
                <br />
                My goal is always driven towards providing amazing experience with the best level of quality and service.
                <br />
                I love learning new technologies.
                <br /> <br />
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;