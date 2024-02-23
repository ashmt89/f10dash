'use client';
import { UserButton } from "@clerk/nextjs";
import * as React from "react"
import { cn } from "@/lib/utils"
import  Image from "next/image";
import f10Logo from "@/public/images/f10_logo.png";
import Link from "next/link";
import { FaceIcon, ImageIcon, SunIcon } from '@radix-ui/react-icons'
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { iti_menu } from "@/lib/itiDashboards";
import {idemia_menu} from "@/lib/idemiaDashboards";

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



export default function NavBar() {
    return (
        <nav className="bg-gray-700">
            <div className="xl:container mx-auto px-6 flex justify-between items-center">
                {/* Logo aligned towards the left */}
                <Image src={f10Logo} className="h-22 w-26" alt="Form 10 Group" priority={true} />
                {/* Navigation menu aligned towards the center */}
                <NavigationMenu>
                    <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Home
                          </NavigationMenuLink>
                        </Link>
                      </NavigationMenuItem>
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
                     
                    </NavigationMenuList>
                    </NavigationMenu>
                {/* User button aligned towards the right */}
                <UserButton />
            </div>
        </nav>
    );
}

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