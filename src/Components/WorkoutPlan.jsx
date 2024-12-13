import React from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';

const WorkoutPlan = () => {
  const { scrollYProgress } = useScroll();

  const workoutPlans = [
    { title: 'Push Day', description: 'Focus on chest, shoulders, and triceps' },
    { title: 'Pull Day', description: 'Focus on back and biceps' },
    { title: 'Leg Day', description: 'Focus on quads, hamstrings, and glutes' },
    { title: 'Core Day', description: 'Focus on abs and lower back' },
    { title: 'Full Body', description: 'Work all major muscle groups' },
  ];

  return (
    <StyledWrapper>
      <h2 className="workout-title">Workout Plans</h2>
      <div className="cards">
        {workoutPlans.map((plan, index) => {
          const isLeft = index % 2 === 0;
          const xOffset = isLeft ? -window.innerWidth : window.innerWidth; // Cards start offscreen left or right
          const x = useTransform(scrollYProgress, [0, 1], [xOffset, 0]);
          const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

          return (
            <motion.div
              className={`card ${isLeft ? 'left' : 'right'}`}
              key={index}
              style={{ x, opacity }}
            >
              <div className="card-inner">
                <div className="card-front">
                  <p>{plan.title}</p>
                </div>
                <div className="card-back">
                  <p>{plan.description}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  text-align: center;
  background: url('https://img.freepik.com/premium-photo/gym-equipment-empty-room_756748-50326.jpg') no-repeat center center fixed; /* Background image fixed */
  background-size: cover; /* Ensure the image covers the entire background */
  padding: 50px 0;
  height: 100vh; /* To ensure it takes full viewport height */

  .workout-title {
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 2rem;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 2px;
    border-bottom: 2px solid #444;
    padding-bottom: 0.5rem;
  }

  .cards {
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding: 20px;
    overflow-y: auto; /* Allow content to scroll */
    max-height: 80vh; /* Limit content height */
  }

  .card {
    width: 400px;
    height: 300px;
    perspective: 1000px;
    margin: 0 auto;
  }

  .card.left {
    align-self: flex-start;
  }

  .card.right {
    align-self: flex-end;
  }

  .card-inner {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.999s;
  }

  .card:hover .card-inner {
    transform: rotateY(180deg);
  }

  .card-front,
  .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }

  .card-front {
    background: linear-gradient(135deg, #e74c3c, #f39c12); /* Gradient for front */
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    transform: rotateY(0deg);
    border-radius: 10px;
    border: 2px solid #e74c3c;
  }

  .card-back {
    background: linear-gradient(135deg, #8e44ad, #3498db); /* Gradient for back */
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    transform: rotateY(180deg);
    border-radius: 10px;
    border: 2px solid #8e44ad;
  }
`;

export default WorkoutPlan;
