import React, { useState } from 'react'
import "./navbar.scss";
import {
  SiInstagram,
  SiFacebook,
  SiGithub
} from "react-icons/si";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className='navbar'>
       <div className='wrapper'>
           <span><a href="/"> <img src="/logo2.png" alt="BT Dev logó"/></a></span>
           <button
             type="button"
             className='hamburger'
             aria-label={open ? "Menü bezárása" : "Menü megnyitása"}
             aria-expanded={open}
             aria-controls="navLinks"
             onClick={() => setOpen((o) => !o)}
           >
             {open ? <HiX /> : <HiMenu />}
           </button>
           <div id="navLinks" className={`navLinks${open ? " open" : ""}`}>
            <div className='menu'>
               <a className='btn1' href="#about" onClick={close}>Rólam</a>
               <a className='btn1' href="#portfolio" onClick={close}>Munkáim</a>
                <a className='btn1' href="#contact" onClick={close}>Kapcsolat</a>
            </div>
            <div className='social'>
               <a href="https://github.com/BBTimTim?tab=repositories" target='_blank' rel="noopener noreferrer" aria-label="GitHub"><SiGithub className="icon" /></a>
               <a href="https://www.facebook.com/BirtaB.Timea" target='_blank' rel="noopener noreferrer" aria-label="Facebook"><SiFacebook className="icon" /></a>
               <a href="https://www.instagram.com/b.b.timi/" target='_blank' rel="noopener noreferrer" aria-label="Instagram"><SiInstagram className="icon" /></a>
            </div>
           </div>
       </div>
    </div>
  )
}
