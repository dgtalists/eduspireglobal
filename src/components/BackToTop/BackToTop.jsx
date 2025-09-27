"use client"; // if using Next.js App Router

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa"; // npm install react-icons
import styles from "./BackToTop.module.css";
import { BsArrowBarUp, BsArrowUp } from "react-icons/bs";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 300px
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className={styles.backToTop}
        aria-label="Back to top"
      >
        <BsArrowUp/>
      </button>
    )
  );
}
