import React from "react";
import "./about.scss";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaLaravel,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiVite,
  SiPhp,
  SiDocker,
  SiTailwindcss,
  SiRedux,
  SiClaude,
} from "react-icons/si";

export default function About() {
  return (
    <div id="about" className="about">
      <div className="aboutWrapper">
        <div className="gradientWrapper"> </div>
        <div className="content">
          <div className="content-glass">
            <h1>Hello!</h1>
            <div className="content-text2">
              <h3 className="motivation-title2">Személyes Profil</h3>
              <p>
                <b> Junior Fejlesztőként</b> jelenleg a fejlődésre törekvés a
                legnagyobb motivációm. Ambíciózus egyénnek tartom magam, minél
                több új ismeretre teszek szert, annál inkább ösztönöz, hogy
                méginkább elmélyítsem a tudásom. Erős alapokra szeretnék
                felépíteni egy tudatos szakmai pályát, azt fenntartani és
                folyamatosan építeni.
              </p>
              <p>
                Várom, hogy valós projekteken keresztül tapasztalatot szerezzek,
                új kihívásokkal találkozzak, és közben folyamatosan fejlődhessek
                mind szakmailag, mind emberileg.
              </p>
                <p>Az alkotás és a gondolkodás számomra kéz a kézben jár a test karbantartásával egyetemben. 
                    Az egyensúly megőrzése segít a testet és elmét frissen tartani a mindennapok forgatagában.
                  </p>
            </div>
            <div className="content-text motivation glass">
              <h3 className="motivation-title">Mi motivál?</h3>
              <div className="text-box">
                <div className="iconWrapper">
                  <div className="glass"></div>
                  <img src="/brain.png" alt="brain" />
                </div>
                <div className="textWrapper">
                  <h3>Kihívások</h3>
                  <p>
                    Úgy gondolom a fejlődéshez elengedhetetlen, hogy az ember
                    kihívásokba ütközzön, minden projekt egy újabb esély a
                    fejlődésre.
                  </p>
                </div>
              </div>

              <div className="text-box">
                <div className="iconWrapper">
                  <div className="glass"></div>
                  <img src="/book.png" alt="book" />
                </div>
                <div className="textWrapper">
                  <h3>Perspektíva tágítása</h3>
                  <p>
                    Az önfejlesztés egész életen át tartó folyamat. <br />
                    Eddig egy apró szeletét sikerült megismernem a fejlesztői
                    világnak de már ez is sok új nézőpontot adott. Alig várom,
                    hogy valós munkákon keresztül még többet tapasztaljak és
                    fejlődjek.
                  </p>
                </div>
              </div>

              <div className="text-box">
                <div className="iconWrapper">
                  <div className="glass"></div>
                  <img src="/team.png" alt="team" />
                </div>
                <div className="textWrapper">
                  <h3>Csapatmunka</h3>
                  <p>
                    Szeretnék egy csapat részévé válni, ahol tapasztaltabb
                    fejlesztőktől tanulhatok, miközben én is aktívan
                    hozzájárulok a közös munkához.
                  </p>
                </div>
              </div>

              <div className="text-box">
                <div className="iconWrapper">
                  <div className="glass"></div>
                  <img src="/art.png" alt="art" />
                </div>
                <div className="textWrapper">
                  <h3>Kreativitás</h3>
                  <p>
                    A kreativitás a részem, sok dolog inspirál a mindennapokban.
                    Kikapcsolódásként szeretek olyan tevékenységekkel
                    foglalkozni, amelyek gondolkodásra ösztönöznek - ez az a fajta
                    'agytorna', ami folyamatosan motivál.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="skills">
        <div className="skill">
          <span>Skillek</span>
          <hr />
        </div>
        <div className="skillBox">
          <div className="wrapper">
            <span>
              <FaLaravel className="icon" />
            </span>
            <span>
              <FaNodeJs className="icon" />
            </span>
            <span>
              <FaJs className="icon" />
            </span>
            <span>
              <FaCss3Alt className="icon" />
            </span>
            <span>
              <FaHtml5 className="icon" />
            </span>
            <span>
              <FaReact className="icon" />
            </span>
            <span>
              <SiRedux className="icon" />
            </span>
            <span>
              <SiPhp className="icon" />
            </span>
            <span>
              <SiVite className="icon" />
            </span>
            <span>
              <FaBootstrap className="icon" />
            </span>
            <span>
              <SiTailwindcss className="icon" />
            </span>
            <span>
              <SiDocker className="icon" />
            </span>
            <span>
              <img src="/mys.png" className="mys" alt="MySQL" />
            </span>
            <span>
              <SiClaude className="icon" />
            </span>
            <span>
              <img src="/ai.png" alt="Adobe Illustrator" />
            </span>
            <span>
              <img src="/id.png" alt="Adobe InDesign" />
            </span>
            <span>
              <img src="/ps.png" alt="Adobe Photoshop" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
