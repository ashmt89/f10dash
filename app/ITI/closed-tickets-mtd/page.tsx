import Image from "next/image";
import React from 'react';
import iti_logo from "@/public/images/ITI-Logo-vertical.png";

export default function ITIClosedTickets() {
    return (
            <div className="relative flex items-center justify-evenly">
                {/* Left image */}
                <div className="flex justify-center min-w-32">
                    <Image src={iti_logo} alt="Left Image" className="h-[80%] lg:h-[100%] w-auto" />
                </div>
                {/* Main child container */}
                <div className="container w-full max-w-screen-2xl h-screen m-0 p-0">
                    {/* Your iframe or other content here */}
                    <iframe src="https://form10group.brightgauge.co/public/dashboards/117918e1-a0d9-437d-8ab9-1f90d8600e98/?theme=dark" className="w-full h-full"></iframe>
                </div>
                {/* Right image */}
                <div className="flex justify-center min-w-32">
                    <Image src={iti_logo} alt="Right Image" className="h-[80%] lg:h-[100%] w-auto" />
                </div>
            </div>
        );
    }