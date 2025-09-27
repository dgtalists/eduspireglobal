import Link from "next/link";
import styles from "./Footer.module.css"; // adjust path if needed

export default function Footer() {
  return (
    <section className={styles.footer}>
      <div className="container">
        <div className={styles.copyright_nav}>
          <p>
            © {new Date().getFullYear()}
            <a href="index.html"> Eduspire Global</a>. All rights reserved.
          </p>

          <nav className={styles.footer_nav}>
            <ul>
              <li className={styles.eachNav}>
                <Link href="/" className={styles.eachNavMenu}>
                  Home
                </Link>
              </li>
              <li className={styles.eachNav}>
                <Link href="/about" className={styles.eachNavMenu}>
                  About
                </Link>
              </li>
              <li className={styles.eachNav}>
                <Link href="/whyuk" className={styles.eachNavMenu}>
                  Why UK
                </Link>
              </li>
              <li className={styles.eachNav}>
                <Link href="/what-we-offer" className={styles.eachNavMenu}>
                  What  We Offer
                </Link>
              </li>
               <li className={styles.eachNav}>
                <Link href="/financial-guidance" className={styles.eachNavMenu}>
                  Financial Guidance
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}
