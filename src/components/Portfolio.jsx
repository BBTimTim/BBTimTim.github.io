import React from "react";
import "./portfolio.scss";
import { motion } from "framer-motion";
import { 
  SiGithub 
} from "react-icons/si";

export default function Portfolio() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div id="portfolio" className="portfolio">
            <div className="wrap">
                <h2>Munkáim</h2>
                <div className="title-bar"></div>
            </div>
      <motion.div
        className="projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
            <motion.div
            className="project-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div
              className="project-card"
              variants={{ fadeInUp }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <motion.div className="project-image"
                          style={{backgroundImage: "url('/pizza.png')", backgroundPosition: "center top"}}
                          whileHover={{ scale: 1.02,
                                        transition: {duration: 0.2}
                                      }}
                            >
                                 </motion.div>

                 <div className="title-logo">
                        <h3>One More Slice – Pizzarendelő App</h3>
                         <a href="https://github.com/BBTimTim/Pizza-ordering-app" target='_blank' rel="noopener noreferrer" aria-label="GitHub"><SiGithub className="icon2" /></a>
                </div>
                <p>
                 Vizsgamunkaként készült pizzarendelő webáruház Laravel backenddel és React + Redux Toolkit + Tailwind frontenddel.
                 Kosár, Stripe tesztfizetés, nyitvatartás-kezelés és admin felület.
                 Dockerben fut, GitHub Actions CI/CD-vel. A fejlesztésben Claude Code segített.
                </p>
                <div className="project-tech">
                  <span>React</span>
                  <span>Redux Toolkit</span>
                  <span>Tailwind</span>
                  <span>Laravel</span>
                  <span>MySQL</span>
                  <span>Docker</span>
                  <span>CI/CD</span>
                  <span>Claude</span>
                </div>
              </motion.div>
          </motion.div>

           <motion.div
            className="project-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}>
                    <motion.div
                    className="project-card"
                    variants={{ fadeInUp }}
                    whileHover={{ y: -10, transition: { duration: 0.2 } }}>
                            <motion.div className="project-image" 
                                        style={{backgroundImage: "url('/wedding2.png')"}}
                                        whileHover={{ scale: 1.02,
                                                        transition: {duration: 0.2}
                                                    }}>
                             </motion.div>
                                  <div className="title-logo"> 
                                     <h3>Esküvőszervező App Időpontfoglalással</h3>
                                    <span><a href="https://github.com/BBTimTim/laravel-react-reservation" target='_blank' rel="noopener noreferrer" aria-label="GitHub"><SiGithub className="icon2" /></a></span>
                                  </div>
                                <p>
                                Esküvőszervező és időpontfoglaló webalkalmazás.
                                Laravel (PHP) backenddel és React frontenddel. Az alkalmazás
                                REST API-n keresztül kommunikál, a frontend adatlekérések fetch
                                segítségével történnek. A rendszer user és admin jogosultságkezelést biztosít,
                                e-mailes megerősítéssel és jelszó-visszaállítással. 
                                Admin kezeli a felhasználókat és az időpontfoglalásokat.
                                </p>
                                <div className="project-tech">
                                <span>React</span>
                                <span>Laravel</span>
                                <span>Vite</span>
                                <span>Bootstrap</span>
                                <span>MySQL</span>
                                </div>                  
                    </motion.div>
          </motion.div>

            <motion.div
            className="project-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div
              className="project-card"
              variants={{ fadeInUp }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <motion.div className="project-image" 
                          style={{backgroundImage: "url('/weather.png')"}}
                          whileHover={{ scale: 1.02,
                                        transition: {duration: 0.2}
                                      }}
                     > </motion.div>
                 <div className="title-logo"> 
                     <h3>Időjárás App </h3> 
                     <a href="https://github.com/BBTimTim/Weather-App" target='_blank' rel="noopener noreferrer" aria-label="GitHub"><SiGithub className="icon2" /></a>
                </div>
                <p>
                Időjárás alkalmazás Laravel backenddel és React frontenddel, 
                Bootstrap UI-val, külső API-ról lekérdezett adatok MySQL-ben tárolásával, 
                városnév alapú keresőfelülettel.
                </p>
                <div className="project-tech">
                  <span>React</span>
                  <span>Laravel</span>
                  <span>Bootstrap</span>
                  <span>MySQL</span>
                  <span>OpenWeatherMap</span>
                </div>
            </motion.div>
          </motion.div>
      </motion.div>
    </div>
  );
}
