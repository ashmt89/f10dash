import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { cn } from "@/lib/utils"
import NavBar from "@/components/NavBar";
import CollapsibleSideNav from "@/components/sideNav";
import Footer from "@/components/Footer";
import SideLogo from "@/components/SideLogo";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Form 10 Dashboards",
  description: "Dashboards created by Form 10 Group",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={cn("bg-background font-sans antialiased", fontSans.variable
        )}>
          <div className="flex flex-col h-svh">
            <CollapsibleSideNav />

            {children}
            <Footer />
            </div>
        </body>
      </html>
      </ClerkProvider>
  );
}
