import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import { aboutData } from "../data/aboutData";
import Card from "react-bootstrap/Card";
import SkillCloud from "../components/SkillCloud";

function About() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const researchRef = useRef(null);
  const interestsRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="container-fluid">
      <div
        ref={aboutRef}
        className="d-flex align-items-center justify-content-center"
        style={{ height: "calc(100vh - 120px)", scrollMarginTop: "200px" }}
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
        className="d-flex wood-texture mb-2" //align-items-center justify-content-center"
        style={{
          minHeight: "100vh",
          scrollMarginTop: "80px",
        }}
      >
        <div className="row d-flex align-items-center w-100">
          {/* Left side content (skills and skill cloud) */}
          <div className="col-12 col-md-10 d-flex flex-column flex-md-row justify-content-center align-items-center order-1 order-md-1">
            {/* Skills Card */}
            <div className="col-12 col-md-6">
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

            {/* Skill Cloud */}
            <div className="col-12 col-md-6 text-center mt-3 mt-md-0">
              <SkillCloud slugs={aboutData.skillIcons} />
            </div>
          </div>

          {/* Prev and Next buttons (stacked vertically on small screens) */}
          <div className="col-12 col-md-2 d-flex flex-column justify-content-between align-items-center text-center order-2 order-md-2">
            <Button
              variant="outline-primary"
              className="mb-3 w-75"
              onClick={() => scrollToSection(aboutRef)}
            >
              Prev: About
            </Button>
            <Button
              variant="outline-primary"
              className="w-75 mb-2"
              onClick={() => scrollToSection(researchRef)}
            >
              Next: Research
            </Button>
          </div>
        </div>
      </div>

      <div
        ref={researchRef}
        className="d-flex align-items-center justify-content-center paper-texture mb-2"
        style={{
          minHeight: "100vh",
          scrollMarginTop: "80px",
        }}
      >
        <div className="row d-flex align-items-center w-100">
          <div className="col-12 col-md-10 d-flex flex-column flex-md-row justify-content-center align-items-center order-1 order-md-1">
            <div className="col-12 col-md-6">placeholder</div>

            <div className="col-12 col-md-6 text-center mt-3 mt-md-0">
              placeholder
            </div>
          </div>

          <div className="col-12 col-md-2 d-flex flex-column justify-content-between align-items-center text-center order-2 order-md-2">
            <Button
              variant="outline-primary"
              className="mb-3 w-75"
              onClick={() => scrollToSection(skillsRef)}
            >
              Prev: Skills
            </Button>
            <Button
              variant="outline-primary"
              className="w-75 mb-2"
              onClick={() => scrollToSection(interestsRef)}
            >
              Next: Interests
            </Button>
          </div>
        </div>
      </div>

      <div
        ref={interestsRef}
        className="d-flex align-items-center justify-content-center mixture-texture"
        style={{
          minHeight: "100vh",
          backgroundColor: "#eeeeee",
          scrollMarginTop: "80px",
        }}
      >
        <div className="row d-flex align-items-center w-100">
          <div className="col-12 col-md-10 d-flex flex-column flex-md-row justify-content-center align-items-center order-1 order-md-1">
            <div className="col-12 col-md-6">placeholder</div>

            <div className="col-12 col-md-6 text-center mt-3 mt-md-0">
              placeholder
            </div>
          </div>

          <div className="col-12 col-md-2 d-flex flex-column justify-content-between align-items-center text-center order-2 order-md-2">
            <Button
              variant="outline-primary"
              className="mb-3 w-75"
              onClick={() => scrollToSection(researchRef)}
            >
              Prev: Research
            </Button>
            <Button
              variant="outline-primary"
              className="w-75 mb-2"
              onClick={() => scrollToSection(aboutRef)}
            >
              Top: About
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
