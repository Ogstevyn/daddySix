// app/components/testimonials/TestimonialsSection.jsx
import React from "react";
import Link from "next/link";
import "./testimonialsSection.css";

const TestimonialsSection = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-content">
          {/* Text Content */}
          <div className="testimonials-text">
            <h2 className="section-title">Testimonials</h2>
            <p className="section-subtext">
              Real Stories, Real Success... <br />
              Hear from our community of traders who turned their <br />
              aspirations into achievements with Daddy6ix Academy
            </p>

            {/* <div className="success-stories">
              <p className="highlight-text">
                It's a new mentor empowering thousands to rewrite their
                financial stories.
              </p>
              <p className="cta-text">
                Turn your struggle into success. Join the mentorship program
                today
              </p>
            </div> */}
          </div>

          <div className="video-container">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID" // Replace with actual YouTube embed ID
              title="Testimonial Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="responsive-iframe"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
