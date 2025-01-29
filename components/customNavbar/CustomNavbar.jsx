import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./customNavbar.css";
// import logo from "../../public/images/daddysixlogo.png";
const CustomNavbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Image
          src="/images/daddysixlogo.png"
          alt="Daddy6ix Academy Ltd"
          className="logo"
          width={150}
          height={50}
        />
        <ul className="nav-links">
          {["Home", "Mentorship", "Signals", "Contact", "FAQs"].map(
            (link, index) => (
              <li key={index}>
                <Link href={`/${link.toLowerCase()}`}>
                  {link} <span className="arrow">↗</span>
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
};

export default CustomNavbar;
