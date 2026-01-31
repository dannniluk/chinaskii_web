import { useLanguage } from '../i18n/LanguageContext';

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="lang-switch">
      <button
        className={`lang-btn ${language === 'ru' ? 'active' : ''}`}
        onClick={() => setLanguage('ru')}
        data-lang="ru"
      >
        {t('lang.ru')}
      </button>
      <span className="lang-divider">/</span>
      <button
        className={`lang-btn ${language === 'en' ? 'active' : ''}`}
        onClick={() => setLanguage('en')}
        data-lang="en"
      >
        {t('lang.en')}
      </button>
    </div>
  );
}
