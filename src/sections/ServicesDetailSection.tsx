import { CheckCircle, Calculator, Receipt, FileText, Building2, Shield } from 'lucide-react';

interface ServicesDetailSectionProps {
  className?: string;
}

const servicePillars = [
  {
    icon: Calculator,
    title: 'Tax planning & compliance',
    description:
      'Corporation tax, VAT, self-assessment, capital gains, and inheritance tax planning with year-round guidance.',
    items: ['Corporation tax returns', 'VAT returns & MTD', 'Self-assessment', 'Capital gains planning'],
  },
  {
    icon: Building2,
    title: 'Business advisory',
    description:
      'Management accounts, budgeting, and forecasting built for founders and growing teams.',
    items: ['Monthly management accounts', 'Budgeting & forecasting', 'Cashflow visibility', 'Growth planning'],
  },
  {
    icon: Receipt,
    title: 'Bookkeeping, VAT & payroll',
    description:
      'Accurate records, compliant submissions, and payroll processing in one consistent workflow.',
    items: ['Bookkeeping services', 'Payroll management', 'VAT compliance', 'CIS support'],
  },
  {
    icon: FileText,
    title: 'Accounts & statutory filings',
    description:
      'End-to-end statutory accounts preparation and filings for companies and individuals.',
    items: ['Statutory accounts', 'Confirmation statements', 'Company secretarial', 'Accounts for partnerships'],
  },
  {
    icon: Shield,
    title: 'Assurance & specialist services',
    description:
      'Independent examinations, limited assurance engagements, forensic accounting, and internal audit support.',
    items: ['Independent examinations', 'Limited assurance', 'Forensic accounting', 'Internal audit'],
  },
];

const coreServices = [
  'Professional bookkeeping services',
  'Complete payroll management',
  'VAT compliance & planning',
  'Statutory accounts preparation',
  'Monthly management accounts',
  'Strategic budgeting & forecasting',
  'Personal tax & self-assessment',
  'Business tax planning',
  'Corporation tax services',
  'Capital gains tax planning',
  'Property & landlord accounting',
  'Company secretarial services',
  'Accounts for sole traders & partnerships',
  'Computerised accountancy systems',
  'Inheritance tax (IHT) planning',
  'Independent examination services',
  'Limited assurance engagements',
  'Forensic accounting services',
  'Internal audit services',
];

const specialistSupport = [
  'CIS refunds and subcontractor support',
  'Mortgage certificate accountants',
  'SPV & HMO landlord accounting',
  'Startup and scale-up finance',
  'Contractor and freelancer accounting',
  'Charity & nonprofit reporting',
];

const whoWeHelp = [
  'Sole traders',
  'Limited companies',
  'Partnerships & LLPs',
  'Contractors & freelancers',
  'Startups & tech companies',
  'Property investors & landlords',
  'SMEs and family businesses',
  'Individuals & high earners',
];

export default function ServicesDetailSection({ className = '' }: ServicesDetailSectionProps) {
  return (
    <section
      id="services"
      className={`relative bg-white ${className}`}
    >
      <div className="max-w-6xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.2fr] gap-10 lg:gap-16">
          <div>
            <span className="inline-block px-3 py-1 bg-[#1E63AF]/10 rounded-full text-xs font-mono font-medium text-[#1E63AF] uppercase tracking-wider mb-4">
              Full Service Coverage
            </span>
            <h2 className="text-[26px] sm:text-[32px] lg:text-[40px] font-bold text-[#0B1C2F] leading-[1.1] mb-4">
              Everything you need from a modern accounting partner.
            </h2>
            <p className="text-sm lg:text-base text-[#6B7A8C] leading-relaxed mb-6">
              We provide accounting, tax returns, VAT returns, bookkeeping, self-assessments, and payroll for sole traders,
              limited companies, partnerships, LLPs, and individuals. Our all-inclusive plans keep your compliance, reporting,
              and advisory work in one place.
            </p>

            <div className="rounded-2xl bg-[#F6F8FB] border border-[rgba(11,28,47,0.08)] p-5">
              <h3 className="text-sm font-semibold text-[#0B1C2F] mb-3">What you can expect</h3>
              <ul className="space-y-2 text-sm text-[#6B7A8C]">
                {[
                  'Unlimited telephone and email support.',
                  'Fixed-price monthly packages with no hidden costs.',
                  'Remote and mobile delivery across the UK.',
                  'Fast response times and proactive reminders.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#10B981] mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {servicePillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-2xl border border-[rgba(11,28,47,0.08)] bg-white p-5 card-shadow-sm"
              >
                <div className="w-11 h-11 rounded-xl bg-[#1E63AF]/10 flex items-center justify-center mb-4">
                  <pillar.icon className="w-5 h-5 text-[#1E63AF]" />
                </div>
                <h3 className="text-sm font-semibold text-[#0B1C2F] mb-2">{pillar.title}</h3>
                <p className="text-sm text-[#6B7A8C] leading-relaxed mb-3">{pillar.description}</p>
                <ul className="space-y-1 text-xs text-[#6B7A8C]">
                  {pillar.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1E63AF]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr,0.9fr] gap-8 lg:gap-12 mt-12">
          <div className="rounded-2xl bg-white border border-[rgba(11,28,47,0.08)] p-6 card-shadow-sm">
            <h3 className="text-lg font-semibold text-[#0B1C2F] mb-4">Core services</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {coreServices.map((service) => (
                <div key={service} className="flex items-start gap-2 text-sm text-[#6B7A8C]">
                  <CheckCircle className="w-4 h-4 text-[#10B981] mt-0.5" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-[#0B1C2F] text-white p-6 card-shadow">
            <h3 className="text-lg font-semibold mb-4">Specialist support</h3>
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              We also provide specialist services for niche requirements and complex client needs.
            </p>
            <div className="space-y-2 text-sm text-white/80">
              {specialistSupport.map((service) => (
                <div key={service} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] mt-2" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-2xl bg-[#F6F8FB] border border-[rgba(11,28,47,0.08)] p-6">
          <h3 className="text-lg font-semibold text-[#0B1C2F] mb-3">Who we help</h3>
          <p className="text-sm text-[#6B7A8C] leading-relaxed mb-4">
            From first-time founders to established SMEs, we tailor our support to your structure and growth stage.
          </p>
          <div className="flex flex-wrap gap-2">
            {whoWeHelp.map((audience) => (
              <span
                key={audience}
                className="px-3 py-1 rounded-full bg-white text-xs font-medium text-[#0B1C2F] border border-[rgba(11,28,47,0.1)]"
              >
                {audience}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
