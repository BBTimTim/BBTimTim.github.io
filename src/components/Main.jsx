import React from 'react';
import "./main.scss";
import { motion } from "framer-motion";

export default function Main() {

  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollButton: {
      opacity: [0, 1, 0],
      y: [0, 10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
      }
    }
  }

  const sliderVariants = {
    initial: { x: 0 },
    animate: {
      x: ["0%", "-50%"],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 120,
        ease: "linear",
      },
    },
  }

  return (
    <div className='main'>
      <motion.div className="textContainer"
        initial="initial"
        animate="animate"
        variants={textVariants}>
        <motion.h2 variants={textVariants} className='name'>BIRTA TIMEA</motion.h2>
        <motion.h1 variants={textVariants}>Fullstack Webfejlesztő és UI/UX designer</motion.h1>
        <motion.img
          variants={textVariants}
          animate="scrollButton"
          src="/scroll.png"
          alt="scroll"
        />
      </motion.div>

      <motion.div className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate">
        Design. Develop. Deliver. Design. Develop. Deliver.
      </motion.div>

      <div className="imageContainer">
        <div className="imageFrame">
          <img src="/me.png" alt="Portfolio Image" />
        </div>
      </div>
    </div>
  )
}