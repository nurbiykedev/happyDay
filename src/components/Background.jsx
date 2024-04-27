// Background.js

import React from 'react';

const Background = () => {
  return (
    <div className="smileys">
      {[...Array(100)].map((_, index) => (
        <div
          key={index}
          className="smiley"
          style={{
            top: `${Math.floor(Math.random() * 100)}%`,
            left: `${Math.floor(Math.random() * 100)}%`,
            animationDelay: `${Math.random() * 3}s`
          }}
        >
          😊
        </div>
      ))}
    </div>
  );
};

export default Background;
