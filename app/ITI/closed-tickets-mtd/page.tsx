import Image from "next/image";
import React from 'react';
import iti_logo from "@/public/images/ITI-Logo.png";

export default function ITIClosedTickets() {
    return (
            <div className="relative">
                {/* Left image */}
                <div className="absolute left-0 top-0 lg:top-[5%] transform -translate-x-1/2 -translate-y-1/2 rotate-90 lg:rotate-0">
                    <Image src={iti_logo} alt="Left Image" className="h-[80%] lg:h-[100%] w-auto lg:w-auto" />
                </div>
                {/* Right image */}
                <div className="absolute right-0 top-0 lg:top-[5%] transform translate-x-1/2 -translate-y-1/2 rotate-90 lg:rotate-0">
                    <Image src={iti_logo} alt="Right Image" className="h-[80%] lg:h-[100%] w-auto lg:w-auto" />
                </div>
                {/* Main child container */}
                <div className="container mx-auto max-w-screen-2xl h-screen">
                    {/* Your iframe or other content here */}
                    <iframe src="https://form10group.brightgauge.co/public/dashboards/117918e1-a0d9-437d-8ab9-1f90d8600e98/?theme=dark" className="w-full h-full"></iframe>
                </div>
            </div>
        );
    }