import React, { useRef, useEffect }  from "react";
import { useInView } from "react-intersection-observer";
import {motion} from "framer-motion";

function Customer() {

    const leftPerspective = [
        { x: -10, z: -4 },
        { x: -20, z: -8 },
        { x: -30, z: -12 },
        { x: 10, z: -4 },
      ];
    
      const rightPerspective = [
        { x: 10, z: -4 },
        { x: 20, z: -8 },
        { x: 30, z: -12 },
        { x: -10, z: -4 },
      ];
    
      const myElementRef = useRef(null);
      const myElementRef1 = useRef(null);
    
      const translateImage = (target, p) => {
        target.style.transform = `translate3d(${p.x}rem, 0, ${p.z}rem)`;
      };
    
      const animateCards = (c, perspectives) => {
        const count = parseInt(c.dataset.counter);
        setTimeout(() => {
            translateImage(c, perspectives[count - 1]);
            c.dataset.counter = count === 4 ? "1" : (count + 1).toString();
          }, 2000);
      };
    
      const loop = () => {
        const leftCards = Array.from(
          myElementRef.current.querySelectorAll(".card")
        );
        const rightCards = Array.from(
          myElementRef1.current.querySelectorAll(".card")
        );
    
        setInterval(() => {
          leftCards.forEach((c) => {
            animateCards(c, leftPerspective);
          });
          rightCards.forEach((c) => {
            animateCards(c, rightPerspective);
          });
        }, 5000);
      };
    
      useEffect(() => {
        loop();
      }, []);


      const [ref, inView] = useInView({
        triggerOnce: true, 
        threshold: 0.2, 
      });
  return (
    <section className="customer" ref={ref} >
       
        <div className="customer-title-wrapper" ref={ref}  >
        {inView && (
            <motion.div className="title"
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
                Our <span className="green-word" style={{ color: "rgba(201, 243, 29, 0.80)" }}> Customers</span>
            </motion.div>
        )}
        </div>
      <div className="customer-wrapper">
        <div className="left">
          <div className="inner" ref={myElementRef}>
            <div className="card" data-counter="1">
              <div className="video">
                <video
                  src="https://about.orbofi.com/wp-content/uploads/2023/02/welcome-to-Orbofi.mp4"
                  autoPlay
                  loop="true"
                ></video>
              </div>
              <div className="video-text" >
                Orbofi
              </div>
            </div>
            <div className="card" data-counter="2">
              <div className="video">
                <video
                  src="https://about.orbofi.com/wp-content/uploads/2023/02/welcome-to-Orbofi.mp4"
                  autoPlay
                  loop="true"
                ></video>
              </div>
              <div className="video-text" >
                Chakra
              </div>
            </div>
            <div className="card" data-counter="3">
              <div className="video">
                <video
                  src="https://about.orbofi.com/wp-content/uploads/2023/02/welcome-to-Orbofi.mp4"
                  autoPlay
                  loop="true"
                ></video>
              </div>
              <div className="video-text">
                Noteefy
              </div>
            </div>
            <div className="card" data-counter="4">
              <div className="video">
                <video
                  src="https://about.orbofi.com/wp-content/uploads/2023/02/welcome-to-Orbofi.mp4"
                  autoPlay
                  loop="true"
                ></video>
              </div>
              <div className="video-text">
                Med Solutions
              </div>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="right">
          <div className="inner" ref={myElementRef1}>
            <div className="card" data-counter="1">
              <div className="video">
                <video
                  src="https://about.orbofi.com/wp-content/uploads/2023/02/welcome-to-Orbofi.mp4"
                  autoPlay
                  loop="true"
                ></video>
              </div>
              <div className="video-text">
                Custom Space
              </div>
            </div>
            <div className="card" data-counter="2">
              <div className="video">
                <video
                  src="https://about.orbofi.com/wp-content/uploads/2023/02/welcome-to-Orbofi.mp4"
                  autoPlay
                  loop="true"
                ></video>
              </div>
              <div className="video-text">
                Goblaq
              </div>
            </div>
            <div className="card" data-counter="3">
              <div className="video">
                <video
                  src="https://about.orbofi.com/wp-content/uploads/2023/02/welcome-to-Orbofi.mp4"
                  autoPlay
                  loop="true"
                ></video>
              </div>
              <div className="video-text">
                eLocker
              </div>
            </div>
            <div className="card" data-counter="4">
              <div className="video">
                <video
                  src="https://about.orbofi.com/wp-content/uploads/2023/02/welcome-to-Orbofi.mp4"
                  autoPlay
                  loop="true"
                ></video>
              </div>
              <div className="video-text">
                sakksh
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Customer;
