import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/data/site";
const canonical = "https://www.mayosconstruction.com/services/flooring-drywall";
export const metadata: Metadata = {
 title: "Flooring & Drywall Services in Hot Springs, AR",
 description: "Flooring installation, drywall repairs, and interior finishing for homes in Hot Springs, AR. Contact Mayo's Home Remodeling for a project quote.",
 alternates: { canonical },
 openGraph: { title: "Flooring & Drywall Services in Hot Springs, AR", description: "Flooring installation, drywall repairs, and interior finishing for homes in Hot Springs, AR. Contact Mayo's Home Remodeling for a project quote.", url: canonical, type: "website" },
};
export default function Page() {
 const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Flooring & Drywall Services in Hot Springs, AR",
  description: "Flooring installation, drywall repairs, and interior finishing for homes in Hot Springs, AR. Contact Mayo's Home Remodeling for a project quote.",
  url: canonical,
  provider: { "@type": "HomeAndConstructionBusiness", name: site.name, url: site.url, telephone: site.phone },
  areaServed: { "@type": "Place", name: "Hot Springs, Arkansas" }
 };
 return <><Header/><main className="min-h-[65vh] bg-[#f6f2ec] text-[#1b1b1b]">
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/>
 <div className="container py-16 md:py-24">
 <nav aria-label="Breadcrumb" className="mb-8 text-sm text-[#5f5a54]"><Link href="/" className="underline">Home</Link> / Services / Flooring & Drywall</nav>
 <div className="max-w-3xl"><p className="mb-4 font-semibold uppercase tracking-widest text-[#6b655e]">What We Do</p>
 <h1 className="text-4xl font-black tracking-tight md:text-6xl">Interior Repairs That Make a Difference</h1>
 <p className="mt-8 text-lg leading-8 text-[#5f5a54]">Flooring and drywall have a major impact on how a room looks and feels. Whether you're replacing worn flooring or repairing damaged walls, Mayo's Home Remodeling can review the space and discuss the work involved.</p>
 <h2 className="mt-12 text-2xl font-bold">Discuss Your Project</h2>
 <p className="mt-4 leading-8 text-[#5f5a54]">Projects may involve floor updates, drywall patches and repairs, wall preparation, trim, or related interior improvements. The best approach depends on the condition of the existing surfaces and the finish you're looking for.</p>
 <div className="mt-10 flex flex-wrap gap-4"><a href={`tel:${site.phoneRaw}`} className="rounded-full bg-[#2f2b28] px-7 py-4 font-semibold text-white">Call ${site.phone}</a><Link href="/#quote" className="rounded-full border border-[#2f2b28] px-7 py-4 font-semibold">Request a Quote</Link></div>
 </div>
 <section className="mt-16 border-t border-black/10 pt-8"><h2 className="mb-5 text-2xl font-bold">Explore More</h2><div className="flex flex-wrap gap-6 text-[#5f5a54]"><Link className="underline" href="/services/home-remodeling">Home Remodeling</Link><Link className="underline" href="/services/flooring-drywall">Flooring &amp; Drywall</Link><Link className="underline" href="/locations/hot-springs-ar">Hot Springs</Link><Link className="underline" href="/locations/hot-springs-village-ar">Hot Springs Village</Link></div></section>
 </div></main><Footer/></>;
}
