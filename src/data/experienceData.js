import React from "react";

import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";

export const experienceData = [
  {
    title: "Graduate Research Assistant",
    subtitle: "University of Notre Dame",
    location: "South Bend, IN, USA",
    date: "Aug 2023 - Present",
    img: <img src="nd.png" width="50px" alt="nd" style={{ float: "right" }} />,
    icon: <SchoolIcon />,
    description:
      "Conduct full-time research in: (1) SciVis image compression through deep learning methods; (2) Transfer function optimization in volume rendering through multimodal learning; (3) Medical image synthesis through diffusion model.",
    keywords: [
      "Deep Learning",
      "Volume Rendering",
      "Multimodal Learning",
      "CLIP",
      "Diffusion Model",
    ],
  },
  {
    title: "Conference Presenter",
    subtitle: "IEEE VIS 2024",
    location: "Virtual",
    date: "Oct 2024",
    img: (
      <img
        src="vis2024.png"
        width="150px"
        alt="vis"
        style={{ float: "right" }}
      />
    ),
    icon: <SchoolIcon />,
    description:
      "Presenting the paper titled 'FCNR: Fast Compressive Neural Representation of Visualization Images' at the IEEE VIS 2024 conference. The paper introduces a novel deep learning-based image compression method for scientific visualization images, which significantly accelerates the encoding and decoding while maintaining high visual quality.",
    keywords: [
      "Deep Learning",
      "Image Compression",
      "SciVis",
      "Stereo Attention",
    ],
  },
  {
    title: "Graduate Teaching Assistant",
    subtitle: "University of Notre Dame",
    location: "South Bend, IN, USA",
    date: "Aug 2023 - Dec 2023",
    img: <img src="nd.png" width="50px" alt="nd" style={{ float: "right" }} />,
    icon: <SchoolIcon />,
    description:
      'For "CSE-40166: Computer Graphics". Initiated engaging in-class activities and provided constructive feedback on course design. Facilitated the professors by rating coursework, hosting weekly office hours, and taking attendance. Assisted in students in understanding the basics of computer graphics and the implementation of WebGL.',
    keywords: ["Tutoring", "Computer Graphics", "WebGL", "Rendering"],
  },
  {
    title: "Computer Vision Engineer Intern",
    subtitle: "Vanyi Technology, Vanke",
    location: "Shenzhen, Guangdong, China",
    img: (
      <img
        src="vanke.png"
        width="50px"
        alt="vanke"
        style={{ float: "right" }}
      />
    ),
    icon: <WorkIcon />,
    date: "Aug 2022 - Oct 2022",
    description:
      "Implemented image preprocessing and mask generation for architectural plan datasets. Enhanced a Stable-Diffusion-based model in PyTorch for generating complete architectural plans from partial sketches. Developed a system for converting incomplete sketches into detailed architectural plans.",
    keywords: [
      "PyTorch",
      "OpenCV",
      "Image Generation/Inpainting",
      "Stable Diffusion",
    ],
  },
  {
    title: "Peer Mentor",
    subtitle: "Xidian University",
    location: "Xi'an, Shaanxi, China",
    date: "2020 - 2022",
    img: (
      <img
        src="xidian.png"
        width="50px"
        alt="xidian"
        style={{ float: "right" }}
      />
    ),
    icon: <SchoolIcon />,
    description:
      'Carefully designed tutoring content for courses in "Introduction to Probability Theory and Mathematical Statistics" and "Advanced Mathematics", regularly held online and on-site lectures, provided tutoring for students who faced difficulties in their studies, and consistently offered them long-term personalized tutoring and Q&A sessions.',
    keywords: [
      "Tutoring",
      "Probability Theory",
      "Statistics",
      "Advanced Mathematics",
    ],
  },
];
