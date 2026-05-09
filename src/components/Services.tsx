// src/components/Services.tsx

import SectionHeading from "./SectionHeading";

import {
  FaHammer,
  FaPaintRoller,
  FaBorderAll,
} from "react-icons/fa";

import { MdConstruction } from "react-icons/md";

const services = [
  {
    icon: <FaHammer />,
    title: "Home Repairs",
    text:
      "From small fixes to larger repair projects, we help homeowners keep their homes in good shape with dependable workmanship.",
  },

  {
    icon: <FaPaintRoller />,
    title: "Flooring & Interior Updates",
    text:
      "New flooring, paint, trim work, and updated finishes that help bring older spaces back to life without overcomplicating the process.",
  },

  {
    icon: <MdConstruction />,
    title: "Remodeling Projects",
    text:
      "Kitchen updates, renovations, drywall, carpentry, and general remodeling work done with attention to detail from start to finish.",
  },

  {
    icon: <FaBorderAll />,
    title: "Gutters & Exterior Work",
    text:
      "Clean, solid gutter installation and exterior improvement work built to handle Arkansas weather and protect your home properly.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="section"
    >
      <div className="container">
        
        <SectionHeading
          eyebrow="What We Do"
          title="Reliable Home Improvement Services"
          text="We take pride in quality workmanship, reliable service, and attention to detail on every project."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          
          {services.map((service) => (
            <article
              key={service.title}
              className="glass rounded-[28px] p-8"
            >
              <div className="mb-6 text-4xl text-[#2f2b28]">
                {service.icon}
              </div>

              <h3 className="text-2xl font-black tracking-tight text-[#1b1b1b]">
                {service.title}
              </h3>

              <p className="mt-4 leading-8 text-[#5f5a54]">
                {service.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}