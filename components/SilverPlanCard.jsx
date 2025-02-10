"use client";
import dynamic from "next/dynamic";
import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
const PaystackButtonWrapper = dynamic(
  () => import("./pricing/PaystackButtonWrapper"),
  {
    ssr: false,
  }
);

const SilverPlanCard = () => {
  const publicKey = "pk_test_5abbc432e0c55cf1f600f1fc043873002c714077";
  const email = "user@example.com";
  const exchangeRate = 66000; // 1 USD = ₦1650
  const priceInNaira = exchangeRate; // Convert to Naira
  const amountInKobo = priceInNaira * 100; // Convert to Kobo
  return (
    <div
      className="w-[400px]  h-[690px]  text-black  bg-cover object-cover  p-6  px-12 pt-8  "
      style={{ backgroundImage: "url('/images/RectangleSilver.png')" }}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-black uppercase">
          Platinum
        </h2>
        <span className="bg-black text-white text-xs px-3 py-1 rounded-full">
          ENTRY FEE
        </span>
      </div>

      <div className=" my-7 grid grid-cols-2 gap-y-4 ">
        <div className="w-fit">
          <p className="text-xl font-bold">$150</p>
          <div className="text-white rounded-full bg-[#333333] px-3 py-1">
            <p className="text-[10px]">Standard Fee</p>
          </div>
        </div>
        <div className="w-fit">
          <p className="text-xl font-bold">$350</p>
          <div className="text-white rounded-full bg-[#333333] px-3 py-1">
            <p className="text-[10px]">Quarterly Plan</p>
          </div>
        </div>
        <div className="w-fit">
          <p className="text-xl font-bold">$800</p>
          <div className="text-white rounded-full bg-[#333333] px-3 py-1">
            <p className="text-[10px]">Half-Year Plan</p>
          </div>
        </div>
        <div className="w-fit">
          <p className="text-xl font-bold">$1,600</p>
          <div className="text-white rounded-full bg-[#333333] px-3 py-1">
            <p className="text-[10px]">Yearly Plan</p>
          </div>
        </div>
      </div>
      <PaystackButtonWrapper
        email={email}
        amount={amountInKobo}
        publicKey={publicKey}
        forPlatium={true}
      />
      {/* <button className="w-full bg-gradient-to-r from-black to-transparent text-white py-3 rounded-full font-medium border border-[#ffc457ce] ">
        Get Started
      </button> */}

      <div className="mt-8 space-y-4 text-sm grid grid-cols-[1fr]  gap-1 ">
        {[
          "1 Trading Signal Per Day",
          "$5,000 Prop Account Provided Random members Monthly",
          "Prop Passing Tips for Proprietary Challenges",
          "Remote Access Only (No Physical Interaction)",
          "Sunday Live Calls (Strictly Monthly, No Quarterly/Yearly Payments)",
        ].map((item, index) => (
          <div
            key={index}
            className="flex  gap-2 border-b-1 items-center border-b border-black pb-2"
          >
            {/* <span className="text-yellow-800">✔</span> */}
            <div>
              <IoMdCheckmarkCircleOutline className="size-7   " />
            </div>

            <p className="font-bold">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SilverPlanCard;
