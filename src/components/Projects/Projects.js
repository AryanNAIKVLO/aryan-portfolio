import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import portfolio from "../../Assets/Projects/Portfolio.png";
import football from "../../Assets/Projects/BallItOut.png";
import jewellery from "../../Assets/Projects/9Teen.png";
import spotify from "../../Assets/Projects/Spotify.png";

import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={portfolio}
      isBlog={false}
      title="Personal Portfolio Website"
      description="A responsive personal portfolio website built using React and Bootstrap. Showcases my skills, projects, and resume, and is deployed on Vercel with automatic CI/CD."
      tech="React, Bootstrap, Vercel"
      status="Live"
    />
  </Col>

  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={football}
      isBlog={false}
      title="BallITOut (Football Match Rating Platform)"
      description="A web platform inspired by IMDb where users can rate and review football matches. Includes authentication, ratings, and match browsing features."
      tech="React, Firebase"
      status="In Progress"
    />
  </Col>

  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={jewellery}
      isBlog={false}
      title="9TeenBasic (E-commerce Jewellery Website)"
      description="A frontend e-commerce website designed for a jewellery shop with product listings, UI-focused cart design, and responsive layout."
      tech="HTML, CSS, JavaScript"
      status="Concept / UI"
    />
  </Col>

  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={spotify}
      isBlog={false}
      title="Spotify UI Clone"
      description="A UI clone of Spotify focusing on layout structure, responsiveness, and reusable React components."
      tech="React"
      status="UI Clone"
    />
  </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
