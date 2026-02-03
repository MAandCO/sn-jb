import { MapPin, Phone, Mail } from 'lucide-react';

interface LocationsSectionProps {
  className?: string;
}

const locations = [
  'London',
  'Croydon',
  'Birmingham',
  'Manchester',
  'Liverpool',
  'Leeds',
  'Sheffield',
  'Bristol',
  'Nottingham',
  'Leicester',
  'Cardiff',
  'Glasgow',
  'Edinburgh',
  'Coventry',
  'Reading',
  'Milton Keynes',
  'Cambridge',
  'Oxford',
  'Luton',
  'Slough',
  'Watford',
  'Guildford',
  'Southampton',
  'Portsmouth',
  'Brighton',
  'Norwich',
  'Plymouth',
  'Exeter',
  'Newcastle',
  'Durham',
  'Hull',
  'Bradford',
  'Stoke-on-Trent',
  'Derby',
  'Wolverhampton',
  'Sunderland',
  'Bolton',
  'Stockport',
];

export default function LocationsSection({ className = '' }: LocationsSectionProps) {
  return (
    <section id="locations" className={`relative bg-[#F6F8FB] ${className}`}>
      <div className="max-w-6xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.2fr] gap-10 lg:gap-16 items-start">
          <div>
            <span className="inline-block px-3 py-1 bg-[#1E63AF]/10 rounded-full text-xs font-mono font-medium text-[#1E63AF] uppercase tracking-wider mb-4">
              UK Coverage
            </span>
            <h2 className="text-[26px] sm:text-[32px] lg:text-[40px] font-bold text-[#0B1C2F] leading-[1.1] mb-4">
              Remote and mobile support across the UK.
            </h2>
            <p className="text-sm lg:text-base text-[#6B7A8C] leading-relaxed mb-6">
              We serve businesses nationwide with remote and on-site support, so you can get expert accounting wherever you
              operate.
            </p>

            <div className="rounded-2xl bg-white border border-[rgba(11,28,47,0.08)] p-5 card-shadow-sm space-y-3">
              <div className="flex items-start gap-2 text-sm text-[#6B7A8C]">
                <MapPin className="w-4 h-4 text-[#1E63AF] mt-0.5" />
                <span>8 Delamare Crescent, Croydon, CR0 4RU</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-[#6B7A8C]">
                <Phone className="w-4 h-4 text-[#1E63AF] mt-0.5" />
                <span>020 8158 8499</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-[#6B7A8C]">
                <Mail className="w-4 h-4 text-[#1E63AF] mt-0.5" />
                <span>info@maandcoaccountants.com</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-[rgba(11,28,47,0.08)] p-6 card-shadow-sm">
            <h3 className="text-sm font-semibold text-[#0B1C2F] mb-4">Locations served</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-[#6B7A8C]">
              {locations.map((location) => (
                <div key={location} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                  <span>{location}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#6B7A8C] mt-4">
              Plus many more towns and cities across the UK.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
