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
                          style={{backgroundImage: "url('/todo2.png')"}}
                          whileHover={{ scale: 1.02,
                                        transition: {duration: 0.2}
                                      }}
                            >
                                 </motion.div>
                                 
                 <div className="title-logo">  
                        <h3>Todo App</h3>
                         <a href="https://github.com/BBTimTim/Php-todo-app/tree/main/todo" target='_blank'><SiGithub className="icon2" /></a>
                </div>
                <p>
                 Todo webalkalmazás PHP (MySQL) backenddel és Bootstrap frontenddel, 
                 Docker környezetben, ahol a felhasználók létrehozhatnak, módosíthatnak 
                 és törölhetnek feladatokat, valamint egyszerűen kezelhetik a határidőket és státuszokat.
                </p>
                <div className="project-tech">
                  <span>PHP</span>
                  <span>Docker</span>
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
                                    <a href="https://github.com/BBTimTim/laravel-react-reservation" target='_blank'><SiGithub className="icon2" /></a>
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
                     <a href="https://github.com/BBTimTim/Weather-App" target='_blank'><SiGithub className="icon2" /></a>
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
