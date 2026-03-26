import React from 'react'
import "./navbar.scss";
import { 
  SiInstagram, 
  SiFacebook, 
  SiGithub 
} from "react-icons/si";

export default function Navbar() {
  return (
    <div className='navbar'>
       <div className='wrapper'>
           <span><a href="/"> <img src="/logo2.png" alt="logo"/></a></span>
            <div className='menu'>
               <a className='btn1' href="#about">Rólam</a>
               <a className='btn1' href="#portfolio">Munkáim</a>
                <a className='btn1' href="#contact">Kapcsolat</a>
           </div>
           <div className='social'>
               <a href="https://github.com/BBTimTim?tab=repositories" target='_blank'><SiGithub className="icon" /></a>
               <a href="https://www.facebook.com/BirtaB.Timea" target='_blank'><SiFacebook className="icon" /></a>
               <a href="https://www.instagram.com/b.b.timi/" target='_blank'><SiInstagram className="icon" /></a>
           </div>
       </div>
    </div>
  )
}
