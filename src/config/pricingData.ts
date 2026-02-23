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
}

export const pricingData: Plan[] = [
  {
    id: 'landing',
    name: { ro: 'LANDING', ru: 'LANDING' },
    subtitle: { ro: '1 pagină', ru: '1 страница' },
    price: { ro: '15 EUR / lună', ru: '15 EUR / месяц' },
    features: {
      ro: ['2 limbi (RO/RU)', 'Conținut după dorința clientului'],
      ru: ['2 языка (RO/RU)', 'Контент по запросу клиента'],
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
    },
    button: { ro: 'Procura Landing', ru: 'Купить Landing' },
    noteUnderButton: {
      ro: 'Perfect pentru afaceri mici și promovare online rapidă.',
      ru: 'Идеально для малого бизнеса и быстрого онлайн-продвижения.',
    },
  },
  {
    id: 'presentation',
    name: { ro: 'PREZENTARE', ru: 'ПРЕЗЕНТАЦИЯ' },
    subtitle: { ro: 'până la 5 pagini', ru: 'до 5 страниц' },
    price: { ro: '23 EUR / lună', ru: '23 EUR / месяц' },
    features: {
      ro: ['2 limbi (RO/RU)', 'Structură profesională + adaptat pe mobil'],
      ru: ['2 языка (RO/RU)', 'Профессиональная структура + адаптация под мобильные'],
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
    },
    button: { ro: 'Procura Prezentare', ru: 'Купить Презентацию' },
    badge: {
      ro: 'Cel mai ales · Recomandat',
      ru: 'Самый популярный · Рекомендуем',
    },
    noteUnderButton: {
      ro: 'Ideal pentru companii care vor imagine profesională.',
      ru: 'Идеально для компаний, которым нужен профессиональный имидж.',
    },
  },
  {
    id: 'store',
    name: { ro: 'MAGAZIN (fără plată)', ru: 'МАГАЗИН (без оплаты)' },
    subtitle: { ro: 'până la 25 pagini', ru: 'до 25 страниц' },
    price: { ro: '32 EUR / lună', ru: '32 EUR / месяц' },
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
    },
    extra: {
      ro: 'Sistem de plată: +50 EUR o singură dată (opțional)',
      ru: 'Система оплаты: +50 EUR единоразово (опционально)',
    },
    afterExtraNote: {
      ro: 'Poate fi extins ulterior într-un magazin complet.',
      ru: 'Позже можно расширить до полноценного интернет-магазина.',
    },
    button: { ro: 'Procura Magazin', ru: 'Купить Магазин' },
  },
]
