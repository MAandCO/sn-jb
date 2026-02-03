import { ExternalLink, Sparkles, Calculator, Headphones, BookOpen } from 'lucide-react';

interface ResourcesSectionProps {
  className?: string;
}

const resources = [
  {
    title: 'Bookkeeping Advisor (AI)',
    description: 'Get instant guidance on bookkeeping questions before speaking to an advisor.',
    href: 'https://bit.ly/3ZYYzLQ',
    icon: Sparkles,
  },
  {
    title: 'UK Tax-Saving Toolkit 2025/26',
    description: 'A practical guide to tax-saving ideas and key deadlines for the current year.',
    icon: BookOpen,
  },
  {
    title: 'UK Business Tax Savings Calculator',
    description: 'Estimate tax-saving opportunities for your business and compare scenarios.',
    href: 'https://bit.ly/4db9D0o',
    icon: Calculator,
  },
  {
    title: 'UK Payroll Calculator',
    description: 'Quickly check payroll figures and deductions for UK employees.',
    href: 'https://bit.ly/4lZP6xS',
    icon: Calculator,
  },
  {
    title: 'Accountant cost guide',
    description: 'Explore typical accounting costs and what to expect from a modern firm.',
    href: 'https://bit.ly/4bA0VIT',
    icon: BookOpen,
  },
  {
    title: 'MA & Co Podcast',
    description: 'Short, practical episodes on tax, compliance, and business finance.',
    href: 'https://bit.ly/3ZVnVgd',
    icon: Headphones,
  },
  {
    title: 'Financial Planning Toolkit',
    description: 'Guides and templates to organise budgets, forecasts, and cashflow plans.',
    href: 'https://bit.ly/4mrypvJ',
    icon: BookOpen,
  },
  {
    title: 'Estate Planning Services',
    description: 'Practical support for families planning estates and long-term wealth transfer.',
    href: 'https://bit.ly/3ZfiSft',
    icon: ExternalLink,
  },
];

export default function ResourcesSection({ className = '' }: ResourcesSectionProps) {
  return (
    <section id="resources" className={`relative bg-[#F6F8FB] ${className}`}>
      <div className="max-w-6xl mx-auto px-6 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div>
            <span className="inline-block px-3 py-1 bg-[#1E63AF]/10 rounded-full text-xs font-mono font-medium text-[#1E63AF] uppercase tracking-wider mb-4">
              Tools & Resources
            </span>
            <h2 className="text-[26px] sm:text-[32px] lg:text-[40px] font-bold text-[#0B1C2F] leading-[1.1] mb-3">
              Practical tools to support your finance team.
            </h2>
            <p className="text-sm lg:text-base text-[#6B7A8C] leading-relaxed max-w-2xl">
              Calculators, guides, and advisory resources from the MA & Co team to help you plan ahead and stay compliant.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {resources.map((resource) => {
            const content = (
              <>
                <div className="w-11 h-11 rounded-xl bg-[#1E63AF]/10 flex items-center justify-center mb-4">
                  <resource.icon className="w-5 h-5 text-[#1E63AF]" />
                </div>
                <h3 className="text-sm font-semibold text-[#0B1C2F] mb-2">{resource.title}</h3>
                <p className="text-sm text-[#6B7A8C] leading-relaxed mb-4">{resource.description}</p>
                {resource.href ? (
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-[#1E63AF]">
                    Open resource
                    <ExternalLink className="w-3 h-3" />
                  </span>
                ) : (
                  <span className="text-xs text-[#6B7A8C]">Link available on request</span>
                )}
              </>
            );

            if (!resource.href) {
              return (
                <div
                  key={resource.title}
                  className="group bg-white rounded-2xl border border-[rgba(11,28,47,0.08)] p-5 card-shadow-sm"
                >
                  {content}
                </div>
              );
            }

            return (
              <a
                key={resource.title}
                href={resource.href}
                target="_blank"
                rel="noreferrer"
                className="group bg-white rounded-2xl border border-[rgba(11,28,47,0.08)] p-5 card-shadow-sm hover:shadow-lg transition-shadow"
              >
                {content}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
