import { useLanguage } from '../i18n/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="bg-[#0A0A0C]">
      {/* Hero Section - 100vh */}
      <div className="hero-section">
        <h1 className="hero-logo">CHINASKII</h1>
        
        <div className="hero-line" />
        
        <p className="hero-subtitle">{t('hero.subtitle')}</p>
        
        <p className="hero-micro">{t('hero.portfolio')}</p>
      </div>
    </section>
  );
}
