import React from 'react';
import styled from 'styled-components';

const Blogs = () => {
  const reviews = [
    { rating: 5, date: '2 days ago', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', author: 'John Doe' },
    { rating: 4, date: '3 days ago', description: 'Great app for fitness tracking and meal planning.', author: 'Jane Doe' },
    { rating: 5, date: '5 days ago', description: 'Amazing workout plans and easy to use interface.', author: 'Alice Smith' },
    { rating: 4, date: '1 week ago', description: 'Helpful for tracking progress, but needs more variety in workouts.', author: 'Bob Brown' },
    { rating: 5, date: '2 weeks ago', description: 'Excellent app, highly customizable and user-friendly.', author: 'Charlie White' },
    { rating: 4, date: '3 weeks ago', description: 'Great for beginners, but could have more advanced features.', author: 'Dave Green' },
    { rating: 5, date: '1 month ago', description: 'The best app for workout enthusiasts, love the features.', author: 'Eve Black' },
    { rating: 4, date: '2 months ago', description: 'Good app, but needs improvements in tracking nutrition.', author: 'Frank Gray' },
    { rating: 5, date: '3 months ago', description: 'Love the workout variety, definitely recommend.', author: 'Grace Blue' },
    { rating: 5, date: '6 months ago', description: 'Incredible app for anyone looking to get fit and stay healthy.', author: 'Hank Red' }
  ];

  return (
    <StyledWrapper>
      <h2>Customer Reviews</h2>
      <div className="marquee-wrapper">
        <div className="cards">
          {reviews.map((review, index) => {
            return (
              <div className="card" key={index}>
                <div className="stars">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="star"
                      key={i}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="infos">
                  <p className="date-time">{review.date}</p>
                  <p className="description">{review.description}</p>
                </div>
                <div className="author">— {review.author}</div>
              </div>
            );
          })}
          {/* Duplicate the cards to create the infinite effect */}
          {reviews.map((review, index) => (
            <div className="card" key={`duplicate-${index}`}>
              <div className="stars">
                {[...Array(review.rating)].map((_, i) => (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="star"
                    key={i}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="infos">
                <p className="date-time">{review.date}</p>
                <p className="description">{review.description}</p>
              </div>
              <div className="author">— {review.author}</div>
            </div>
          ))}
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
margin-top:15rem;
  text-align: center;
  padding: 40px;
  background: #f4f4f4;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 2rem;
  }

  .marquee-wrapper {
    display: flex;
    overflow: hidden;
    width: 100%;
  }

  .cards {
    display: flex;
    animation: marquee 20s linear infinite;
  }

  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: rgba(255, 255, 255, 1);
    padding: 20px;
    width: 250px;
    max-width: 320px;
    margin-right: 20px; /* Space between cards */
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .stars {
    display: flex;
    grid-gap: 0.125rem;
    gap: 0.125rem;
    color: rgb(238, 203, 8);
  }

  .star {
    height: 1.25rem;
    width: 1.25rem;
  }

  .infos {
    margin-top: 1rem;
  }

  .date-time {
    color: rgba(7, 63, 216, 1);
    font-size: 12px;
    font-weight: 600;
  }

  .description {
    margin-top: 0.4rem;
    line-height: 1.625;
    color: rgba(107, 114, 128, 1);
  }

  .author {
    margin-top: 1.3rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: rgba(107, 114, 128, 1);
  }
`;

export default Blogs;
