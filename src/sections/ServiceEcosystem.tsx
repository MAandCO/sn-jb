import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Building2, MapPin, Landmark } from 'lucide-react';
import { useReducedMotion } from '../hooks/use-reduced-motion';

gsap.registerPlugin(ScrollTrigger);

interface ServiceEcosystemProps {
  className?: string;
}

export default function ServiceEcosystem({ className = '' }: ServiceEcosystemProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (prefersReducedMotion) return;
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        },
      });

      // ENTRANCE (0% - 30%)
      scrollTl.fromTo(
        headlineRef.current,
        { x: '-18vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0
      );

      scrollTl.fromTo(
        card1Ref.current,
        { x: '60vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0.06
      );

      scrollTl.fromTo(
        card2Ref.current,
        { y: '40vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.12
      );

      scrollTl.fromTo(
        card3Ref.current,
        { y: '40vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.14
      );

      // SETTLE (30% - 70%) - hold positions

      // EXIT (70% - 100%)
      scrollTl.fromTo(
        [card1Ref.current, card2Ref.current, card3Ref.current],
        { x: 0, y: 0, opacity: 1 },
        { x: '-10vw', y: '10vh', opacity: 0, ease: 'power2.in', stagger: 0.02 },
        0.7
      );

      scrollTl.fromTo(
        headlineRef.current,
        { opacity: 1 },
        { opacity: 0, ease: 'power2.in' },
        0.8
      );
    }, section);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="service-ecosystem"
      className={`section-pinned dot-grid ${className}`}
    >
      {/* Left headline block */}
      <div
        ref={headlineRef}
        className="absolute left-[6vw] top-[16vh] w-[88vw] lg:w-[26vw] will-change-transform"
      >
        <h2 className="text-[26px] sm:text-[32px] lg:text-[40px] font-bold text-[#0B1C2F] leading-[1.1] mb-4">
          A full ecosystem for founders, funds, and cross-border teams.
        </h2>
        <p className="text-sm lg:text-base text-[#6B7A8C] leading-relaxed">
          From UK tax compliance to APAC market entry—built for speed and scale.
        </p>
      </div>

      {/* Service cards container */}
      <div className="absolute left-[6vw] lg:left-[36vw] top-[38vh] lg:top-[16vh] w-[88vw] lg:w-[58vw] h-auto lg:h-[68vh]">
        {/* Card 1 - UK (top, full width) */}
        <button
          ref={card1Ref}
          onClick={() => scrollToSection('uk')}
          type="button"
          aria-label="Explore UK Accounting & Tax"
          className="w-full text-left h-auto lg:h-[20vh] bg-white rounded-[18px] card-shadow hairline-border p-5 lg:p-6 mb-4 cursor-pointer hover:shadow-lg transition-shadow will-change-transform group"
        >
          <div className="flex items-start justify-between h-full">
            <div className="flex flex-col justify-between h-full">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#1E63AF]/10 rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-[#1E63AF]" />
                </div>
                <span className="text-xs font-mono font-medium text-[#6B7A8C] uppercase tracking-wider">
                  UK
                </span>
              </div>
              <div>
                <h3 className="text-lg lg:text-xl font-bold text-[#0B1C2F] mb-1">
                  UK Accounting & Tax
                </h3>
                <p className="text-sm text-[#6B7A8C]">
                  Year-end, tax, payroll, and filings—handled end-to-end.
                </p>
              </div>
            </div>
            <span className="flex items-center gap-1 text-sm font-medium text-[#1E63AF] group-hover:gap-2 transition-all">
              Explore <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </button>

        {/* Bottom row cards */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Card 2 - Malaysia */}
          <button
            ref={card2Ref}
            onClick={() => scrollToSection('malaysia')}
            type="button"
            aria-label="Explore Malaysia Market Entry"
            className="w-full text-left lg:w-[48%] h-auto lg:h-[44vh] bg-white rounded-[18px] card-shadow hairline-border p-5 lg:p-6 cursor-pointer hover:shadow-lg transition-shadow will-change-transform group"
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#10B981]/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#10B981]" />
                  </div>
                  <span className="text-xs font-mono font-medium text-[#6B7A8C] uppercase tracking-wider">
                    Malaysia
                  </span>
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-[#0B1C2F] mb-2">
                  Malaysia Market Entry
                </h3>
                <p className="text-sm text-[#6B7A8C]">
                  Incorporation, tax registration, and local compliance.
                </p>
              </div>
              <span className="flex items-center gap-1 text-sm font-medium text-[#10B981] group-hover:gap-2 transition-all mt-4">
                Explore <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </button>

          {/* Card 3 - Singapore */}
          <button
            ref={card3Ref}
            onClick={() => scrollToSection('singapore')}
            type="button"
            aria-label="Explore Singapore Corporate Advisory"
            className="w-full text-left lg:w-[48%] h-auto lg:h-[44vh] bg-white rounded-[18px] card-shadow hairline-border p-5 lg:p-6 cursor-pointer hover:shadow-lg transition-shadow will-change-transform group"
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#1E63AF]/10 rounded-lg flex items-center justify-center">
                    <Landmark className="w-5 h-5 text-[#1E63AF]" />
                  </div>
                  <span className="text-xs font-mono font-medium text-[#6B7A8C] uppercase tracking-wider">
                    Singapore
                  </span>
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-[#0B1C2F] mb-2">
                  Singapore Corporate Advisory
                </h3>
                <p className="text-sm text-[#6B7A8C]">
                  Governance, structuring, and ongoing statutory support.
                </p>
              </div>
              <span className="flex items-center gap-1 text-sm font-medium text-[#1E63AF] group-hover:gap-2 transition-all mt-4">
                Explore <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
