import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Building, FileCheck, ClipboardCheck, Globe } from 'lucide-react';
import { useReducedMotion } from '../hooks/use-reduced-motion';

gsap.registerPlugin(ScrollTrigger);

interface MalaysiaSectionProps {
  className?: string;
}

export default function MalaysiaSection({ className = '' }: MalaysiaSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const tilesRef = useRef<HTMLDivElement>(null);
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
        contentRef.current,
        { x: '-60vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0
      );

      scrollTl.fromTo(
        imageRef.current,
        { x: '60vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0.06
      );

      if (tilesRef.current) {
        const tiles = tilesRef.current.querySelectorAll('.feature-tile');
        scrollTl.fromTo(
          tiles,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.015, ease: 'none' },
          0.14
        );
      }

      // SETTLE (30% - 70%) - hold

      // EXIT (70% - 100%)
      scrollTl.fromTo(
        contentRef.current,
        { x: 0, opacity: 1 },
        { x: '-18vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        imageRef.current,
        { x: 0, opacity: 1 },
        { x: '18vw', opacity: 0, ease: 'power2.in' },
        0.7
      );
    }, section);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  const features = [
    { icon: Building, label: 'Incorporation' },
    { icon: FileCheck, label: 'Tax registration' },
    { icon: ClipboardCheck, label: 'Local compliance' },
    { icon: Globe, label: 'Cross-border setup' },
  ];

  return (
    <section
      ref={sectionRef}
      id="malaysia"
      className={`section-pinned dot-grid ${className}`}
    >
      {/* Left content card */}
      <div
        ref={contentRef}
        className="absolute left-[6vw] top-[16vh] w-[88vw] lg:w-[56vw] h-auto lg:h-[68vh] will-change-transform"
      >
        <div className="w-full h-full bg-white rounded-[18px] card-shadow hairline-border p-6 lg:p-8 relative overflow-hidden">
          {/* Location chip */}
          <div className="absolute top-6 right-6 flex items-center gap-2 px-3 py-1.5 bg-[#10B981]/10 rounded-full">
            <span className="w-2 h-2 bg-[#10B981] rounded-full" />
            <span className="text-xs font-mono font-medium text-[#10B981]">
              Kuala Lumpur • Labuan
            </span>
          </div>

          <div className="relative z-10 pt-8 lg:pt-0">
            <span className="inline-block px-3 py-1 bg-[#10B981]/10 rounded-full text-xs font-mono font-medium text-[#10B981] uppercase tracking-wider mb-4">
              Malaysia
            </span>

            <h2 className="text-[24px] sm:text-[28px] lg:text-[36px] font-bold text-[#0B1C2F] leading-[1.1] mb-4">
              Malaysia Market Entry
            </h2>

            <p className="text-sm lg:text-base text-[#6B7A8C] leading-relaxed max-w-full lg:max-w-[34vw] mb-6 lg:mb-8">
              Incorporation, tax registration, and ongoing compliance—so you can
              hire, invoice, and operate without delays.
            </p>

            {/* Feature tiles */}
            <div
              ref={tilesRef}
              className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="feature-tile p-4 bg-[#F6F8FB] rounded-xl hairline-border hover:bg-[#10B981]/5 transition-colors"
                >
                  <feature.icon className="w-5 h-5 text-[#10B981] mb-2" />
                  <span className="text-sm font-medium text-[#0B1C2F]">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right image card */}
      <div
        ref={imageRef}
        className="absolute left-[6vw] lg:left-[64vw] top-[58vh] lg:top-[16vh] w-[88vw] lg:w-[30vw] h-[30vh] lg:h-[68vh] will-change-transform"
      >
        <div className="w-full h-full bg-white rounded-[18px] card-shadow hairline-border overflow-hidden">
          <img
            src="/malaysia_city.jpg"
            alt="Kuala Lumpur skyline"
            loading="lazy"
            decoding="async"
            width={900}
            height={1200}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
