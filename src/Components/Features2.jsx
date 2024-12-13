import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion';
import '../styles/feature2.css';
import img from '../assets/img3.png'

const features = [
  {
    title: "Extreme Workouts",
    description: "Push your limits with savage, customized routines.",
    image: 'https://t3.ftcdn.net/jpg/04/31/55/92/360_F_431559277_rkkDdPgYlypnPwf4EoDIlvkVDiWNBBft.jpg'
  },
  {
    title: "AI Personal Trainer",
    description: "Motivating you 24/7 with cutting-edge AI.",
    image: 'https://img.freepik.com/premium-photo/athletic-girl-training-gym-generative-ai-illustration_118086-7440.jpg'
  },
  {
    title: "Holographic Workout Buddies",
    description: "Never work out alone again with holographic companions.",
    image: "https://img.freepik.com/premium-photo/aipowered-holographic-fitness-trainers-providing-realtime-coaching-person-working-out-home-with-holographic-trainer-giving-personalized-feedback_1230253-33006.jpg"
  },
  {
    title: "Personalized Workout Plans",
    description: " Allow users to input their fitness goals (e.g., weight loss, muscle gain, endurance) and fitness level, and generate a personalized workout plan.",
    image: 'https://www.shutterstock.com/shutterstock/videos/1107999859/thumb/1.jpg?ip=x480'
  },
  {
    title:'Diet Plans and Meal Suggestions',
    description:': Offer tailored meal plans for muscle gain, fat loss, or maintaining weight, with recipes and shopping lists',
    image:'https://media.istockphoto.com/id/1423997728/photo/top-view-asian-man-and-woman-healthy-eating-salad-after-exercise-at-fitness-gym.jpg?s=612x612&w=0&k=20&c=abDb3WKAnawDnVikydDSN17YOZc3hsplIY65lJjNXaE='
  },
  {
    title:'Gym & Equipment Recommendations',
    description:'Help users find nearby gyms or fitness centers based on location, amenities, and reviews.',
    image:'https://img.freepik.com/free-photo/3d-gym-equipment_23-2151114219.jpg'
  },
  {
    title:'Recovery & Well-Being',
    description:' Offer routines focused on stretching, flexibility, and mobility to prevent injuries.',
    image:'https://media.istockphoto.com/id/628092082/photo/just-a-little-more.jpg?s=612x612&w=0&k=20&c=0CTm1GJxZk7zXva3PAchqgf7Bqzi2CE-FdO7puUzAlU='
  },
  {
    title:'Gymfluencer Blog & Social Media Integration',
    description:' Allow users to share their fitness journeys, photos, or progress on the app or through a Gymfluencer blog',
    image:'https://www.shutterstock.com/shutterstock/videos/1099694963/thumb/1.jpg?ip=x480'
  },
];

const Features2 = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  const headerControls = useAnimation();
  const isHeaderInView = useInView(containerRef, { once: false, amount: 0.1 });

  useEffect(() => {
    if (isHeaderInView) {
      headerControls.start('visible');
    } else {
      headerControls.start('hidden');
    }
  }, [isHeaderInView, headerControls]);

  const headerVariants = {
    hidden: { opacity: 0, rotateX: -90 },
    visible: {
      opacity: 1,
      rotateX: 0,
      transition: {
        type: 'spring',
        stiffness: 150,
        damping: 12,
        duration: 0.5,
      },
    },
  };

  const shineVariants = {
    hidden: { x: '-100%' },
    visible: {
      x: '100%',
      transition: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 0.5,
        ease: 'linear',
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
        delay: i * 0.02,
        duration: 0.25,
        type: 'spring',
        stiffness: 150,
        damping: 12,
      },
    }),
  };

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Background image */}
      <motion.div
        className="feature2-background"
        style={{
          y: backgroundY,
          willChange: 'transform',
        }}
      />

      {/* Header with letter animation */}
      <motion.header className="h-screen flex justify-center items-center perspective-1000 Posi">
        <motion.h1
          variants={headerVariants}
          initial="hidden"
          animate={headerControls}
          className="text-6xl font-extrabold text-center relative"
        >
          {Array.from("OUR SERVICES").map((letter, index) => (
            <motion.span key={index} variants={letterVariants} custom={index}>
              {letter}
            </motion.span>
          ))}
          <motion.span
            variants={shineVariants}
            initial="hidden"
            animate="visible"
            className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
            style={{
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          />
        </motion.h1>
      </motion.header>

      {/* Feature cards */}
      <div className="feature-cards-container">
        {features.map((feature, index) => {
          const isLeft = index % 2 === 0;
          const yRange = [index * 0.3, (index + 1) * 0.1];
          const opacity = useTransform(scrollYProgress, yRange, [0, 1]);
          const scale = useTransform(scrollYProgress, yRange, [0.1, 1]);
          const rotateY = useTransform(scrollYProgress, yRange, [isLeft ? 10 : -10, 0]);
          const x = useTransform(scrollYProgress, yRange, [isLeft ? -20 : 20, 0]);

          return (
            <motion.section key={index} className="h-screen flex justify-center items-center perspective-1000">
              <motion.div
                style={{
                  opacity,
                  scale,
                  rotateY,
                  x,
                  willChange: 'transform, opacity',
                }}
                className="feature-card"
              >
                <h2 className="text-5xl mb-6 bg-gradient-to-r  bg-clip-text">
                  {feature.title}
                </h2>
                <p className="text-xl mb-6 leading-relaxed text-gray-300">{feature.description}</p>
                {feature.image && (
                  <img src={feature.image} alt={feature.title} className="feature-card-img" />
                )}
              </motion.div>
            </motion.section>
          );
        })}
      </div>
    </div>
  );
};

export default Features2;



