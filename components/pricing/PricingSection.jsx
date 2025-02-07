"use client";
import React from "react";
import dynamic from "next/dynamic";
import "./pricingSection.css";

const PaystackButtonWrapper = dynamic(() => import("./PaystackButtonWrapper"), {
  ssr: false,
});

const publicKey = "pk_test_5abbc432e0c55cf1f600f1fc043873002c714077";
const email = "user@example.com";
const exchangeRate = 1650; // 1 USD = ₦1650

const plans = [
  {
    tier: "GROUP",
    price: 200, // Changed to number format
    features: [
      "1 Trading Signal Per Day",
      "$5,000 Prop Account Provided Random members Monthly",
      "Prop Passing Tips for Proprietary Challenges",
      "Remote Access Only (No Physical Interaction)",
      "Sunday Live Calls (Strictly Monthly, No Quarterly/Yearly Payments)",
    ],
  },
  {
    tier: "PRIVATE",
    price: 2000, // Changed to number format
    features: [
      "$50,000 Prop Account Provided Random Members Monthly",
      "2–3 Trading Signals Per Day",
      "Assistance with Prop Firm Challenges (Prop Passing)",
      "'A Day in the Life' Experience",
      "Sunday Live Calls and 3 Live Trading Sessions Weekly",
      "Comprehensive Account Management Services",
    ],
  },
];

const PricingSection = () => {
  return (
    <section className="pricing">
      <div className="pricing-container">
        <div className="section-header">
          <h2>Choose Your Plan</h2>
          <p className="subheader">
            Choose the perfect plan to fit your needs and trade with ease
          </p>
        </div>

        <div className="plans-grid">
          {plans.map((plan, index) => {
            const priceInNaira = plan.price * exchangeRate; // Convert to Naira
            const amountInKobo = priceInNaira * 100; // Convert to Kobo

            return (
              <div
                className={`plan-card ${
                  plan.tier === "GROUP" ? "silver" : "gold"
                }`}
                key={index}
              >
                <h3 className="plan-tier">{plan.tier}</h3>
                <div className="plan-price">
                  <span className="price">
                    ${plan.price} (~₦{priceInNaira.toLocaleString()})
                  </span>
                  <span className="billing">/month</span>
                </div>
                <ul className="plan-features">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="feature-item">
                      <span className="feature-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <PaystackButtonWrapper
                  email={email}
                  amount={amountInKobo}
                  publicKey={publicKey}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
