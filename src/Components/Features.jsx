"use client";
import { Carousel } from "flowbite-react";
import React, { useRef, useEffect } from "react";
import img2 from '../assets/img3.png'
import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import "../styles/features.css";

const ExtremeGymLanding = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const isInView = useInView(containerRef, { once: false, amount: 0.1 });
  const headingControls = useAnimation();

  const yPosAnim = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const scaleAnim = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 0.8]);

  useEffect(() => {
    if (isInView) {
      headingControls.start("visible");
    } else {
      headingControls.start("hidden");
    }
  }, [isInView, headingControls]);

  const headingVariants = {
    hidden: { opacity: 0, scale: 0.5, rotateX: -90 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.8,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateY: 90 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    }),
  };

  return (
    <div className="Pos">
      <div
        ref={containerRef}
        className="min-h-screen bg-black text-white overflow-hidden perspective-1000"
      >
        <motion.div
          style={{
            y: yPosAnim,
            scale: scaleAnim,
          }}
          className="h-screen flex items-center justify-between px-10"
        >
          <motion.h1
            ref={headingRef}
            className="text-6xl md:text-8xl font-extrabold text-center relative"
            variants={headingVariants}
            initial="hidden"
            animate={headingControls}
          >
            <span className="inline-block">
              {Array.from("GYM FLUENCER").map((letter, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  variants={letterVariants}
                  custom={index}
                >
                  <span
                    className="z-10 shine-text"
                    style={{
                      fontSize: "100px",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundImage:
                        "linear-gradient(90deg, #b0c4de, #ffffff, #778899)",
                      backgroundSize: "300% 100%",
                      animation: "shine 2s linear infinite",
                    }}
                  >
                    {letter}
                  </span>
                </motion.span>
              ))}

              <motion.h3
                className="text-transparent font-light justdoit shimmerLoop"
                style={{
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundImage:
                    "linear-gradient(90deg, #d4af37, #ffd700, #d4af37)",
                  backgroundSize: "300% 100%",
                  animation: "shine 2s linear infinite",
                }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
              >
                JUST DO IT
              </motion.h3>
            </span>
          </motion.h1>

          {/* Right-side Image */}
          <motion.img
            src={img2}
            alt=" Gym Illustration"
            className="w-1/3 h-auto object-contain ImagePos"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              duration: 0.5,
            }}
            style={{
              mixBlendMode: "screen", // Blends with the background
              filter: "drop-shadow(0px 10px 20px rgba(0,0,0,0.5))", // Adds depth
              transform: "scale(1.2)", // Enlarges the image
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ExtremeGymLanding;
