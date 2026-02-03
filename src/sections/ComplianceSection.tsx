import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link2, Search, CheckCircle, Shield } from 'lucide-react';
import { useReducedMotion } from '../hooks/use-reduced-motion';

gsap.registerPlugin(ScrollTrigger);

interface ComplianceSectionProps {
  className?: string;
}

export default function ComplianceSection({ className = '' }: ComplianceSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const workflowRef = useRef<HTMLDivElement>(null);
  const standardsRef = useRef<HTMLDivElement>(null);
  const promiseRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGPathElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (prefersReducedMotion) return;
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            end: 'top 55%',
            scrub: 0.4,
          },
        }
      );

      // Workflow cards
      if (workflowRef.current) {
        const cards = workflowRef.current.querySelectorAll('.workflow-card');
        gsap.fromTo(
          cards,
          { y: 28, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.12,
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: workflowRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Connecting line draw
      if (lineRef.current) {
        const length = lineRef.current.getTotalLength();
        gsap.set(lineRef.current, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });
        gsap.to(lineRef.current, {
          strokeDashoffset: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: workflowRef.current,
            start: 'top 70%',
            end: 'top 40%',
            scrub: 0.4,
          },
        });
      }

      // Standards
      if (standardsRef.current) {
        const cards = standardsRef.current.querySelectorAll('.standard-card');
        gsap.fromTo(
          cards,
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: standardsRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Promises
      if (promiseRef.current) {
        gsap.fromTo(
          promiseRef.current,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: promiseRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  const workflowSteps = [
    {
      icon: Link2,
      number: '1',
      title: 'Connect',
      description: 'Link your tools in minutes.',
    },
    {
      icon: Search,
      number: '2',
      title: 'Review',
      description: 'We reconcile and flag items monthly.',
    },
    {
      icon: CheckCircle,
      number: '3',
      title: 'File',
      description: 'On-time filings with full records.',
    },
  ];

  const standards = [
    {
      title: 'Unlimited support',
      description: 'Telephone and email support for day-to-day questions.',
    },
    {
      title: 'Fixed-price packages',
      description: 'Clear monthly fees with no hidden costs.',
    },
    {
      title: 'Remote + mobile delivery',
      description: 'Work with us remotely or on-site across the UK.',
    },
    {
      title: 'Real-time insights',
      description: 'Management accounts and reporting that stay up to date.',
    },
    {
      title: 'HMRC compliance',
      description: 'Deadlines, filings, and record-keeping handled end-to-end.',
    },
    {
      title: 'Licensed & qualified team',
      description: 'Experienced accountants with professional training.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="compliance"
      className={`relative bg-[#F6F8FB] dot-grid py-16 lg:py-24 ${className}`}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-12 lg:mb-16">
          <h2 className="text-[26px] sm:text-[32px] lg:text-[40px] font-bold text-[#0B1C2F] leading-[1.1] mb-4">
            Why businesses choose MA & Co
          </h2>
          <p className="text-sm lg:text-base text-[#6B7A8C] max-w-xl mx-auto">
            Clear timelines, proactive guidance, and accounting you can trust—delivered
            by a licensed, qualified team.
          </p>
        </div>

        {/* Workflow */}
        <div ref={workflowRef} className="relative mb-12 lg:mb-16">
          {/* Connecting line (desktop only) */}
          <svg
            className="hidden lg:block absolute top-12 left-[16%] right-[16%] h-2 pointer-events-none"
            preserveAspectRatio="none"
          >
            <path
              ref={lineRef}
              d="M0 4 L100% 4"
              stroke="#1E63AF"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
          </svg>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {workflowSteps.map((step, index) => (
              <div
                key={index}
                className="workflow-card bg-white rounded-[18px] card-shadow-sm hairline-border p-6 text-center"
              >
                <div className="w-12 h-12 bg-[#1E63AF]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-6 h-6 text-[#1E63AF]" />
                </div>
                <span className="text-xs font-mono font-medium text-[#1E63AF] uppercase tracking-wider mb-2 block">
                  {step.number}. {step.title}
                </span>
                <p className="text-sm text-[#6B7A8C]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Standards */}
        <div
          ref={standardsRef}
          className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 mb-12 lg:mb-16"
        >
          {standards.slice(0, 3).map((standard, index) => (
            <div
              key={index}
              className="standard-card bg-white rounded-[18px] card-shadow-sm hairline-border p-6"
            >
              <Shield className="w-6 h-6 text-[#1E63AF] mb-3" />
              <h3 className="text-sm font-semibold text-[#0B1C2F] mb-2">
                {standard.title}
              </h3>
              <p className="text-sm text-[#6B7A8C] leading-relaxed">
                {standard.description}
              </p>
            </div>
          ))}
        </div>

        {/* Delivery promises */}
        <div
          ref={promiseRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {standards.slice(3).map((standard, index) => (
            <div
              key={index}
              className="bg-white rounded-xl card-shadow-sm hairline-border p-5"
            >
              <h4 className="text-sm font-semibold text-[#0B1C2F] mb-2">
                {standard.title}
              </h4>
              <p className="text-sm text-[#6B7A8C] leading-relaxed">
                {standard.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
