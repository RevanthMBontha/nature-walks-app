import React from 'react';

const Title = (props) => {
  const { blackText, coloredText } = props;
  return (
    <div className="section-title">
      <h2>
        {blackText} <span>{coloredText}</span>
      </h2>
    </div>
  );
};

export default Title;
