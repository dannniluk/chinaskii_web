import { useState, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`main-nav ${isScrolled ? 'scrolled' : ''}`}>
      <a 
        href="#hero" 
        className="nav-logo"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection('hero');
        }}
      >
        CHINASKII
      </a>

      <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <a 
          href="#hero" 
          className="nav-link"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('hero');
          }}
        >
          {t('nav.vault')}
        </a>
        <a 
          href="#works" 
          className="nav-link"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('works');
          }}
        >
          {t('nav.chronicles')}
        </a>
        <a 
          href="#atelier" 
          className="nav-link"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('atelier');
          }}
        >
          {t('nav.atelier')}
        </a>
        <LanguageSwitcher />
      </div>

      <button 
        className="mobile-menu-btn"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}
