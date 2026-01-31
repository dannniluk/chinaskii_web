import { useEffect, useRef } from 'react';
import { Mail, Instagram, Send, MapPin, ExternalLink } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

// ============================================
// ATELIER SECTION - About + Contact (Compact Design)
// ============================================

const tools = [
  'Nano Banana Pro',
  'Kling AI',
  'Midjourney',
  'After Effects',
  'Premiere Pro',
];

const contacts = {
  email: 'nosound947@gmail.com',
  instagram: 'https://instagram.com/chinazzz89',
  telegram: 'https://t.me/chinazeightnine',
  location: 'Saint Petersburg, Russia',
  availability: 'Available worldwide',
};

export function Atelier() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t, language } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal-element');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Get availability text based on language
  const getAvailabilityText = () => {
    return language === 'ru' 
      ? 'Доступен по всему миру' 
      : contacts.availability;
  };

  // Get location text based on language
  const getLocationText = () => {
    return language === 'ru'
      ? 'Санкт-Петербург, Россия'
      : contacts.location;
  };

  return (
    <section 
      id="atelier" 
      ref={sectionRef}
      className="bg-[#0A0A0C] min-h-screen"
    >
      <div className="atelier-section-compact">
        {/* Left Side - About Info (60%) */}
        <div className="atelier-info-compact">
          <h2 className="atelier-heading-compact reveal-element">{t('atelier.title')}</h2>
          
          <p className="atelier-text-compact reveal-element stagger-1">
            {t('atelier.description')}
          </p>
          
          <p className="atelier-text-compact reveal-element stagger-2" style={{ marginTop: '-12px' }}>
            <span className="text-[#C9A961]">{t('atelier.status')}: </span>
            {t('atelier.statusValue')}
          </p>

          {/* Tools List */}
          <div className="reveal-element stagger-3">
            <h3 className="tools-heading-compact">{t('atelier.tools')}</h3>
            <div className="tools-list-compact">
              {tools.map((tool) => (
                <span key={tool} className="tool-item-compact">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="reveal-element stagger-4">
            <h3 className="tools-heading-compact">{t('atelier.languages')}</h3>
            <p className="languages-compact">
              <span>EN</span> / RU / SV
            </p>
          </div>
        </div>

        {/* Right Side - Contact Info (40%) - Compact */}
        <div className="atelier-contact-compact">
          <h2 className="contact-heading-compact reveal-element">{t('atelier.getInTouch')}</h2>

          {/* Portfolio Download */}
          <div className="contact-item-compact portfolio-download reveal-element stagger-0">
            <p className="contact-label-compact">{language === 'ru' ? 'ПОЛНОЕ ПОРТФОЛИО' : 'FULL PORTFOLIO'}</p>
            <a 
              href="https://disk.yandex.ru/d/JJJCtIhTicq0eg"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-value-compact portfolio-link"
            >
              <span className="portfolio-text">Yandex Disk</span>
              <ExternalLink className="contact-icon-compact" size={14} />
            </a>
            <span className="portfolio-hint">PDF, 2025-2026</span>
          </div>

          {/* Email */}
          <div className="contact-item-compact reveal-element stagger-1">
            <p className="contact-label-compact">{t('atelier.email')}</p>
            <a 
              href={`mailto:${contacts.email}`}
              className="contact-value-compact"
            >
              <Mail className="contact-icon-compact" size={16} />
              {contacts.email}
            </a>
          </div>

          {/* Socials - Vertical Column, Telegram first */}
          <div className="contact-item-compact reveal-element stagger-2">
            <p className="contact-label-compact">{t('atelier.socials')}</p>
            <div className="social-vertical">
              <a 
                href={contacts.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-value-compact social-link-vertical"
              >
                <Send className="contact-icon-compact" size={16} />
                <span className="social-handle">@chinazeightnine</span>
              </a>
              <a 
                href={contacts.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-value-compact social-link-vertical"
              >
                <Instagram className="contact-icon-compact" size={16} />
                <span className="social-handle">@chinazzz89</span>
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="contact-item-compact reveal-element stagger-3">
            <p className="contact-label-compact">{t('atelier.location')}</p>
            <p className="contact-value-compact">
              <MapPin className="contact-icon-compact" size={16} />
              {getLocationText()}
            </p>
            <p className="contact-availability-compact">
              {getAvailabilityText()}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
