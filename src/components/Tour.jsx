import React from 'react';

const Tour = (props) => {
  const { img, startDate, title, content, country, days, startPrice } = props;

  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={img} className="tour-img" alt="place highlight" />
        <p className="tour-date">{startDate}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{title}</h4>
        </div>
        <p>{content}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>
            {country}
          </p>
          <p>{`${days} days`}</p>
          <p>{`from $${startPrice}`}</p>
        </div>
      </div>
    </article>
  );
};

export default Tour;
