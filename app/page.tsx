import { Hero } from "@/components/sections/hero";
import { BentoGrid } from "@/components/sections/bento-grid";
import { WorkSection } from "@/components/sections/work-section";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <BentoGrid />
      <WorkSection />
      <Contact />
    </main>
  );
}
