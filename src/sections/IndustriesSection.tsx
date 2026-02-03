interface IndustriesSectionProps {
  className?: string;
}

const industries = [
  'Healthcare',
  'Healthcare clinics & dentists',
  'Construction & CIS',
  'Retail & e-commerce',
  'Professional services',
  'Property investors',
  'Startups & tech',
  'Hospitality',
  'Beauty & wellness',
  'Logistics & courier',
  'Trades & contractors',
  'Manufacturing',
  'Engineering',
  'Charities & nonprofits',
  'Education & tutors',
  'Creative & media',
  'Marketing agencies',
  'Estate & letting agents',
  'Automotive & garages',
  'Childcare & nurseries',
  'Cleaning services',
  'Events & planners',
  'IT & managed services',
  'Freelancers & contractors',
  'Gyms & fitness studios',
  'Agriculture & food',
  'Pharmacies',
  'Restaurants & cafes',
  'Pubs & breweries',
  'Fashion & apparel',
  'Exporters & importers',
  'Logistics & warehousing',
  'Recruitment agencies',
];

export default function IndustriesSection({ className = '' }: IndustriesSectionProps) {
  return (
    <section id="industries" className={`relative bg-[#F6F8FB] ${className}`}>
      <div className="max-w-6xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.2fr] gap-8 lg:gap-12 items-start">
          <div>
            <span className="inline-block px-3 py-1 bg-[#10B981]/10 rounded-full text-xs font-mono font-medium text-[#10B981] uppercase tracking-wider mb-4">
              Industry Expertise
            </span>
            <h2 className="text-[26px] sm:text-[32px] lg:text-[40px] font-bold text-[#0B1C2F] leading-[1.1] mb-4">
              Sector-specific support across the UK.
            </h2>
            <p className="text-sm lg:text-base text-[#6B7A8C] leading-relaxed">
              We work with companies across a wide range of industries, tailoring reporting, compliance,
              and advisory services to the realities of your sector.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {industries.map((industry) => (
              <div
                key={industry}
                className="bg-white border border-[rgba(11,28,47,0.08)] rounded-xl px-3 py-2 text-xs font-medium text-[#0B1C2F]"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
