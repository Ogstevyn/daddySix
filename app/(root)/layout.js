"use client";

import CustomNavbar from "@/components/customNavbar/CustomNavbar";
// import { HeroUIProvider } from "@heroui/react";

export default function Layout({ children }) {
  return (
    // <HeroUIProvider>
    <div className="max-w-[1700px] mx-auto bg-customNavBg">
      {/* Navbar */}
      <CustomNavbar />
      {/* Main Content */}
      <main className="">{children}</main>
    </div>
    // </HeroUIProvider>
  );
}
