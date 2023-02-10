import React from 'react';
import Title from './Title';
import Service from './Service';
import { serviceDetails } from '../data';

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title blackText="our" coloredText="services" />

      <div className="section-center services-center">
        {serviceDetails.map((service) => {
          const { id, iconInfo, title, content } = service;
          return (
            <Service
              key={id}
              iconInfo={iconInfo}
              title={title}
              content={content}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Services;
