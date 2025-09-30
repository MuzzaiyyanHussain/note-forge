"use client"

import { authClient } from "@/lib/auth-client";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";


export function Logout() {
    const router = useRouter();
    const handleLogOut = async () => {
        await authClient.signOut()
        router.push("/")
    };

    return <Button variant={"outline"} onClick={handleLogOut}>Logout</Button>
}