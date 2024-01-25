import React from 'react'
import './skills.css'
import Skill1 from '../../assets/htmlimg.png'
import Skill2 from '../../assets/cssimg.png'
import Skill3 from '../../assets/jsimg.png'
import Skill4 from '../../assets/reactimg.png'
import Skill5 from '../../assets/nodeimg.png'
import Skill6 from '../../assets/expressimg.png'
import Skill7 from '../../assets/mongoimg.png'
import Skill8 from '../../assets/restimg.png'
import Skill9 from '../../assets/awsimg.png'
import Skill10 from '../../assets/javaimg.png'
import Skill11 from '../../assets/sqlimg.png'


const Skills = () => {
  return (
   <section id='skills'>
    <h2 className="skillsTitle">My Skills</h2>
    <span className="skillsDesc">I have good knowledge in MERN stack development and have good working experience in Front-end development, Back-end development and Database </span>
    <div className="skillsImg">
    <img src={Skill1} alt="" className="skillsImg" />
    <img src={Skill2} alt="" className="skillsImg" />
    <img src={Skill3} alt="" className="skillsImg" /> 
    <img src={Skill4} alt="" className="skillsImg" />
    <img src={Skill5} alt="" className="skillsImg" />
    <img src={Skill6} alt="" className="skillsImg" /> 
    <img src={Skill7} alt="" className="skillsImg" />
    <img src={Skill8} alt="" className="skillsImg" />
    <img src={Skill9} alt="" className="skillsImg" /> 
    <img src={Skill10} alt="" className="skillsImg" />
    <img src={Skill11} alt="" className="skillsImg" />
    </div>
    <button className='skillsBtn'>See More</button>
   </section>
  )
}

export default Skills;
