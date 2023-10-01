import React, { useState } from "react";
import Cursor from "./cursor";
import logo1 from "../assets/images/logo.png";
import {motion} from "framer-motion";
import { useInView } from "react-intersection-observer";

function Hero() {

  
  const [ref, inView] = useInView({
    triggerOnce: true, 
    threshold: 0.2, 
  });

  return (
    <div className="hero__area">
      <Cursor ></Cursor>
      <div className="row">
        <div className="header1">
          <motion.div className="img-container"
           initial={{ opacity: 0, y: -200 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1 , delay: 5 }}>
            <img src={logo1} alt="" />
          </motion.div>
        </div>

        <div className="hero__title__wrapper"
        data-cursor-video="./assets/images/1.mp4"
        >
          <div className="hero__title" ref={ref}>
            {inView && (
            <motion.div className="big_words">
              <motion.div className="small-words"
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 1 , delay: 5 }}
              >Our Customized Software</motion.div>
              <motion.div className="small-words"
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 1, delay: 5.5 }}
               >Solutions Can Transform The</motion.div>

              <motion.div className="small-words"
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 1, delay: 6 }}
               >
                Way Your
                <motion.span
                  className="green-word"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 6.5 }}
                  style={{ color: "rgba(201, 243, 29, 0.80)" }}
                  
                >
                  Business Growth.
                </motion.span>
              </motion.div>
            </motion.div>
            )}
          </div>
        </div>

        <div className="slider-1">
          <div className="slider-wrapper">
            <div className="slider-item">creative design</div>
            <div className="slider-item">
              <div className="circle" />
            </div>
            <div className="slider-item">ui/ux</div>
            <div className="slider-item">
              <div className="circle" />
            </div>
            <div className="slider-item">app dev</div>
            <div className="slider-item">
              <div className="circle" />
            </div>
            <div className="slider-item">web dev</div>
            <div className="slider-item">
              <div className="circle" />
            </div>
            <div className="slider-item">react</div>
            <div className="slider-item">
              <div className="circle" />
            </div>
            <div className="slider-item">logo design</div>
            <div className="slider-item">
              <div className="circle" />
            </div>
            <div className="slider-item">creative design</div>
            <div className="slider-item">
              <div className="circle" />
            </div>
            <div className="slider-item">ui/ux</div>
            <div className="slider-item">
              <div className="circle" />
            </div>
            <div className="slider-item">app dev</div>
            <div className="slider-item">
              <div className="circle" />
            </div>
            <div className="slider-item">web dev</div>
            <div className="slider-item">
              <div className="circle" />
            </div>
            <div className="slider-item">react</div>
            <div className="slider-item">
              <div className="circle" />
            </div>
            <div className="slider-item">logo design</div>
            <div className="slider-item">
              <div className="circle" />
            </div>
          </div>
        </div>

        <div className="slider-2">
          <div className="slider-wrapper">
            <div className="slider-item">creative design</div>
            <div className="slider-item">
              <div className="circle" />
            </div>
            <div className="slider-item">ui/ux</div>
            <div className="slider-item">
              <div className="circle" />
            </div>
            <div className="slider-item">app dev</div>
            <div className="slider-item">
              <div className="circle" />
            </div>
            <div className="slider-item">web dev</div>
            <div className="slider-item">
              <div className="circle" />
            </div>
            <div className="slider-item">react</div>
            <div className="slider-item">
              <div className="circle" />
            </div>
            <div className="slider-item">logo design</div>
            <div className="slider-item">
              <div className="circle" />
            </div>
            <div className="slider-item">creative design</div>
            <div className="slider-item">
              <div className="circle" />
            </div>
            <div className="slider-item">ui/ux</div>
            <div className="slider-item">
              <div className="circle" />
            </div>
            <div className="slider-item">app dev</div>
            <div className="slider-item">
              <div className="circle" />
            </div>
            <div className="slider-item">web dev</div>
            <div className="slider-item">
              <div className="circle" />
            </div>
            <div className="slider-item">react</div>
            <div className="slider-item">
              <div className="circle" />
            </div>
            <div className="slider-item">logo design</div>
            <div className="slider-item">
              <div className="circle" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;


