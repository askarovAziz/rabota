document.addEventListener('DOMContentLoaded', () => {
  const translations = {
    ru: {
      skip_to_content: 'Перейти к основному контенту',
      nav_home: 'Главная',
      nav_story: 'Путь',
      nav_experience: 'Программы',
      nav_services: 'Услуги',
      nav_culture: 'Культура',
      nav_roles: 'Вакансии',
      nav_faq: 'FAQ',
      nav_contacts: 'Контакты',
      nav_menu: 'Меню',
      hero_tagline: 'Карьера в сети Velvet Touch',
      hero_title: 'Создаём премиальный wellness-опыт в каждом салоне',
      hero_desc: 'Мы объединяем дизайнерские пространства, технологии и заботу о человеке во всех наших локациях. В сети открыты направления для экспертов сервиса, красоты и гостевого опыта.',
      hero_primary: 'Отправить резюме',
      hero_secondary: 'Смотреть программы',
      hero_scroll: 'Прокрутите, чтобы узнать больше',
      hero_stat1_label: 'Лет в индустрии',
      hero_stat2_label: 'Экспертов в команде',
      hero_stat3_label: 'Постоянных гостей',
      hero_stat4_label: 'Авторских ритуалов',
      scene_primary_title: 'Signature Retreat',
      scene_primary_meta: 'Immersive aroma • Biorythm music',
      scene_primary_desc: 'Сочетаем световые сценарии и авторские массажные техники, чтобы гости ощущали поток энергии.',
      scene_secondary_tag: 'Live KPI Dashboard',
      scene_secondary_desc: 'Цифровые ассистенты помогают управлять расписанием и обратной связью в режиме реального времени.',
      scene_highlight: 'Гармония начинается с команды',
      dream_tagline: 'Город мечты',
      dream_title: 'Дубай — город, где карьера и lifestyle идут в одном ритме',
      dream_desc:
        'С первого дня вы чувствуете энергию мегаполиса будущего: небоскрёбы на горизонте, мягкий климат круглый год, комьюнити специалистов из всего мира. Velvet Touch помогает переехать без стресса и сразу жить на уровне, о котором вы мечтали.',
      dream_point1: 'Premium-резиденции рядом с салонами и пляжами Marina, Palm, Downtown.',
      dream_point2: 'Визы, страховка и релокация под руководством HR-команды Velvet Touch.',
      dream_point3: 'Комьюнити событий: sunset-ретриты, гастро-вечера, арт-экспедиции по Дубаю.',
      dream_primary: 'Оставить заявку на релокацию',
      dream_secondary: 'Посмотреть преимущества',
      dream_panel1_tag: 'City pulse',
      dream_panel1_title: 'Небоскрёбы, пляжи и арт-кварталы',
      dream_panel1_desc:
        'Исследуйте Palm Jumeirah, Alserkal Avenue и приватные лаунжи после смены — город вдохновляет на новые идеи каждый день.',
      dream_panel2_tag: 'Career boost',
      dream_panel2_title: 'Окружение лидеров wellness-индустрии',
      dream_panel2_desc:
        'Встречайтесь с партнёрами, участвуйте в отраслевых ивентах и стройте карьеру на рынке, который ценит премиальный сервис.',
      dream_panel3_tag: 'Comfort 24/7',
      dream_panel3_title: 'Забота о деталях и поддержка команды',
      dream_panel3_desc:
        'Консьерж, трансферы и medical-care — мы берём организацию на себя, чтобы вы сосредоточились на вдохновляющей работе.',
      story_tagline: 'Путь кандидата',
      story_title: 'Как проходит ваше знакомство с сетью Velvet Touch',
      story_desc: 'Каждый этап построен вокруг диалога и поддержки. Мы сопровождаем вас от первого сообщения до уверенного старта в салоне.',
      story_step1_title: 'Первый контакт',
      story_step1_desc: 'Отправьте заявку и получите персональное приветствие с подборкой релевантных программ развития.',
      story_step2_title: 'Digital-экскурсия',
      story_step2_desc: 'Погрузитесь в атмосферу салона через интерактивный тур и живую встречу с наставником.',
      story_step3_title: 'Shadow-смена',
      story_step3_desc: 'Проведите день рядом с ведущими специалистами, чтобы почувствовать ритм и стандарты сервиса.',
      story_step4_title: 'Старт и поддержка',
      story_step4_desc: 'Выходите на смены с сопровождением наставника, персональным планом роста и доступом к комьюнити.',
      experience_tagline: 'Фирменные программы',
      experience_title: 'Динамические блоки впечатлений для гостей и команды',
      experience_desc: 'Мы постоянно экспериментируем с форматами. Переключайте сценарии, чтобы узнать, как мы создаём уникальные ощущения на каждом этапе взаимодействия.',
      experience1_tag: 'Ambient Journey',
      experience1_title: 'Aurora Relax Flow',
      experience1_desc: 'Гости выбирают настроение в приложении, а система освещения и ароматы мгновенно адаптируются к их состоянию.',
      experience2_tag: 'Team Ritual',
      experience2_title: 'Breath Sync Start',
      experience2_desc: 'Синхронизируем дыхание команды и запускаем смену с короткой медитацией и настройкой целей.',
      experience3_tag: 'Data Pulse',
      experience3_title: 'Insight Console',
      experience3_desc: 'Живые метрики удовлетворённости и рекомендации по процедурам помогают создавать индивидуальный опыт.',
      experience4_tag: 'Creative Lab',
      experience4_title: 'Senses Atelier',
      experience4_desc: 'Команда тестирует новые масла, музыкальные сеты и массажные техники в формате воркшопов.',
      experience5_tag: 'Guest Care',
      experience5_title: 'Afterglow Concierge',
      experience5_desc: 'Персональные рекомендации по уходу, follow-up через WhatsApp и приглашения на приватные события.',
      services_tagline: 'Компетенции и сервисы',
      services_title: 'Что мы создаём каждый день',
      services_desc: 'Балансируем между высокими стандартами гостеприимства и инновационными wellness-практиками. Карточки реагируют на движение курсора — попробуйте!',
      service1_title: 'Авторские массажи',
      service1_desc: 'Комбинируем методики востока и современную кинезиологию для глубокой проработки и релакса.',
      service2_title: 'Spa-ритуалы',
      service2_desc: 'Работаем с натуральной косметикой, обёртываниями и энергетическими практиками.',
      service3_title: 'Mind &amp; Body программы',
      service3_desc: 'Занятия дыхательными техниками, sound- и light-терапия, индивидуальные wellness-маршруты.',
      service5_title: 'Командные резиденции',
      service5_desc: 'Ретриты для команды с мастер-классами, обменом опытом и совместным созданием новых ритуалов.',
      service6_title: 'Premium-гостеприимство',
      service6_desc: 'Протоколы встречи гостей, signature-напитки и внимание к деталям на каждом этапе визита.',
      culture_tagline: 'Культура и преимущества',
      culture_title: 'Команда, которая вдохновляет друг друга',
      culture_desc: 'Сочетаем дизайнерские пространства, гибкие форматы обучения и заботу о благополучии. Выберите карточку, чтобы увидеть детали.',
      culture1_title: 'Инновационное пространство',
      culture1_desc: 'Сенсорные комнаты, авторский свет и акустика помогают переключаться между режимами.',
      culture2_title: 'Обучение без пауз',
      culture2_desc: 'Модульные программы, наставники, живые разборы и международные сертификаты.',
      culture3_title: 'Забота о благополучии',
      culture3_desc: 'Wellness-пакеты для команды, медицинская страховка и корпоративные ретриты.',
      luxury_tagline: 'Роскошь вне смен',
      luxury_title: 'Жизнь в Дубае, которая вдохновляет каждый день',
      luxury_desc: 'После работы вас ждёт город небоскрёбов и частных пляжей. Мы заботимся о релокации и создаём пространство для отдыха, где легко наполняться энергией и мечтать о большем.',
      luxury_highlight1_title: 'Панорамные резиденции',
      luxury_highlight1_desc: 'Апартаменты вблизи салонов с видом на Марину и дизайнерскими лаунжами для резидентов.',
      luxury_highlight2_title: 'Приватные клубы и события',
      luxury_highlight2_desc: 'Доступ к закрытым wellness-комьюнити, йога-классам на рассвете и вечерним art-сессиям.',
      luxury_highlight3_title: 'Lifestyle-сервис 24/7',
      luxury_highlight3_desc: 'Консьерж поддерживает переезды, бронирования ресторанов и выходные на яхте.',
      luxury_media_label: 'Dubai Marina • панорамное окно Velvet Touch',
      luxury_media_aria: 'Панорамный вид на Дубай из лаунж-зоны Velvet Touch',
      faq_tagline: 'FAQ',
      faq_title: 'Частые вопросы о работе в Velvet Touch',
      faq_desc: 'Мы собрали ключевую информацию о требованиях, адаптации и развитии. Нажмите на вопрос, чтобы увидеть ответ.',
      faq_q1: 'Какие требования к опыту работы для кандидатов?',
      faq_a1: 'Мы рассматриваем специалистов с опытом от двух лет и приветствуем международные сертификаты по массажу, спа и сервису.',
      faq_q2: 'Помогаете ли вы с релокацией и документами?',
      faq_a2: 'Да, HR-команда Velvet Touch сопровождает получение рабочей визы в ОАЭ, медицинских документов и поиск жилья для сотрудников.',
      faq_q3: 'Какие программы адаптации доступны новичкам?',
      faq_a3: 'На старте вы проходите авторский онбординг, shadow-смены с наставником и получаете индивидуальный план развития на три месяца.',
      faq_q4: 'Можно ли развиваться в управлении салонами?',
      faq_a4: 'Мы предлагаем карьерные треки в менеджменте салонов, включая программы лидерства и менторство от руководителей локаций.',
      roles_tagline: 'Открытые позиции',
      roles_title: 'Присоединяйтесь к сети Velvet Touch',
      roles_desc: 'В сети салонов востребованы специалисты разных направлений — от мастеров spa до экспертов сервиса и управления.',
      role1_tag: 'Full-time',
      role1_title: 'Массажный терапевт',
      role1_desc: 'Проводите signature-процедуры, работайте с биоритмами гостей и используйте smart-подсказки.',
      role1_point1: 'Индивидуальные маршруты для гостей',
      role1_point2: 'Доступ к регулярным тренингам',
      role1_point3: 'Гибкий график и поддержка наставника',
      role2_tag: 'Shift-based',
      role2_title: 'Координатор салонов',
      role2_desc: 'Организуйте потоки гостей, управляйте расписанием и создавайте бесшовные коммуникации между локациями.',
      role2_point1: 'Live-панель KPI и аналитика',
      role2_point2: 'Онбординг новых специалистов',
      role2_point3: 'Event-поддержка и партнёрства',
      role3_tag: 'Part-time',
      role3_title: 'Wellness-хост',
      role3_desc: 'Создавайте атмосферу в лаунж-зонах, сопровождайте гостей и рассказывайте о сервисах сети.',
      role3_point1: 'Guest-care стандарты',
      role3_point2: 'Обучение hospitality-практикам',
      role3_point3: 'Участие в специальных событиях',
      role_button: 'Оставить заявку',
      role_location: 'Dubai • Abu Dhabi',
      apply_tagline: 'Оставить заявку',
      apply_title: 'Готовы к новому этапу карьеры?',
      apply_desc: 'Расскажите о себе и своём опыте. Мы свяжемся с вами в течение 24 часов и подберём подходящий формат сотрудничества.',
      placeholder_name: 'Ваше имя',
      placeholder_email: 'Email',
      placeholder_phone: 'WhatsApp / Телефон',
      placeholder_role: 'Желаемая позиция',
      placeholder_message: 'Расскажите о своём опыте',
      form_intro: 'Заявка с сайта Velvet Touch',
      form_labels: {
        name: 'Имя',
        email: 'Email',
        phone: 'WhatsApp / Телефон',
        role: 'Желаемая позиция',
        message: 'Комментарий'
      },
      submit_button: 'Отправить',
      footer_rights: '© 2015–2024 Velvet Touch Salons. Все права защищены.',
      footer_disclaimer: 'Мы создаём инклюзивную среду и открыты для специалистов из разных стран и культур.',
      footer_contact: 'Свяжитесь с нами: <a href="tel:+971585555555">+971 58 866 02 99</a>',
      scroll_top: 'Наверх',
      apply_alert: 'Спасибо! Мы свяжемся с вами в течение 24 часов.'
    },
    en: {
      skip_to_content: 'Skip to main content',
      nav_home: 'Home',
      nav_story: 'Journey',
      nav_experience: 'Programs',
      nav_services: 'Services',
      nav_culture: 'Culture',
      nav_roles: 'Roles',
      nav_faq: 'FAQ',
      nav_contacts: 'Contact',
      nav_menu: 'Menu',
      hero_tagline: 'Careers across the Velvet Touch network',
      hero_title: 'Craft premium wellness experiences in every salon',
      hero_desc: 'We connect design-led spaces, smart technology and human care across all locations. Explore career tracks for hospitality, beauty and management experts.',
      hero_primary: 'Send résumé',
      hero_secondary: 'Explore programs',
      hero_scroll: 'Scroll to explore the experience',
      hero_stat1_label: 'Years in wellness',
      hero_stat2_label: 'Experts on the team',
      hero_stat3_label: 'Loyal guests',
      hero_stat4_label: 'Signature rituals',
      scene_primary_title: 'Signature Retreat',
      scene_primary_meta: 'Immersive aroma • Biorythm music',
      scene_primary_desc: 'We orchestrate lighting scenarios and bespoke massage techniques so guests feel an instant energy flow.',
      scene_secondary_tag: 'Live KPI Dashboard',
      scene_secondary_desc: 'Digital assistants keep schedules and feedback aligned in real time.',
      scene_highlight: 'Harmony starts with the team',
      dream_tagline: 'Dubai lifestyle',
      dream_title: 'Dubai is where your career and lifestyle move in sync',
      dream_desc:
        'From day one you feel the energy of a future-ready metropolis: skyline views, warm climate year-round and a community of experts from around the world. Velvet Touch handles relocation so you instantly live at the level you envisioned.',
      dream_point1: 'Premium residences close to our salons and waterfront districts like Marina, Palm and Downtown.',
      dream_point2: 'Visas, insurance and relocation curated by the Velvet Touch HR team.',
      dream_point3: 'Community experiences: sunset retreats, gourmet evenings and art expeditions across Dubai.',
      dream_primary: 'Apply for relocation',
      dream_secondary: 'Discover our benefits',
      dream_panel1_tag: 'City pulse',
      dream_panel1_title: 'Skyscrapers, beaches and art districts',
      dream_panel1_desc:
        'Explore Palm Jumeirah, Alserkal Avenue and private lounges after shifts—the city sparks new ideas every day.',
      dream_panel2_tag: 'Career boost',
      dream_panel2_title: 'Surrounded by wellness industry leaders',
      dream_panel2_desc:
        'Meet partners, join industry events and grow within a market that celebrates premium service.',
      dream_panel3_tag: 'Comfort 24/7',
      dream_panel3_title: 'Care in every detail and team support',
      dream_panel3_desc:
        'Concierge, transfers and medical care—we take care of logistics so you can focus on inspiring work.',
      story_tagline: 'Candidate path',
      story_title: 'How your introduction to the Velvet Touch network unfolds',
      story_desc: 'Each step is collaborative and supportive. We guide you from the first message to a confident start inside one of our salons.',
      story_step1_title: 'Initial hello',
      story_step1_desc: 'Submit your application and receive a tailored welcome with growth programs curated for you.',
      story_step2_title: 'Digital tour',
      story_step2_desc: 'Immerse yourself in the spa via an interactive tour and a live mentor session.',
      story_step3_title: 'Shadow shift',
      story_step3_desc: 'Spend a day with lead specialists to sense the rhythm and our service standards.',
      story_step4_title: 'Launch & support',
      story_step4_desc: 'Start shifts with mentor guidance, a personal growth roadmap and access to our community.',
      experience_tagline: 'Signature programs',
      experience_title: 'Dynamic experience blocks for guests and team',
      experience_desc: 'We experiment with formats all the time. Switch the scenarios to discover how we create memorable touchpoints.',
      experience1_tag: 'Ambient Journey',
      experience1_title: 'Aurora Relax Flow',
      experience1_desc: 'Guests pick their mood in the app and lighting plus aromas adapt instantly to their state.',
      experience2_tag: 'Team Ritual',
      experience2_title: 'Breath Sync Start',
      experience2_desc: 'We sync breathing, set intentions for the shift and ease into flow with a short meditation.',
      experience3_tag: 'Data Pulse',
      experience3_title: 'Insight Console',
      experience3_desc: 'Live satisfaction metrics and treatment suggestions power truly personal experiences.',
      experience4_tag: 'Creative Lab',
      experience4_title: 'Senses Atelier',
      experience4_desc: 'The crew tests new oils, playlists and techniques during collaborative workshops.',
      experience5_tag: 'Guest Care',
      experience5_title: 'Afterglow Concierge',
      experience5_desc: 'Tailored aftercare tips, WhatsApp follow-ups and invitations to private events.',
      services_tagline: 'Capabilities & services',
      services_title: 'What we craft every day',
      services_desc: 'We balance elevated hospitality with forward-thinking wellness rituals. The cards react to your cursor — give them a try!',
      service1_title: 'Signature massages',
      service1_desc: 'We mix Eastern methods with modern kinesiology for deep relief and relaxation.',
      service2_title: 'Spa rituals',
      service2_desc: 'Working with natural cosmetics, wraps and energy-based practices.',
      service3_title: 'Mind &amp; body programs',
      service3_desc: 'Breathwork sessions, sound & light therapy plus personalised wellness journeys.',
      service5_title: 'Team residencies',
      service5_desc: 'Retreats filled with masterclasses, peer exchange and co-creation of new rituals.',
      service6_title: 'Premium hospitality',
      service6_desc: 'Guest welcoming protocols, signature refreshments and meticulous attention to detail.',
      culture_tagline: 'Culture & perks',
      culture_title: 'A team that inspires one another',
      culture_desc: 'Design-driven spaces, flexible learning paths and holistic wellbeing. Tap a card to reveal more.',
      culture1_title: 'Innovative spaces',
      culture1_desc: 'Sensory rooms, signature lighting and acoustics tailored for each mode.',
      culture2_title: 'Continuous learning',
      culture2_desc: 'Modular programs, mentors, live breakdowns and international certificates.',
      culture3_title: 'Wellbeing care',
      culture3_desc: 'Wellness packages, medical insurance and off-site retreats for the crew.',
      luxury_tagline: 'Beyond the shift',
      luxury_title: 'Dubai living that fuels your inspiration',
      luxury_desc: 'Outside the salon awaits a skyline of private beaches and rooftops. We guide your relocation and create havens where you can recharge, dream and celebrate more.',
      luxury_highlight1_title: 'Panoramic residences',
      luxury_highlight1_desc: 'Apartments near our salons with Marina views and design-led residents lounges.',
      luxury_highlight2_title: 'Private clubs & happenings',
      luxury_highlight2_desc: 'Access to invite-only wellness communities, sunrise yoga and evening art sessions.',
      luxury_highlight3_title: '24/7 lifestyle concierge',
      luxury_highlight3_desc: 'Concierge support for relocations, fine dining reservations and yacht weekends.',
      luxury_media_label: 'Dubai Marina • Velvet Touch lounge window',
      luxury_media_aria: 'Panoramic Dubai view from the Velvet Touch lounge window',
      faq_tagline: 'FAQ',
      faq_title: 'Frequently asked questions about working at Velvet Touch',
      faq_desc: 'We collected the essentials on requirements, onboarding and growth. Tap a question to reveal the answer.',
      faq_q1: 'What experience do candidates need?',
      faq_a1: 'We welcome specialists with at least two years of practice and value international certifications in massage, spa and hospitality.',
      faq_q2: 'Do you assist with relocation and paperwork?',
      faq_a2: 'Yes, the Velvet Touch HR team manages UAE work visas, medical documents and supports newcomers with housing search.',
      faq_q3: 'What onboarding programmes are available for newcomers?',
      faq_a3: 'Your first weeks include signature onboarding, shadow shifts with a mentor and a tailored three-month growth roadmap.',
      faq_q4: 'Can I grow into salon management?',
      faq_a4: 'We offer leadership tracks across the salon network, including management coaching and mentoring from location directors.',
      roles_tagline: 'Open roles',
      roles_title: 'Join the Velvet Touch network',
      roles_desc: 'Our salon collective welcomes specialists across wellness, hospitality and operations.',
      role1_tag: 'Full-time',
      role1_title: 'Massage therapist',
      role1_desc: 'Lead signature treatments, work with guest biorhythms and leverage smart prompts.',
      role1_point1: 'Tailored guest journeys',
      role1_point2: 'Ongoing training access',
      role1_point3: 'Flexible schedule & mentor support',
      role2_tag: 'Shift-based',
      role2_title: 'Salon coordinator',
      role2_desc: 'Orchestrate guest flows, manage schedules and keep communications seamless across locations.',
      role2_point1: 'Live KPI & analytics dashboard',
      role2_point2: 'Onboarding new specialists',
      role2_point3: 'Event support & partnerships',
      role3_tag: 'Part-time',
      role3_title: 'Wellness host',
      role3_desc: 'Curate lounge ambience, guide guests and introduce the network\'s services.',
      role3_point1: 'Guest-care excellence',
      role3_point2: 'Hospitality coaching',
      role3_point3: 'Participation in special events',
      role_button: 'Apply now',
      role_location: 'Dubai • Abu Dhabi',
      apply_tagline: 'Apply now',
      apply_title: 'Ready for your next chapter?',
      apply_desc: 'Share a few details about yourself and we will get in touch within 24 hours to shape the best-fit collaboration.',
      placeholder_name: 'Your name',
      placeholder_email: 'Email',
      placeholder_phone: 'WhatsApp / Phone',
      placeholder_role: 'Desired position',
      placeholder_message: 'Tell us about your experience',
      form_intro: 'Application from the Velvet Touch website',
      form_labels: {
        name: 'Name',
        email: 'Email',
        phone: 'WhatsApp / Phone',
        role: 'Desired position',
        message: 'Message'
      },
      submit_button: 'Send',
      footer_rights: '© 2015–2024 Velvet Touch Salons. All rights reserved.',
      footer_disclaimer: 'We foster an inclusive environment and welcome specialists from every culture.',
      footer_contact: 'Contact us: <a href="tel:+971588660299">+971 58 866 0299</a>',
      scroll_top: 'Back to top',
      apply_alert: 'Thank you! We will reach out within 24 hours.'
    }
  };

  const html = document.documentElement;
  const nav = document.getElementById('main-nav');
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const langSwitcher = document.getElementById('lang-switcher');
  const dotsContainer = document.getElementById('experience-dots');
  const carouselViewport = document.querySelector('.carousel__viewport');
  const carouselTrack = document.getElementById('experience-track');
  const carouselCards = carouselTrack ? Array.from(carouselTrack.children) : [];
  const carouselControls = document.querySelectorAll('[data-carousel]');
  const storySection = document.querySelector('.story');
  const hero = document.getElementById('hero');
  const tiltCards = document.querySelectorAll('[data-tilt]');
  const stats = document.querySelectorAll('[data-stat]');
  const scrollTopBtn = document.getElementById('scroll-top');
  const applyForm = document.getElementById('application-form');

  let currentLang = 'ru';
  let activeSlide = 0;
  let carouselInterval = null;

  const setLanguage = (lang) => {
    const dictionary = translations[lang];
    if (!dictionary) return;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.dataset.i18n;
      if (dictionary[key]) {
        el.innerHTML = dictionary[key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.dataset.i18nPlaceholder;
      if (dictionary[key]) {
        el.placeholder = dictionary[key];
      }
    });

    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const key = el.dataset.i18nAria;
      if (dictionary[key]) {
        el.setAttribute('aria-label', dictionary[key]);
      }
    });

    langSwitcher.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.classList.toggle('is-active', btn.dataset.lang === lang);
    });

    stats.forEach((stat) => {
      const valueEl = stat.querySelector('.stat__value');
      if (!valueEl) return;
      const target = Number(valueEl.dataset.count || valueEl.textContent.replace(/\D/g, ''));
      if (!Number.isNaN(target)) {
        const suffix = valueEl.dataset.suffix || '';
        const formatted = target.toLocaleString(lang === 'ru' ? 'ru-RU' : 'en-US');
        valueEl.textContent = `${formatted}${suffix}`;
      }
    });

    html.setAttribute('lang', lang === 'ru' ? 'ru' : 'en');
    currentLang = lang;
  };

  setLanguage(currentLang);

  if (langSwitcher) {
    langSwitcher.addEventListener('click', (event) => {
      const button = event.target.closest('button[data-lang]');
      if (!button) return;
      const nextLang = button.dataset.lang;
      if (nextLang !== currentLang) {
        setLanguage(nextLang);
      }
    });
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('is-active');
      navMenu.classList.toggle('is-open');
    });

    navMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('is-active');
        navMenu.classList.remove('is-open');
      });
    });
  }

  const handleNavState = () => {
    if (!nav) return;
    if (window.scrollY > 32) {
      nav.classList.add('is-scrolled');
    } else {
      nav.classList.remove('is-scrolled');
    }
  };

  handleNavState();
  window.addEventListener('scroll', handleNavState, { passive: true });

  const animateElements = document.querySelectorAll('.js-animate');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  animateElements.forEach((el) => observer.observe(el));

  const animateStats = () => {
    stats.forEach((stat) => {
      const valueEl = stat.querySelector('.stat__value');
      if (!valueEl) return;
      const target = Number(valueEl.dataset.count || valueEl.textContent);
      const suffix = valueEl.dataset.suffix || '';
      let start = null;
      const duration = 1200;

      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(eased * target).toLocaleString(currentLang === 'ru' ? 'ru-RU' : 'en-US');
        valueEl.textContent = `${current}${suffix}`;
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      const handleEntry = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            requestAnimationFrame(step);
            statsObserver.unobserve(stat);
          }
        });
      };

      const statsObserver = new IntersectionObserver(handleEntry, { threshold: 0.6 });
      statsObserver.observe(stat);
    });
  };

  animateStats();

  const updateStoryProgress = () => {
    if (!storySection) return;
    const progressEl = storySection.querySelector('.story__progress');
    const steps = Array.from(storySection.querySelectorAll('.story-step'));
    if (!progressEl || steps.length === 0) return;

    const rect = storySection.getBoundingClientRect();
    const viewHeight = window.innerHeight;
    const offset = Math.min(Math.max((viewHeight - rect.top) / (rect.height + viewHeight), 0), 1);
    progressEl.style.transform = `scaleY(${offset})`;

    const activeIndex = Math.min(steps.length - 1, Math.floor(offset * steps.length + 0.2));
    steps.forEach((step, index) => {
      step.classList.toggle('is-active', index <= activeIndex);
    });
  };

  updateStoryProgress();

  window.addEventListener('scroll', () => {
    updateStoryProgress();
  }, { passive: true });

  const buildDots = () => {
    if (!dotsContainer || carouselCards.length === 0) return;
    dotsContainer.innerHTML = '';
    carouselCards.forEach((_, index) => {
      const button = document.createElement('button');
      button.className = 'carousel__dot';
      button.type = 'button';
      button.setAttribute('role', 'tab');
      button.addEventListener('click', () => goToSlide(index));
      if (index === activeSlide) {
        button.classList.add('is-active');
      }
      dotsContainer.appendChild(button);
    });
  };

  const goToSlide = (index) => {
    if (!carouselTrack || carouselCards.length === 0) return;
    const total = carouselCards.length;
    activeSlide = (index + total) % total;

    const cardWidth = carouselCards[0].getBoundingClientRect().width;
    const gap = parseFloat(getComputedStyle(carouselTrack).columnGap || getComputedStyle(carouselTrack).gap || '0');
    const offset = activeSlide * (cardWidth + gap);
    carouselTrack.style.transform = `translateX(${-offset}px)`;

    carouselCards.forEach((card, cardIndex) => {
      card.classList.toggle('is-active', cardIndex === activeSlide);
    });

    if (dotsContainer) {
      dotsContainer.querySelectorAll('.carousel__dot').forEach((dot, dotIndex) => {
        dot.classList.toggle('is-active', dotIndex === activeSlide);
      });
    }
  };

  const startCarousel = () => {
    if (carouselCards.length <= 1) return;
    stopCarousel();
    carouselInterval = window.setInterval(() => {
      goToSlide(activeSlide + 1);
    }, 5000);
  };

  const stopCarousel = () => {
    if (carouselInterval) {
      window.clearInterval(carouselInterval);
      carouselInterval = null;
    }
  };

  buildDots();
  goToSlide(activeSlide);
  startCarousel();

  carouselControls.forEach((control) => {
    control.addEventListener('click', () => {
      const direction = control.dataset.carousel;
      if (direction === 'prev') {
        goToSlide(activeSlide - 1);
      } else {
        goToSlide(activeSlide + 1);
      }
    });
  });

  if (carouselViewport) {
    carouselViewport.addEventListener('mouseenter', stopCarousel);
    carouselViewport.addEventListener('mouseleave', startCarousel);
  }

  window.addEventListener('resize', () => {
    goToSlide(activeSlide);
  });

  const applyParallax = (event) => {
    if (!hero) return;
    const rect = hero.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    const elements = hero.querySelectorAll('[data-depth]');
    elements.forEach((el) => {
      const depth = parseFloat(el.dataset.depth || '0');
      const moveX = x * depth * 60;
      const moveY = y * depth * 60;
      el.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
    });
  };

  if (hero) {
    hero.addEventListener('pointermove', applyParallax);
    hero.addEventListener('pointerleave', () => {
      hero.querySelectorAll('[data-depth]').forEach((el) => {
        el.style.transform = '';
      });
    });
  }

  const handleTilt = (event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `rotateX(${(-y * 8).toFixed(2)}deg) rotateY(${(x * 10).toFixed(2)}deg)`;
  };

  tiltCards.forEach((card) => {
    card.addEventListener('pointermove', handleTilt);
    card.addEventListener('pointerleave', () => {
      card.style.transform = '';
    });
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  if (applyForm) {
    applyForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(applyForm);
      const sanitize = (value) => (typeof value === 'string' ? value.trim() : '');
      const details = {
        name: sanitize(formData.get('name')),
        email: sanitize(formData.get('email')),
        phone: sanitize(formData.get('phone')),
        role: sanitize(formData.get('role')),
        message: sanitize(formData.get('message'))
      };

      const localePack = translations[currentLang] || translations.ru;
      const fallbackPack = translations.ru;
      const labels = localePack.form_labels || fallbackPack.form_labels;
      const intro = localePack.form_intro || fallbackPack.form_intro;

      const composedMessage = [intro]
        .concat(
          Object.entries(details)
            .filter(([, value]) => value)
            .map(([key, value]) => `${labels?.[key] || key}: ${value}`)
        )
        .join('\n');

      const whatsappNumber = '971588660299';
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(composedMessage)}`;
      const openedWindow = window.open(whatsappUrl, '_blank', 'noopener');

      if (!openedWindow) {
        window.location.href = whatsappUrl;
      }

      const alertMessage = localePack.apply_alert || fallbackPack.apply_alert;
      if (alertMessage) {
        alert(alertMessage);
      }

      applyForm.reset();
    });
  }
});
