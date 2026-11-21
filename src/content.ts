export type Lang = 'en' | 'ua';

export const content = {
  ua: {
    nav: ['Кейси', 'Про мене', 'Контакти'],
    write: 'Написати',
    name: 'Дарія Демко',
    title: 'UI/UX дизайнерка, яка поєднує UX-мислення, бізнес-контекст і сильний UI',
    lead: "Проєктую інтерфейси, які приводять людей до дії: спершу з'ясовую, що шукає користувач і де він вагається, а потім будую сторінку, яка веде його до заявки чи покупки.",
    cta: 'Дивитися роботи',
    cv: 'Завантажити резюме',
  },
  // English is the default language (see docs plan, Q2). Draft translation — please review.
  en: {
    nav: ['Cases', 'About me', 'Contacts'],
    write: 'Contact me',
    name: 'Dariia Demko',
    title: 'UI/UX designer who combines UX thinking, business context and strong UI',
    lead: 'I design interfaces that lead people to action: first I find out what the user is looking for and where they hesitate, then I build a page that leads them to an enquiry or a purchase.',
    cta: 'View my work',
    cv: 'Download CV',
  },
} as const;
