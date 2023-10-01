import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Service() {
  const [activeService, setActiveService] = useState(1);

  const handleServiceHover = (serviceNumber) => {
    setActiveService(serviceNumber);
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const buttonAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      buttonAnimation.start({
        y: [0, -20, 0],
        transition: {
          duration: 1,
          times: [0, 0.5, 1],
          repeat: Infinity,
          repeatType: "reverse",
        },
      });
    }
  }, [inView, buttonAnimation]);
  return (
    <section className="service__area ">
      <div className="container">
        <div className="row">
          <div className="wrap" ref={ref}>
            {inView && (
              <motion.div
                class="sec-title-wrapper "
                nitial={{}}
                animate={{
                  transition: { staggerChildren: 0.2 },
                }}
              >
                <motion.h2 class="sec-sub-title title-anim">
                  <motion.div
                    className="service_text"
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
                    Effective Approach
                  </motion.div>
                </motion.h2>
                
              </motion.div>
            )}
          </div>
          <div className="row"><div className="line"></div></div>
          {inView && (
            <motion.div class="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <motion.h3 class="sec-title title-anim">
                  <motion.div
                    className="service_text"
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
                    An effective Approach 
                  </motion.div>
                  <motion.div
                    className="service_text"
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
                   To Project Execution
                  </motion.div>
                </motion.h3>
              <motion.div class="service__top-text text-anim">
                <motion.p>
                  <motion.div
                    className="service_text"
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
                    transition={{ duration: 1.4, delay: 1 }}
                  >
                    An effective approach to project execution at{" "}
                    <span> CodeSpect Solution</span> involves Project
                  </motion.div>
                  <motion.div
                    className="service_text"
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
                    transition={{ duration: 1.4, delay: 1 }}
                  >
                    Discovery, Planning and Strategy, Design and Development,
                    Testing and Quality Assurance,
                  </motion.div>
                  <motion.div
                    className="service_text"
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
                    transition={{ duration: 1.4, delay: 1 }}
                  >
                    Implementation and Deployment, Training and Support, and
                    monitoring and evaluation.
                  </motion.div>
                </motion.p>
              </motion.div>
            </motion.div>
          )}
        </div>
        <div class="service__list-wrapper">
          <div class="row">
            <div class="col-xxl-4 col-xl-4 col-lg-0 col-md-0">
              <div class="service__img-wrapper">
                {activeService === 1 && (
                  <img
                    alt="Service Image"
                    width="280"
                    height="380"
                    class={`service__img img-1 ${
                      activeService === 1 ? "active" : ""
                    }`}
                    style={{ color: "transparent", height: "auto" }}
                    src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.e035e5be.png&w=384&q=75"
                  />
                )}
                {activeService === 2 && (
                  <img
                    alt="Service Image"
                    width="280"
                    height="380"
                    class={`service__img img-2 ${
                      activeService === 2 ? "active" : ""
                    }`}
                    style={{ color: "transparent", height: "auto" }}
                    src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.e035e5be.png&w=384&q=75"
                  />
                )}
                {activeService === 3 && (
                  <img
                    alt="Service Image"
                    width="280"
                    height="380"
                    class={`service__img img-3 ${
                      activeService === 3 ? "active" : ""
                    }`}
                    style={{ color: "transparent", height: "auto" }}
                    src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.edfb02b8.png&w=384&q=75"
                  />
                )}
                {activeService === 4 && (
                  <img
                    alt="Service Image"
                    width="280"
                    height="380"
                    class={`service__img img-4 ${
                      activeService === 4 ? "active" : ""
                    }`}
                    style={{ color: "transparent", height: "auto" }}
                    src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.e035e5be.png&w=384&q=75"
                  />
                )}
                <span
                  class={`shapes shape-box-4 ${
                    activeService === 1 ? "current" : ""
                  }`}
                ></span>
                <span
                  class={`shapes shape-box-4 ${
                    activeService === 2 ? "current" : ""
                  }`}
                ></span>
                <span
                  class={`shapes shape-box-4 ${
                    activeService === 3 ? "current" : ""
                  }`}
                ></span>
                <span
                  class={`shapes shape-box-4 ${
                    activeService === 4 ? "current" : ""
                  }`}
                ></span>
              </div>
            </div>
            <div class="col-xxl-8 col-xl-8 col-lg-12 col-md-12">
              {inView && (
                <motion.div class="service__list">
                  <a
                    class={activeService === 1 ? "active" : ""}
                    data-service="1"
                    href="/service-details"
                    onMouseEnter={() => handleServiceHover(1)}
                  >
                    <motion.div class="service__item animation_home1_service">
                      <motion.div
                        class="service__number"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.5,
                          ease: "easeOut",
                          delay: 0.4,
                        }}
                      >
                        <span
                          style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                          }}
                        >
                          01
                        </span>
                      </motion.div>
                      <motion.div
                        class="service__title-wrapper"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.6,
                          ease: "easeOut",
                          delay: 0.6,
                        }}
                      >
                        <h4
                          class="service__title"
                          style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                          }}
                        >
                          Project Discovery
                        </h4>
                      </motion.div>
                      <motion.div
                        class="service__text"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.8,
                          ease: "easeOut",
                          delay: 0.9,
                        }}
                      >
                        <p
                          style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                          }}
                        >
                          Codepsect solution conducting a thorough project
                          discovery phase, which involves understanding the
                          client's objectives, requirements, and expectations.
                          This step helps to establish clear project goals and
                          ensures a shared understanding between the agency and
                          the client.
                        </p>
                      </motion.div>
                      <div class="service__link">
                        <p
                          style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                          }}
                        >
                          <i class="fa-solid fa-arrow-right"></i>
                        </p>
                      </div>
                    </motion.div>
                  </a>
                  <a
                    class={activeService === 2 ? "active" : ""}
                    data-service="2"
                    href="/service-details"
                    onMouseEnter={() => handleServiceHover(2)}
                  >
                    <motion.div class="service__item  animation_home1_service">
                      <motion.div
                        class="service__number"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.5,
                          ease: "easeOut",
                          delay: 0.4,
                        }}
                      >
                        <span
                          style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                          }}
                        >
                          02
                        </span>
                      </motion.div>
                      <motion.div
                        class="service__title-wrapper"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.6,
                          ease: "easeOut",
                          delay: 0.6,
                        }}
                      >
                        <h4
                          class="service__title"
                          style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                          }}
                        >
                          Planning and <br />
                          Strategy
                        </h4>
                      </motion.div>
                      <motion.div
                        class="service__text"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.8,
                          ease: "easeOut",
                          delay: 0.9,
                        }}
                      >
                        <p
                          style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                          }}
                        >
                          Once the project goals are defined, We develops a
                          comprehensive plan and strategy to achieve them. This
                          includes outlining project timelines, allocating
                          resources, defining deliverables, and establishing a
                          project management framework.
                        </p>
                      </motion.div>
                      <div class="service__link">
                        <p
                          style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                          }}
                        >
                          <i class="fa-solid fa-arrow-right"></i>
                        </p>
                      </div>
                    </motion.div>
                  </a>
                  <a
                    class={activeService === 3 ? "active" : ""}
                    data-service="3"
                    href="/service-details"
                    onMouseEnter={() => handleServiceHover(3)}
                  >
                    <motion.div class="service__item  animation_home1_service">
                      <motion.div
                        class="service__number"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.5,
                          ease: "easeOut",
                          delay: 0.4,
                        }}
                      >
                        <span
                          style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                          }}
                        >
                          03
                        </span>
                      </motion.div>
                      <motion.div
                        class="service__title-wrapper"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.6,
                          ease: "easeOut",
                          delay: 0.6,
                        }}
                      >
                        <h4
                          class="service__title"
                          style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                          }}
                        >
                          Design and <br />
                          Development
                        </h4>
                      </motion.div>
                      <motion.div
                        class="service__text"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.8,
                          ease: "easeOut",
                          delay: 0.9,
                        }}
                      >
                        <p
                          style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                          }}
                        >
                          In this step, Our team of experts designs and develops
                          the required IT solutions, which could include
                          software development, system integrations, database
                          design, or website creation. The focus is on building
                          robust, scalable, and user-friendly solutions aligned
                          with the client's specific needs.
                        </p>
                      </motion.div>
                      <motion.div class="service__link">
                        <p
                          style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                          }}
                        >
                          <i class="fa-solid fa-arrow-right"></i>
                        </p>
                      </motion.div>
                    </motion.div>
                  </a>
                  <a
                    class={activeService === 4 ? "active" : ""}
                    data-service="4"
                    href="/service-details"
                    onMouseEnter={() => handleServiceHover(4)}
                  >
                    <motion.div class="service__item  animation_home1_service">
                      <motion.div
                        class="service__number"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.5,
                          ease: "easeOut",
                          delay: 0.4,
                        }}
                      >
                        <span
                          style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                          }}
                        >
                          04
                        </span>
                      </motion.div>
                      <motion.div
                        class="service__title-wrapper"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.6,
                          ease: "easeOut",
                          delay: 0.6,
                        }}
                      >
                        <h4
                          class="service__title"
                          style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                          }}
                        >
                          Testing and QA
                        </h4>
                      </motion.div>
                      <motion.div
                        class="service__text"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.8,
                          ease: "easeOut",
                          delay: 0.9,
                        }}
                      >
                        <p
                          style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                          }}
                        >
                          Before the final implementation, rigorous testing and
                          quality assurance measures are conducted to identify
                          and resolve any bugs, errors, or usability issues.
                          This step ensures that the solutions are reliable,
                          functional, and meet the required standards of
                          performance and security.
                        </p>
                      </motion.div>
                      <motion.div class="service__link">
                        <p
                          style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                          }}
                        >
                          <i class="fa-solid fa-arrow-right"></i>
                        </p>
                      </motion.div>
                    </motion.div>
                  </a>

                  <a
                    class={activeService === 5 ? "active" : ""}
                    data-service="4"
                    href="/service-details"
                    onMouseEnter={() => handleServiceHover(4)}
                  >
                    <motion.div class="service__item  animation_home1_service">
                      <motion.div
                        class="service__number"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.5,
                          ease: "easeOut",
                          delay: 0.4,
                        }}
                      >
                        <span
                          style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                          }}
                        >
                          05
                        </span>
                      </motion.div>
                      <motion.div
                        class="service__title-wrapper"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.6,
                          ease: "easeOut",
                          delay: 0.6,
                        }}
                      >
                        <h4
                          class="service__title"
                          style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                          }}
                        >
                          Implementation and Deployment
                        </h4>
                      </motion.div>
                      <motion.div
                        class="service__text"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.8,
                          ease: "easeOut",
                          delay: 0.9,
                        }}
                      >
                        <p
                          style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                          }}
                        >
                          Once the solutions have been thoroughly tested and approved, We proceeds with the implementation and deployment phase. This involves integrating the developed solutions into the client's existing IT infrastructure or launching new systems, ensuring a smooth transition and minimal disruption to business operations.
                        </p>
                      </motion.div>
                      <motion.div class="service__link">
                        <p
                          style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                          }}
                        >
                          <i class="fa-solid fa-arrow-right"></i>
                        </p>
                      </motion.div>
                    </motion.div>
                  </a>
                  <a
                    class={activeService === 6 ? "active" : ""}
                    data-service="4"
                    href="/service-details"
                    onMouseEnter={() => handleServiceHover(4)}
                  >
                    <motion.div class="service__item  animation_home1_service">
                      <motion.div
                        class="service__number"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.5,
                          ease: "easeOut",
                          delay: 0.4,
                        }}
                      >
                        <span
                          style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                          }}
                        >
                          06
                        </span>
                      </motion.div>
                      <motion.div
                        class="service__title-wrapper"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.6,
                          ease: "easeOut",
                          delay: 0.6,
                        }}
                      >
                        <h4
                          class="service__title"
                          style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                          }}
                        >
                          Training and Support
                        </h4>
                      </motion.div>
                      <motion.div
                        class="service__text"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.8,
                          ease: "easeOut",
                          delay: 0.9,
                        }}
                      >
                        <p
                          style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                          }}
                        >
                          Before the final implementation, rigorous testing and
                          quality assurance measures are conducted to identify
                          and resolve any bugs, errors, or usability issues.
                          This step ensures that the solutions are reliable,
                          functional, and meet the required standards of
                          performance and security.
                        </p>
                      </motion.div>
                      <motion.div class="service__link">
                        <p
                          style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                          }}
                        >
                          <i class="fa-solid fa-arrow-right"></i>
                        </p>
                      </motion.div>
                    </motion.div>
                  </a>
                  <a
                    class={activeService === 7 ? "active" : ""}
                    data-service="4"
                    href="/service-details"
                    onMouseEnter={() => handleServiceHover(4)}
                  >
                    <motion.div class="service__item  animation_home1_service">
                      <motion.div
                        class="service__number"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.5,
                          ease: "easeOut",
                          delay: 0.4,
                        }}
                      >
                        <span
                          style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                          }}
                        >
                          07
                        </span>
                      </motion.div>
                      <motion.div
                        class="service__title-wrapper"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.6,
                          ease: "easeOut",
                          delay: 0.6,
                        }}
                      >
                        <h4
                          class="service__title"
                          style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                          }}
                        >
                          Monitoring and Evaluation
                        </h4>
                      </motion.div>
                      <motion.div
                        class="service__text"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.8,
                          ease: "easeOut",
                          delay: 0.9,
                        }}
                      >
                        <p
                          style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                          }}
                        >
                         After the project is implemented, We continues to monitor and evaluate the performance of the solutions. This allows for continuous improvement, optimization, and identification of areas where further enhancements or adjustments may be required.
                        </p>
                      </motion.div>
                      <motion.div class="service__link">
                        <p
                          style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                          }}
                        >
                          <i class="fa-solid fa-arrow-right"></i>
                        </p>
                      </motion.div>
                    </motion.div>
                  </a>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
