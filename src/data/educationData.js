import React from "react";

export const educationData = [
  {
    dateRange: "Aug 2023 - Present",
    school: "University of Notre Dame",
    degree: "M.Sc. in Computer Science and Engineering",
    image: <img src="nd.png" width="50px" style={{ float: "right" }} />,
    description: [
      { name: "GPA", detail: "3.9/4.0" },
      {
        name: "Research Interests",
        detail:
          "Multimodal Learning, 3D Vision, Medical Imaging, Computer Vision, Visualization",
      },
    ],
    achievements: [
      {
        date: "Aug 2024",
        title: "Graduate School Professional Development Award",
      },
    ],
    transcript: "Transcript_ND.pdf",
  },
  {
    dateRange: "Aug 2019 - Jun 2023",
    school: "Xidian University",
    degree: "B.Eng. in Artificial Intelligence (Outstanding Graduate)",
    image: <img src="xidian.png" width="50px" style={{ float: "right" }} />,
    description: [
      { name: "GPA", detail: "3.9/4.0" },
      { name: "Ranking", detail: "1/157" },
      {
        name: "Core Modules",
        detail:
          "Data Structure and Algorithm Application (95), Microcomputer Principle and System Design (95), Introduction to Artificial Intelligence (99), Machine Learning (94), Introduction to Pattern Recognition (90), Deep Learning (94)",
      },
    ],
    achievements: [
      { date: "Jun 2023", title: "Outstanding Graduate of Shaanxi Province" },
      {
        date: "Jun 2023",
        title:
          "First-Class Graduate Scholarship of Xidian University (Highest Distinction)",
      },
      {
        date: "Dec 2022",
        title: "First-Class Academic Scholarship of Xidian University",
      },
      {
        date: "May 2022",
        title: "Meritorious Winner of Mathematical Contest in Modeling (MCM)",
      },
      {
        date: "Dec 2021",
        title:
          "Provincial First Prize of China Undergraduate Mathematical Contest in Modeling",
      },
      {
        date: "Dec 2021",
        title: "Second-Class Academic Scholarship of Xidian University",
      },
      {
        date: "Dec 2020",
        title: "China National Scholarship (Highest Distinction)",
      },
      {
        date: "Dec 2020",
        title: "First-Class Academic Scholarship of Xidian University",
      },
      {
        date: "Dec 2020",
        title:
          "First Prize in Mathematics Competition of Chinese College Students",
      },
    ],
    transcript: "Transcript_XDU.pdf",
  },
];
