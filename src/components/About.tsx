// src/components/About.tsx

import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section
      id="about"
      className="section"
    >
      <div className="container">
        
        <div className="grid-2 items-center">
          
          <div>
            <SectionHeading
              eyebrow="About Us"
              title="Quality Workmanship With Attention To Detail"
              text="Mayos Home Remodeling LLC helps homeowners around Hot Springs with repairs, renovations, flooring, drywall, carpentry, gutters, and general home improvement projects."
            />

            <p className="mt-6 leading-8 text-[#5f5a54]">
              We believe in reliable service, clean work, and doing the job the
              right way from start to finish. Whether it’s updating a room,
              handling repairs, or improving the outside of your home, we take
              pride in helping bring your vision to life.
            </p>

            <div className="mt-8 inline-flex rounded-full border border-black/10 bg-white/60 px-5 py-3 text-sm font-semibold text-[#1b1b1b] backdrop-blur">
              Licensed & Insured Contractor In Arkansas
            </div>
          </div>

          <div className="glass rounded-[32px] p-10">
            
            <h3 className="text-3xl font-black leading-tight tracking-tight text-[#1b1b1b]">
              Need Work Done Around Your Home?
            </h3>

            <p className="mt-6 leading-8 text-[#5f5a54]">
              From flooring and drywall to remodeling, repairs, gutters, and
              carpentry work, we’re here to help with projects big and small.
              Reach out today and let’s talk about what you need done.
            </p>

            <a
              href="#quote"
              className="mt-8 inline-flex rounded-full bg-[#2f2b28] px-6 py-4 font-semibold text-white transition hover:opacity-90"
            >
              Request A Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}