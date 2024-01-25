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
      <span>Software Engineer Trainee <br />Infosys, Mysore</span>
      </div>
      <span className="expDesc"><li>worked as Intern in Infosys, focusing on: </li><li>Full Stack web development </li><li>HTML, CSS, JavaScript, Bootstrap, React.js, Node.js, Express.js, Mongo DB, AWS, Java, SQL.</li><li>Applied acquired skills in capstone projects, showcasing practical knowledge in software development. </li><li>Ready to contribute effectively to dynamic projects and teams, with a strong foundation in diverse programming</li>
disciplines.
      </span>
      <div className="expBars">
        <div className="expBar">
          <img src={MERN} alt="MERN" className="expBarImg" />
          <div className="expBarText">
            <h2>MERN Stack Web Development</h2>
            <p>This is demo text you can write your own text</p>
          </div>
        </div>

        <div className="expBar">
          <img src={JAVA} alt="Java" className="expBarImg" />
          <div className="expBarText">
            <h2>Java Programming Language</h2>
            <p>this is demo text you can write your own text</p>
          </div>
        </div>

        <div className="expBar">
          <img src={SQL} alt="SQL" className="expBarImg" />
          <div className="expBarText">
            <h2>SQL database</h2>
            <p>this is demo text you can write your own text</p>
          </div>
        </div>
      </div>
      </section>
    </div>
  )
}

export default Experience
