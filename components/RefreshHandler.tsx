"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export function RefreshHandler() {
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }
        window.scrollTo(0, 0);

        if (pathname !== "/") {
            router.replace("/");
        }
    }, []);

    return null;
}
