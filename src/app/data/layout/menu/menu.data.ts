// Imports from Models
import { LanguageEnum } from '../../../models/language.model';

export const MenuFrContent = [
  { displayName: 'Accueil', iconName: 'home', route: '/home', type: `ROUTE` },
  {
    displayName: 'Artemis',
    iconName: '',
    route: '',
    type: `PARENT`,
    children: [
      { displayName: 'Qui sommes-nous ?', iconName: 'account_balance', route: '/who-are-we', type: `ROUTE` },
      { displayName: 'Approche', iconName: 'my_location', route: '/approach', type: `ROUTE` },
      { displayName: 'Principes', iconName: 'emoji_flags', route: '/principles', type: `ROUTE` },
      { displayName: 'Valeurs', iconName: 'menu_book', route: '/values', type: `ROUTE` },
      { displayName: 'Déontologie', iconName: 'policy', route: '/ethics', type: `ROUTE` }
    ]
  },
  {
    displayName: 'Coaching',
    iconName: '',
    route: '',
    type: `PARENT`,
    children: [
      { displayName: 'Coaching individuel', iconName: 'adjust', route: '/home', type: `ROUTE` },
      { displayName: `Coaching d'équipe`, iconName: 'group_work', route: '/home', type: `ROUTE` },
      { displayName: 'Coaching de dirigeant', iconName: 'supervisor_account', route: '/home', type: `ROUTE` },
      { displayName: `Coaching d'organisation`, iconName: 'apps', route: '/home', type: `ROUTE` }
    ]
  },
  {
    displayName: 'Consulting',
    iconName: '',
    route: '',
    type: `PARENT`,
    children: [
      { displayName: 'Change management', iconName: 'bubble_chart', route: '/change-management', type: `ROUTE` },
      { displayName: 'Team building', iconName: 'people', route: '/team-building', type: `ROUTE` }
    ]
  },
  { displayName: 'Contact', iconName: 'mail', route: '/contact', type: `ROUTE` },
  {
    displayName: 'Langue',
    iconName: '',
    route: '',
    type: `PARENT_FLAG`,
    children: [
      {
        displayName: 'Français',
        language: LanguageEnum.FRENCH,
        iconName: 'assets/images/flags/france.png',
        type: `FLAG`
      },
      { displayName: 'English', language: LanguageEnum.ENGLISH, iconName: 'assets/images/flags/uk.png', type: `FLAG` },
      {
        displayName: 'русский',
        language: LanguageEnum.RUSSIAN,
        iconName: 'assets/images/flags/russia.png',
        type: `FLAG`
      }
    ]
  }
];

export const MenuEngContent = [
  { displayName: 'Home', iconName: 'home', route: '/home', type: `ROUTE` },
  {
    displayName: 'Artemis',
    iconName: '',
    route: '',
    type: `PARENT`,
    children: [
      { displayName: 'Who are we?', iconName: 'account_balance', route: '/who-are-we', type: `ROUTE` },
      { displayName: 'Approach', iconName: 'my_location', route: '/approach', type: `ROUTE` },
      { displayName: 'Principles', iconName: 'emoji_flags', route: '/principles', type: `ROUTE` },
      { displayName: 'Values', iconName: 'menu_book', route: '/values', type: `ROUTE` },
      { displayName: 'Ethics', iconName: 'policy', route: '/ethics', type: `ROUTE` }
    ]
  },
  {
    displayName: 'Coaching',
    iconName: '',
    route: '',
    type: `PARENT`,
    children: [
      { displayName: 'Individual Coaching', iconName: 'adjust', route: '/home', type: `ROUTE` },
      { displayName: 'Team Coaching', iconName: 'group_work', route: '/home', type: `ROUTE` },
      { displayName: 'CEO Coaching', iconName: 'supervisor_account', route: '/home', type: `ROUTE` },
      { displayName: 'Organisation Coaching', iconName: 'apps', route: '/home', type: `ROUTE` }
    ]
  },
  {
    displayName: 'Consulting',
    iconName: '',
    route: '',
    type: `PARENT`,
    children: [
      { displayName: 'Change management', iconName: 'bubble_chart', route: '/change-management', type: `ROUTE` },
      { displayName: 'Team building', iconName: 'people', route: '/team-building', type: `ROUTE` }
    ]
  },
  { displayName: 'Contact', iconName: 'mail', route: '/contact', type: `ROUTE` },
  {
    displayName: 'Language',
    iconName: '',
    route: '',
    type: `PARENT_FLAG`,
    children: [
      {
        displayName: 'Français',
        language: LanguageEnum.FRENCH,
        iconName: 'assets/images/flags/france.png',
        type: `FLAG`
      },
      { displayName: 'English', language: LanguageEnum.ENGLISH, iconName: 'assets/images/flags/uk.png', type: `FLAG` },
      {
        displayName: 'русский',
        language: LanguageEnum.RUSSIAN,
        iconName: 'assets/images/flags/russia.png',
        type: `FLAG`
      }
    ]
  }
];

export const MenuRusContent = [
  { displayName: 'Главная страница', iconName: 'home', route: '/home', type: `ROUTE` },
  {
    displayName: 'Artemis',
    iconName: '',
    route: '',
    type: `PARENT`,
    children: [
      { displayName: 'О нас', iconName: 'account_balance', route: '/who-are-we', type: `ROUTE` },
      { displayName: 'Подход', iconName: 'my_location', route: '/approach', type: `ROUTE` },
      { displayName: 'Принципы', iconName: 'emoji_flags', route: '/principles', type: `ROUTE` },
      { displayName: 'Ценности', iconName: 'menu_book', route: '/values', type: `ROUTE` },
      { displayName: 'Профессиональная этика', iconName: 'policy', route: '/ethics', type: `ROUTE` }
    ]
  },
  {
    displayName: 'Коучинг',
    iconName: '',
    route: '',
    type: `PARENT`,
    children: [
      { displayName: 'Индивидуальный коучинг', iconName: 'adjust', route: '/home', type: `ROUTE` },
      { displayName: 'Коучинг команды', iconName: 'group_work', route: '/home', type: `ROUTE` },
      { displayName: 'Коучинг руководителя', iconName: 'supervisor_account', route: '/home', type: `ROUTE` },
      { displayName: 'Коучинг организации', iconName: 'apps', route: '/home', type: `ROUTE` }
    ]
  },
  {
    displayName: 'Консалтинг',
    iconName: '',
    route: '',
    type: `PARENT`,
    children: [
      { displayName: 'Управление изменениями', iconName: 'bubble_chart', route: '/change-management', type: `ROUTE` },
      { displayName: 'Тимбилдинг', iconName: 'people', route: '/team-building', type: `ROUTE` }
    ]
  },
  { displayName: 'Контакты', iconName: 'mail', route: '/contact', type: `ROUTE` },
  {
    displayName: 'язык',
    iconName: '',
    route: '',
    type: `PARENT_FLAG`,
    children: [
      {
        displayName: 'Français',
        language: LanguageEnum.FRENCH,
        iconName: 'assets/images/flags/france.png',
        type: `FLAG`
      },
      { displayName: 'English', language: LanguageEnum.ENGLISH, iconName: 'assets/images/flags/uk.png', type: `FLAG` },
      {
        displayName: 'русский',
        language: LanguageEnum.RUSSIAN,
        iconName: 'assets/images/flags/russia.png',
        type: `FLAG`
      }
    ]
  }
];
