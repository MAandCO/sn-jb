import { useRef, useLayoutEffect, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link2, Search, CheckCircle, Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface ComplianceSectionProps {
  className?: string;
}

interface CounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
}

function Counter({ end, suffix = '', prefix = '' }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const trigger = ScrollTrigger.create({
      trigger: element,
      start: 'top 80%',
      onEnter: () => {
        gsap.to(
          { value: 0 },
          {
            value: end,
            duration: 0.8,
            ease: 'power2.out',
            onUpdate: function () {
              setCount(Math.round(this.targets()[0].value));
            },
          }
        );
      },
      once: true,
    });

    return () => trigger.kill();
  }, [end]);

  return (
    <span ref={ref} className="font-mono">
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default function ComplianceSection({ className = '' }: ComplianceSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const workflowRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGPathElement>(null);

  useLayoutEffect(() => {
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

      // Testimonials
      if (testimonialsRef.current) {
        const cards = testimonialsRef.current.querySelectorAll('.testimonial-card');
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
              trigger: testimonialsRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Metrics
      if (metricsRef.current) {
        gsap.fromTo(
          metricsRef.current,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: metricsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

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

  const testimonials = [
    {
      quote:
        'They turned our year-end chaos into a calm, repeatable process.',
      author: 'Finance Director',
      company: 'SaaS',
    },
    {
      quote:
        'Malaysia setup was faster than we expected—without the usual back-and-forth.',
      author: 'Founder',
      company: 'Fintech',
    },
    {
      quote: 'A true extension of our team across UK and Singapore.',
      author: 'COO',
      company: 'Fund',
    },
  ];

  const metrics = [
    { value: 48, suffix: 'h', label: 'Average response' },
    { value: 100, suffix: '%', label: 'Documentation standard' },
    { value: 3, suffix: '', label: 'Jurisdictions' },
    { value: 24, suffix: '/7', label: 'Dashboard access' },
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
            Built for compliance. Designed for speed.
          </h2>
          <p className="text-sm lg:text-base text-[#6B7A8C] max-w-xl mx-auto">
            Automated reminders, clear handoffs, and documentation that stays
            audit-ready.
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

        {/* Testimonials */}
        <div
          ref={testimonialsRef}
          className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 mb-12 lg:mb-16"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card bg-white rounded-[18px] card-shadow-sm hairline-border p-6"
            >
              <Quote className="w-6 h-6 text-[#1E63AF]/30 mb-3" />
              <p className="text-sm text-[#0B1C2F] leading-relaxed mb-4">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-[#0B1C2F]">
                  {testimonial.author}
                </span>
                <span className="text-xs text-[#6B7A8C]">
                  {testimonial.company}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Metrics */}
        <div
          ref={metricsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white rounded-xl card-shadow-sm hairline-border p-4 text-center"
            >
              <div className="text-2xl lg:text-3xl font-bold text-[#1E63AF] mb-1">
                <Counter end={metric.value} suffix={metric.suffix} />
              </div>
              <span className="text-xs text-[#6B7A8C]">{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
