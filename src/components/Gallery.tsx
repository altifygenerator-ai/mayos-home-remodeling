// src/components/Gallery.tsx

import Image from "next/image";
import SectionHeading from "./SectionHeading";

const gallery = [
  "/images/gallery/gallery-1.jpeg",
  "/images/gallery/gallery-2.jpeg",
  "/images/gallery/gallery-3.jpeg",
  "/images/gallery/gallery-4.jpg",
];

export default function Gallery() {
  return (
    <section id="gallery" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Recent Work"
          title="Projects Built With Attention To Detail"
          text="From repairs and remodels to gutters and interior updates, we focus on clean work, reliable service, and solid results."
        />

        {/* BEFORE / AFTER */}
        <div className="glass mb-6 rounded-[28px] p-4 md:p-5">
          <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6b655e]">
                Featured Project
              </p>

              <h3 className="mt-2 text-2xl font-black tracking-tight text-[#1b1b1b] md:text-3xl">
                Kitchen Remodel Transformation
              </h3>
            </div>

            <span className="w-fit rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-semibold text-[#1b1b1b]">
              Before & After
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                label: "Before",
                src: "/images/gallery/before.jpeg",
                alt: "Kitchen before remodel",
                dark: false,
              },
              {
                label: "After",
                src: "/images/gallery/after.jpeg",
                alt: "Kitchen after remodel",
                dark: true,
              },
            ].map((item) => (
              <div key={item.label}>
                <div
                  className={`mb-2 inline-flex rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] ${
                    item.dark
                      ? "bg-[#2f2b28] text-white"
                      : "bg-[#d8d1c7] text-[#1b1b1b]"
                  }`}
                >
                  {item.label}
                </div>

                <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] bg-[#d8d1c7]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* OTHER GALLERY IMAGES */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((image, index) => (
            <div key={index} className="glass rounded-[24px] p-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[18px] bg-[#d8d1c7]">
                <Image
                  src={image}
                  alt={`Mayos Home Remodeling project ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition duration-700 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}