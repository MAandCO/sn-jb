import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FileText, Calculator, Receipt, Lightbulb } from 'lucide-react';
import { useReducedMotion } from '../hooks/use-reduced-motion';

gsap.registerPlugin(ScrollTrigger);

interface UKSectionProps {
  className?: string;
}

export default function UKSection({ className = '' }: UKSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
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
        imageRef.current,
        { x: '-60vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0
      );

      scrollTl.fromTo(
        contentRef.current,
        { x: '60vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0.06
      );

      if (titleRef.current) {
        const words = titleRef.current.querySelectorAll('.word');
        scrollTl.fromTo(
          words,
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.02, ease: 'none' },
          0.12
        );
      }

      if (tilesRef.current) {
        const tiles = tilesRef.current.querySelectorAll('.feature-tile');
        scrollTl.fromTo(
          tiles,
          { y: 24, scale: 0.98, opacity: 0 },
          { y: 0, scale: 1, opacity: 1, stagger: 0.015, ease: 'none' },
          0.16
        );
      }

      // SETTLE (30% - 70%) - hold

      // EXIT (70% - 100%)
      scrollTl.fromTo(
        contentRef.current,
        { y: 0, opacity: 1 },
        { y: '-18vh', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        imageRef.current,
        { y: 0, opacity: 1 },
        { y: '18vh', opacity: 0, ease: 'power2.in' },
        0.7
      );
    }, section);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  const features = [
    { icon: FileText, label: 'Year-end accounts' },
    { icon: Calculator, label: 'Corporation tax' },
    { icon: Receipt, label: 'VAT & payroll' },
    { icon: Lightbulb, label: 'R&D claims' },
  ];

  return (
    <section
      ref={sectionRef}
      id="uk"
      className={`section-pinned dot-grid ${className}`}
    >
      {/* Left image card */}
      <div
        ref={imageRef}
        className="absolute left-[6vw] top-[16vh] w-[88vw] lg:w-[30vw] h-[30vh] lg:h-[68vh] will-change-transform"
      >
        <div className="w-full h-full bg-white rounded-[18px] card-shadow hairline-border overflow-hidden">
            <img
              src="/uk_meeting.jpg"
              alt="UK business meeting"
              loading="lazy"
              decoding="async"
              width={900}
              height={1200}
              className="w-full h-full object-cover"
            />
        </div>
      </div>

      {/* Right content card */}
      <div
        ref={contentRef}
        className="absolute left-[6vw] lg:left-[38vw] top-[48vh] lg:top-[16vh] w-[88vw] lg:w-[56vw] h-auto lg:h-[68vh] will-change-transform"
      >
        <div className="w-full h-full bg-white rounded-[18px] card-shadow hairline-border p-6 lg:p-8 relative overflow-hidden">
          {/* Decorative chart lines */}
          <svg
            className="absolute top-4 right-4 w-32 h-24 opacity-20"
            viewBox="0 0 128 96"
          >
            <path
              d="M0 80 Q32 60, 64 40 T128 20"
              fill="none"
              stroke="#1E63AF"
              strokeWidth="2"
            />
            <path
              d="M0 90 Q32 70, 64 55 T128 35"
              fill="none"
              stroke="#10B981"
              strokeWidth="2"
            />
          </svg>

          <div className="relative z-10">
            <span className="inline-block px-3 py-1 bg-[#1E63AF]/10 rounded-full text-xs font-mono font-medium text-[#1E63AF] uppercase tracking-wider mb-4">
              United Kingdom
            </span>

            <h2
              ref={titleRef}
              className="text-[24px] sm:text-[28px] lg:text-[36px] font-bold text-[#0B1C2F] leading-[1.1] mb-4"
            >
              <span className="word inline-block">UK</span>{' '}
              <span className="word inline-block">Accounting</span>{' '}
              <span className="word inline-block">&</span>{' '}
              <span className="word inline-block">Tax</span>
            </h2>

            <p className="text-sm lg:text-base text-[#6B7A8C] leading-relaxed max-w-full lg:max-w-[34vw] mb-6 lg:mb-8">
              Statutory accounts, corporation tax, VAT, payroll, and
              self-assessment—delivered with clear timelines and proactive
              reminders.
            </p>

            {/* Feature tiles */}
            <div
              ref={tilesRef}
              className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="feature-tile p-4 bg-[#F6F8FB] rounded-xl hairline-border hover:bg-[#1E63AF]/5 transition-colors"
                >
                  <feature.icon className="w-5 h-5 text-[#1E63AF] mb-2" />
                  <span className="text-sm font-medium text-[#0B1C2F]">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
