export const projectData = [
  {
    title: "Personal Website Template",
    imageUrl: "web-demo.png",
    time: "Oct 2024",
    brief: `Developed a dynamic and responsive personal website template using React and Bootstrap.`,
    keywords: [
      "React",
      "Bootstrap",
      "JavaScript",
      "HTML",
      "CSS",
      "Hexo",
      "Web Development",
    ],
    description: `Built a personal website template with a modern and dynamic design using React and Bootstrap.
            The site is fully responsive and mobile-friendly, with sections for personal information, education, 
            experience, projects, and blog posts. It's designed to be easy to customize with clear instructions, 
            making it ideal for use as a portfolio or personal website.`,
    links: [
      {
        url: "https://github.com/mikelovesolivia/react-personal-portfolio-template",
        title: "Code",
      },
    ],
  },
  {
    title: "Telegram Chats Analysis Web App",
    imageUrl: "startpage.png",
    time: "Sep 2024 - Present",
    brief: `Built a web app for analyzing and visualizing Telegram chat data using Pandas, PostgreSQL, Flask, and React.`,
    keywords: [
      "Python",
      "JavaScript",
      "HTML",
      "React",
      "Flask",
      "Pandas",
      "PostgreSQL",
      "CSS",
      "Axios",
    ],
    description: `Developed a web application for uploading, analyzing, and visualizing telegram chats. 
    Built the frontend interface with React and beautified the style with Bootstrap. Enhanced the 
    navigation with React-Router-DOM. Implemented the backend via Flask, conducted data processing 
    with Pandas and managed the database via PostgreSQL. Realized the client-server communication using axios.`,
    links: [
      {
        url: "https://github.com/mikelovesolivia/telegram-chats-analyzer",
        title: "Code",
      },
    ],
  },
  {
    title: "Fast Compressive Neural Representation of Visualization Images",
    imageUrl: "fcnr.png",
    time: "Aug 2023 - Apr 2024",
    brief: `Extended stereo image compression method to compress a great many of
        SciVis images within a short time.`,
    keywords: [
      "PyTorch",
      "Image Compression",
      "Stereo Attention",
      "Volume Rendering",
    ],
    description: `We improved the stereo image compression method ECSIC by 
        adding a joint context module and extended it to accomodate the SciVis image
        features by enabling the visualization parameters as input to the model. FCNR
        achieved much better reconstruction quality and speed compared to baselines based
        on the implicit neural representation, and 18.56% ~ 173.54% higher compression ratio
        than the ECSIC baseline. We also conducted an ablation study to show the effectiveness
        of the new components in FCNR. The paper is published in the IEEE VIS 2024 conference.`,
    links: [
      {
        url: "https://arxiv.org/abs/2407.16369",
        title: "Paper",
      },
      {
        url: "https://github.com/mikelovesolivia/FCNR",
        title: "Code",
      },
    ],
  },
  {
    title:
      "Research on Ship Target Recognition Method Based on Multi-Source Information Fusion",
    time: "Mar 2023 – Jun 2023",
    imageUrl: "undergrad-thesis.png",
    brief: `Undergraduate thesis project on ship target recognition using HRRP data and SAR images.`,
    keywords: [
      "PyTorch",
      "LSTM",
      "CNN",
      "HRRP",
      "SAR",
      "Modal Fusion",
    ],
    description: `Designed a two-stream network based on LSTM, attention and CNN to extract features from HRRP data 
    and SAR images respectively. Fused and classified the extracted features by vector concatenation and multi-layer 
    perceptron and gain a 22.22% increase in recognition accuracy compared to SOTA. Conducted an ablation study to 
    verify the effectiveness of the proposed method.`,
  },
  {
    title:
      "Efficient and Flexible Visualization Synthesis Using Neural Radiance Fields",
    time: "Jun 2022 - Jan 2024",
    brief: `Proposed ViSNeRF, a novel 3D-aware deep learning framework for visualization synthesis using neural radiance fields.`,
    keywords: ["PyTorch", "NeRF", "TensoRF", "SciVis", "3D-aware"],
    description: `We proposed ViSNeRF for efficient 3D visualization synthesis using neural radiance fields.
        ViSNeRF uses a hybrid architecture with factorization techniques to generate high-quality views in seconds,
        and it supports flexible exploration of parameters like time steps and isovalues.
        It improves the quality of visualizations with fewer images and faster training times compared to existing methods, 
        and outperforms baseline solutions in both speed and accuracy. The paper is currently under peer review at 
        IEEE Transactions on Visualization and Computer Graphics`,
  },
  {
    title: "Undergraduate Deep Learning Course Projects",
    time: "Apr 2022 - May 2022",
    brief: `Deep learning course projects on single image super-resolution and semantic segmentation using PyTorch.`,
    keywords: [
      "PyTorch",
      "Super Resolution",
      "Semantic Segmentation",
      "EDSR",
      "U-Net",
    ],
    description: `Implemented the EDSR model for single image super-resolution on BSDS500 dataset and the U-Net model
     for semantic on MSRC-v2 dataset from scratch using PyTorch. Evaluated the models with PSNR for super-resolution
     and IoU for semantic segmentation.`,
    link: [
        {
          url: "https://github.com/mikelovesolivia/Course-Projects---Deep-Learning",
          title: "Code",
        },
      ],
  },
  {
    title: "LSTMIS: LSTM-based Quantitative Portfolio Investment Strategy",
    time: "Feb 2022",
    imageUrl: "mcm.png",
    brief: `Proposed an LSTM-based model for price prediction and optimized the quantitative portfolio investment strategy accordingly.`,
    keywords: [
      "PyTorch",
      "LSTM",
      "Quant Fin",
      "Backtesting",
      "Backtrader",
    ],
    description: `Proposed an LSTM-based model to predict the price of gold and bitcoin based on historical 
    data and implemented it with PyTorch. Optimized the quantitative portfolio investment strategy with 
    predicted data, EMA and Markowitz Mean Variance Model. Evaluated the strategy with backtesting using the 
    backtrader Python library. Meritorious Winner in 2022’s Mathematical Contest in Modeling (MCM).`,
  },
];
