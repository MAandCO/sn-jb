import { CheckCircle, Shield, ClipboardCheck, TrendingUp } from 'lucide-react';

interface InternalAuditSectionProps {
  className?: string;
}

const auditCapabilities = [
  'Risk-based audit planning and scoping',
  'Governance, risk, and compliance reviews',
  'Process and operational audits',
  'Controls testing and remediation support',
  'Independent reporting and board-ready outputs',
  'Follow-up reviews to track remediation',
];

const auditBenefits = [
  {
    icon: Shield,
    title: 'Aligned to 2025 IIA Standards',
    description:
      'Internal audit work aligned to the latest professional standards for consistent quality and assurance.',
  },
  {
    icon: ClipboardCheck,
    title: 'Independent & objective',
    description:
      'Clear, unbiased reporting to help management strengthen controls and governance.',
  },
  {
    icon: TrendingUp,
    title: 'Actionable insight',
    description:
      'Prioritized recommendations that improve performance, efficiency, and compliance.',
  },
];

const auditSectors = [
  'Healthcare',
  'Financial services',
  'Education',
  'Housing & property',
  'Charities & nonprofits',
  'Retail & hospitality',
  'Technology & SaaS',
];

export default function InternalAuditSection({ className = '' }: InternalAuditSectionProps) {
  return (
    <section id="internal-audit" className={`relative bg-white ${className}`}>
      <div className="max-w-6xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr,0.95fr] gap-10 lg:gap-16 items-start">
          <div>
            <span className="inline-block px-3 py-1 bg-[#1E63AF]/10 rounded-full text-xs font-mono font-medium text-[#1E63AF] uppercase tracking-wider mb-4">
              Internal Audit
            </span>
            <h2 className="text-[26px] sm:text-[32px] lg:text-[40px] font-bold text-[#0B1C2F] leading-[1.1] mb-4">
              Independent assurance that strengthens risk and governance.
            </h2>
            <p className="text-sm lg:text-base text-[#6B7A8C] leading-relaxed mb-6">
              Our internal audit service provides independent, objective assurance and consulting designed to improve
              the effectiveness of risk management, control, and governance.
            </p>

            <div className="rounded-2xl bg-[#F6F8FB] border border-[rgba(11,28,47,0.08)] p-5">
              <h3 className="text-sm font-semibold text-[#0B1C2F] mb-3">Core audit capabilities</h3>
              <ul className="space-y-2 text-sm text-[#6B7A8C]">
                {auditCapabilities.map((capability) => (
                  <li key={capability} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#10B981] mt-0.5" />
                    <span>{capability}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            {auditBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-[rgba(11,28,47,0.08)] bg-white p-5 card-shadow-sm"
              >
                <div className="w-11 h-11 rounded-xl bg-[#1E63AF]/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-5 h-5 text-[#1E63AF]" />
                </div>
                <h3 className="text-sm font-semibold text-[#0B1C2F] mb-2">{benefit.title}</h3>
                <p className="text-sm text-[#6B7A8C] leading-relaxed">{benefit.description}</p>
              </div>
            ))}

            <div className="rounded-2xl bg-[#0B1C2F] text-white p-5">
              <h3 className="text-sm font-semibold mb-2">Sectors supported</h3>
              <p className="text-xs text-white/70 mb-3">
                We deliver internal audit support across multiple regulated and high-growth sectors.
              </p>
              <div className="flex flex-wrap gap-2">
                {auditSectors.map((sector) => (
                  <span
                    key={sector}
                    className="px-3 py-1 rounded-full bg-white/10 text-xs text-white"
                  >
                    {sector}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
