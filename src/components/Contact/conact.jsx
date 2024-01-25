import React, { useRef } from "react";
import "./contact.css";
import emailjs from '@emailjs/browser';
{/*import FacebookIcon from "../../assets/facebook-icon.png";
import TwitterIcon from "../../assets/twitter.png";
import YoutubeIcon from "../../assets/youtube.png";
import InstaIcon from "../../assets/instagram.png";*/}

const Conact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pvioxlq', 'template_2g39xpw', form.current, 'XrqssnsZZOk_XjjO_Jh9X')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section className="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to give me any work opportunities
        </span>
       
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your Name" name='your_name'></input>
          <input
            type="email"
            className="email"
            placeholder="Your Email" name="your_email"
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>


     </form>
     <button type="submit" className="submitBtn" onClick={sendEmail}>
            Submit
          </button>

    {/* <section className="adress">
            <div className="myName">
              <h1>Vinit Tambralli</h1>
            </div>
            <div className="myGmail">vtambralli412@gmail.com</div>
            <div className="myNumber">7406877762</div>
            <div className="myAdress">BTM Layout, Bangalore </div>
  </section> */}

      

   {/*<div className="links">
            <img src={FacebookIcon} alt="facebook" className="link" />
            <img src={TwitterIcon} alt="twitter" className="link" />
            <img src={YoutubeIcon} alt="youtube" className="link" />
            <img src={InstaIcon} alt="instagram" className="link" />
          </div>*/}
  </div> 

    </section>
  );
};

export default Conact;
