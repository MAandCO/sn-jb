import { useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Calendar, Globe, Shield } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface HeroSectionProps {
  className?: string;
}

export default function HeroSection({ className = '' }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const livePillRef = useRef<HTMLDivElement>(null);
  const curtainRef = useRef<HTMLDivElement>(null);

  // Auto-play entrance animation on load
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      // Curtain reveal
      tl.fromTo(
        curtainRef.current,
        { scaleX: 1 },
        { scaleX: 0, duration: 0.8, ease: 'power2.inOut', transformOrigin: 'right' }
      );

      // Hero card
      tl.fromTo(
        cardRef.current,
        { opacity: 0, y: 24, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6 },
        '-=0.3'
      );

      // Headline words
      if (headlineRef.current) {
        const words = headlineRef.current.querySelectorAll('.word');
        tl.fromTo(
          words,
          { y: 18, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, stagger: 0.03 },
          '-=0.3'
        );
      }

      // Subheadline
      tl.fromTo(
        subheadlineRef.current,
        { y: 12, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4 },
        '-=0.2'
      );

      // CTAs
      tl.fromTo(
        ctaRef.current,
        { y: 12, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4 },
        '-=0.2'
      );

      // Image
      tl.fromTo(
        imageRef.current,
        { x: 60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6 },
        '-=0.5'
      );

      // Stats tiles
      if (statsRef.current) {
        const tiles = statsRef.current.querySelectorAll('.stat-tile');
        tl.fromTo(
          tiles,
          { y: 18, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, stagger: 0.08 },
          '-=0.3'
        );
      }

      // Live pill
      tl.fromTo(
        livePillRef.current,
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4 },
        '-=0.4'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Scroll-driven exit animation
  useLayoutEffect(() => {
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
          onLeaveBack: () => {
            // Reset all elements to visible when scrolling back to top
            gsap.set(cardRef.current, { x: 0, opacity: 1 });
            gsap.set(livePillRef.current, { y: 0, opacity: 1 });
          },
        },
      });

      // EXIT phase (70% - 100%)
      scrollTl.fromTo(
        cardRef.current,
        { x: 0, opacity: 1 },
        { x: '-18vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        livePillRef.current,
        { y: 0, opacity: 1 },
        { y: '-10vh', opacity: 0, ease: 'power2.in' },
        0.7
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className={`section-pinned dot-grid ${className}`}
    >
      {/* Navy curtain for entrance */}
      <div
        ref={curtainRef}
        className="absolute inset-0 bg-[#0B1C2F] z-50"
        style={{ transformOrigin: 'right' }}
      />

      {/* Live pill */}
      <div
        ref={livePillRef}
        className="absolute right-[6vw] top-[18vh] z-20"
      >
        <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full card-shadow-sm hairline-border">
          <span className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse" />
          <span className="text-xs font-mono font-medium text-[#0B1C2F] uppercase tracking-wider">
            Live: Global client dashboard
          </span>
        </div>
      </div>

      {/* Hero Card */}
      <div
        ref={cardRef}
        className="absolute left-[6vw] top-[16vh] w-[88vw] lg:w-[62vw] h-auto lg:h-[62vh] bg-white rounded-[18px] card-shadow hairline-border overflow-hidden will-change-transform"
      >
        <div className="flex flex-col lg:flex-row h-full">
          {/* Left content */}
          <div className="flex-1 p-6 lg:p-[4.5vw] flex flex-col justify-between">
            <div>
              <h1
                ref={headlineRef}
                className="text-[28px] sm:text-[36px] lg:text-[48px] font-bold text-[#0B1C2F] leading-[1.05] mb-4 lg:mb-6"
              >
                <span className="word inline-block">Cross-border</span>{' '}
                <span className="word inline-block">clarity.</span>
                <br />
                <span className="word inline-block text-[#1E63AF]">Compliance,</span>{' '}
                <span className="word inline-block text-[#1E63AF]">built</span>{' '}
                <span className="word inline-block text-[#1E63AF]">in.</span>
              </h1>

              <p
                ref={subheadlineRef}
                className="text-sm lg:text-base text-[#6B7A8C] max-w-[28vw] leading-relaxed mb-6 lg:mb-8"
              >
                MA & Co is a UK-founded, digital-first accountancy and advisory
                firm—now supporting clients in Malaysia and Singapore.
              </p>

              <div ref={ctaRef} className="flex flex-wrap gap-3">
                <button className="flex items-center gap-2 px-5 py-2.5 bg-[#1E63AF] text-white text-sm font-medium rounded-lg hover:bg-[#1854a0] transition-colors">
                  <Calendar className="w-4 h-4" />
                  Book a discovery call
                </button>
                <button
                  onClick={scrollToServices}
                  className="flex items-center gap-2 px-5 py-2.5 border border-[rgba(11,28,47,0.15)] text-[#0B1C2F] text-sm font-medium rounded-lg hover:bg-[#0B1C2F] hover:text-white transition-all"
                >
                  Explore services
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Stats row */}
            <div
              ref={statsRef}
              className="grid grid-cols-3 gap-3 lg:gap-4 mt-6 lg:mt-0"
            >
              <div className="stat-tile p-3 lg:p-4 bg-[#F6F8FB] rounded-xl hairline-border">
                <div className="flex items-center gap-2 mb-1">
                  <Globe className="w-4 h-4 text-[#1E63AF]" />
                  <span className="font-mono text-xl lg:text-2xl font-bold text-[#0B1C2F]">
                    1,400+
                  </span>
                </div>
                <span className="text-xs text-[#6B7A8C]">Clients served</span>
              </div>

              <div className="stat-tile p-3 lg:p-4 bg-[#F6F8FB] rounded-xl hairline-border">
                <div className="flex items-center gap-2 mb-1">
                  <Shield className="w-4 h-4 text-[#10B981]" />
                  <span className="font-mono text-xl lg:text-2xl font-bold text-[#0B1C2F]">
                    3
                  </span>
                </div>
                <span className="text-xs text-[#6B7A8C]">Jurisdictions</span>
              </div>

              <div className="stat-tile p-3 lg:p-4 bg-[#F6F8FB] rounded-xl hairline-border">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-4 h-4 rounded-full bg-[#10B981] flex items-center justify-center">
                    <span className="w-1.5 h-1.5 bg-white rounded-full" />
                  </span>
                  <span className="font-mono text-xl lg:text-2xl font-bold text-[#0B1C2F]">
                    99.2%
                  </span>
                </div>
                <span className="text-xs text-[#6B7A8C]">On-time filing</span>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div
            ref={imageRef}
            className="hidden lg:block w-[22vw] h-full relative m-[3vw]"
          >
            <img
              src="/hero_professional.jpg"
              alt="Professional using technology"
              className="w-full h-[42vh] object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
