import React from 'react';
import styled from 'styled-components';

const Pricing = () => {
  return (
    <StyledWrapper>
      <div className="card-container">
        <div className="card flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="content">
                <div className="title">Personal edition</div>
                <div className="price">$39.99</div>
                <div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
              </div>
            </div>
            <div className="flip-card-back">
              <div className="content">
                <div className="title">More Info</div>
                <div className="price">$39.99</div>
                <div className="description">Includes unlimited features and support.</div>
              </div>
            </div>
          </div>
        </div>

        <div className="card flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="content">
                <div className="title">Standard edition</div>
                <div className="price">$19.99</div>
                <div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
              </div>
            </div>
            <div className="flip-card-back">
              <div className="content">
                <div className="title">More Info</div>
                <div className="price">$19.99</div>
                <div className="description">Includes basic features and limited support.</div>
              </div>
            </div>
          </div>
        </div>

        <div className="card flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="content">
                <div className="title">Premium edition</div>
                <div className="price">$49.99</div>
                <div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
              </div>
            </div>
            <div className="flip-card-back">
              <div className="content">
                <div className="title">More Info</div>
                <div className="price">$49.99</div>
                <div className="description">Includes all features and premium support.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`

height:7.5rem;

  .card-container {
    display: flex;
    justify-content: space-around;
    gap: 20px;
    margin-top: 4rem;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 260px;
    height:280px;
    padding: 20px;
    text-align: center;
    position: relative;
    cursor: pointer;
    border-radius: 10px;
    background-color: #6b6ecc;
    background: linear-gradient(45deg, #04051dea 0%, #2b566e 100%);
    box-shadow: 0 10px 15px -3px rgba(33, 150, 243, 0.4), 0 4px 6px -4px rgba(33, 150, 243, 0.4);
    transition: transform 0.3s ease;
  }

  /* 3D Flip Effect */
  .flip-card {
    perspective: 1000px;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.5s;
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .flip-card-back {
    background-color: #2b566e;
    transform: rotateY(180deg);
  }

  .content {
    padding: 20px;
  }

  .content .price {
    color: white;
    font-weight: 800;
    font-size: 50px;
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.42);
  }

  .content .description {
    color: rgba(255, 255, 255, 0.6);
    margin-top: 10px;
    font-size: 14px;
  }

  .content .title {
    font-weight: 800;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.64);
    margin-top: 10px;
    font-size: 25px;
    letter-spacing: 1px;
  }

  button {
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    border: none;
    outline: none;
    color: rgb(255 255 255);
    text-transform: uppercase;
    font-weight: 700;
    font-size: .75rem;
    padding: 0.75rem 1.5rem;
    background-color: rgb(33 150 243);
    border-radius: 0.5rem;
    width: 90%;
    text-shadow: 0px 4px 18px #2c3442;
  }
`;

export default Pricing;
