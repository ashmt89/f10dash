import Image from "next/image";
import React from 'react';
import idemia_logo from "@/public/images/Idemia_Logo.png";

export default function Page() {
    
    return (
    <div className="container mx-auto max-w-screen-2xl h-screen">
        {/* Your iframe or other content here */}
    <iframe src="https://form10group.brightgauge.co/public/dashboards/90f623b7-4228-4513-9cbf-bff1fbf66acc/?theme=dark"
        className="w-full h-full"></iframe>
    </div>
    );
}