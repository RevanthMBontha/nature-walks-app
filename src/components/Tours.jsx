import React from 'react';

import Title from './Title';
import Tour from './Tour';

import { tours } from '../data';

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title blackText="featured" coloredText="tours" />

      <div className="section-center featured-center">
        {tours.map((tour) => {
          const {
            id,
            tourImg,
            tourStart,
            tourTitle,
            tourContent,
            tourCountry,
            tourDays,
            tourStartPrice,
          } = tour;

          return (
            <Tour
              key={id}
              img={tourImg}
              startDate={tourStart}
              title={tourTitle}
              content={tourContent}
              country={tourCountry}
              days={tourDays}
              startPrice={tourStartPrice}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
