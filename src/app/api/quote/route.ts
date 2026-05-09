// src/app/api/quote/route.ts

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, phone, email, message } = body;

    if (!name || !phone || !message) {
      return Response.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Mayos Website <quotes@hometownwebservicesar.cc>",
      to: "isaiahzane2020@icloud.com",
      replyTo: email || undefined,
      subject: `New quote request from ${name}`,
      html: `
        <h2>New Quote Request</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || "Not provided"}</p>

        <p><strong>Project Details:</strong></p>

        <p>${message}</p>
      `,
    });

    await resend.emails.send({
      from: "Mayos Website <quotes@hometownwebservicesar.cc>",
      to: "altifygenerator@gmail.com",
      replyTo: email || undefined,
      subject: `[COPY] New quote request from ${name}`,
      html: `
        <h2>New Quote Request</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || "Not provided"}</p>

        <p><strong>Project Details:</strong></p>

        <p>${message}</p>
      `,
    });

    return Response.json({
      success: true,
    });

  } catch {
    return Response.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}