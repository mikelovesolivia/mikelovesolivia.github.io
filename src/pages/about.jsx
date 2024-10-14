import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import { aboutData } from "../data/aboutData";
import Card from "react-bootstrap/Card";
import SkillCloud from "../components/SkillCloud";

function About() {
  const skillsRef = useRef(null);
  const researchRef = useRef(null);
  const interestsRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="container-fluid">
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "calc(100vh - 120px)" }}
      >
        <div className="row text-center">
          <div className="col-2"></div>
          <div className="col-8 text-center about-border">
            <div className="row">
              <h3 style={{ fontFamily: "Lora" }}>About Me</h3>
              <p>{aboutData.description}</p>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="row d-flex justify-content-between">
                  <div className="col-12 col-md-4 mb-3 mb-md-0">
                    <Button
                      variant="outline-primary"
                      className="w-75"
                      onClick={() => scrollToSection(skillsRef)}
                    >
                      Skills
                    </Button>
                  </div>
                  <div className="col-12 col-md-4 mb-3 mb-md-0">
                    <Button
                      variant="outline-primary"
                      className="w-75"
                      onClick={() => scrollToSection(researchRef)}
                    >
                      Research
                    </Button>
                  </div>
                  <div className="col-12 col-md-4 mb-3 mb-md-0">
                    <Button
                      variant="outline-primary"
                      className="w-75"
                      onClick={() => scrollToSection(interestsRef)}
                    >
                      Interests
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={skillsRef}
        className="d-flex" //align-items-center justify-content-center"
        style={{
          minHeight: "100vh",
          backgroundColor: "#f8f9fa",
          scrollMarginTop: "80px",
        }}
      >
        <div className="row d-flex align-items-center w-100">
          <div className="col-11 col-md-6 d-flex flex-column justify-content-center order-1 order-md-1">
            <Card className="about-skills-card w-75 mx-auto">
              <Card.Header>Skills</Card.Header>
              <Card.Body>
                {aboutData.skills.map((skill, index) => (
                  <div key={index}>
                    <Card.Title>{skill.type}</Card.Title>
                    <Card.Text>{skill.list.join(", ")}</Card.Text>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </div>
          <div className="col-11 col-sm-8 col-md-4 text-center order-3 order-md-1">
            <SkillCloud slugs={aboutData.skillIcons} />
          </div>
          <div className="col-1 col-md-2 text-center order-2 order-md-2">
            skills
          </div>
        </div>
      </div>

      <div
        ref={researchRef}
        className="d-flex align-items-center justify-content-center"
        style={{
          minHeight: "100vh",
          backgroundColor: "#555555",
          scrollMarginTop: "80px",
        }}
      >
        <h2 style={{ color: "#fff" }}>Research</h2>
      </div>

      <div
        ref={interestsRef}
        className="d-flex align-items-center justify-content-center"
        style={{
          minHeight: "100vh",
          backgroundColor: "#eeeeee",
          scrollMarginTop: "80px",
        }}
      >
        <h2>Interests</h2>
      </div>
    </div>
  );
}

export default About;
