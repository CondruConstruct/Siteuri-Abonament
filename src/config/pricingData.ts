import type { Locale, Plan } from '../types'

export const commonPricingBenefits: Record<Locale, string[]> = {
  ro: [
    'Hosting gratuit inclus',
    'SSL gratuit (https)',
    'SEO de bază inclus (structură, titluri, meta)',
    'Optimizare mobil & viteză',
    'Mentenanță lunară inclusă',
    'Actualizări minore gratuite',
    'Suport tehnic rapid (email / telefon)',
  ],
  ru: [
    'Бесплатный хостинг включён',
    'Бесплатный SSL (https)',
    'Базовое SEO включено (структура, заголовки, meta)',
    'Оптимизация под мобильные и скорость',
    'Ежемесячная техническая поддержка включена',
    'Бесплатные мелкие обновления',
    'Быстрая техподдержка (email / телефон)',
  ],
  en: [
    'Free hosting included',
    'Free SSL (https)',
    'Basic SEO included (structure, titles, meta)',
    'Mobile & speed optimization',
    'Monthly maintenance included',
    'Free minor updates',
    'Fast technical support (email / phone)',
  ],
}

export const pricingData: Plan[] = [
  {
    id: 'landing',
    name: { ro: 'LANDING', ru: 'LANDING', en: 'LANDING' },
    subtitle: { ro: '1 pagină', ru: '1 страница', en: '1 page' },
    price: { ro: '15 EUR / lună', ru: '15 EUR / месяц', en: '15 EUR / month' },
    features: {
      ro: ['2 limbi (RO/RU)', 'Conținut după dorința clientului'],
      ru: ['2 языка (RO/RU)', 'Контент по запросу клиента'],
      en: ['2 languages (RO/RU)', 'Content tailored to client request'],
    },
    specificBenefits: {
      ro: [
        'Ideal pentru promovare rapidă',
        'Conversii optimizate',
        'Încărcare foarte rapidă',
        'Structură gândită pentru reclame (Google / Facebook)',
      ],
      ru: [
        'Идеально для быстрого продвижения',
        'Оптимизировано под конверсии',
        'Очень быстрая загрузка',
        'Структура продумана для рекламы (Google / Facebook)',
      ],
      en: [
        'Ideal for fast promotion',
        'Conversion-optimized',
        'Very fast loading',
        'Structure designed for ads (Google / Facebook)',
      ],
    },
    button: { ro: 'Procura Landing', ru: 'Купить Landing', en: 'Buy Landing' },
    noteUnderButton: {
      ro: 'Perfect pentru afaceri mici și promovare online rapidă.',
      ru: 'Идеально для малого бизнеса и быстрого онлайн-продвижения.',
      en: 'Perfect for small businesses and fast online promotion.',
    },
  },
  {
    id: 'presentation',
    name: { ro: 'PREZENTARE', ru: 'ПРЕЗЕНТАЦИЯ', en: 'PRESENTATION' },
    subtitle: { ro: 'până la 5 pagini', ru: 'до 5 страниц', en: 'up to 5 pages' },
    price: { ro: '23 EUR / lună', ru: '23 EUR / месяц', en: '23 EUR / month' },
    features: {
      ro: ['2 limbi (RO/RU)', 'Structură profesională + adaptat pe mobil'],
      ru: ['2 языка (RO/RU)', 'Профессиональная структура + адаптация под мобильные'],
      en: ['2 languages (RO/RU)', 'Professional structure + mobile adaptation'],
    },
    specificBenefits: {
      ro: [
        'Structură profesională de companie',
        'Navigare clară pentru clienți',
        'Pagini optimizate SEO',
        'Potrivit pentru firme și servicii locale',
      ],
      ru: [
        'Профессиональная структура компании',
        'Понятная навигация для клиентов',
        'SEO-оптимизированные страницы',
        'Подходит для компаний и локальных услуг',
      ],
      en: [
        'Professional company structure',
        'Clear navigation for customers',
        'SEO-optimized pages',
        'Suitable for companies and local services',
      ],
    },
    button: { ro: 'Procura Prezentare', ru: 'Купить Презентацию', en: 'Buy Presentation' },
    badge: {
      ro: 'Cel mai ales · Recomandat',
      ru: 'Самый популярный · Рекомендуем',
      en: 'Most chosen · Recommended',
    },
    noteUnderButton: {
      ro: 'Ideal pentru companii care vor imagine profesională.',
      ru: 'Идеально для компаний, которым нужен профессиональный имидж.',
      en: 'Ideal for companies that want a professional image.',
    },
  },
  {
    id: 'store',
    name: { ro: 'MAGAZIN (fără plată)', ru: 'МАГАЗИН (без оплаты)', en: 'STORE (no checkout)' },
    subtitle: { ro: 'până la 25 pagini', ru: 'до 25 страниц', en: 'up to 25 pages' },
    price: { ro: '32 EUR / lună', ru: '32 EUR / месяц', en: '32 EUR / month' },
    features: {
      ro: [
        '2 limbi (RO/RU)',
        'Dashboard pentru produse',
        'Produse nelimitate',
        'Fără sistem de plată',
      ],
      ru: [
        '2 языка (RO/RU)',
        'Панель управления товарами',
        'Неограниченное количество товаров',
        'Без системы оплаты',
      ],
      en: [
        '2 languages (RO/RU)',
        'Product dashboard',
        'Unlimited products',
        'No payment system',
      ],
    },
    specificBenefits: {
      ro: [
        'Catalog profesional de produse',
        'Gestionare ușoară din dashboard',
        'Scalabil pentru viitor',
        'Pregătit pentru integrare plăți',
      ],
      ru: [
        'Профессиональный каталог товаров',
        'Простое управление через dashboard',
        'Масштабируемость на будущее',
        'Готов к интеграции оплаты',
      ],
      en: [
        'Professional product catalog',
        'Easy management from dashboard',
        'Scalable for future growth',
        'Ready for payment integration',
      ],
    },
    extra: {
      ro: 'Sistem de plată: +50 EUR o singură dată (opțional)',
      ru: 'Система оплаты: +50 EUR единоразово (опционально)',
      en: 'Payment system: +50 EUR one-time (optional)',
    },
    afterExtraNote: {
      ro: 'Poate fi extins ulterior într-un magazin complet.',
      ru: 'Позже можно расширить до полноценного интернет-магазина.',
      en: 'Can be expanded later into a full online store.',
    },
    button: { ro: 'Procura Magazin', ru: 'Купить Магазин', en: 'Buy Store' },
  },
]
