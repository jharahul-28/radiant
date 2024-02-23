import React from 'react';

const GoldenStars = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const fractionalPart = rating - fullStars;
  
  const fullStarsArray = Array.from({ length: fullStars }, (_, index) => (
    <span key={index}>&#9733;</span> 
  ));
  
  return (
    <div>
      {fullStarsArray}
      {fractionalPart > 0 && fractionalPart < 1 && (
        <span style={{ width: '16px', overflow: 'hidden', position: 'relative', display: 'inline-block' }}>
          <span style={{ position: 'absolute', top: '0', left: '0', width: `${fractionalPart * 100}%`, overflow: 'hidden' }}>
            &#9733;
          </span>
        </span>
      )}
    </div>
  );
}

export default GoldenStars;