import { ArrowUpRight } from 'lucide-react';

interface BlogHighlightsSectionProps {
  className?: string;
}

const highlights = [
  {
    title: 'How to reduce tax liability for your small business',
    description: 'Practical steps to lower your tax bill while staying compliant with HMRC requirements.',
  },
  {
    title: 'Common bookkeeping mistakes to avoid',
    description: 'The most frequent record-keeping errors and how to fix them before year-end.',
  },
  {
    title: 'VAT registration and deregistration: everything you need to know',
    description: 'Thresholds, timing, and compliance tips for managing VAT obligations.',
  },
  {
    title: 'Making Tax Digital (MTD): everything you need to know',
    description: 'Key changes, timelines, and what businesses must prepare for next.',
  },
  {
    title: 'Steps to forming a limited company in the UK',
    description: 'A quick guide to incorporation, statutory duties, and compliance milestones.',
  },
  {
    title: 'The benefits of using cloud accounting software',
    description: 'Why cloud systems unlock better reporting, speed, and collaboration.',
  },
];

export default function BlogHighlightsSection({ className = '' }: BlogHighlightsSectionProps) {
  return (
    <section id="insights" className={`relative bg-white ${className}`}>
      <div className="max-w-6xl mx-auto px-6 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div>
            <span className="inline-block px-3 py-1 bg-[#10B981]/10 rounded-full text-xs font-mono font-medium text-[#10B981] uppercase tracking-wider mb-4">
              Insights
            </span>
            <h2 className="text-[26px] sm:text-[32px] lg:text-[40px] font-bold text-[#0B1C2F] leading-[1.1] mb-3">
              Latest guidance from the MA & Co team.
            </h2>
            <p className="text-sm lg:text-base text-[#6B7A8C] leading-relaxed max-w-2xl">
              Clear, jargon-free updates on tax, compliance, and business finance.
            </p>
          </div>
          <a
            href="https://www.maandcoaccountants.com/blog"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#1E63AF]"
          >
            Visit the blog
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {highlights.map((item) => (
            <a
              key={item.title}
              href="https://www.maandcoaccountants.com/blog"
              target="_blank"
              rel="noreferrer"
              className="bg-[#F6F8FB] rounded-2xl border border-[rgba(11,28,47,0.08)] p-5 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-sm font-semibold text-[#0B1C2F] mb-2">{item.title}</h3>
              <p className="text-sm text-[#6B7A8C] leading-relaxed">{item.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
