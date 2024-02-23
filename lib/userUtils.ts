interface UserRoleData {
    orgId: string;
    orgRole: string;
    orgSlug: string;
    userId: string;
}

export async function checkUserRole(): Promise<UserRoleData | null> {
    try {
        const res = await fetch('/api/getAuth', {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch user data");
        }
        const data: UserRoleData = await res.json();
        return data;
    } catch (error) {
        console.error("Error loading form: ", error);
        return null;
    } 
}
