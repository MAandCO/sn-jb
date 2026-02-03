interface FooterProps {
  className?: string;
}

const socials = [
  {
    label: 'LinkedIn (Director)',
    href: 'https://www.linkedin.com/in/majed-ali-a5973562/',
  },
  { label: 'Facebook' },
  { label: 'Instagram' },
  { label: 'X (Twitter)' },
  { label: 'YouTube' },
  { label: 'TikTok' },
];

export default function Footer({ className = '' }: FooterProps) {
  return (
    <footer className={`relative bg-[#0B1C2F] text-white ${className}`}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr,1fr] gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">MA & Co Accountants</h3>
            <p className="text-sm text-white/70 leading-relaxed max-w-xl">
              Professional accounting, tax, and advisory services for UK businesses and individuals. Remote and mobile
              delivery with fixed monthly packages and unlimited support.
            </p>
            <p className="text-xs text-white/50 mt-4">
              MA & CO ACCOUNTANTS LIMITED · Company number 14059611
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-semibold mb-3">Contact</h4>
              <div className="space-y-2 text-sm text-white/70">
                <div>info@maandcoaccountants.com</div>
                <div>020 8158 8499</div>
                <div>WhatsApp: 020 3890 1933</div>
                <div>8 Delamare Crescent, Croydon, CR0 4RU</div>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-3">Social</h4>
              <div className="flex flex-wrap gap-2">
                {socials.map((social) => (
                  social.href ? (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1 rounded-full bg-white/10 text-xs text-white hover:bg-white/20 transition-colors"
                    >
                      {social.label}
                    </a>
                  ) : (
                    <span
                      key={social.label}
                      className="px-3 py-1 rounded-full bg-white/5 text-xs text-white/60"
                    >
                      {social.label}
                    </span>
                  )
                ))}
              </div>
              <p className="text-xs text-white/50 mt-3">
                Social links can be added once confirmed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
