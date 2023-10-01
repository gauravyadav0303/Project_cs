import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Deliver() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <section className="deliver" >
      <div className="deliver-wrapper" style={{perspective:"400px"}}>
        <div className="sec-title" ref={ref}>
          {inView && (
            <motion.h1
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
              What Can Do For You
            </motion.h1>
          )}
        </div>
        <motion.div className="content-wrapper">
          <motion.div className="explore-us" >
            {inView && (
              <motion.p
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
                transition={{ duration: 1, delay: 1.6 }}
              >
                Our expert team of IT engineers is committed to overcoming
                complex IT challenges and providing customized solutions that
                precisely align with your business needs. We take great pride in
                delivering unrivaled assistance and support to foster the
                success of your organization.
              </motion.p>
            )}
            <a class="cb-btn cb-btn_cta -inverse" href="/tutorials">
              <span class="cb-btn_cta-border"></span>
              <span class="cb-btn_cta-ripple">
                <span></span>
              </span>
              <span class="cb-btn_cta-title">
                <span>Explore More</span>
              </span>
            </a>
            <div className="img">
              <img
                src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.36db851b.jpg&w=256&q=75"
                alt=""
              />
            </div>
          </motion.div>

          <motion.div className="do-cards" >
            {inView && (
              <motion.div className="col-2">
                <motion.div
                  className="cards"
                  initial={{ opacity: 0, x: -200 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <h1 className="h1">UI/UX</h1>
                  <div className="content">
                    <p>
                      UI (User Interface) design and UX (User Experience) design
                      are two closely related fields that play a crucial role in
                      creating effective digital products. A well-designed
                      interface can make a product more attractive and engaging
                      to users.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="cards"
                  initial={{ opacity: 0, x: -200 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  <h1 className="h1">Web Development</h1>
                  <div className="content">
                    <p>
                      Web development is the creation of online sites and
                      applications that people can access using the internet.
                      This involves many different tasks, such as designing how
                      a website looks, writing computer code to make it work,
                      organizing and managing information stored in databases,
                      and creating scripts that run on the server.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            )}
            {inView && (
              <motion.div className="col-2" >
                <motion.div className="cards"
                 initial={{ opacity: 0, x: -200 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 1, delay: 1.5 }}
                >
                  <h1 className="h1">IOS / Android</h1>
                  <div className="content">
                    <p>
                      iOS and Android are widely used mobile operating systems
                      that power a large number of smartphones, tablets, and
                      other portable devices. Both platforms have their own
                      distinct features and abilities, making them highly
                      popular choices among users worldwide.
                    </p>
                  </div>
                </motion.div>
                <motion.div className="cards"
                 initial={{ opacity: 0, x: -200 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 1, delay: 2 }}
                >
                  <h1 className="h1">SEO / Marketing</h1>
                  <div className="content">
                    <p>
                      Both SEO (Search Engine Optimization) and marketing play
                      crucial roles in the success of businesses in the online
                      realm. SEO assists businesses in drawing increased natural
                      traffic to their websites, whereas marketing aids in
                      reaching a broader audience and effectively promoting
                      their products or services.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Deliver;
