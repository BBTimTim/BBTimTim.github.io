import "./app.scss";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <>
          <section className="homepage" id="homepage">
          <Navbar />
          <Main id="main" />
          </section>
           <section id="about"><About /></section>
          <section id="portfolio"> <Portfolio/> </section>
          <section id="contact"> <Contact/> </section>
    </>
  );
}

export default App;
