// app/components/educatorProfile/EducatorProfile.jsx
import React from "react";
import Image from "next/image";
import "./educatorProfile.css";

const EducatorProfile = () => {
  return (
    <section className="bg-[#061a10] flex flex-col items-center py-10 pb-20">
      <div className="">
        {/* Content Section */}
        <div className="">
          <h2 className=" text-center font-bold text-[48px] text-[#0DEB96]">
            Meet Our Educator
          </h2>
          <div className="w-full  mt-8">
            <Image
              src="/images/profileImg.png"
              alt="Ifeoluwa Bakare"
              priority
              //   sizes="(max-width: 768px) 100vw, 50vw"
              width={240}
              height={240}
              className="mx-auto"
            />
          </div>
          <h1 className="educator-bg text-[50px] font-semibold">
            Ifeoluwa Bakare
          </h1>
          <p className="educator-bg">FOUNDER, DADDY6IX ACADEMY LTD</p>

          <div className="educator-bg mt-8">
            <p>
              “Raised by a single mother, selling food to make ends meet, and
              working as a security guard—Daddy6ix <br />
              turned his struggles into success through Forex trading.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducatorProfile;
