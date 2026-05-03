import { NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";

export async function proxy(request) {
    const { pathname, search } = request.nextUrl;

    const session = await auth.api.getSession({
        headers: await headers(),
    });

    // ✅ PUBLIC ROUTE (allow without login)
    if (pathname === "/all-courses") {
        return NextResponse.next();
    }

    // 🔒 PROTECTED ROUTES
    const isProtected =
        pathname.startsWith("/my-profile") ||
        pathname.startsWith("/all-courses/");

    if (isProtected && !session) {
        // 🔥 save original URL for redirect after login
        const loginUrl = new URL("/login", request.url);
        loginUrl.searchParams.set("callbackUrl", pathname + search);

        return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/my-profile", "/all-courses/:path*"],
};