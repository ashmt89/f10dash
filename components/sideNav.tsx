'use client';
import React, { useState } from "react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { cn } from "@/lib/utils"
import  Image from "next/image";
import f10Logo from "@/public/images/f10_logo.png";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { iti_menu } from "@/lib/itiDashboards";
import { idemia_menu } from "@/lib/idemiaDashboards";
import { Icon } from '@iconify/react';


import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
  

interface SubMenuState {
    [key: string]: boolean;
  }

export default function CollapsibleSideNav() {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState<SubMenuState>({});
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleSubMenu = (name: string): void => {
        setIsSubMenuOpen(prevState => ({
            ...prevState,
            [name]: !prevState[name]
        }));
    };

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="fixed top-0 left-0 h-screen z-50">
            {/* Side Nav */}
            <nav className={`h-screen bg-gray-700 text-white ${isOpen ? "w-64" : "w-0"} transition-all ease-in-out duration-300`}>
            <div className="flex items-center justify-center h-32 ">
                    <Link href='/' >
                        <Image src={f10Logo} className="h-22 w-26 " alt="Form 10 Group" priority={true} />
                    </Link>
                    
                </div>
                {isOpen && (
                    <>
                        <NavigationMenu>
                            <NavigationMenuList>
                                <div className="flex flex-col pl-6">
                                    <div className="flex-grow pt-4 pb-4">
                                        <NavigationMenuItem>
                                            <Link href="/" legacyBehavior passHref>
                                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                                    Home
                                                </NavigationMenuLink>
                                            </Link>
                                        </NavigationMenuItem>
                                    </div>
                                    <div className="flex-grow pb-4">
                                        <NavigationMenuItem>
                                            <NavigationMenuTrigger>Idemia Dashboards</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                {idemia_menu.map((idemia_item) => (
                                  <ListItem
                                    key={idemia_item.title}
                                    title={idemia_item.title}
                                    href={idemia_item.href}
                                  >
                                    {idemia_item.description}
                                  </ListItem>
                                ))}
                              </ul>
                            </NavigationMenuContent>
                          </NavigationMenuItem>
                                    </div>
                                    <div className="flex-grow pb-4" >
                                    <NavigationMenuItem>
                        <NavigationMenuTrigger>ITI Dashboards</NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {iti_menu.map((iti_item) => (
                              <ListItem
                                key={iti_item.title}
                                title={iti_item.title}
                                href={iti_item.href}
                              >
                                {iti_item.description}
                              </ListItem>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                                    </div>
                          </div>
                                 </NavigationMenuList>
                            </NavigationMenu>
                    </>
                )}
                {isOpen ? (
                <button
                onClick={toggleNav}
                className="absolute top-0 right-0 p-4 text-red-800 focus:outline-none"
                >
                    Close Menu
                </button>
                ) : (
                    <button
                        onClick={toggleNav}
                        className="absolute top-0 right-0 p-4 text-red-800 focus:outline-none">
                            Open Menu
                    </button>
                )}
                
            </nav>
    
            {/* Main Content */}
            <div className="flex-grow">
                <button
                onClick={toggleNav}
                className={`bg-gray-800 text-green-700 p-4 `}
                >
                Menu
                </button>
            </div>
        </div>
    );
};

const ListItem = React.forwardRef<
React.ElementRef<"a">,
React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
return (
  <li>
    <NavigationMenuLink asChild>
      <a
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </a>
    </NavigationMenuLink>
  </li>
)
})
ListItem.displayName = "ListItem"
