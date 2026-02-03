import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from './components/Navigation';
import HeroSection from './sections/HeroSection';
import ServiceEcosystem from './sections/ServiceEcosystem';
import ServicesDetailSection from './sections/ServicesDetailSection';
import UKSection from './sections/UKSection';
import MalaysiaSection from './sections/MalaysiaSection';
import SingaporeSection from './sections/SingaporeSection';
import CrossBorderSection from './sections/CrossBorderSection';
import ComplianceSection from './sections/ComplianceSection';
import IndustriesSection from './sections/IndustriesSection';
import InternalAuditSection from './sections/InternalAuditSection';
import ResourcesSection from './sections/ResourcesSection';
import BlogHighlightsSection from './sections/BlogHighlightsSection';
import LocationsSection from './sections/LocationsSection';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';
import Footer from './sections/Footer';
import { useReducedMotion } from './hooks/use-reduced-motion';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    // Wait for all sections to mount and create their ScrollTriggers
    const timer = setTimeout(() => {
      const pinned = ScrollTrigger.getAll()
        .filter(st => st.vars.pin)
        .sort((a, b) => a.start - b.start);
      
      const maxScroll = ScrollTrigger.maxScroll(window);
      
      if (!maxScroll || pinned.length === 0) return;

      const pinnedRanges = pinned.map(st => ({
        start: st.start / maxScroll,
        end: (st.end ?? st.start) / maxScroll,
        center: (st.start + ((st.end ?? st.start) - st.start) * 0.5) / maxScroll,
      }));

      ScrollTrigger.create({
        snap: {
          snapTo: (value: number) => {
            const inPinned = pinnedRanges.some(
              r => value >= r.start - 0.02 && value <= r.end + 0.02
            );
            if (!inPinned) return value;

            const target = pinnedRanges.reduce(
              (closest, r) =>
                Math.abs(r.center - value) < Math.abs(closest - value)
                  ? r.center
                  : closest,
              pinnedRanges[0]?.center ?? 0
            );
            return target;
          },
          duration: { min: 0.15, max: 0.35 },
          delay: 0,
          ease: 'power2.out',
        },
      });
    }, 500);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [prefersReducedMotion]);

  return (
    <div ref={mainRef} className="relative">
      <Navigation />
      
      <main className="relative">
        <HeroSection className="z-10" />
        <ServiceEcosystem className="z-20" />
        <ServicesDetailSection className="z-30" />
        <UKSection className="z-40" />
        <MalaysiaSection className="z-50" />
        <SingaporeSection className="z-[60]" />
        <CrossBorderSection className="z-[70]" />
        <IndustriesSection className="z-[80]" />
        <InternalAuditSection className="z-[90]" />
        <ComplianceSection className="z-[100]" />
        <ResourcesSection className="z-[110]" />
        <BlogHighlightsSection className="z-[120]" />
        <LocationsSection className="z-[130]" />
        <AboutSection className="z-[140]" />
        <ContactSection className="z-[150]" />
        <Footer className="z-[160]" />
      </main>
    </div>
  );
}

export default App;
