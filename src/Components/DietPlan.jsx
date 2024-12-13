import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const DietPlan = () => {
  const cardsRef = useRef(null);

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (cardsRef.current) {
        const scrollAmount = cardsRef.current.scrollWidth / 5; // Scroll 1/5th of total width every interval
        cardsRef.current.scrollBy({
          left: scrollAmount,
          behavior: 'smooth',
        });
      }
    }, 3000); // Change the interval as needed (3 seconds for this example)

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <StyledWrapper>
         <h2 className="diet-title">Diet Plans</h2>
      <div className="cards" ref={cardsRef}>
        <div className="card red">
          <p className="tip">High Protein</p>
          <p className="second-text">Muscle building and recovery</p>
        </div>
        <div className="card blue">
          <p className="tip">Low Carb</p>
          <p className="second-text">Fat loss and muscle maintenance</p>
        </div>
        <div className="card green">
          <p className="tip">Balanced Diet</p>
          <p className="second-text">Ideal for overall health</p>
        </div>
        <div className="card yellow">
          <p className="tip">Vegan</p>
          <p className="second-text">Plant-based diet for energy</p>
        </div>
        <div className="card purple">
          <p className="tip">Keto</p>
          <p className="second-text">Low-carb, high-fat for weight loss</p>
        </div>
        <div className="card orange">
          <p className="tip">Intermittent Fasting</p>
          <p className="second-text">Eat within time windows</p>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`

  .diet-title {
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

  overflow: hidden;
  width: 100%;
  padding: 2rem 0;

  .cards {
    display: flex;
    flex-direction: row;
    gap: 20px;
    transition: transform 0.3s ease-in-out;
  }

  .cards .card {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    height: 250px;
    width: 500px;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    transition: 400ms;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  .cards .card p.tip {
    font-size: 1.2em;
    font-weight: 700;
  }

  .cards .card p.second-text {
    font-size: 1em;
  }

  .cards .card:hover {
    transform: scale(1.1, 1.1);
  }

  .cards:hover > .card:not(:hover) {
    filter: blur(5px);
    transform: scale(0.9, 0.9);
  }

  /* Individual card colors */
  .cards .red {
    background-color: #f43f5e;
  }
  .cards .blue {
    background-color: #3b82f6;
  }
  .cards .green {
    background-color: #22c55e;
  }
  .cards .yellow {
    background-color: #fbbf24;
  }
  .cards .purple {
    background-color: #9333ea;
  }
  .cards .orange {
    background-color: #fb923c;
  }
`;

export default DietPlan;
