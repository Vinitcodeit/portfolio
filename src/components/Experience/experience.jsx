import React from 'react'
import './experience.css'
import MERN from '../../assets/mernimg.png'
import JAVA from '../../assets/javaimg.png'
import SQL from '../../assets/sqlimg.png'

const Experience = () => {
  return (
    <div>
      <section id='exp'>
      <span className="expTitle">Experience</span>
   
<div className='expCompany'>
      <span><b>Software Engineer</b><br />Infosys, Mysore</span>
      </div>
      {/* <span className="expDesc"><li>worked as Intern in Infosys, focusing on: </li><li>Full Stack web development </li><li>HTML, CSS, JavaScript, Bootstrap, React.js, Node.js, Express.js, Mongo DB, AWS, Java, SQL.</li><li>Applied acquired skills in capstone projects, showcasing practical knowledge in software development. </li><li>Ready to contribute effectively to dynamic projects and teams, with a strong foundation in diverse programming</li>
disciplines.  </span> */}
<span  className="expDesc">
•	As a MERN Stack Web Developer During my tenure at Infosys, I adeptly utilized HTML, CSS, JavaScript, Bootstrap, React.js, Node.js, Express.js, MongoDB, API integration, AWS, SQL, and Java in diverse projects. From UI design to complex backend tasks, I ensured project success, showcasing practical expertise. With a strong foundation in programming, I'm ready to contribute effectively to dynamic projects, collaborating seamlessly in interdisciplinary teams, driven by creativity and results.
</span>
     
      <div className="expBars">
        <div className="expBar">
          <img src={MERN} alt="MERN" className="expBarImg" />
          <div className="expBarText">
            <h2>Frontend Web Development</h2>
            <p>As a Frontend Web Developer, I have Experience on HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, Typescript, React.js, Redux, Material UI . </p>
          </div>
        </div>
        <div className="expBar">
          <img src={MERN} alt="MERN" className="expBarImg" />
          <div className="expBarText">
            <h2>Backend Web Development</h2>
            <p>As a Backend Web Developer, I have Experience on Node.js, Express.js, APIs, REST API’s, AWS, JWT, Core Java . </p>
          </div>
        </div>

        {/* <div className="expBar">
          <img src={JAVA} alt="Java" className="expBarImg" />
          <div className="expBarText">
            <h2>Java Programming Language</h2>
            <p>this is demo text you can write your own text</p>
          </div>
        </div> */}

        <div className="expBar">
          <img src={SQL} alt="SQL" className="expBarImg" />
          <div className="expBarText">
            <h2>Database Management</h2>
            <p>As a MERN stack developer, I have Expeirience on SQL, MongoDB, Oracle Databases</p>
          </div>
        </div>
      </div>
      </section>
    </div>
  )
}

export default Experience
