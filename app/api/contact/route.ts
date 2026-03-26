import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const name = body.name?.trim() || "";
    const email = body.email?.trim() || "";
    const message = body.message?.trim() || "";

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const endpoint = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

    if (!endpoint) {
      return NextResponse.json(
        { error: "Google Sheets integration is not configured yet." },
        { status: 500 }
      );
    }

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
        source: "website-contact-form",
        submittedAt: new Date().toISOString(),
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to save contact details to Google Sheets.");
    }

    return NextResponse.json(
      { message: "Thanks. Your details have been recorded successfully." },
      { status: 200 }
    );
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Failed to submit contact form.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
