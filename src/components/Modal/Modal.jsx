"use client";
import React from "react";
import styles from "./Modal.module.css"; // optional CSS module

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
