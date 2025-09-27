import Link from "next/link";
import styles from "./Footer.module.css"; // adjust path if needed
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row">
          {/* 1st Column - Logo */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className={styles.footerLogo}>
              <Image src="/images/headerlogo.png" alt="Eduspire Global" width={190} height={50} />
              <p>
                Eduspire Global helps students achieve their overseas education
                dreams with expert guidance and trusted support.
              </p>
            </div>
          </div>

          {/* 2nd Column - Menu */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className={styles.footerTitle}>Quick Links</h5>
            <ul className={styles.footerList}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/whyuk">Why UK</Link></li>
              <li><Link href="/what-we-offer">What We Offer</Link></li>
              <li><Link href="/financial-guidance">Financial Guidance</Link></li>
            </ul>
          </div>

          {/* 3rd Column - Quick Links */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className={styles.footerTitle}>Usefull Links</h5>
            <ul className={styles.footerList}>
              <li><Link href="/#">Contact Us</Link></li>
              <li><Link href="/#">FAQ</Link></li>
              <li><Link href="/#">Privacy Policy</Link></li>
              <li><Link href="/#">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* 4th Column - Address + Social */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className={styles.footerTitle}>Contact Us</h5>
            <p>
              Eduspire Global<br />
              123 Education Street,<br />
              London, UK
            </p>
            <p>Email: <Link href={'mailto:info@eduspireglobal.com'}>info@eduspireglobal.com</Link> </p>
            <p>Phone: <Link href={'tel:9147734848'}>9147734848</Link></p>
            <div className={styles.socialIcons}>
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaInstagram /></a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className={styles.copyright}>
          <p>
            © {new Date().getFullYear()} Eduspire Global. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
