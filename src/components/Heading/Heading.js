import React from "react";
import Styles from "./Heading.module.css";

const Heading = ({ mainText, highlightText, className = "" }) => {
  return (
    <h2 className={`${Styles.mainHeading} ${className}`}>
      {mainText} <span>{highlightText}</span>
    </h2>
  );
};

export default Heading;
