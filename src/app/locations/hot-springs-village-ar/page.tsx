import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/data/site";
const canonical = "https://www.mayosconstruction.com/locations/hot-springs-village-ar";
export const metadata: Metadata = {
 title: "Home Remodeling in Hot Springs Village, AR",
 description: "Explore flooring, drywall, carpentry, repairs, and home remodeling near Hot Springs Village, Arkansas. Contact Mayo's Home Remodeling to discuss service availability.",
 alternates: { canonical },
 openGraph: { title: "Home Remodeling in Hot Springs Village, AR", description: "Explore flooring, drywall, carpentry, repairs, and home remodeling near Hot Springs Village, Arkansas. Contact Mayo's Home Remodeling to discuss service availability.", url: canonical, type: "website" },
};
export default function Page() {
 const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Home Remodeling in Hot Springs Village, AR",
  description: "Explore flooring, drywall, carpentry, repairs, and home remodeling near Hot Springs Village, Arkansas. Contact Mayo's Home Remodeling to discuss service availability.",
  url: canonical,
  about: { "@type": "HomeAndConstructionBusiness", name: site.name, url: site.url, telephone: site.phone },
  areaServed: { "@type": "Place", name: "Hot Springs Village, Arkansas" }
 };
 return <><Header/><main className="min-h-[65vh] bg-[#f6f2ec] text-[#1b1b1b]">
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/>
 <div className="container py-16 md:py-24">
 <nav aria-label="Breadcrumb" className="mb-8 text-sm text-[#5f5a54]"><Link href="/" className="underline">Home</Link> / Locations / Hot Springs Village, Arkansas</nav>
 <div className="max-w-3xl"><p className="mb-4 font-semibold uppercase tracking-widest text-[#6b655e]">Areas We Serve</p>
 <h1 className="text-4xl font-black tracking-tight md:text-6xl">Remodeling Near Hot Springs Village</h1>
 <p className="mt-8 text-lg leading-8 text-[#5f5a54]">Mayo's Home Remodeling works in the Hot Springs area and welcomes inquiries from homeowners in Hot Springs Village about renovations, repairs, and interior improvements. Contact us to confirm availability for your address.</p>
 <h2 className="mt-12 text-2xl font-bold">Discuss Your Project</h2>
 <p className="mt-4 leading-8 text-[#5f5a54]">Whether your home needs flooring, drywall repairs, carpentry, or more extensive updates, we can discuss the project and determine whether it fits our service area and schedule.</p>
 <div className="mt-10 flex flex-wrap gap-4"><a href={`tel:${site.phoneRaw}`} className="rounded-full bg-[#2f2b28] px-7 py-4 font-semibold text-white">Call ${site.phone}</a><Link href="/#quote" className="rounded-full border border-[#2f2b28] px-7 py-4 font-semibold">Request a Quote</Link></div>
 </div>
 <section className="mt-16 border-t border-black/10 pt-8"><h2 className="mb-5 text-2xl font-bold">Explore More</h2><div className="flex flex-wrap gap-6 text-[#5f5a54]"><Link className="underline" href="/services/home-remodeling">Home Remodeling</Link><Link className="underline" href="/services/flooring-drywall">Flooring &amp; Drywall</Link><Link className="underline" href="/locations/hot-springs-ar">Hot Springs</Link><Link className="underline" href="/locations/hot-springs-village-ar">Hot Springs Village</Link></div></section>
 </div></main><Footer/></>;
}
