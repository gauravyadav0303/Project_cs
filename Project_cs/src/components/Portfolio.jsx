import React, { useState } from "react";
import Cursor from "./cursor"; 
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Portfolio() {
  const [isHovered1, setIsHovered1] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="portfolio-section">
      <Cursor isHovered1={isHovered1} text="Explore" />
      <div className="portfolio-wrapper" ref={ref} style={{perspective:"400px"}}>
        {inView &&(
        <motion.div className="portfolio-title"
        initial={{
          opacity: 0,
          x: 0,
          rotateX: -80,
        }}
        animate={{
          opacity: 1,
          x: 0,
          rotateX: 0,
        }}
        transition={{ duration: 0.8, delay: 0.6 }}
        >
          Featured
          <motion.div className="sub-title"
          initial={{
            opacity: 0,
            x: 0,
            rotateX: -80,
          }}
          animate={{
            opacity: 1,
            x: 0,
            rotateX: 0,
          }}
          transition={{ duration: 0.8, delay: 0.6 }}
          >
            <video
              autoPlay
              loop={true}
              muted
              src="https://cdn.cuberto.com/cb/home/featured/header.mp4"
            ></video>
            <span>Projects</span>
          </motion.div>
        </motion.div>
        )}
        <div className="col-2">
          <div class="portfolio__list-1">
            {inView && (
            <motion.div class="portfolio__item"
             initial={{ opacity: 0, x: -200 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="front"
              onMouseEnter={() => setIsHovered1(true)}
              onMouseLeave={() => setIsHovered1(false)}>
                <a href="/portfolio-details">
                  <img
                    alt="Portfolio Image"
                    width="520"
                    height="700"
                    class="mover"
                    style={{ color: "transparent"}}
                    src="https://codespectsolution.com/static/media/noteefy.59190e7f5bd40299d147.png"
                  />
                </a>
              </div>
              <div class="portfolio__info">
                <span class="portfolio__title">Noteefy.app</span> <span className="dashed">-</span>
                The ultimate productivity tool that will revolutionize the way
                  you organize and manage your notes. With its user-friendly
                  interface and powerful features, Noteefy.app empowers you to
                  take control of your information effortlessly.
              </div>
            </motion.div>
            )}
            {inView && (
            <motion.div class="portfolio__item"
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            >
              <div className="front"
               onMouseEnter={() => setIsHovered1(true)}
               onMouseLeave={() => setIsHovered1(false)}>
                <a href="/portfolio-details">
                  <img
                    alt="Portfolio Image"
                    width="520"
                    height="700"
                    class="mover"
                    style={{ color: "transparent" }}
                    src="https://codespectsolution.com/static/media/orbofi.cce6982440e01db923ec.png"
                  />
                </a>
              </div>
              <div class="portfolio__info">
                <span class="portfolio__title">OrboFi.com</span> <span className="dashed">-</span>
                Your gateway to the future of finance. We're here to revolutionize the way you manage and grow your money. With our cutting-edge platform, you can take control of your financial journey like never before.
              </div>
            </motion.div>
            )}
             {inView && (
            <motion.div class="portfolio__item"
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 2.5 }}
            >
              <div className="front"
               onMouseEnter={() => setIsHovered1(true)}
               onMouseLeave={() => setIsHovered1(false)}>
                <a href="/portfolio-details">
                  <img
                    alt="Portfolio Image"
                    width="520"
                    height="700"
                    class="mover"
                    style={{ color: "transparent" }}
                    src="https://codespectsolution.com/static/media/shurooq.c563eb9a4576876274ed.png"
                  />
                </a>
              </div>
              <div class="portfolio__info">
                <span class="portfolio__title">Shurooq.gov.ae</span> <span className="dashed">-</span>
                Your gateway to the vibrant opportunities offered by the Sharjah Investment and Development Authority. We're here to ignite your potential and help you thrive in one of the most dynamic business environments in the region.
              </div>
            </motion.div>
             )}
          </div>
          <div class="portfolio__list-1 portfolio__list-1-1" >
          {inView && (
            <motion.div class="portfolio__item"
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="front"
               onMouseEnter={() => setIsHovered1(true)}
               onMouseLeave={() => setIsHovered1(false)}>
                <a href="/portfolio-details">
                  <img
                    alt="Portfolio Image"
                    width="520"
                    height="700"
                    class="mover"
                    style={{ color: "transparent"}}
                    src="https://codespectsolution.com/static/media/custom-space.e86c08d904b2af3b8ab4.png"
                  />
                </a>
              </div>
              <div class="portfolio__info">
                <span class="portfolio__title">CustomSpace.com</span> <span className="dashed">-</span>
                Your ultimate solution for secure and convenient storage needs. We're here to simplify your life and provide you with peace of mind when it comes to storing your belongings.
              </div>
            </motion.div>
          )}
          {inView && (
            <motion.div class="portfolio__item"
             initial={{ opacity: 0, x: 200 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1, delay: 1.5 }}
            >
              <div className="front"
               onMouseEnter={() => setIsHovered1(true)}
               onMouseLeave={() => setIsHovered1(false)}>
                <a href="/portfolio-details">
                  <img
                    alt="Portfolio Image"
                    width="520"
                    height="700"
                    class="mover"
                    style={{ color: "transparent" }}
                    src="https://codespectsolution.com/static/media/elocker.816c462daaa59c750645.png"
                  />
                </a>
              </div>
              <div class="portfolio__info">
                <span class="portfolio__title">eLocker.com</span> <span className="dashed">-</span>
                Your ultimate solution for secure and convenient storage needs. We're here to simplify your life and provide you with peace of mind when it comes to storing your belongings.
              </div>
            </motion.div>
          )}
            {inView && (
            <motion.div class="portfolio__item"
             initial={{ opacity: 0, x: 200 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1, delay: 2.5 }}
            >
              <div className="front"
               onMouseEnter={() => setIsHovered1(true)}
               onMouseLeave={() => setIsHovered1(false)}>
                <a href="/portfolio-details">
                  <img
                    alt="Portfolio Image"
                    width="520"
                    height="700"
                    class="mover"
                    style={{ color: "transparent"}}
                    src="https://codespectsolution.com/static/media/goblaq.4e4d34b8a13f81f51942.png"
                  />
                </a>
              </div>
              <div class="portfolio__info">
                <span class="portfolio__title">Goblaq.com</span> <span className="dashed">-</span>
                Your ultimate solution for secure and convenient storage needs. We're here to simplify your life and provide you with peace of mind when it comes to storing your belongings.
              </div>
            </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
