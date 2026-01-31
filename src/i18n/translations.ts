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
      description: 'AI creator из Санкт-Петербурга. Независимый визуальный художник, специализирующийся на нуарной эстетике и атмосферном сторителлинге. Создаю визуал через AI и motion design — где технологии встречаются с тенями.',
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
      description: 'AI creator from Saint P. Independent visual artist specializing in noir aesthetics and atmospheric storytelling. Creating visuals through AI and motion design — where technology meets the shadows.',
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
