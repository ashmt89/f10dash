'use client';
import Image from "next/image";
import { useState } from 'react';
import { SignIn, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

export default function CurrentMonthOverview() {
  const [isLoading, setIsLoading] = useState(true);
  const { isSignedIn, user } = useUser(); 
  return (
    <main className="flex flex-col h-screen items-center justify-between p-24">
      {isSignedIn ? (
        <div> You are signed in as {user.fullName}</div>
        
    ) : (
        <SignIn />
      )}
    </main>
  );
}
