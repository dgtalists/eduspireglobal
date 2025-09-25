import { useRouter } from "next/router";
import { FiArrowRight } from "react-icons/fi";
import styles from "./CommonBtn.module.css";

const CommonButton = ({ text, href = "/", className = "", onClick }) => {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick(); // Run the passed onClick handler if it exists
    } else {
      router.push(href); // Default navigation
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`${styles.cmnBtn} ${className}`}
    >
      {text}
      <span className={styles.arrow}>
        <FiArrowRight />
      </span>
    </button>
  );
};

export default CommonButton;
