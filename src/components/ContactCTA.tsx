// src/components/ContactCTA.tsx

// src/components/ContactCTA.tsx

"use client";

import { useState } from "react";
import { site } from "@/data/site";

export default function ContactCTA() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="quote" className="section">
      <div className="container">
        <div className="glass rounded-[32px] p-8 md:p-14">
          <div className="grid-2 items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6e685f]">
                Request A Quote
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight text-[#1b1b1b] md:text-5xl">
                Let’s Talk About Your Project
              </h2>

              <div className="gold-line" />

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#5f5a54]">
                Need repairs, remodeling, flooring, gutters, drywall, carpentry,
                or general home improvement work? Reach out and we’ll take a
                look at your project and get you a clear quote.
              </p>

              <div className="mt-10 space-y-3 text-[#1b1b1b]">
                <a
                  href={`tel:${site.phoneRaw}`}
                  className="block text-xl font-bold hover:opacity-70"
                >
                  {site.phone}
                </a>

                <a
                  href={`mailto:${site.email}`}
                  className="block text-lg text-[#5f5a54] hover:opacity-70"
                >
                  {site.email}
                </a>

                <p className="pt-4 text-sm font-medium uppercase tracking-[0.15em] text-[#6e685f]">
                  Licensed & Insured Contractor In Arkansas
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full rounded-2xl border border-[var(--border)] bg-white/70 px-5 py-4 text-[#1b1b1b] outline-none placeholder:text-[#8a837a]"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                className="w-full rounded-2xl border border-[var(--border)] bg-white/70 px-5 py-4 text-[#1b1b1b] outline-none placeholder:text-[#8a837a]"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full rounded-2xl border border-[var(--border)] bg-white/70 px-5 py-4 text-[#1b1b1b] outline-none placeholder:text-[#8a837a]"
              />

              <textarea
                name="message"
                rows={6}
                placeholder="Tell us about your project"
                required
                className="w-full rounded-2xl border border-[var(--border)] bg-white/70 px-5 py-4 text-[#1b1b1b] outline-none placeholder:text-[#8a837a]"
              />

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-2xl bg-[#2f2b28] px-6 py-4 font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Send Quote Request"}
              </button>

              {status === "sent" && (
                <p className="rounded-2xl border border-green-700/20 bg-green-50 px-5 py-4 text-sm font-medium text-green-800">
                  Quote request sent. We’ll get back with you soon.
                </p>
              )}

              {status === "error" && (
                <p className="rounded-2xl border border-red-700/20 bg-red-50 px-5 py-4 text-sm font-medium text-red-800">
                  Something went wrong. Please call or text {site.phone}.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}