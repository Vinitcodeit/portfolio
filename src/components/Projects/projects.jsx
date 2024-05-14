import React from "react";
import './projects.css'

const Projects = () => {

  const ecommerceUrl = 'https://shopper-ecommerce-website.vercel.app/'
  
  const ecommerceHandleClick = ()=>{
    window.open(ecommerceUrl)
  }

  const youtubeUrl = 'https://shubho-youtube-mern.netlify.app/'
  
  const youtubeHandleClick = ()=>{
    window.open(youtubeUrl)
  }

  const portfolioUrl = 'https://vinit-portfoilio-mern.vercel.app/'
  
  const portfolioHandleClick = ()=>{
    window.open(portfolioUrl)
  }

  return (
    <section className="projectPage">
      <h1 className="projectPageTitle">My Projects</h1>
      <p id="projDesc">These are my Personal Projects</p>
      

      <div className="projects">
        <div onClick={ecommerceHandleClick} className="projectName1">
          <h2 className="project1">1. Ecommerce Website.</h2>
          <p className="project1Desc">
          Designed and developed a seamless and intuitive e-commerce website using HTML, CSS, and JavaScript, with enhanced 
          user interface and experience. Implemented React.js for dynamic and responsive front-end interactions, ensuring a user
          friendly and aesthetically pleasing online shopping platform. Demonstrated strong skills in web development to create an 
          engaging digital storefront. 
          </p>
        </div>

        <div onClick={youtubeHandleClick} className="projectName2">
          <h2 className="project1">2. You-tube Clone.</h2>
          <p className="project1Desc">
          A YouTube clone with a lot of features developed with the MERN stack, JWT for authentication, and Firebase Storage for video and file storage. 
          This project intends to emulate YouTube's main functionality, allowing users to upload, view, like, comment on, and interact with videos. 
          </p>
        </div>

        <div onClick={portfolioHandleClick} className="projectName3">
          <h2 className="project1">3. Personal Portfolio Website.</h2>
          <p className="project1Desc">
            Designed and implemented a personal portfolio website using HTML,
            CSS, JavaScript, and React.Js. showcasing creative and responsive web design.
            Integrated React.js to enhance user interactivity and provide a
            seamless browsing experience.
          </p>
        </div>

        <div className="projectName4">
          <h2 className="project1">4.	To-Do List.</h2>
          <p className="project1Desc">
          	Created a dynamic and user-friendly Todo Form website utilizing the MERN (MongoDB, Express.js, React.js, Node.js) stack. Implemented seamless data management with MongoDB, built a responsive front-end with React. and ensured smooth server-side functionality using Node.js and Express.js.
          </p>
        </div>
      </div>
      </section>
  );
};

export default Projects;
