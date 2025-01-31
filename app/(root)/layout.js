"use client";

import CustomNavbar from "@/components/customNavbar/CustomNavbar";
import CustomFooter from "@/components/customFooter/CustomFooter"; // Added footer import
// import { HeroUIProvider } from "@heroui/react";

export default function Layout({ children }) {
  return (
    // <HeroUIProvider>
    <div className="min-h-screen flex flex-col">
      <div className="max-w-[1700px] mx-auto bg-customNavBg w-full flex-1">
        {/* Navbar */}
        <CustomNavbar />

        {/* Main Content */}
        <main className="flex-1">{children}</main>
      </div>

      {/* Footer */}
      <CustomFooter />
    </div>
    // </HeroUIProvider>
  );
}

// "use client";

// import CustomNavbar from "@/components/customNavbar/CustomNavbar";
// // import { HeroUIProvider } from "@heroui/react";

// export default function Layout({ children }) {
//   return (
//     // <HeroUIProvider>
//     <div className="max-w-[1700px] mx-auto bg-customNavBg">
//       {/* Navbar */}
//       <CustomNavbar />
//       {/* Main Content */}
//       <main className="">{children}</main>
//     </div>
//     // </HeroUIProvider>
//   );
// }
