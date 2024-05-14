import React from "react";
import "./intro.css";
import bg from "../../assets/bgimg.png";
import { Link } from "react-scroll";
import btnImg from "../../assets/resume.png";
import github from '../../assets/github1.png'
import Linkedin from "../../assets/linkedin.png"


const Intro = () => {

  const linkedInProfileUrl = 'https://linkedin.com/in/vinit-tambralli-864049219';

  const githubProfileUrl = 'https://github.com/Vinitcodeit'

  const resumeUrl = 'https://drive.google.com/file/d/1OFT3BwLRz8BJFsq3w8ssnfZifZUn2znB/view?usp=drive_link'

  const openLinkedInProfile = () => {
    window.open(linkedInProfileUrl);
  };

  const openGithubProfile = () => {
    window.open(githubProfileUrl);
  };

  const openResumeProfile = () => {
    window.open(resumeUrl);
  };


  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Vinit</span> <br />
          Web Developer
        </span>
        <p className="introPara">
          I am a MERN Stack Web Developer with experience <br />
          in Frontend and Backend Technologies.
        </p>
        <Link>
          <button onClick={openResumeProfile} className="btn">
            <img  src={btnImg} alt="Hire" className="btnImg" />
            <span className="resume">Resume</span>
          </button>
        </Link>
         
        <div className="sm">
        <img onClick={openLinkedInProfile} src={Linkedin} alt="ln" className="linkedin" />
        <img onClick={openGithubProfile} src={github} alt="ln" className="github" />     
       </div>

      </div>
      
      <img src={bg} alt="profile" className="bg" />
    </section>
  );
};

export default Intro;
