// Translations for the website
export const translations = {
  ru: {
    // Navigation
    nav: {
      vault: 'СТУДИЯ',
      chronicles: 'РАБОТЫ',
      atelier: 'ОБО МНЕ',
    },
    // Hero
    hero: {
      subtitle: 'AI Creator из Санкт-Петербурга',
      portfolio: 'Портфолио 2026',
      scroll: 'Листайте',
      viewAll: 'Все работы',
    },
    // Works
    works: {
      title: 'Работы',
      filters: {
        all: 'ВСЕ',
        motion: 'VIDEO',
        aiArt: 'AI ART',
        static: 'PHOTO',
      },
      empty: 'Нет работ в этой категории',
      photos: 'PHOTO',
    },
    // Atelier
    atelier: {
      title: 'Обо мне',
      description: 'ai creator & motion designer / saint p.\n\nспециализируюсь на создании сложного визуального контента с характером. фокус на нуарной стилистике, драматичном свете и атмосферном сторителлинге. использую передовые инструменты генерации в связке с классической анимацией, чтобы создавать проекты, которые удерживают внимание.',
      status: 'Статус',
      statusValue: 'Частный креатор / Открыт для заказов',
      tools: 'Инструменты',
      languages: 'Языки',
      // Contact
      getInTouch: 'Контакты',
      email: 'ПОЧТА',
      socials: 'СОЦСЕТИ',
      location: 'ЛОКАЦИЯ',
      available: 'Доступен по всему миру',
    },
    // Footer
    footer: {
      copyright: '© 2026 CHINASKII — Все права защищены',
    },
    // Language switcher
    lang: {
      ru: 'RU',
      en: 'EN',
    },
  },
  en: {
    // Navigation
    nav: {
      vault: 'VAULT',
      chronicles: 'CHRONICLES',
      atelier: 'ABOUT',
    },
    // Hero
    hero: {
      subtitle: 'AI Creator from Saint Petersburg',
      portfolio: 'Portfolio 2026',
      scroll: 'Scroll',
      viewAll: 'View All Works',
    },
    // Works
    works: {
      title: 'Works',
      filters: {
        all: 'ALL',
        motion: 'VIDEO',
        aiArt: 'AI ART',
        static: 'PHOTO',
      },
      empty: 'No works found in this category',
      photos: 'PHOTO',
    },
    // Atelier
    atelier: {
      title: 'About',
      description: 'ai creator & motion designer / saint p.\n\nspecializing in creating complex visual content with character. focus on noir aesthetics, dramatic lighting and atmospheric storytelling. using advanced generation tools combined with classical animation to create projects that capture attention.',
      status: 'Status',
      statusValue: 'Private creator / Open for commissions',
      tools: 'Tools & Stack',
      languages: 'Languages',
      // Contact
      getInTouch: 'Contact',
      email: 'EMAIL',
      socials: 'SOCIALS',
      location: 'LOCATION',
      available: 'Available worldwide',
    },
    // Footer
    footer: {
      copyright: '© 2026 CHINASKII — All Rights Reserved',
    },
    // Language switcher
    lang: {
      ru: 'RU',
      en: 'EN',
    },
  },
};

export type Language = 'ru' | 'en';
export type Translations = typeof translations;
