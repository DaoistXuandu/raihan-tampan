"use client"
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from 'next/navigation';

export default function Home() {
    const pathname = usePathname(); // e.g., "/about"
    const router = useRouter();
    async function def() {
        const data = await fetch("/api/fetch-link", {
            method: "POST",
            body: JSON.stringify({
                nama: pathname.substring(1, pathname.length),
            })
        })
            .then(response => response.json())
            .then(data => data);

        router.push(data.accessed_link);
    }

    useEffect(() => {
        def();
        console.log(pathname);
    }, [])

    return (
        <div>
        </div>
    )
}
