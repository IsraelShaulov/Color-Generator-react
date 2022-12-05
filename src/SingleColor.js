import React, { useState, useEffect } from 'react';
import rgbToHex from './utils';

const SingleColor = ({ color, index }) => {
  const [alert, setAlert] = useState(false);
  const { rgb, weight, hex } = color;
  // console.log(rgb);
  const bcg = rgb.join(',');
  // console.log(bcg);
  const hexValue = `#${hex}`;

  useEffect(() => {
    if (alert) {
      const timeout = setTimeout(() => {
        setAlert(false);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue).then(() => setAlert(true));
      }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>
      {alert && <p className='alert'>copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
