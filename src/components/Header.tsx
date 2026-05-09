// src/components/Header.tsx

"use client";

import Link from "next/link";
import Image from "next/image";

import { site } from "@/data/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[rgba(246,242,236,0.82)] backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between">
        
        <Link href="/" className="flex items-center gap-3">
        <Image
  src="/images/logo.png"
  alt={site.name}
  width={90}
  height={90}
  quality={100}
  priority
  className="h-[52px] w-[52px] object-contain"
/>

          <div className="leading-tight">
            <p className="text-lg font-black tracking-tight text-[#1b1b1b]">
              Mayos
            </p>

            <p className="text-[11px] uppercase tracking-[0.24em] text-[#6b655e]">
              Home Remodeling
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          
          <a
            href="#services"
            className="text-sm font-medium text-[#5f5a54] transition hover:text-[#1b1b1b]"
          >
            Services
          </a>

          <a
            href="#gallery"
            className="text-sm font-medium text-[#5f5a54] transition hover:text-[#1b1b1b]"
          >
            Gallery
          </a>

          <a
            href="#about"
            className="text-sm font-medium text-[#5f5a54] transition hover:text-[#1b1b1b]"
          >
            About
          </a>

          <a
            href="#quote"
            className="text-sm font-medium text-[#5f5a54] transition hover:text-[#1b1b1b]"
          >
            Contact
          </a>
        </nav>

        <a
          href={`tel:${site.phoneRaw}`}
          className="rounded-full border border-black/10 bg-[#2f2b28] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
        >
          Call Now
        </a>
      </div>
    </header>
  );
}