import React from "react";
import './projects.css'

const Projects = () => {
  return (
    <section className="projectPage">
      <h1 className="projectPageTitle">My Projects</h1>
      <p id="projDesc">These are my Personal Projects</p>
      

      <div className="projects">
        <div className="projectName1">
          <h2 className="project1">1. Todo List</h2>
          <p className="project1Desc">
            Built a robust Todo List web application using the MERN (MongoDB,
            Express.js, React, Node.js) stack, offering seamless task management
            with real-time updates and a user-friendly interface{" "}
          </p>
        </div>

        <div className="projectName2">
          <h2 className="project1">2. Weather Website</h2>
          <p className="project1Desc">
            A weather Website created using HTML, CSS, JavaScript and React.JS
            that provides real-time weather information, forecasts to help users
            plan their day. Users can check current conditions, track storms of
            any city in the world.
          </p>
        </div>

        <div className="projectName3">
          <h2 className="project1">3. Personal Portfolio Website</h2>
          <p className="project1Desc">
            Designed and implemented a personal portfolio website using HTML,
            CSS, JavaScript, and React.Js. showcasing creative and responsive web design.
            Integrated React.js to enhance user interactivity and provide a
            seamless browsing experience.
          </p>
        </div>

        <div className="projectName4">
          <h2 className="project1">4. Login And Sign Up Form</h2>
          <p className="project1Desc">
            created a login/sign-up web page using HTML, CSS, JavaScript, and
            React.js. If the user clicks the "Sign Up" button, they can access
            the sign-up page, and if they click the "Login" button, they will be
            directed to the login page.
          </p>
        </div>
      </div>
      </section>
  );
};

export default Projects;
