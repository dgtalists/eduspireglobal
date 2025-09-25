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
                <Link href="#service" className={styles.eachNavMenu}>
                  Services
                </Link>
              </li>
              <li className={styles.eachNav}>
                <Link href="/About" className={styles.eachNavMenu}>
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}
