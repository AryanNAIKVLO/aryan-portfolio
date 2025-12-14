import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Aryan Naik</span>{" "}
            from <span className="purple">Mumbai, India</span>.
            <br />
            I’m a aspiring {" "}
            <span className="purple">Software Developer,</span> {"  "}<span className="purple">Frontend Developer</span>{"   "}<span className="purple">,Software Engineer,</span>{" "}<span className="purple">SEO Analyst </span>.
            
            <br />I hold an M.Sc. (MSc) in{" "}
            <span className="purple">Computer science</span> from{" "}
            <span className="purple">Thakur COllege Of Science and Commerce</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Football ⚽️
            </li>
            <li className="about-activity">
              <ImPointRight /> Desinging and Editing ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching How Movies and Tv shows are made and the art behind it 🍿🎥✮⋆˙
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Guitar and Singing 🎸🎧★
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "What is Earth without Designs and Art, Just a rock "{" "}
          </p>
          <footer className="blockquote-footer">AryanNAIKVLO </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
