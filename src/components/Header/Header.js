"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { useRouter } from "next/router"; // Import useRouter
import { useEffect, useRef, useState } from "react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import Styles from "./Header.module.css";
import CommonButton from "../CommonBtn/CommonBtn";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { VscCallOutgoing } from "react-icons/vsc";
import { FaFacebook, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const router = useRouter(); // Get current route
  const [isMobile, setIsMobile] = useState(false);
  const menuRef = useRef(null); // Reference for menu container
  const [activeMenu, setActiveMenu] = useState(null); // Track active mega menu
  const megaMenuRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        megaMenuRef.current &&
        !megaMenuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
        setActiveMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    };

    if (activeMenu === "company") {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeMenu]);
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Customize duration if needed
  }, []);
  return (
    <>
      <div className={Styles.topHeader}>
        <div className="container">
          <div className={Styles.topHeaderWrap}>
            <div className={Styles.topHeaderLeft}>
              <ul>
                <li><HiOutlineEnvelope />
                  <a href="mailto:info@eduspireglobal.com">info@eduspireglobal.com
                  </a></li>
                <li> <VscCallOutgoing />
                  <a href="tel:9147734848">9147734848</a></li>
              </ul>

            </div>
            <div className={Styles.topHeaderRight}>
              <ul>
                <li>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF />
                  </a>
                </li>
                <li><a href="#" target="_blank"><FaTwitter /></a></li>
                <li><a href="#" target="_blank"><FaLinkedinIn /></a></li>
                <li><a href="#" target="_blank"><FaInstagram /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <header
        className={`${Styles.main_header} ${isSticky ? Styles.sticky : ""}`}
      >
        <div className="container">
          <div className={Styles.headerWrap}>
            <div className={Styles.headerLogo}>
              <Link href="/" className={Styles.mainLogo}>
                <img
                  className={Styles.mainLogoImg}
                  src={"/images/headerlogo.png"}
                  alt="logo"
                />
              </Link>
            </div>
            <div className={`${Styles.navBtnWrp} d-md-none text-end`}>
              <button
                className={Styles.navBtn}
                onClick={() => setIsOpen(!isOpen)}
              >
                <RxHamburgerMenu size={20} />
              </button>
            </div>
            <div
              ref={menuRef}
              className={` ${Styles.navContainer} ${isOpen ? Styles.showNav : Styles.hideNav
                }`}
            >
              {isOpen && (
                <div className={Styles.closeNav}>
                  <button
                    className={Styles.closeNavBtn}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <RxCross2 />
                  </button>
                </div>
              )}
              <div className={Styles.navWrap}>
                <ul className={`${Styles.nav} justify-content-end`}>
                  <li
                    className={`${Styles.eachNav} ${router.pathname === "/" ? Styles.active : ""
                      }`}
                  >
                    <Link href="/" className={Styles.eachNavMenu}>
                      Home
                    </Link>
                  </li>
                  <li
                    className={`${Styles.eachNav} ${router.pathname === "/about" ? Styles.active : ""
                      }`}
                  >
                    <Link href="/about" className={Styles.eachNavMenu}>
                      About Us
                    </Link>
                  </li>
                  <li
                    className={`${Styles.eachNav} ${router.pathname === "/whyuk" ? Styles.active : ""
                      }`}
                  >
                    <Link href="/whyuk" className={Styles.eachNavMenu}>
                      Why UK
                    </Link>
                  </li>
                  <li
                    className={`${Styles.eachNav} ${router.pathname === "/what-we-offer" ? Styles.active : ""
                      }`}
                  >
                    <Link href="/what-we-offer" className={Styles.eachNavMenu}>
                      what We Offer
                    </Link>
                  </li>
                  <li
                    className={`${Styles.eachNav} ${router.pathname.startsWith("/financial-guidance")
                      ? Styles.active
                      : ""
                      }`}
                    onMouseEnter={() => !isMobile && setActiveMenu("financial-guidance")}
                    onMouseLeave={() => !isMobile && setActiveMenu(null)}
                  >
                    <Link href="/financial-guidance"
                      className={`${Styles.eachNavMenu} ${Styles.dropdownToggle}`}
                      onClick={() =>
                        isMobile &&
                        setActiveMenu(
                          activeMenu === "financial-guidance" ? null : "financial-guidance"
                        )
                      }
                    >
                      Financial Guidance
                      <FiChevronDown
                        className={`${Styles.chevronIcon} ${activeMenu === "financial-guidance" ? Styles.rotate : ""
                          }`}
                      />
                    </Link>

                    {/* Submenu */}
                    {activeMenu === "financial-guidance" && (
                      <ul ref={megaMenuRef} className={Styles.subMenu}>
                        <li>
                          <Link href="/financial-guidance/bank-loans">Bank Loans</Link>
                        </li>
                        <li>
                          <Link href="/financial-guidance/scholarships">Scholarships</Link>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li
                    className={`${Styles.eachNav} ${router.pathname === "/media" ? Styles.active : ""
                      }`}
                  >
                    <Link href="/media" className={Styles.eachNavMenu}>
                      Media
                    </Link>
                  </li>
                  <li
                    className={`${Styles.eachNav} ${router.pathname === "#" ? Styles.active : ""
                      }`}
                  >
                    <Link href="#" className={Styles.eachNavMenu}>
                      Events
                    </Link>
                  </li>

                </ul>
              </div>
            </div>
            {/* <div className={Styles.contactBtn}>
              <CommonButton
                className={Styles.headerBtn}
                text={"9147734848"}
                href="tel:9147734848"
              />
            </div> */}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
