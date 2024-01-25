import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import {Link} from 'react-scroll';
import contactimg from '../../assets/contact.png'
import menu from '../../assets/menu.png'


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (

    <nav className='navbar'>
        <img src={logo} alt='Logo' className='logo'/>
        <div className='desktopmenu'>
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem" >About</Link>
          <Link activeClass='active' to='exp' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Experience</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-110} duration={500} className="desktopMenuListItem">Skills</Link>
          <Link activeClass='active' to='projectPage' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem" >Projects</Link>
       </div>

        <button className="desktopMenuButton" onClick={()=>{
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}>
          <img src={contactimg} alt="" className="desktopMenuImg" />Contact Me</button>

          <img src={menu} alt='menu' className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
        <div className='navMenu'style={{display: showMenu? 'flex':'none'}}>
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>About</Link>
          <Link activeClass='active' to='exp' spy={true} smooth={true} offset={-50} duration={500} className="ListItem"  onClick={()=>setShowMenu(false)}>Experience</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-110} duration={500} className="ListItem"  onClick={()=>setShowMenu(false)}>Skills</Link>
          <Link activeClass='active' to='projectPage' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Projects</Link>
          <Link activeClass='active' to='projectPage' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>contact</Link>


        </div>
    </nav> 
  ) 
}

export default Navbar;
