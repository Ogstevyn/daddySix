// app/components/pricing/PaystackButtonWrapper.jsx
"use client";
import React from "react";
import { PaystackButton } from "react-paystack";

const PaystackButtonWrapper = ({ email, amount, publicKey, forPlatium }) => {
  const paystackProps = {
    email,
    amount,
    publicKey,
    currency: "NGN", // Ensure it's in Naira
    text: "Get Started",
    onSuccess: (reference) => {
      alert(`Payment Successful! Reference: ${reference.reference}`);
    },
    onClose: () => alert("Transaction was not completed"),
  };

  return (
    <PaystackButton
      {...paystackProps}
      className={`w-full bg-gradient-to-r from-black to-transparent text-white py-3 rounded-full font-medium border ${
        forPlatium ? "border-white" : "border-[#ffc457ce]"
      } `}
    />
  );
};

export default PaystackButtonWrapper;
