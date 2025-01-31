// app/components/hero/HeroSection.jsx
import React from "react";
import Image from "next/image";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      {
        <Image
          src="/images/herologo.png" // Remove "/public" from path
          alt="Hero Background"
          fill
          quality={100}
          priority
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      }
      <div className="hero__background">
        <div className="hero__overlay"></div>
      </div>

      {/* Content */}
      <div className="hero__content">
        <h1 className="hero__heading">
          From Humble
          <br />
          Beginnings to
          <br />
          Financial Freedom
        </h1>
        <button className="hero__cta-button">Explore Mentorship</button>
      </div>
    </section>
  );
};

export default HeroSection;
