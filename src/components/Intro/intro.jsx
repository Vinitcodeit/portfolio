import React from "react";
import "./intro.css";
import bg from "../../assets/bgimg.png";
import { Link } from "react-scroll";
import btnImg from "../../assets/hireme.png";
import Insta from "../../assets/instagram.png"
import Twitter from "../../assets/twitter.png"
import Facebook from "../../assets/facebook-icon.png"
import Linkedin from "../../assets/linkedin.png"

const Intro = () => {
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
          <button className="btn">
            <img src={btnImg} alt="Hire" className="btnImg" />
            Hire Me
          </button>
  
        </Link>
         
        <div className="sm">
        <img src={Insta} alt="insta"    className="ig" />
        <img src={Twitter} alt="twitter" className="tweet" />
        <img src={Facebook} alt="fbk" className="fb" />
        <img src={Linkedin} alt="ln" className="linkedin" />
       </div>
       
      
      </div>

      
      
      
      

      <img src={bg} alt="profile" className="bg" />

      
    </section>

   
  );
};

export default Intro;
