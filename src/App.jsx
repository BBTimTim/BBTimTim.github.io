import React from "react";
import Navbar from "./components/Navbar.jsx";
import Main from "./components/Main.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";
import "./app.scss";

export default function App() {
  return (
    <div className="App" id="homepage">
      <Navbar id="navbar" />
      <Main id="main" />
       <About id="about"  />
      <Portfolio id="portfolio" />
      <Contact id="contact" />
    </div>
  );
}