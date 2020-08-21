import React from "react";
import "./style.css";
// import { Card } from "react-bootstrap";


function SkillsCard(props) {
  return (
    <div className="uk-text-center client-side-card skills-card">
      <div className={`uk-card uk-card-secondary ${props.name}-card ${props.animate}`}>
        <div className="uk-card-body">
          <h3 className="uk-card-title">{props.title}</h3>
          <ul className="uk-list uk-list-divider">
            {props.skills.map((skill) => (
              <li>{skill}</li>
            ))}
          </ul>
        </div>
        <div className={`uk-card-footer portfolio-card-footer ${props.name}-card-footer`}>
          <div>
            <span className="skills-icon" uk-icon={`icon: ${props.icon}; ratio: 1.5`}></span>
          </div>
        </div>
      </div>
    </div>

    // <Card className="mycard p-0 w-25 h-25" style={{ width: "10rem" }}>
    //   {/* <Card.Img variant="top" src={props.imgURL} /> */}
    //   <Card.Body>
    //     <Card.Title className="card-title">{props.title}</Card.Title>
    //     <Card.Text className="card-text">{skills.map(skill)=>()}</Card.Text>
    //   </Card.Body>
    //   <Card.Body>
    //     <Card.Link className="card-link" href={props.siteURL}>
    //       View Website
    //     </Card.Link>
    //     <Card.Link href={props.repoURL}>GitHub Repo</Card.Link>
    //   </Card.Body>
    // </Card>
  );
}

export default SkillsCard;
