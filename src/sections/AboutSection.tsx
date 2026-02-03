import { Briefcase, Users, Globe, Linkedin } from 'lucide-react';

interface AboutSectionProps {
  className?: string;
}

const values = [
  {
    title: 'Licensed and qualified',
    description: 'A team of experienced accountants delivering reliable, compliant reporting.',
    icon: Briefcase,
  },
  {
    title: 'Remote + mobile',
    description: 'Flexible delivery designed around your working style and location.',
    icon: Globe,
  },
  {
    title: 'Trusted by UK businesses',
    description: 'Supporting businesses and individuals across the UK with consistent service.',
    icon: Users,
  },
];

export default function AboutSection({ className = '' }: AboutSectionProps) {
  return (
    <section id="about" className={`relative bg-white ${className}`}>
      <div className="max-w-6xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.1fr] gap-10 lg:gap-16 items-start">
          <div>
            <span className="inline-block px-3 py-1 bg-[#1E63AF]/10 rounded-full text-xs font-mono font-medium text-[#1E63AF] uppercase tracking-wider mb-4">
              About MA & Co
            </span>
            <h2 className="text-[26px] sm:text-[32px] lg:text-[40px] font-bold text-[#0B1C2F] leading-[1.1] mb-4">
              A modern firm with deep UK accounting expertise.
            </h2>
            <p className="text-sm lg:text-base text-[#6B7A8C] leading-relaxed mb-6">
              MA & Co Accountants provides accurate, timely accounting and tax services to businesses and individuals across
              the UK. Our remote and mobile solutions make it easy to collaborate, stay compliant, and act on real-time
              financial insight.
            </p>

            <div className="rounded-2xl bg-[#F6F8FB] border border-[rgba(11,28,47,0.08)] p-5">
              <h3 className="text-sm font-semibold text-[#0B1C2F] mb-3">Leadership</h3>
              <p className="text-sm text-[#6B7A8C] leading-relaxed mb-4">
                The firm is led by Mr Majed Ali, supported by a team of highly skilled professional accountants.
              </p>
              <a
                href="https://www.linkedin.com/in/majed-ali-a5973562/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#1E63AF]"
              >
                <Linkedin className="w-4 h-4" />
                Connect on LinkedIn
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-[rgba(11,28,47,0.08)] bg-white p-5 card-shadow-sm"
              >
                <div className="w-11 h-11 rounded-xl bg-[#1E63AF]/10 flex items-center justify-center mb-4">
                  <value.icon className="w-5 h-5 text-[#1E63AF]" />
                </div>
                <h3 className="text-sm font-semibold text-[#0B1C2F] mb-2">{value.title}</h3>
                <p className="text-sm text-[#6B7A8C] leading-relaxed">{value.description}</p>
              </div>
            ))}

            <div className="rounded-2xl bg-[#0B1C2F] text-white p-5 sm:col-span-2">
              <h3 className="text-sm font-semibold mb-2">All-inclusive support</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                We offer fixed monthly packages with unlimited telephone and email support, keeping your compliance and
                reporting predictable and stress-free.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
