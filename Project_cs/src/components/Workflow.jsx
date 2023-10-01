import React from "react";
import { motion} from "framer-motion";
import { useInView } from "react-intersection-observer";

function Workflow() {
  const [ref, inView] = useInView({
    triggerOnce: true, 
    threshold: 0.2, 
  });
  return (
    <section className="workflow__area">
      <div class="workflow__area__wrapper">
       
        <div ref={ref}>
          {inView &&(
          <motion.div class="col-xxl-12">
            <div class="sec-title-wrapper">
              <motion.h2 class="sec-sub-title title-anim"
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
              transition={{ duration: 0.6, delay:0.6 }} >
                <div className="workflow__main__text" >
                  Workflow
                </div>
              </motion.h2>
              <motion.h3 class="sec-title title-anim"
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
              transition={{ duration: 0.6, delay:0.6 }}>
                <div className="workflow__text">
                  How we work
                </div>
              </motion.h3>
            </div>
          </motion.div>
          )}
          {inView && (
          <motion.div class="col-xxl-12 workflow__slider">
            <div
              class="swiper"
            >
              <div class="swiper-wrapper">
                <motion.div
                  class="swiper-slide"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut", delay:0.3 }}
                >
                  <div
                    class="workflow__slide"
                  >
                    <h4 class="workflow__step">step 01</h4>
                    <h5 class="workflow__number">01</h5>
                    <h6 class="workflow__title">Audience</h6>
                    <p>Having these the marketplace to your business</p>
                  </div>
                </motion.div>
                <motion.div
                  class="swiper-slide"
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay:0.5 }}
                >
                  <motion.div
                    class="workflow__slide"
                  >
                    <h4 class="workflow__step">step 02</h4>
                    <h5 class="workflow__number">02</h5>
                    <h6 class="workflow__title">Plan &amp; Sketch</h6>
                    <p>
                      Delicate and long-lasting with vitamins and nutritions
                    </p>
                  </motion.div>
                </motion.div>
                <motion.div
                  class="swiper-slide"
                  initial={{ opacity: 0, x: -60 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay:0.7 }}
                >
                  <motion.div
                    class="workflow__slide"
                  >
                    <h4 class="workflow__step">step 03</h4>
                    <h5 class="workflow__number">03</h5>
                    <h6 class="workflow__title">Customize</h6>
                    <p>Creating brand identities for the digital experiences</p>
                  </motion.div>
                </motion.div>
                <motion.div
                  class="swiper-slide"
                  initial={{ opacity: 0, x: -80 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: "easeOut", delay:0.9 }}
                >
                  <motion.div
                    class="workflow__slide"
                  >
                    <h4 class="workflow__step">step 04</h4>
                    <h5 class="workflow__number">04</h5>
                    <h6 class="workflow__title">User Testing</h6>
                    <p>
                      We look forward to engage with beyond the conventional
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Workflow;



// style="display: block; text-align: center; position: relative; translate: none; rotate: none; scale: none; transform-origin: 660px 10.8px; transform: translate3d(0px, 0px, 0px); opacity: 1;"