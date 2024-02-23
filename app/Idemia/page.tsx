import Image from "next/image";
import React from 'react';
import idemia_logo from "@/public/images/Idemia_Logo.png";


export default function Page() {
    return (
            <div className="container mx-auto max-w-screen h-screen">
                {/* Your iframe or other content here */}
            <iframe src="https://form10group.brightgauge.co/public/dashboards/c9dde8cd-b950-4b97-9626-6559eb7ab49a/?theme=dark"
                className="w-full h-full"></iframe>
            </div>

    );
}