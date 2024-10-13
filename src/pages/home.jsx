import React from "react";
import { TypeAnimation } from "react-type-animation";

import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import { keyframes } from "@mui/system";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

import { homeData } from "../data/homeData";

import "./styles.css";

function Home() {
  const Introduction = () => {
    const sequence = homeData.description.reduce((acc, item) => {
      acc.push(item, 1000);
      return acc;
    }, []);
    return (
      <TypeAnimation
        sequence={sequence}
        wrapper="span"
        speed={50}
        style={{ fontSize: "1.2em", display: "inline-block" }}
        repeat={Infinity}
      />
    );
  };

  const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 d-flex justify-content-center">
          <h3>{homeData.name}</h3>
        </div>
        <div className="col-md-12 d-flex justify-content-center">
          <Introduction />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-4"></div>
        <div className="col-md-4 d-flex justify-content-center">
          <Card
            sx={{
              background:
                "linear-gradient(45deg, #E6E6FA, #00CED1, #D2B48C, #228B22)",
              backgroundSize: "400% 400%",
              animation: `${gradientAnimation} 10s ease infinite`,
              borderRadius: "10px",
              color: "#FFF0F5",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Brief Introduction
              </Typography>
              <Typography variant="body2" sx={{ color: "#F5F5DC" }}>
                {homeData.introduction}
              </Typography>
            </CardContent>
            <CardContent>
            <Typography variant="subtitle2" component="div">
                <p>Like the web design?</p>
              </Typography>
            </CardContent>
            <CardActions className="text-and-button">
              <Typography variant="subtitle2" component="div">
                <p>⬇️Please fork 🍴 and star ⭐️ on GitHub! </p>
              </Typography>
              <Button
                size="small"
                href="https://github.com/mikelovesolivia/react-personal-portfolio-template"
                style={{ color: "#B8860B", fontWeight: "bold" }}
              >
                Github Repo
              </Button>
            </CardActions>
          </Card>
        </div>
        <div className="col-md-4 d-flex flex-column align-items-center">
          <img
            className="profile-image"
            src={homeData.selfie}
            alt={homeData.name}
            width="200px"
            style={{ borderRadius: "20%" }}
          />
          <div className="icon-container">
            <a href={homeData.resume}>
              <img className="icon-hover" src="cv.svg" alt="CV" width="40px" />
            </a>
            <a href={homeData.github}>
              <GitHubIcon
                className="icon-hover"
                style={{ color: "black", fontSize: 40 }}
              />
            </a>
            <a href={homeData.linkedin}>
              <LinkedInIcon
                className="icon-hover"
                style={{ color: "black", fontSize: 40 }}
              />
            </a>
            <a href={`mailto:${homeData.email}`}>
              <EmailIcon
                className="icon-hover"
                style={{ color: "black", fontSize: 40 }}
              />
            </a>
          </div>
      </div>
    </div>
    </div>
  );
}

export default Home;
