import React from 'react';

const Service = (props) => {
  const { iconInfo, title, content } = props;
  return (
    <article className="service">
      <span className="service-icon">
        <i className={iconInfo}></i>
      </span>
      <div className="service-info">
        <h4 className="service-title">{title}</h4>
        <p className="service-text">{content}</p>
      </div>
    </article>
  );
};

export default Service;
