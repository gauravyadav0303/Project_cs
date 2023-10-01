import React from "react";
import goat1 from "../assets/images/goat1.png";
import goat2 from "../assets/images/goat2.png";
import goat3 from "../assets/images/goat3.png";
import goat4 from "../assets/images/goat4.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Goat() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="goat__area">
      <div className="goat-wrapper" ref={ref}>
        {inView && (
          <motion.div
            className="sec-title"
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
            <h1>Elevating Digital Experiences</h1>
          </motion.div>
        )}

        <motion.div className="content-wrapper">
          {inView && (
            <motion.div
              className="sub-title"
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
              <h2>
                Inspiring Design Innovations for <span>GOATS</span>
              </h2>
            </motion.div>
          )}
          {inView && (
            <motion.div className="do-cards">
              <motion.div className="col-2 col-2-1">
                <motion.div
                  className="cards"
                  initial={{ opacity: 0, x: -200 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <div className="img">
                    <img src={goat1} alt="" />
                  </div>
                  <div className="content">
                    <p>
                      We adopt a collaborative approach and aim to provide you
                      with the finest design solutions through our team of
                      experts. Our goal is to elevate digital experiences to new
                      levels, offering design inspirations tailored specifically
                      for GOATS.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="cards"
                  initial={{ opacity: 0, x: -200 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 1.5 }}
                >
                  <div className="img">
                    <img src={goat2} alt="" />
                  </div>
                  <div className="content">
                    <p>
                      Our methodology involves collaboration, we are here to
                      offer you the finest design solutions with the assistance
                      of our team of professionals. Our focus is to take digital
                      experiences to unprecedented heights, providing design
                      inspirations tailored specifically for GOATS.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
              <motion.div className="col-2">
                <motion.div
                  className="cards"
                  initial={{ opacity: 0, x: -200 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 2.0 }}
                >
                  <div className="img">
                    <img src={goat3} alt="" />
                  </div>
                  <div className="content">
                    <p>
                      We employ a collaborative approach and are dedicated to
                      assisting you with top-notch design solutions utilizing
                      our team of skilled experts. Our aim is to raise the bar
                      for digital experiences, providing design inspirations
                      that cater specifically to GOATS.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="cards"
                  initial={{ opacity: 0, x: -200 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 2.5 }}
                >
                  <div className="img">
                    <img src={goat4} alt="" />
                  </div>
                  <div className="content">
                    <p>
                      We adopt a collaborative approach and are dedicated to
                      assisting you with the best design solutions through our
                      expert team. Our goal is to elevate digital experiences
                      and provide new levels of design inspiration specifically
                      tailored for GOATS.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default Goat;
