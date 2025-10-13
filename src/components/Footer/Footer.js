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
              <li><Link href="/scholarships">Scholarships</Link></li>
            </ul>
          </div>

          {/* 3rd Column - Quick Links */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className={styles.footerTitle}>Usefull Links</h5>
            <ul className={styles.footerList}>
              <li><Link href="/contact">Contact Us</Link></li>
              {/* <li><Link href="/#">FAQ</Link></li> */}
              <li><Link href="/#">Privacy Policy</Link></li>
              <li><Link href="/#">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* 4th Column - Address + Social */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className={styles.footerTitle}>Contact Us</h5>
            <p>
             8/29, fern Road, Ballygunge, <br/>Kolkata - 700019
            </p>
            <p>Email: <Link href={'mailto:info@eduspireglobal.com'}>info@eduspireglobal.com</Link> </p>
            <p>Phone: <Link href={'tel:9147734848'}>9147734848</Link></p>
            <div className={styles.socialIcons}>
              <Link target="_blank" href={"https://www.instagram.com/eduspire.global?igsh=MXdod3p2cXlkNnNvbg=="}><FaInstagram /></Link>
              <Link target="_blank" href={"https://www.facebook.com/share/1FWprfsJN3/"}>< FaFacebookF/></Link>
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
