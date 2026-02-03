import { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Send, Mail, Phone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface ContactSectionProps {
  className?: string;
}

export default function ContactSection({ className = '' }: ContactSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const formCardRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=120%',
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
        formCardRef.current,
        { x: '60vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0.06
      );

      // Form fields stagger
      const formFields = formCardRef.current?.querySelectorAll('.form-field');
      if (formFields) {
        scrollTl.fromTo(
          formFields,
          { y: 14, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.02, ease: 'none' },
          0.16
        );
      }

      // SETTLE (30% - 70%) - hold, form is interactive

      // EXIT (70% - 100%) - gentle fade, keep visible until late
      scrollTl.fromTo(
        formCardRef.current,
        { scale: 1, opacity: 1 },
        { scale: 0.98, opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        headlineRef.current,
        { opacity: 1 },
        { opacity: 0, ease: 'power2.in' },
        0.75
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your inquiry. We will be in touch shortly.');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`section-pinned bg-[#0B1C2F] ${className}`}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1' fill='%23ffffff' fill-opacity='0.06'/%3E%3C/svg%3E")`,
        backgroundSize: '24px 24px',
      }}
    >
      {/* Left headline block */}
      <div
        ref={headlineRef}
        className="absolute left-[6vw] top-[14vh] lg:top-[18vh] w-[88vw] lg:w-[34vw] will-change-transform"
      >
        <h2 className="text-[26px] sm:text-[32px] lg:text-[44px] font-bold text-white leading-[1.1] mb-4">
          Ready to simplify cross-border compliance?
        </h2>
        <p className="text-sm lg:text-base text-white/60 leading-relaxed">
          Tell us what you're building. We'll map the structure, timeline, and
          next steps.
        </p>
      </div>

      {/* Right contact card */}
      <div
        ref={formCardRef}
        className="absolute left-[6vw] lg:left-[44vw] top-[38vh] lg:top-[16vh] w-[88vw] lg:w-[50vw] h-auto lg:h-[68vh] will-change-transform"
      >
        <div className="w-full h-full bg-white rounded-[18px] card-shadow p-6 lg:p-8">
          <form onSubmit={handleSubmit} className="h-full flex flex-col">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
              <div className="form-field">
                <label className="block text-xs font-medium text-[#6B7A8C] uppercase tracking-wider mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#F6F8FB] rounded-lg border border-[rgba(11,28,47,0.08)] text-sm text-[#0B1C2F] placeholder:text-[#6B7A8C]/60 focus:outline-none focus:border-[#1E63AF] focus:ring-1 focus:ring-[#1E63AF] transition-all"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-field">
                <label className="block text-xs font-medium text-[#6B7A8C] uppercase tracking-wider mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#F6F8FB] rounded-lg border border-[rgba(11,28,47,0.08)] text-sm text-[#0B1C2F] placeholder:text-[#6B7A8C]/60 focus:outline-none focus:border-[#1E63AF] focus:ring-1 focus:ring-[#1E63AF] transition-all"
                  placeholder="you@company.com"
                  required
                />
              </div>

              <div className="form-field">
                <label className="block text-xs font-medium text-[#6B7A8C] uppercase tracking-wider mb-1.5">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#F6F8FB] rounded-lg border border-[rgba(11,28,47,0.08)] text-sm text-[#0B1C2F] placeholder:text-[#6B7A8C]/60 focus:outline-none focus:border-[#1E63AF] focus:ring-1 focus:ring-[#1E63AF] transition-all"
                  placeholder="Company name"
                />
              </div>

              <div className="form-field">
                <label className="block text-xs font-medium text-[#6B7A8C] uppercase tracking-wider mb-1.5">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#F6F8FB] rounded-lg border border-[rgba(11,28,47,0.08)] text-sm text-[#0B1C2F] placeholder:text-[#6B7A8C]/60 focus:outline-none focus:border-[#1E63AF] focus:ring-1 focus:ring-[#1E63AF] transition-all"
                  placeholder="+44 (0)20 0000 0000"
                />
              </div>
            </div>

            <div className="form-field mb-4 flex-1">
              <label className="block text-xs font-medium text-[#6B7A8C] uppercase tracking-wider mb-1.5">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-[#F6F8FB] rounded-lg border border-[rgba(11,28,47,0.08)] text-sm text-[#0B1C2F] placeholder:text-[#6B7A8C]/60 focus:outline-none focus:border-[#1E63AF] focus:ring-1 focus:ring-[#1E63AF] transition-all resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <div className="form-field flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pt-4 border-t border-[rgba(11,28,47,0.08)]">
              <div className="flex items-center gap-4">
                <a
                  href="mailto:hello@maandco.co"
                  className="flex items-center gap-2 text-sm text-[#6B7A8C] hover:text-[#1E63AF] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  hello@maandco.co
                </a>
                <a
                  href="tel:+442000000000"
                  className="flex items-center gap-2 text-sm text-[#6B7A8C] hover:text-[#1E63AF] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +44 (0)20 0000 0000
                </a>
              </div>

              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-3 bg-[#1E63AF] text-white text-sm font-medium rounded-lg hover:bg-[#1854a0] transition-colors"
              >
                <Send className="w-4 h-4" />
                Request a call
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
