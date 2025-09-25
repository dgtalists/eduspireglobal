// components/Subtitle.jsx
import React from "react";
import Styles from './Subtitle.module.css'

const Subtitle = ({ text, className = "" }) => {
  return (
    <span className={`${Styles.subtitle} ${className}`}>
      {text}
    </span>
  );
};

export default Subtitle;
