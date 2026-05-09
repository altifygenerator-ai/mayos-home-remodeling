// src/app/page.tsx

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

import { localBusinessSchema } from "@/lib/schema";

export default function HomePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema()),
        }}
      />

      <Header />
      <Hero />
      <Services />
      <Gallery />
      <About />
      <ContactCTA />
      <Footer />
    </main>
  );
}