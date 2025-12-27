import { VideoHero } from "@/components/sections/video-hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { StatsSection } from "@/components/sections/stats-section";
import { WorkSection } from "@/components/sections/work-section";
import { Contact } from "@/components/sections/contact";
import { VisualProduction } from "@/components/sections/visual-production";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-black">
      <VideoHero />
      <StatsSection />
      <ServicesGrid />
      <VisualProduction />
      <WorkSection />
      <Contact />
    </main>
  );
}
