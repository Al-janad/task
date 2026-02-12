
import { Project } from './types';

export const SKILLS = [
  { name: 'React & TypeScript', level: 95 },
  { name: 'Mobile App Development', level: 90 },
  { name: 'UI/UX Design', level: 85 },
  { name: 'Backend Systems', level: 80 }
];

export const PROJECTS: Project[] = [
  {
    id: 'mohimati',
    title: { ar: 'تطبيق مهمتي', en: 'Mohimati App' },
    description: {
      ar: 'تطبيق متخصص في الإنتاجية وإدارة الوقت، يجمع بين إدارة المهام وتتبع العادات.',
      en: 'A specialized app for productivity and time management, combining task management with habit tracking.'
    },
    fullDescription: {
      ar: 'هل تبحث عن طريقة فعّالة لتنظيم حياتك اليومية؟ هذا التطبيق يجمع بين إدارة المهام، تتبّع العادات، والتخطيط الذكي في مكان واحد، ليمنحك تجربة متكاملة تساعدك على التركيز، الإنجاز، والتحسين المستمر. أنشئ مهامك اليومية، خصّصها ضمن مجموعات مرنة، ولا تفوّت أي موعد بفضل التذكيرات الذكية والـ Widget العملي.',
      en: 'Looking for an effective way to organize your daily life? This app combines task management, habit tracking, and smart planning in one place, giving you an integrated experience that helps you focus, achieve, and continuously improve. Create your daily tasks, customize them in flexible groups, and never miss a deadline thanks to smart reminders and practical widgets.'
    },
    features: [
      { title: { ar: 'إدارة المهام بسهولة', en: 'Easy Task Management' }, icon: '📋' },
      { title: { ar: 'تتبّع العادات', en: 'Habit Tracking' }, icon: '🔄' },
      { title: { ar: 'تذكيرات ذكية', en: 'Smart Reminders' }, icon: '🔔' },
      { title: { ar: 'التقويم', en: 'Calendar' }, icon: '📅' },
      { title: { ar: 'جدولة البريد', en: 'Email Scheduling' }, icon: '📧' },
      { title: { ar: 'تقارير أنيقة', en: 'Elegant Reports' }, icon: '📊' },
      { title: { ar: 'نسخ احتياطي', en: 'Backup' }, icon: '☁️' },
      { title: { ar: 'إدارة التخلاف', en: 'Storage Manager' }, icon: '💾' }
    ],
    tech: [],
    imageUrl: 'https://i.postimg.cc/x8XkdLLp/icon-main2.png',
    screenshots: [
      'https://i.postimg.cc/Y9nGkdLY/1.jpg', // 0: Main Hero
      'https://i.postimg.cc/Y9nGkdLY/1.jpg', // 1: Feature 1
      'https://i.postimg.cc/VLTh51Pn/10.jpg', // 2
      'https://i.postimg.cc/3RS47t0X/3.jpg', // 3
      'https://i.postimg.cc/8c7FCLLm/5.jpg', // 4
      'https://i.postimg.cc/507Y1sQF/2.jpg', // 5
      'https://i.postimg.cc/63j2wM4f/4.jpg', // 6
      'https://i.postimg.cc/sxMB255n/7.jpg', // 7
      'https://i.postimg.cc/5yXHt887/8.jpg', // 8
      'https://i.postimg.cc/tJs1gFFk/6.jpg'  // 9
    ],
    primaryColor: '#10b981'
  },
  {
    id: 'aqari',
    title: { ar: 'تطبيق عقاري', en: 'Aqari App' },
    description: {
      ar: 'مساعدك الذكي لإدارة جميع ممتلكاتك العقارية بكفاءة، من إضافة الوحدات وتفاصيل المستأجرين إلى العقود والتقارير المالية.',
      en: 'Your smart assistant to efficiently manage all your real estate properties, from adding units and tenant details to contracts and financial reports.'
    },
    fullDescription: {
      ar: 'تطبيق "عقاري" هو الحل الشامل لإدارة ممتلكاتك. أضف العقارات، الشقق، والمحلات، وسجّل بيانات المستأجرين وعقودهم، وتتبع الإيصالات المالية بتقارير مفصلة. وبفضل تخزين البيانات السحابي، يمكنك الوصول لمعلوماتك بأمان في أي وقت ومن أي مكان.',
      en: '"Aqari" is the all-in-one solution for property management. Add properties, apartments, and shops, manage tenant data and contracts, and track financial receipts with detailed reports. With cloud data storage, you can securely access your information anytime, anywhere.'
    },
    features: [
      { title: { ar: 'إدارة الوحدات', en: 'Unit Management' }, icon: '🏢' },
      { title: { ar: 'سجلات المستأجرين', en: 'Tenant Records' }, icon: '👤' },
      { title: { ar: 'العقود الإلكترونية', en: 'Digital Contracts' }, icon: '✍️' },
      { title: { ar: 'تتبع الإيصالات', en: 'Receipt Tracking' }, icon: '💰' },
      { title: { ar: 'تقارير شاملة', en: 'Comprehensive Reports' }, icon: '📊' },
      { title: { ar: 'وصول سحابي', en: 'Cloud Access' }, icon: '☁️' }
    ],
    tech: [],
    imageUrl: 'https://i.postimg.cc/x1PNdfWM/icon.png',
    screenshots: [
        'https://i.postimg.cc/JnkFb23y/1.jpg',
        'https://images.unsplash.com/photo-1582408921715-18e7806367c1?q=80&w=1000&auto=format&fit=crop'
    ],
    primaryColor: '#3b82f6'
  }
];

export const UI_STRINGS = {
  ar: {
    brand: "الجند | Al-Janad",
    brandSubtitle: "للحلول الرقمية",
    navHome: "الرئيسية",
    navApps: "تطبيقاتنا",
    heroBadge: "مؤسسة الجند للتقنية والابتكار",
    heroTitlePrefix: "الجند | ",
    heroTitleSuffix: "مستقبل التطبيقات الذكية",
    heroDesc: "نحن في الجند نكرس جهودنا لبناء وتطوير حلول رقمية خاصة تهدف إلى الارتقاء بتجربة المستخدم وتسهيل الحياة اليومية من خلال تطبيقاتنا المبتكرة.",
    heroBtn: "اكتشف تطبيقاتنا",
    projectsTitle: "تطبيقاتنا الخاصة",
    projectsDesc: "نحن لا نقوم بتطوير تطبيقات للعملاء، بل نركز كامل طاقتنا الإبداعية على بناء وتنمية مشاريعنا التقنية الخاصة.",
    footerSubtitle: "للحلول التقنية المبتكرة",
    viewApp: "استعراض التطبيق",
    langName: "English",
    rights: "جميع الحقوق محفوظة. الجند للتقنية.",
    mainFeatures: "الميزات الرئيسية",
    ctaMohimati: "المزيد من التفاصيل",
    backToPortfolio: "العودة للمعرض",
    appDemoTitle: "واجهة تطبيق مهمتي"
  },
  en: {
    brand: "Al-Janad",
    brandSubtitle: "Digital Solutions",
    navHome: "Home",
    navApps: "Our Apps",
    heroBadge: "Al-Janad for Technology & Innovation",
    heroTitlePrefix: "Al-Janad | ",
    heroTitleSuffix: "Future of Smart Apps",
    heroDesc: "At Al-Janad, we dedicate our efforts to building and developing private digital solutions aimed at enhancing user experience and facilitating daily life through our innovative apps.",
    heroBtn: "Discover Our Apps",
    projectsTitle: "Our Own Apps",
    projectsDesc: "We do not develop apps for clients; instead, we focus our full creative energy on building and growing our own private tech projects.",
    footerSubtitle: "Innovative Tech Solutions",
    viewApp: "View App",
    langName: "العربية",
    rights: "All rights reserved. Al-Janad Tech.",
    mainFeatures: "Key Features",
    ctaMohimati: "More Details",
    backToPortfolio: "Back to Portfolio",
    appDemoTitle: "Mohimati App Demo"
  }
};
