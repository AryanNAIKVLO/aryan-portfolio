import React from "react";
import Card from "react-bootstrap/Card";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="project-img" />

      <Card.Body>
        <Card.Title>{props.title}</Card.Title>

        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* Tech Stack */}
        {props.tech && (
          <p style={{ color: "#c770f0", fontSize: "0.9rem" }}>
            <strong>Tech:</strong> {props.tech}
          </p>
        )}

        {/* Project Status */}
        {props.status && (
          <p style={{ fontSize: "0.85rem", opacity: 0.8 }}>
            <strong>Status:</strong> {props.status}
          </p>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
