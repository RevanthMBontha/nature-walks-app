import React, { useState, useEffect } from 'react';

import { experiences } from '../data';

let len = experiences.length;

const Hero = () => {
  const [text, setText] = useState(0);

  useEffect(() => {
    let count = 0;

    const nextInSeries = () => {
      count++;
    };

    const reset = () => {
      count = 0;
    };

    const interval = setInterval(() => {
      count < len - 1 ? nextInSeries() : reset();
      setText(experiences[count]);
      return () => clearInterval(interval);
    }, 80);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-banner">
        <h1>experience</h1>
        <h1>
          <span className="hero-styled-title">{text}</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          explicabo debitis est autem dicta.
        </p>
        <a href="#tours" className="btn hero-btn">
          explore tours
        </a>
      </div>
    </section>
  );
};

export default Hero;
