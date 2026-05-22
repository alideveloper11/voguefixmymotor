import { NextRequest, NextResponse } from "next/server";

const PORTAL_URL = "https://portal.rangerovergarage.co.uk/api/quote";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const username = process.env.PORTAL_USERNAME ?? "";
        const password = process.env.PORTAL_PASSWORD ?? "";

        if (!username || !password) {
            return NextResponse.json(
                { error: "Server configuration error: Portal credentials missing" },
                { status: 500 }
            );
        }

        const forwarded = request.headers.get("x-forwarded-for");
        const ip = forwarded ? forwarded.split(",")[0] : "127.0.0.1";
        const userAgent = request.headers.get("user-agent") || "Unknown";

        const fields: Record<string, string> = {
            ...body,
            ip_address: (body.ip_address === "Client-Side" || !body.ip_address) ? ip : body.ip_address,
            browser: (body.browser === "Unknown" || !body.browser) ? userAgent : body.browser,
        };

        const formData = new FormData();
        Object.entries(fields).forEach(([key, value]) => formData.append(key, String(value)));

        const response = await fetch(PORTAL_URL, {
            method: "POST",
            headers: { username, password },
            body: formData,
        });

        const data = await response.json().catch(() => null);

        if (response.ok && data?.success) {
            return NextResponse.json(data);
        }

        return NextResponse.json(
            { error: data?.message || "Failed to submit quote to portal" },
            { status: response.ok ? 400 : response.status }
        );

    } catch {
        return NextResponse.json(
            { error: "Internal server error during quote submission" },
            { status: 500 }
        );
    }
}