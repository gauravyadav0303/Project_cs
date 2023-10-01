import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


function Testamonial() {
  const [ref, inView] = useInView({
    triggerOnce: true, 
    threshold: 0.2, 
  });


  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40; 
      const y = (e.clientY / window.innerHeight - 0.5) * 40; 
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <section class="testimonial__area" ref={ref}>
      {inView && (
      <motion.div class="container g-0 line">
        <span class="line-3"></span>
        <div class="row">

          <motion.div class="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
       
            <motion.div class="testimonial__wrapper">
              <motion.div class="testimonial__item item-1">
                <motion.div class="button modal-trigger">
                  <motion.div class="testimonial__img b-right"
                  style={{
                    translateX: `${mousePosition.x}px`,
                    translateY: `${mousePosition.y}px`,
                  }}>
                    <img
                      alt="Testimonial Image"
                      width="330"
                      height="430"
                      
                      src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.b76e6018.png&w=384&q=75"
                    
                    />
                  </motion.div>
                  <h2 class="testimonial__title">Ludwig Van B</h2>
                  <h3 class="testimonial__role">Manager, Oitaka</h3>
                </motion.div>
              </motion.div>
             
     
              <motion.div class="sec-title-wrapper text-anim">
                <motion.h4
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
                transition={{ duration: 0.6, delay:0.6 }} class="sec-sub-title">Testimonials</motion.h4>
                <motion.h5 class="sec-title title-anim">
                  <motion.div
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
                  transition={{ duration: 0.6, delay:0.6 }} 
                
                  >
                    Clients{" "}
                  </motion.div>
                  <motion.div 
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
                  transition={{ duration: 0.6, delay:0.6 }}
                     >
                    feedback
                  </motion.div>
                </motion.h5>
                <motion.p>
                  <motion.div 
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
                  transition={{ duration: 1, delay:0.9 }}
                
                  >
                    Our happy customers give us impactfull{" "}
                  </motion.div>
                  <motion.div 
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
                  transition={{ duration: 1.1, delay:1 }}
                                  >
                    and positive feedback on our services,{" "}
                  </motion.div>
                  <motion.div 
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
                  transition={{ duration: 1.2, delay:1.1 }}
                                  >
                    customer supports &amp; etc.
                  </motion.div>
                </motion.p>
              </motion.div>
            
            </motion.div>
           
            <motion.div class="testimonial__item item-2">
              <motion.div class="button modal-trigger-2">
                <motion.div class="testimonial__img b-left"
                style={{
                  translateX: `${mousePosition.x}px`,
                  translateY: `${mousePosition.y}px`,
                }}>
                  <img
                    alt="Testimonial Image"
                    width="220"
                    height="300"
                                     src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.bdbd9da7.png&w=256&q=75"
                    
                  />
                </motion.div>
                <h2 class="testimonial__title">Barczib</h2>
                <h3 class="testimonial__role">Manager, Oitaka</h3>
              </motion.div>
            </motion.div>
            <motion.div class="testimonial__item item-4">
                <motion.div class="button modal-trigger">
                  <motion.div class="testimonial__img b-right"
                  style={{
                    translateX: `${mousePosition.x}px`,
                    translateY: `${mousePosition.y}px`,
                  }}>
                    <img
                      alt="Testimonial Image"
                      width="330"
                      height="430"
                      
                      src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.b76e6018.png&w=384&q=75"
                    
                    />
                  </motion.div>
                  <h2 class="testimonial__title">Jasonmaxim</h2>
                  <h3 class="testimonial__role">Manager, Oitaka</h3>
                </motion.div>
              </motion.div>
            
          </motion.div>
          

          <motion.div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
            <motion.div class="testimonial__item item-3 img-">
              <motion.div class="button modal-trigger-3">
                <motion.div class="testimonial__img b-left"
                style={{
                  translateX: `${mousePosition.x}px`,
                  translateY: `${mousePosition.y}px`,
                }}>
                  <img
                    alt="Testimonial Image"
                    width="260"
                    height="360"
                                     src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.d74890f6.png&w=384&q=75"
                    
                  />
                </motion.div>
                <h2 class="testimonial__title">Christopher De Water</h2>
                <h3 class="testimonial__role">Manager, Oitaka</h3>
              </motion.div>
            </motion.div>
            <motion.div class="testimonial__item item-5">
                <motion.div class="button modal-trigger">
                  <motion.div class="testimonial__img b-left"
                  style={{
                    translateX: `${mousePosition.x}px`,
                    translateY: `${mousePosition.y}px`,
                  }}>
                    <img
                      alt="Testimonial Image"
                      width="330"
                      height="430"
                      
                      src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.b76e6018.png&w=384&q=75"
                    
                    />
                  </motion.div>
                  <h2 class="testimonial__title">Alvaro Mehrgut</h2>
                  <h3 class="testimonial__role">Manager, Oitaka</h3>
                </motion.div>
              </motion.div>
          </motion.div>
          
            
        </div>
      </motion.div>
      )}
    </section>
  );
}

export default Testamonial;
