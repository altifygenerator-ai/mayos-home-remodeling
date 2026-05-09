// src/components/Hero.tsx

import Image from "next/image";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/gallery/gallery-2.jpeg')",
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-[rgba(20,20,20,0.58)]" />

      

      {/* CONTENT */}
      <div className="container relative z-10 flex min-h-[88vh] items-center">
        
        <div className="max-w-3xl">
          
          <div className="mb-6 inline-flex rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur">
            Licensed & Insured Contractor In Arkansas
          </div>

          <h1 className="max-w-5xl text-5xl font-black leading-[1.02] tracking-tight text-white md:text-7xl">
            {site.hero.title}
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#dfd9d1]">
            {site.hero.text}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            
            <a
              href="#quote"
              className="rounded-full bg-[#f6f2ec] px-7 py-4 font-semibold text-[#1b1b1b] transition hover:opacity-90"
            >
              {site.hero.ctaPrimary}
            </a>

            <a
              href={`tel:${site.phoneRaw}`}
              className="rounded-full border border-white/20 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur transition hover:bg-white hover:text-[#1b1b1b]"
            >
              {site.hero.ctaSecondary}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm font-medium text-[#dfd9d1]">
            <span>Repairs & Renovations</span>
            <span>Flooring & Drywall</span>
            <span>Carpentry</span>
            <span>Gutters</span>
          </div>
        </div>
      </div>
    </section>
  );
}