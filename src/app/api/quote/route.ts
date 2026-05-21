import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const username = process.env.PORTAL_USERNAME;
        const password = process.env.PORTAL_PASSWORD;

        if (!username || !password) {
            return NextResponse.json(
                { error: "Server configuration error: Portal credentials missing" },
                { status: 500 }
            );
        }

        const forwarded = request.headers.get("x-forwarded-for");
        const ip = forwarded ? forwarded.split(',')[0] : "127.0.0.1";
        const userAgent = request.headers.get("user-agent") || "Unknown";

        const enrichedBody = {
            ...body,
            ip_address: (body.ip_address === "Client-Side" || !body.ip_address) ? ip : body.ip_address,
            browser: (body.browser === "Unknown" || !body.browser) ? userAgent : body.browser,
        };

        const response = await fetch("https://portal.rangerovergarage.co.uk/api/quote", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "username": username,
                "password": password,
            },
            body: JSON.stringify(enrichedBody),
        });

        const data = await response.json();

        if (!response.ok) {
            return NextResponse.json(
                { error: data.message || "Failed to submit quote to portal" },
                { status: response.status }
            );
        }

        return NextResponse.json(data);

    } catch {
        return NextResponse.json(
            { error: "Internal server error during quote submission" },
            { status: 500 }
        );
    }
}