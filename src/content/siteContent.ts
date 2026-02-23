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
}

export const ctaLabels = {
  contact: { ro: 'Contactează-ne', ru: 'Связаться с нами' },
  askOffer: { ro: 'Cere ofertă', ru: 'Запросить предложение' },
  choosePlan: { ro: 'Alege planul', ru: 'Выбрать план' },
  chooseAPlan: { ro: 'Alege un plan', ru: 'Выбрать тариф' },
}

export const homeContent = {
  heroTag: {
    ro: 'Website-uri premium pe abonament lunar',
    ru: 'Премиальные сайты по ежемесячной подписке',
  },
  heroTitle: {
    ro: 'Site de la 15 EUR lunar',
    ru: 'Сайт от 15 EUR в месяц',
  },
  heroSubtitle: {
    ro: 'Creșteți vânzările cu 200% prin pagini rapide, clare și orientate spre conversie.',
    ru: 'Увеличьте продажи до 200% за счёт быстрых, понятных и конверсионных страниц.',
  },
  packagesTitle: { ro: 'Pachetele noastre', ru: 'Наши пакеты' },
  packagesDescription: {
    ro: 'Alege varianta potrivită și pornești imediat. Structura, designul și conținutul le ajustăm după obiectivul afacerii tale.',
    ru: 'Выберите подходящий вариант и стартуйте сразу. Структуру, дизайн и контент адаптируем под цели вашего бизнеса.',
  },
  processTitle: { ro: 'Cum lucrăm', ru: 'Как мы работаем' },
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
  },
  rulesTitle: {
    ro: 'Cum funcționează abonamentul',
    ru: 'Как работает подписка',
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
  },
  whyTitle: { ro: 'De ce noi', ru: 'Почему мы' },
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
  },
  testimonialsTitle: { ro: 'Testimoniale', ru: 'Отзывы' },
  finalCtaTitle: { ro: 'Vrei să începem azi?', ru: 'Хотите начать сегодня?' },
  finalCtaText: {
    ro: 'Trimite-ne mesajul tău și începem imediat planul potrivit.',
    ru: 'Напишите нам, и мы сразу запускаем подходящий тариф.',
  },
}

export const testimonials: Testimonial[] = [
  {
    name: 'Andrei M.',
    role: { ro: 'Service Auto', ru: 'Автосервис' },
    quote: {
      ro: 'Am primit un site clar, rapid și deja aduce lead-uri din prima săptămână.',
      ru: 'Мы получили понятный и быстрый сайт, который начал приносить заявки уже в первую неделю.',
    },
  },
  {
    name: 'Elena R.',
    role: { ro: 'Salon Beauty', ru: 'Салон красоты' },
    quote: {
      ro: 'Designul arată premium, iar clienții ne spun des că ne-au ales din cauza site-ului.',
      ru: 'Дизайн выглядит премиально, и клиенты часто говорят, что выбрали нас из-за сайта.',
    },
  },
  {
    name: 'Victor P.',
    role: { ro: 'Magazin local', ru: 'Локальный магазин' },
    quote: {
      ro: 'Comunicare rapidă și livrare exact cum am discutat. Recomand fără ezitare.',
      ru: 'Быстрая коммуникация и результат ровно как договаривались. Рекомендую.',
    },
  },
]

export const servicesContent = {
  title: { ro: 'Servicii și pachete', ru: 'Услуги и пакеты' },
  intro: {
    ro: 'Aceleași pachete clare, cu comparație directă și detalii complete despre ce primești de la prima săptămână.',
    ru: 'Те же прозрачные пакеты, с прямым сравнением и детальным описанием результата уже в первую неделю.',
  },
  includesTitle: { ro: 'Ce include abonamentul', ru: 'Что входит в подписку' },
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
  },
  firstWeekTitle: { ro: 'Ce primiți în prima săptămână', ru: 'Что вы получаете в первую неделю' },
  firstWeek: {
    ro: ['Brief + structură aprobată', 'Design principal + secțiuni cheie', 'Conținut inițial integrat', 'Demo live pentru feedback'],
    ru: ['Бриф + утверждённая структура', 'Главный дизайн + ключевые блоки', 'Интегрированный стартовый контент', 'Живое демо для обратной связи'],
  },
  maintenanceTitle: { ro: 'Mentenanță și actualizări', ru: 'Поддержка и обновления' },
  maintenance: {
    ro: 'Pe abonament facem update-uri regulate, ajustări de conținut și suport tehnic, astfel încât site-ul să rămână rapid, sigur și actualizat.',
    ru: 'В рамках подписки выполняем регулярные обновления, правки контента и техподдержку, чтобы сайт оставался быстрым, безопасным и актуальным.',
  },
  extrasTitle: { ro: 'Opțiuni extra', ru: 'Дополнительные опции' },
  extras: {
    ro: ['Sistem de plată: +50 EUR o singură dată', 'Pagini extra după necesitate', 'Copywriting comercial', 'Creare logo', 'Integrare Analytics și Pixel'],
    ru: ['Система оплаты: +50 EUR единоразово', 'Дополнительные страницы по запросу', 'Коммерческий копирайтинг', 'Разработка логотипа', 'Интеграция Analytics и Pixel'],
  },
}

export const aboutContent = {
  title: { ro: 'Despre noi', ru: 'О нас' },
  story: {
    ro: 'Suntem o echipă focusată pe website-uri care aduc rezultate, nu doar pe design frumos. Am construit un model simplu: abonament lunar, livrare rapidă, suport constant. Pentru antreprenori, asta înseamnă cost predictibil și lansare fără blocaje tehnice.',
    ru: 'Мы команда, которая делает сайты с реальной бизнес-отдачей, а не только красивую картинку. Наша модель проста: ежемесячная подписка, быстрый запуск, постоянная поддержка. Для предпринимателя это означает предсказуемые расходы и запуск без технических барьеров.',
  },
  valuesTitle: { ro: 'Valorile noastre', ru: 'Наши ценности' },
  values: {
    ro: ['Calitate în execuție', 'Transparență în costuri și pași', 'Viteză de livrare', 'Rezultate măsurabile'],
    ru: ['Качество реализации', 'Прозрачность стоимости и этапов', 'Скорость запуска', 'Измеримые результаты'],
  },
  communicationTitle: { ro: 'Cum comunicăm cu clienții', ru: 'Как мы общаемся с клиентами' },
  communication: {
    ro: 'Direct și rapid. Primești status clar, ce urmează și ce avem nevoie de la tine. Fără limbaj tehnic complicat, fără timp pierdut.',
    ru: 'Прямо и быстро. Вы всегда понимаете текущий статус, следующий шаг и что нужно от вас. Без сложного технического языка и лишней траты времени.',
  },
  mission: {
    ro: 'Misiunea noastră: să facem site-uri accesibile și eficiente.',
    ru: 'Наша миссия: делать сайты доступными и эффективными.',
  },
}

export const worksContent = {
  title: { ro: 'Lucrările noastre', ru: 'Наши работы' },
  intro: {
    ro: 'Exemple demo de proiecte construite pe stiluri diferite. Alege ce îți place și îți facem ceva similar, adaptat brandului tău.',
    ru: 'Демо-примеры проектов в разных стилях. Выберите то, что вам подходит, и мы сделаем похожее решение под ваш бренд.',
  },
  filters: {
    ro: { all: 'Toate', landing: 'Landing', presentation: 'Prezentare', store: 'Magazin' },
    ru: { all: 'Все', landing: 'Landing', presentation: 'Презентация', store: 'Магазин' },
  },
}

export const worksProjects: ProjectItem[] = [
  { id: 1, title: { ro: 'Cafenea Urban', ru: 'Городская кофейня' }, type: 'landing', tags: { ro: ['Landing', 'HoReCa'], ru: ['Landing', 'HoReCa'] } },
  { id: 2, title: { ro: 'Service Auto Expert', ru: 'Автосервис Expert' }, type: 'presentation', tags: { ro: ['Prezentare', 'Auto'], ru: ['Презентация', 'Авто'] } },
  { id: 3, title: { ro: 'Salon Beauty Glow', ru: 'Салон красоты Glow' }, type: 'landing', tags: { ro: ['Landing', 'Beauty'], ru: ['Landing', 'Beauty'] } },
  { id: 4, title: { ro: 'Clinică MedPoint', ru: 'Клиника MedPoint' }, type: 'presentation', tags: { ro: ['Prezentare', 'Medical'], ru: ['Презентация', 'Медицина'] } },
  { id: 5, title: { ro: 'Magazin de piese ProParts', ru: 'Магазин запчастей ProParts' }, type: 'store', tags: { ro: ['Magazin', 'E-commerce'], ru: ['Магазин', 'E-commerce'] } },
  { id: 6, title: { ro: 'Studio Avocat', ru: 'Юридическая студия' }, type: 'presentation', tags: { ro: ['Prezentare', 'Legal'], ru: ['Презентация', 'Юридические услуги'] } },
  { id: 7, title: { ro: 'Fit Coach Online', ru: 'Fit Coach Online' }, type: 'landing', tags: { ro: ['Landing', 'Fitness'], ru: ['Landing', 'Фитнес'] } },
  { id: 8, title: { ro: 'Home Decor Catalog', ru: 'Каталог Home Decor' }, type: 'store', tags: { ro: ['Magazin', 'Catalog'], ru: ['Магазин', 'Каталог'] } },
]

export const contactContent = {
  title: { ro: 'Contacte', ru: 'Контакты' },
  intro: {
    ro: 'Spune-ne ce site vrei și îți răspundem rapid cu pașii concreți.',
    ru: 'Напишите, какой сайт вам нужен, и мы быстро ответим с конкретным планом.',
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
  },
  faqTitle: { ro: 'Întrebări frecvente', ru: 'Частые вопросы' },
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
  },
}

export const seoByPage = {
  home: {
    ro: {
      title: 'Site de la 15 EUR lunar | Website-uri premium pe abonament',
      description: 'Creăm website-uri moderne în RO/RU cu abonament lunar: landing, prezentare și magazin fără plată online.',
    },
    ru: {
      title: 'Сайт от 15 EUR в месяц | Премиальные сайты по подписке',
      description: 'Создаём современные сайты на RO/RU по ежемесячной подписке: landing, презентация и магазин без онлайн-оплаты.',
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
  },
}
