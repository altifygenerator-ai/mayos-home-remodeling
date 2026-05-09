// src/components/Footer.tsx

import Image from "next/image";
import Link from "next/link";

import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-[#dcd5cb] py-10">
      <div className="container">
        
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          
          {/* LEFT */}
          <div>
            <h3 className="text-xl font-black tracking-tight text-[#1b1b1b]">
              {site.name}
            </h3>

            <p className="mt-2 text-sm font-medium text-[#5f5a54]">
              {site.location}
            </p>

            <p className="mt-5 max-w-md text-sm leading-7 text-[#4f4a45]">
              Home remodeling, repairs, flooring, drywall, carpentry,
              gutters, and general home improvement services in Hot Springs,
              Arkansas.
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-start text-sm text-[#4f4a45] md:items-end">
            
         <Image
  src="/images/logo.png"
  alt={site.name}
  width={90}
  height={90}
  quality={100}
  priority
  className="mb-3 h-[58px] w-[58px] object-contain"
/>

            <a
              href={`tel:${site.phoneRaw}`}
              className="transition hover:text-[#1b1b1b]"
            >
              {site.phone}
            </a>

            <a
              href={`mailto:${site.email}`}
              className="mt-2 transition hover:text-[#1b1b1b]"
            >
              {site.email}
            </a>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-10 flex flex-col gap-4 border-t border-black/10 pt-6 text-sm md:flex-row md:items-center md:justify-between">
          
          <p className="text-black">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>

          <Link
            href="https://www.hometownwebservicesar.cc"
            target="_blank"
            className="font-medium text-black transition hover:opacity-70"
          >
            Website by Hometown Web Services
          </Link>
        </div>
      </div>
    </footer>
  );
}