import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Slider from "./slider";
import Cursor from "./cursor"; 
import { useInView } from "react-intersection-observer";

function Team() {

  const [ref, inView] = useInView({
    triggerOnce: true, 
    threshold: 0.2, 
  });
  const [isHovered2, setIsHovered2] = useState(false);
  return (
    <section className="draggable-slider" ref={ref}>
       <Cursor isHovered2={isHovered2} text1="Drag" />
       {inView && (
      <motion.div className="sec-title"
      initial={{
        opacity: 0,
        x: 0,
        rotateX:-80, 
      }}
      animate={{
        opacity: 1,
        x: 0,
        rotateX:0, 
      }}
      transition={{ duration: 0.8, delay:0.6 }}
      >
        <h1>Our Team</h1>
      </motion.div>
       )}
        {inView && (
      <motion.div className="content-wrapper">
        <motion.div className="join-us"
        initial={{
          opacity: 0,
          x: -200,
         
        }}
        animate={{
          opacity: 1,
          x: 0,
          
        }}
        transition={{ duration: 0.8, delay:0.6 }}
        >
          <h1>Join the Team</h1>
          <h2>
            Want to Work With The Expert <br /> Team?
          </h2>
          <p>
            We Helped Hinders Of, People In Growing <br />
            Potentially
          </p>

          <a class="cb-btn cb-btn_cta -inverse" href="/tutorials">
            <span class="cb-btn_cta-border"></span>
            <span class="cb-btn_cta-ripple">
              <span></span>
            </span>
            <span class="cb-btn_cta-title">
              <span data-text="View all resources">Join Us</span>
            </span>
          </a>
        </motion.div>
        <div className="slider-content" onMouseEnter={() => setIsHovered2(true)}
              onMouseLeave={() => setIsHovered2(false)}>
          <Slider></Slider>
        </div>
      </motion.div>
        )}
    </section>
  );
}

export default Team;
