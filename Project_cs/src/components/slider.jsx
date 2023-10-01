import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import images from "./utils";

function Slider() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
   
    setWidth(carousel.current.scrollWidth - 1150);
  }, []);

  console.log(images);
  return (
    <motion.div className="carousel" ref={carousel}>
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="inner-carousel"
      >
        {images.map((image) => {
          return (
            <motion.div className="item" key={image}>
              <img src={image} alt="" />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}

export default Slider;
