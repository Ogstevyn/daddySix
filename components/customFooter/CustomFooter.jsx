// components/customFooter/CustomFooter.jsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./customFooter.css";

const CustomFooter = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          {/* Academy Ltd Column with Logo */}
          <div className="footer__section">
            <div className="footer__logo-container">
              <Image
                src="/images/daddysixlogofooter.png"
                alt="Daddy6ix Logo"
                width={160}
                height={40}
                className="footer__logo"
              />
            </div>
            <div className="footer__legal">
              <p>Trusted | Experienced | Professional </p>

              <p className="footer__copyright">
                © {new Date().getFullYear()} Academy Ltd. All rights reserved.
              </p>
            </div>
          </div>
          {/* Products Column */}
          <div className="footer__section">
            <h3 className="footer__heading">Products</h3>
            <ul className="footer__list">
              <li>
                <Link href="/pricing" className="footer__link">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/" className="footer__link">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/signals" className="footer__link">
                  Signals
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="footer__section">
            <h3 className="footer__heading">Quick Link</h3>
            <ul className="footer__list">
              <li>
                <Link href="/contact" className="footer__link">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="footer__link">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/trade" className="footer__link">
                  Trade
                </Link>
              </li>
            </ul>
          </div>

          {/* Get in Touch Column */}
          <div className="footer__section">
            <h3 className="footer__heading">Get in touch</h3>
            <p className="footer__text">
              Questions or feedback? <br /> We love to hear from you
            </p>
            {/* <div className="footer__email-input">
              <input
                type="email"
                placeholder="Enter your email"
                className="footer__input"
              />
              <button className="footer__button">Submit</button>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CustomFooter;
