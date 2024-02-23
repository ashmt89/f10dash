'use client';
import Image from "next/image";
import idemia_logo from "@/public/images/Idemia_Logo.png";
import iti_logo from "@/public/images/ITI-Logo.png";
import { usePathname } from "next/navigation";

import { useEffect } from "react";

export default function SideLogo() {
    const pathName = usePathname();

    useEffect(() => {
    // Function to log viewport dimensions
    const logViewportDimensions = () => {
      console.log('Viewport width:', window.innerWidth);
      console.log('Viewport height:', window.innerHeight);
    };

    // Log initial viewport dimensions
    logViewportDimensions();

    // Add event listener for window resize
    window.addEventListener('resize', logViewportDimensions);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', logViewportDimensions);
    };
  }, []);

    if (pathName === "/") {
        return null;
    } else if (pathName.includes("/ITI")) {
        return (
            <div className="relative">
                {/* Left image */}
                <div className="absolute -left-48 top-72 -rotate-90 lg:-left-46">
                    <Image src={iti_logo} alt="Left Image" className="h-[100%] w-[100%]" />
                </div>
                {/* Right image */}
                <div className="absolute -right-48 top-72 rotate-90 lg:-right-46">
                    <Image src={iti_logo} alt="Left Image" className="h-[100%] w-[100%]" />
                </div>
            </div>
        );
    } else if (pathName.includes("/Idemia")) {
        return (
            <div className="relative">
                {/* Left image */}
                <div className="absolute -left-24 top-64 -rotate-90">
                    <Image src={idemia_logo} alt="Left Image" className="h-[100%] w-[100%]" />
                </div>
                {/* Right image */}
                <div className="absolute -right-36 top-64 rotate-90">
                    <Image src={idemia_logo} alt="Left Image" className="h-[100%] w-[100%]" />
                </div>
            </div>
        );
    } else {
        return null; // Return null for other paths
    }
}