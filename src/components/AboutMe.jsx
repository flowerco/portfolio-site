import homeIcon from "../assets/images/homepage.svg";
import gitHubIcon from "../assets/images/github.svg";
import linkedInIcon from "../assets/images/linkedin.svg";
import profilePic from "../assets/images/takuya.jpg";
import './AboutMe.css';
import { useEffect, useState, useRef } from "react";

import * as THREE from 'three';
import WAVES from 'vanta/dist/vanta.waves.min.js';

export const AboutMe = () => {

  useEffect(() => {
    setTimeout(() =>{
      const main = document.querySelector('main');
      main.style.opacity = 1;
      main.style.filter = 'blur(0px)';
    }, 1000);
  }, []);

  const [vantaEffect, setVantaEffect] = useState(null)
  const vantaRef = useRef(null)

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(WAVES({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x308efe
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <div className="about flex flex-col justify-center">
      <div ref={vantaRef} id="vanta"></div>
      <div className="main">
        <div className="header">
          <img src={profilePic} />
          <h1>@flowerco</h1>
        </div>
        <ul>
          <li>
            <a href="https://flowerco.tech">
              <img src={homeIcon} alt="Homepage" width="20" />
              Official Website
            </a>
          </li>
          <li>
            <a href="https://github.com/flowerco">
              <img src={gitHubIcon} alt="Github" width="20" />
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/sam-flower-53b1968b/">
              <img src={linkedInIcon} alt="LinkedIn" width="20" />
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
