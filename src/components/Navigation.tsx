import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useReducedMotion } from '../hooks/use-reduced-motion';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-[rgba(11,28,47,0.08)]'
            : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-[6vw] h-[72px]">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
            className="flex items-center gap-3"
          >
            <img src="/logo.png" alt="MA & Co" className="h-8 w-auto" />
            <span className="font-['Sora'] text-xl font-bold text-[#0B1C2F] tracking-tight">
              MA & Co
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('services')}
              type="button"
              className="text-sm font-medium text-[#0B1C2F] hover:text-[#1E63AF] transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('industries')}
              type="button"
              className="text-sm font-medium text-[#0B1C2F] hover:text-[#1E63AF] transition-colors"
            >
              Industries
            </button>
            <button
              onClick={() => scrollToSection('resources')}
              type="button"
              className="text-sm font-medium text-[#0B1C2F] hover:text-[#1E63AF] transition-colors"
            >
              Resources
            </button>
            <button
              onClick={() => scrollToSection('about')}
              type="button"
              className="text-sm font-medium text-[#0B1C2F] hover:text-[#1E63AF] transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              type="button"
              className="px-4 py-2 text-sm font-medium border border-[rgba(11,28,47,0.15)] rounded-lg hover:bg-[#0B1C2F] hover:text-white transition-all"
            >
              Book a consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            type="button"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[#0B1C2F]" />
            ) : (
              <Menu className="w-6 h-6 text-[#0B1C2F]" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-[99] bg-white pt-[72px] md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex flex-col items-center gap-8 pt-12">
            <button
              onClick={() => scrollToSection('services')}
              type="button"
              className="text-lg font-medium text-[#0B1C2F]"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('industries')}
              type="button"
              className="text-lg font-medium text-[#0B1C2F]"
            >
              Industries
            </button>
            <button
              onClick={() => scrollToSection('resources')}
              type="button"
              className="text-lg font-medium text-[#0B1C2F]"
            >
              Resources
            </button>
            <button
              onClick={() => scrollToSection('about')}
              type="button"
              className="text-lg font-medium text-[#0B1C2F]"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              type="button"
              className="px-6 py-3 text-sm font-medium border border-[rgba(11,28,47,0.15)] rounded-lg"
            >
              Book a consultation
            </button>
          </div>
        </div>
      )}
    </>
  );
}
