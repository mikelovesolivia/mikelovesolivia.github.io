import React from "react";
import { TypeAnimation } from "react-type-animation";

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email'; 


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
        style={{ fontSize: "2em", display: "inline-block" }}
        repeat={Infinity}
      />
    );
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 d-flex justify-content-center">
          <h1>{homeData.name}</h1>
        </div>
        <div className="col-md-12 d-flex justify-content-center">
          <Introduction />
        </div>
      </div>
      <div className="row">
        <div className="col-md-8"></div>
        <div className="col-md-4 d-flex justify-content-center">
          <img style={{ borderRadius: "30%" }} src={homeData.selfie} alt={homeData.name} width="200px" />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-9"></div>
        <div className="col-md-2 d-flex justify-content-between">
            <a href={homeData.resume}><img className="icon-hover" src="cv.svg" alt="CV" width="40px" /></a>
            <a href={homeData.github}><GitHubIcon className="icon-hover" style={{ color:"black", fontSize: 40 }}/></a>
            <a href={homeData.linkedin}><LinkedInIcon className="icon-hover" style={{ color:"black", fontSize: 40 }}/></a>
            <a href={`mailto:${homeData.email}`}><EmailIcon className="icon-hover" style={{ color: "black", fontSize: 40 }} /></a>
            </div>
        <div className="col-md-1"></div>
      </div>
    </div>
  );
}

export default Home;
