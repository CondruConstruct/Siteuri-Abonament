import type { Locale, ProjectItem, Testimonial } from '../types'

export const contactInfo = {
  email: 'jbpsuport@gmail.com',
  phone: '+37368694844',
}

export const navLabels: Record<Locale, { key: string; label: string; path: string }[]> = {
  ro: [
    { key: 'home', label: 'Acasă', path: '/' },
    { key: 'services', label: 'Servicii', path: '/servicii' },
    { key: 'about', label: 'Despre noi', path: '/despre-noi' },
    { key: 'works', label: 'Lucrările noastre', path: '/lucrari' },
    { key: 'contact', label: 'Contacte', path: '/contacte' },
  ],
  ru: [
    { key: 'home', label: 'Главная', path: '/' },
    { key: 'services', label: 'Услуги', path: '/servicii' },
    { key: 'about', label: 'О нас', path: '/despre-noi' },
    { key: 'works', label: 'Наши работы', path: '/lucrari' },
    { key: 'contact', label: 'Контакты', path: '/contacte' },
  ],
  en: [
    { key: 'home', label: 'Home', path: '/' },
    { key: 'services', label: 'Services', path: '/servicii' },
    { key: 'about', label: 'About us', path: '/despre-noi' },
    { key: 'works', label: 'Our work', path: '/lucrari' },
    { key: 'contact', label: 'Contact', path: '/contacte' },
  ],
}

export const ctaLabels = {
  contact: { ro: 'Contactează-ne', ru: 'Связаться с нами', en: 'Contact us' },
  askOffer: { ro: 'Cere ofertă', ru: 'Запросить предложение', en: 'Request an offer' },
  choosePlan: { ro: 'Alege planul', ru: 'Выбрать план', en: 'Choose plan' },
  chooseAPlan: { ro: 'Alege un plan', ru: 'Выбрать тариф', en: 'Choose a plan' },
}

export const homeContent = {
  heroTag: {
    ro: 'Website-uri premium pe abonament lunar',
    ru: 'Премиальные сайты по ежемесячной подписке',
    en: 'Premium websites on a monthly subscription',
  },
  heroTitle: {
    ro: 'Site de la 15 EUR lunar',
    ru: 'Сайт от 15 EUR в месяц',
    en: 'Website from 15 EUR/month',
  },
  heroSubtitle: {
    ro: 'Creșteți vânzările cu 200% prin pagini rapide, clare și orientate spre conversie.',
    ru: 'Увеличьте продажи до 200% за счёт быстрых, понятных и конверсионных страниц.',
    en: 'Increase sales by up to 200% with fast, clear, conversion-focused pages.',
  },
  packagesTitle: { ro: 'Pachetele noastre', ru: 'Наши пакеты', en: 'Our packages' },
  packagesDescription: {
    ro: 'Alege varianta potrivită și pornești imediat. Structura, designul și conținutul le ajustăm după obiectivul afacerii tale.',
    ru: 'Выберите подходящий вариант и стартуйте сразу. Структуру, дизайн и контент адаптируем под цели вашего бизнеса.',
    en: 'Choose the right option and start immediately. We adjust structure, design, and content to your business goals.',
  },
  processTitle: { ro: 'Cum lucrăm', ru: 'Как мы работаем', en: 'How we work' },
  processSteps: {
    ro: [
      'Alegi planul și ne contactezi',
      'Achitarea primei luni (abonament)',
      'Colectăm informația (texte, poze, exemple)',
      'Construim site-ul rapid și îl prezentăm pentru aprobare',
      'Publicăm site-ul. Din momentul în care site-ul este online începe calculul lunii achitate.',
    ],
    ru: [
      'Вы выбираете тариф и связываетесь с нами',
      'Оплата первого месяца (подписка)',
      'Собираем информацию (тексты, фото, примеры)',
      'Быстро создаём сайт и показываем вам на утверждение',
      'Публикуем сайт. С момента выхода сайта онлайн начинается расчёт оплаченного месяца.',
    ],
    en: [
      'You choose a plan and contact us',
      'Payment for the first month (subscription)',
      'We collect information (texts, photos, examples)',
      'We build the website fast and present it for approval',
      'We publish the website. Billing starts from the moment your site is live.',
    ],
  },
  rulesTitle: {
    ro: 'Cum funcționează abonamentul',
    ru: 'Как работает подписка',
    en: 'How the subscription works',
  },
  rules: {
    ro: [
      'Oamenii achită în fiecare lună abonamentul la site-ul ales.',
      'După achitarea primei luni, noi facem site-ul foarte repede.',
      'De când site-ul este online, de atunci se începe calculul lunii achitate.',
      'Domeniul îl procura clientul (noi ajutăm la setare).',
    ],
    ru: [
      'Клиенты ежемесячно оплачивают подписку на выбранный сайт.',
      'После оплаты первого месяца мы очень быстро создаём сайт.',
      'Отсчёт оплаченного месяца начинается с момента, когда сайт уже онлайн.',
      'Домен покупает клиент (мы помогаем с настройкой).',
    ],
    en: [
      'Clients pay monthly for the selected website subscription.',
      'After the first month is paid, we build the site very quickly.',
      'The paid month countdown starts when the site goes live.',
      'The client buys the domain (we help with full setup).',
    ],
  },
  whyTitle: { ro: 'De ce noi', ru: 'Почему мы', en: 'Why us' },
  whyItems: {
    ro: [
      { title: 'Viteză', desc: 'Primele versiuni apar în câteva zile, nu în luni.' },
      { title: 'Design modern', desc: 'Stil premium, orientat pe încredere și rezultate.' },
      { title: 'Optimizare mobil', desc: 'Experiență impecabilă pe telefon, tabletă și desktop.' },
      { title: 'Suport real', desc: 'Comunicare rapidă, clară și orientată pe soluții.' },
      { title: 'Editări lunare', desc: 'Actualizăm conținutul în funcție de evoluția businessului.' },
      { title: 'SEO + securitate', desc: 'Bază tehnică corectă pentru indexare și protecție.' },
    ],
    ru: [
      { title: 'Скорость', desc: 'Первые версии появляются за дни, а не за месяцы.' },
      { title: 'Современный дизайн', desc: 'Премиальный стиль, который усиливает доверие и продажи.' },
      { title: 'Мобильная оптимизация', desc: 'Безупречный опыт на телефоне, планшете и десктопе.' },
      { title: 'Реальная поддержка', desc: 'Быстрая и понятная коммуникация без лишней бюрократии.' },
      { title: 'Ежемесячные правки', desc: 'Обновляем контент по мере роста вашего бизнеса.' },
      { title: 'SEO + безопасность', desc: 'Техническая база для индексации и защиты сайта.' },
    ],
    en: [
      { title: 'Speed', desc: 'First versions are ready in days, not months.' },
      { title: 'Modern design', desc: 'Premium style focused on trust and results.' },
      { title: 'Mobile optimized', desc: 'Flawless experience on phone, tablet, and desktop.' },
      { title: 'Real support', desc: 'Fast, clear communication focused on solutions.' },
      { title: 'Monthly updates', desc: 'We update content as your business evolves.' },
      { title: 'SEO + security', desc: 'Strong technical base for indexing and protection.' },
    ],
  },
  testimonialsTitle: { ro: 'Testimoniale', ru: 'Отзывы', en: 'Testimonials' },
  finalCtaTitle: { ro: 'Vrei să începem azi?', ru: 'Хотите начать сегодня?', en: 'Ready to start today?' },
  finalCtaText: {
    ro: 'Trimite-ne mesajul tău și începem imediat planul potrivit.',
    ru: 'Напишите нам, и мы сразу запускаем подходящий тариф.',
    en: 'Send us your message and we will start the right plan immediately.',
  },
}

export const testimonials: Testimonial[] = [
  {
    name: 'Andrei M.',
    role: { ro: 'Service Auto', ru: 'Автосервис', en: 'Car Service' },
    quote: {
      ro: 'Am primit un site clar, rapid și deja aduce lead-uri din prima săptămână.',
      ru: 'Мы получили понятный и быстрый сайт, который начал приносить заявки уже в первую неделю.',
      en: 'We got a clear, fast website and it started bringing leads from the first week.',
    },
  },
  {
    name: 'Elena R.',
    role: { ro: 'Salon Beauty', ru: 'Салон красоты', en: 'Beauty Salon' },
    quote: {
      ro: 'Designul arată premium, iar clienții ne spun des că ne-au ales din cauza site-ului.',
      ru: 'Дизайн выглядит премиально, и клиенты часто говорят, что выбрали нас из-за сайта.',
      en: 'The design looks premium, and clients often tell us they chose us because of the website.',
    },
  },
  {
    name: 'Victor P.',
    role: { ro: 'Magazin local', ru: 'Локальный магазин', en: 'Local Store' },
    quote: {
      ro: 'Comunicare rapidă și livrare exact cum am discutat. Recomand fără ezitare.',
      ru: 'Быстрая коммуникация и результат ровно как договаривались. Рекомендую.',
      en: 'Fast communication and delivery exactly as agreed. I recommend them without hesitation.',
    },
  },
]

export const servicesContent = {
  title: { ro: 'Servicii și pachete', ru: 'Услуги и пакеты', en: 'Services and packages' },
  intro: {
    ro: 'Aceleași pachete clare, cu comparație directă și detalii complete despre ce primești de la prima săptămână.',
    ru: 'Те же прозрачные пакеты, с прямым сравнением и детальным описанием результата уже в первую неделю.',
    en: 'The same clear packages, with direct comparison and full details on what you get from week one.',
  },
  includesTitle: { ro: 'Ce include abonamentul', ru: 'Что входит в подписку', en: 'What the subscription includes' },
  includes: {
    ro: [
      'Design modern personalizat pe nișa ta',
      'Structură clară și copy orientat pe conversie',
      'Versiune complet responsive (mobil/tabletă/desktop)',
      'Setări SEO de bază + OpenGraph',
      'Monitorizare și mentenanță continuă',
    ],
    ru: [
      'Современный дизайн под вашу нишу',
      'Понятная структура и тексты с фокусом на конверсию',
      'Полная адаптация под мобильные, планшеты и десктоп',
      'Базовые SEO-настройки + OpenGraph',
      'Постоянный мониторинг и техническая поддержка',
    ],
    en: [
      'Modern design tailored to your niche',
      'Clear structure and conversion-focused copy',
      'Fully responsive version (mobile/tablet/desktop)',
      'Basic SEO setup + OpenGraph',
      'Continuous monitoring and maintenance',
    ],
  },
  firstWeekTitle: { ro: 'Ce primiți în prima săptămână', ru: 'Что вы получаете в первую неделю', en: 'What you get in the first week' },
  firstWeek: {
    ro: ['Brief + structură aprobată', 'Design principal + secțiuni cheie', 'Conținut inițial integrat', 'Demo live pentru feedback'],
    ru: ['Бриф + утверждённая структура', 'Главный дизайн + ключевые блоки', 'Интегрированный стартовый контент', 'Живое демо для обратной связи'],
    en: ['Brief + approved structure', 'Main design + key sections', 'Initial content integrated', 'Live demo for feedback'],
  },
  maintenanceTitle: { ro: 'Mentenanță și actualizări', ru: 'Поддержка и обновления', en: 'Maintenance and updates' },
  maintenance: {
    ro: 'Pe abonament facem update-uri regulate, ajustări de conținut și suport tehnic, astfel încât site-ul să rămână rapid, sigur și actualizat.',
    ru: 'В рамках подписки выполняем регулярные обновления, правки контента и техподдержку, чтобы сайт оставался быстрым, безопасным и актуальным.',
    en: 'With the subscription, we provide regular updates, content adjustments, and technical support so your website stays fast, secure, and up to date.',
  },
  extrasTitle: { ro: 'Opțiuni extra', ru: 'Дополнительные опции', en: 'Extra options' },
  extras: {
    ro: ['Sistem de plată: +50 EUR o singură dată', 'Pagini extra după necesitate', 'Copywriting comercial', 'Creare logo', 'Integrare Analytics și Pixel'],
    ru: ['Система оплаты: +50 EUR единоразово', 'Дополнительные страницы по запросу', 'Коммерческий копирайтинг', 'Разработка логотипа', 'Интеграция Analytics и Pixel'],
    en: ['Payment system: +50 EUR one-time', 'Extra pages on request', 'Commercial copywriting', 'Logo creation', 'Analytics and Pixel integration'],
  },
}

export const aboutContent = {
  title: { ro: 'Despre noi', ru: 'О нас', en: 'About us' },
  story: {
    ro: 'Suntem o echipă focusată pe website-uri care aduc rezultate, nu doar pe design frumos. Am construit un model simplu: abonament lunar, livrare rapidă, suport constant. Pentru antreprenori, asta înseamnă cost predictibil și lansare fără blocaje tehnice.',
    ru: 'Мы команда, которая делает сайты с реальной бизнес-отдачей, а не только красивую картинку. Наша модель проста: ежемесячная подписка, быстрый запуск, постоянная поддержка. Для предпринимателя это означает предсказуемые расходы и запуск без технических барьеров.',
    en: 'We are a team focused on websites that bring real results, not just pretty design. We built a simple model: monthly subscription, fast delivery, and constant support. For entrepreneurs, this means predictable costs and launch without technical blockers.',
  },
  valuesTitle: { ro: 'Valorile noastre', ru: 'Наши ценности', en: 'Our values' },
  values: {
    ro: ['Calitate în execuție', 'Transparență în costuri și pași', 'Viteză de livrare', 'Rezultate măsurabile'],
    ru: ['Качество реализации', 'Прозрачность стоимости и этапов', 'Скорость запуска', 'Измеримые результаты'],
    en: ['Execution quality', 'Transparency in costs and steps', 'Fast delivery', 'Measurable results'],
  },
  communicationTitle: { ro: 'Cum comunicăm cu clienții', ru: 'Как мы общаемся с клиентами', en: 'How we communicate with clients' },
  communication: {
    ro: 'Direct și rapid. Primești status clar, ce urmează și ce avem nevoie de la tine. Fără limbaj tehnic complicat, fără timp pierdut.',
    ru: 'Прямо и быстро. Вы всегда понимаете текущий статус, следующий шаг и что нужно от вас. Без сложного технического языка и лишней траты времени.',
    en: 'Direct and fast. You always get clear status, next steps, and what we need from you. No complicated technical language, no wasted time.',
  },
  mission: {
    ro: 'Misiunea noastră: să facem site-uri accesibile și eficiente.',
    ru: 'Наша миссия: делать сайты доступными и эффективными.',
    en: 'Our mission: make websites affordable and effective.',
  },
}

export const worksContent = {
  title: { ro: 'Lucrările noastre', ru: 'Наши работы', en: 'Our work' },
  intro: {
    ro: 'Exemple demo de proiecte construite pe stiluri diferite. Alege ce îți place și îți facem ceva similar, adaptat brandului tău.',
    ru: 'Демо-примеры проектов в разных стилях. Выберите то, что вам подходит, и мы сделаем похожее решение под ваш бренд.',
    en: 'Demo examples built in different styles. Pick what you like and we will create something similar adapted to your brand.',
  },
  filters: {
    ro: { all: 'Toate', landing: 'Landing', presentation: 'Prezentare', store: 'Magazin' },
    ru: { all: 'Все', landing: 'Landing', presentation: 'Презентация', store: 'Магазин' },
    en: { all: 'All', landing: 'Landing', presentation: 'Presentation', store: 'Store' },
  },
}

export const worksProjects: ProjectItem[] = [
  {
    id: 1,
    title: { ro: 'Cafenea Urban', ru: 'Городская кофейня', en: 'Urban Coffee Shop' },
    type: 'landing',
    tags: { ro: ['Landing', 'HoReCa'], ru: ['Landing', 'HoReCa'], en: ['Landing', 'HoReCa'] },
  },
  {
    id: 2,
    title: { ro: 'Service Auto Expert', ru: 'Автосервис Expert', en: 'Expert Auto Service' },
    type: 'presentation',
    tags: { ro: ['Prezentare', 'Auto'], ru: ['Презентация', 'Авто'], en: ['Presentation', 'Auto'] },
  },
  {
    id: 3,
    title: { ro: 'Salon Beauty Glow', ru: 'Салон красоты Glow', en: 'Beauty Glow Salon' },
    type: 'landing',
    tags: { ro: ['Landing', 'Beauty'], ru: ['Landing', 'Beauty'], en: ['Landing', 'Beauty'] },
  },
  {
    id: 4,
    title: { ro: 'Clinică MedPoint', ru: 'Клиника MedPoint', en: 'MedPoint Clinic' },
    type: 'presentation',
    tags: { ro: ['Prezentare', 'Medical'], ru: ['Презентация', 'Медицина'], en: ['Presentation', 'Medical'] },
  },
  {
    id: 5,
    title: { ro: 'Magazin de piese ProParts', ru: 'Магазин запчастей ProParts', en: 'ProParts Parts Store' },
    type: 'store',
    tags: { ro: ['Magazin', 'E-commerce'], ru: ['Магазин', 'E-commerce'], en: ['Store', 'E-commerce'] },
  },
  {
    id: 6,
    title: { ro: 'Studio Avocat', ru: 'Юридическая студия', en: 'Law Studio' },
    type: 'presentation',
    tags: {
      ro: ['Prezentare', 'Legal'],
      ru: ['Презентация', 'Юридические услуги'],
      en: ['Presentation', 'Legal Services'],
    },
  },
  {
    id: 7,
    title: { ro: 'Fit Coach Online', ru: 'Fit Coach Online', en: 'Fit Coach Online' },
    type: 'landing',
    tags: { ro: ['Landing', 'Fitness'], ru: ['Landing', 'Фитнес'], en: ['Landing', 'Fitness'] },
  },
  {
    id: 8,
    title: { ro: 'Home Decor Catalog', ru: 'Каталог Home Decor', en: 'Home Decor Catalog' },
    type: 'store',
    tags: { ro: ['Magazin', 'Catalog'], ru: ['Магазин', 'Каталог'], en: ['Store', 'Catalog'] },
  },
]

export const contactContent = {
  title: { ro: 'Contacte', ru: 'Контакты', en: 'Contact' },
  intro: {
    ro: 'Spune-ne ce site vrei și îți răspundem rapid cu pașii concreți.',
    ru: 'Напишите, какой сайт вам нужен, и мы быстро ответим с конкретным планом.',
    en: 'Tell us what website you need and we will quickly reply with clear next steps.',
  },
  form: {
    ro: {
      name: 'Nume',
      email: 'Email',
      message: 'Mesaj',
      submit: 'Trimite cererea',
      success: 'Mesajul a fost pregătit. Contactează-ne direct pe email/telefon.',
    },
    ru: {
      name: 'Имя',
      email: 'Email',
      message: 'Сообщение',
      submit: 'Отправить запрос',
      success: 'Сообщение подготовлено. Свяжитесь с нами напрямую по email/телефону.',
    },
    en: {
      name: 'Name',
      email: 'Email',
      message: 'Message',
      submit: 'Send request',
      success: 'Message prepared. Contact us directly via email/phone.',
    },
  },
  faqTitle: { ro: 'Întrebări frecvente', ru: 'Частые вопросы', en: 'Frequently asked questions' },
  faq: {
    ro: [
      {
        q: 'Cât durează?',
        a: 'De regulă, prima versiune este gata în câteva zile lucrătoare după ce primim informațiile.',
      },
      {
        q: 'Ce trebuie să vă trimit?',
        a: 'Texte, poze, exemple de site-uri care îți plac și descrierea serviciilor/produsele tale.',
      },
      {
        q: 'Cum se achită abonamentul?',
        a: 'Abonamentul se achită lunar. După prima achitare începem imediat dezvoltarea.',
      },
      {
        q: 'Pot trece la alt plan?',
        a: 'Da, planul poate fi schimbat oricând în funcție de nevoi.',
      },
      {
        q: 'Domeniul cine îl cumpără?',
        a: 'Domeniul îl cumpără clientul, iar noi te ajutăm cu setarea completă.',
      },
    ],
    ru: [
      {
        q: 'Сколько это занимает?',
        a: 'Обычно первая версия готова через несколько рабочих дней после получения материалов.',
      },
      {
        q: 'Что вам нужно отправить?',
        a: 'Тексты, фото, примеры сайтов, которые вам нравятся, и описание услуг/товаров.',
      },
      {
        q: 'Как оплачивается подписка?',
        a: 'Подписка оплачивается ежемесячно. После первой оплаты мы сразу начинаем работу.',
      },
      {
        q: 'Можно перейти на другой тариф?',
        a: 'Да, тариф можно изменить в любой момент под ваши задачи.',
      },
      {
        q: 'Кто покупает домен?',
        a: 'Домен покупает клиент, а мы полностью помогаем с настройкой.',
      },
    ],
    en: [
      {
        q: 'How long does it take?',
        a: 'Usually, the first version is ready within a few business days after we receive the materials.',
      },
      {
        q: 'What should I send you?',
        a: 'Texts, photos, examples of websites you like, and a description of your services/products.',
      },
      {
        q: 'How is the subscription paid?',
        a: 'The subscription is paid monthly. After the first payment, we start immediately.',
      },
      {
        q: 'Can I switch to another plan?',
        a: 'Yes, you can change the plan at any time based on your needs.',
      },
      {
        q: 'Who buys the domain?',
        a: 'The client buys the domain, and we fully help with setup.',
      },
    ],
  },
}

export const seoByPage = {
  home: {
    ro: {
      title: 'Site de la 15 EUR lunar | Website-uri premium pe abonament',
      description: 'Creăm website-uri moderne în RO/RU/EN cu abonament lunar: landing, prezentare și magazin fără plată online.',
    },
    ru: {
      title: 'Сайт от 15 EUR в месяц | Премиальные сайты по подписке',
      description: 'Создаём современные сайты на RO/RU/EN по ежемесячной подписке: landing, презентация и магазин без онлайн-оплаты.',
    },
    en: {
      title: 'Website from 15 EUR/month | Premium websites on subscription',
      description: 'We build modern websites in RO/RU/EN with monthly subscription: landing pages, presentation websites, and stores without online checkout.',
    },
  },
  services: {
    ro: {
      title: 'Servicii Website | Landing, Prezentare, Magazin',
      description: 'Compară pachetele noastre și alege planul potrivit: 15 EUR, 23 EUR sau 32 EUR lunar.',
    },
    ru: {
      title: 'Услуги | Landing, Презентация, Магазин',
      description: 'Сравните наши пакеты и выберите подходящий тариф: 15 EUR, 23 EUR или 32 EUR в месяц.',
    },
    en: {
      title: 'Website Services | Landing, Presentation, Store',
      description: 'Compare our plans and choose the right option: 15 EUR, 23 EUR, or 32 EUR per month.',
    },
  },
  about: {
    ro: {
      title: 'Despre noi | Misiunea noastră: site-uri accesibile și eficiente',
      description: 'Echipă orientată pe viteză, transparență și rezultate reale pentru afaceri locale.',
    },
    ru: {
      title: 'О нас | Наша миссия: доступные и эффективные сайты',
      description: 'Команда, ориентированная на скорость, прозрачность и реальные бизнес-результаты.',
    },
    en: {
      title: 'About us | Our mission: affordable and effective websites',
      description: 'A team focused on speed, transparency, and real results for local businesses.',
    },
  },
  works: {
    ro: {
      title: 'Lucrările noastre | Proiecte demo website',
      description: 'Vezi exemple de landing, site-uri de prezentare și magazine fără plată online.',
    },
    ru: {
      title: 'Наши работы | Демо-проекты сайтов',
      description: 'Смотрите примеры landing, презентационных сайтов и магазинов без онлайн-оплаты.',
    },
    en: {
      title: 'Our work | Demo website projects',
      description: 'See examples of landing pages, presentation websites, and stores without online checkout.',
    },
  },
  contact: {
    ro: {
      title: 'Contacte | Cere ofertă website',
      description: 'Contact rapid pe email sau telefon pentru website-ul tău pe abonament.',
    },
    ru: {
      title: 'Контакты | Запросить предложение',
      description: 'Быстрый контакт по email или телефону для запуска вашего сайта по подписке.',
    },
    en: {
      title: 'Contact | Request a website offer',
      description: 'Quick contact by email or phone to launch your subscription website.',
    },
  },
}
