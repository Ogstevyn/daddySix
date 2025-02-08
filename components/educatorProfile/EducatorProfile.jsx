// app/components/educatorProfile/EducatorProfile.jsx
import React from "react";
import Image from "next/image";
import "./educatorProfile.css";

const EducatorProfile = () => {
  return (
    <section className="educator-profile">
      <div className="educator-container">
        {/* Content Section */}
        <div className="educator-content">
          <h2 className="section-subtitle">Meet Our Educator</h2>
          <div className="educator-image">
            <Image
              src="/images/educator-profile.png"
              alt="Ifeoluwa Bakare"
              fill // Changed from width/height
              priority
              //   sizes="(max-width: 768px) 100vw, 50vw"
              className="profile-img"
            />
          </div>
          <h1 className="educator-name">Ifeoluwa Bakare</h1>
          <p className="educator-tagline">FOUNDER, DADDY6IX ACADEMY LTD</p>

          <div className="educator-bio">
            <p>
              “Raised by a single mother, selling food to make ends meet, and
              working as a security guard—Daddy6ix turned his struggles into
              success through Forex trading.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducatorProfile;
