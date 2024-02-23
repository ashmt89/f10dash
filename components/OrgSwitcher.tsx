"use client"
import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useOrganizationList } from "@clerk/nextjs";
import { checkUserRole } from '@/lib/userUtils';
import path from 'path';

interface CustomOrgSwitcherProps {
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  }

export const CustomOrgSwitcher: React.FC<CustomOrgSwitcherProps> = ({ setIsLoading }) => {
    const pathName = usePathname()
    const { isLoaded, setActive, userMemberships } = useOrganizationList({
        userMemberships: {
            infinite: true,
        },
    });

    const router = useRouter();
    
    // Redirect to the dashboard page of the first organization
    useEffect(() => {
        const fetchRoleAndRedirect = async () => {
            const role = await checkUserRole();
            if (isLoaded && userMemberships.data && userMemberships.data.length > 0) {
                const firstOrgId = userMemberships.data[0].organization.id;
                setActive({ organization: firstOrgId });
                
                if (role && role.orgSlug === "idemia") {
                    router.push('/Idemia');
                }
                else if (role && role.orgSlug === "iti") {
                    router.push('/dashboard/ITI');
                }
                else if (role && role.orgSlug === "form10") {
                    router.push('/dashboard/Form10');
                }
            }
            console.log('pathName', role);
            
            setIsLoading(false); // Set loading to false after fetching role and redirecting
        }
        fetchRoleAndRedirect();
    }, [isLoaded, userMemberships.data, setActive, router, setIsLoading, pathName]);



  if (!isLoaded) {
    return <>Loading</>;
  }

  return null;
};
