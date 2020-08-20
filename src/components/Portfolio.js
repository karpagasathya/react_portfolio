import React from "react";
import "./style.css";
import { Card} from "react-bootstrap";

function PortfolioCard(props) { 
  return (
    
    <Card className="mycard p-0 w-25 h-25" style={{ width: "10rem" }}>
      <Card.Img variant="top" src={props.imgURL} />
      <Card.Body>
        <Card.Title className="card-title">{props.title}</Card.Title>
        <Card.Text className="card-text">{props.about}</Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link className="card-link" href={props.siteURL}>View Website</Card.Link>
        <Card.Link href={props.repoURL}>GitHub Repo</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default PortfolioCard;