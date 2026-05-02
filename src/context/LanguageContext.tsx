import React, { createContext, useContext, useState } from "react";

type Language = "pl" | "en";

interface Translations {
  nav: {
    home: string;
    about: string;
    services: string;
    contact: string;
  };
  hero: {
    title: string;
    description: string;
    cta: string;
  };
  about: {
    heading: string;
    brand: string;
    paragraphs: string[];
  };
  services: {
    heading: string;
    items: string[];
  };
  contact: {
    heading: string;
    email: string;
    telegram: string;
    whatsapp: string;
    hours: string;
  };
  form: {
    heading: string;
    subheading: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
    servicePlaceholder: string;
    formTitle: string;
    submit: string;
    success: string;
    error: string;
  };
  map: {
    addressLine1: string;
    addressLine2: string;
  };
  footer: {
    companyName: string;
    email: string;
    address: string;
    copyright: string;
    contactNumber: string;
    contactLabel: string;
    privacy: string;
    terms: string;
    dataProcessing: string;
  };
}

const pl: Translations = {
  nav: {
    home: "Główna",
    about: "O nas",
    services: "Nasze usługi",
    contact: "Łączność",
  },
  hero: {
    title: "NAJSZYBSZA I NAJWYŻSZA DOSTAWA TOWARÓW W POLSCE",
    description: "Firma, której możesz zaufać. Wybór, którego nie pożałujesz.",
    cta: "Dowiedz się więcej",
  },
  about: {
    heading: "O NAS",
    brand: "NataWest",
    paragraphs: [
      "to nowoczesna firma e‑commerce zajmująca się sprzedażą i dystrybucją towarów przez internet. Współpracujemy z największymi marketplace'ami, takimi jak Allegro i Amazon, a także rozwijamy własne kanały sprzedaży online.",
      "Łączymy producentów, dostawców i klientów w jeden sprawny system sprzedaży internetowej, oferując zarówno sprzedaż detaliczną, jak i hurtową oraz elastyczne formy współpracy.",
      "Dzięki doświadczeniu w imporcie, eksporcie i sprzedaży online skutecznie wprowadzamy produkty na rynek i pomagamy partnerom rozwijać sprzedaż w internecie.",
    ],
  },
  services: {
    heading: "NASZE USŁUGI",
    items: [
      "HANDEL DETALICZNY ONLINE (E-COMMERCE)",
      "POŚREDNICTWO W SPRZEDAŻY TOWARÓW RÓŻNEGO ASORTYMENTU",
      "HURTOWY HANDEL ELEKTRONIKĄ UŻYTKOWĄ",
      "HURTOWY HANDEL INNYMI TOWARAMI",
      "HANDEL HURTOWY NIESPECJALISTYCZNY",
      "INNY HANDEL DETALICZNY POZA SKLEPAMI",
      "TRANSPORT I LOGISTYKA (MOŻLIWOŚĆ DOSTAWY TOWARÓW)",
    ],
  },
  contact: {
    heading: "ŁĄCZNOŚĆ",
    email: "Email: natawest23@gmail.com",
    telegram: "Telegram: +48 690 130 305",
    whatsapp: "WhatsApp: +48 690 130 305",
    hours: "Godziny otwarcia: 8:00 - 16:00",
  },
  form: {
    heading: "Masz pytania lub chcesz złożyć wniosek?",
    subheading:
      "Wypełnij krótki formularz po prawej stronie — zajmie to tylko chwilę. Nasz specjalista skontaktuje się z Tobą tak szybko, jak to możliwe, aby odpowiedzieć na wszystkie pytania i pomóc w kolejnym kroku.",
    namePlaceholder: "Twoje imię",
    emailPlaceholder: "Twoja poczta",
    phonePlaceholder: "Twój numer telefonu",
    servicePlaceholder: "Jakiej usługi potrzebujesz?",
    formTitle: "Zostaw prośbę",
    submit: "Wysłać",
    success: "Wiadomość wysłana! Skontaktujemy się wkrótce.",
    error: "Błąd wysyłania. Spróbuj ponownie.",
  },
  map: {
    addressLine1: "Adres fizyczny: Ul. Kawaleryjska 17A/lokal 6",
    addressLine2: "15-324, Białystok",
  },
  footer: {
    companyName: "NataWest spółka z ograniczoną odpowiedzialnością",
    email: "Email: natawest23@gmail.com",
    address: "15-324 BIAŁYSTOK, ul. KAWALERYJSKA 18B/6",
    copyright: "© 2023 NataWest sp. z o.o.",
    contactNumber: "+48 513 377 651",
    contactLabel: "Numer kontaktowy",
    privacy: "Polityka prywatności",
    terms: "Umowa użytkownika",
    dataProcessing: "Przetwarzanie danych osobowych",
  },
};

const en: Translations = {
  nav: {
    home: "Home",
    about: "About us",
    services: "Our services",
    contact: "Contact",
  },
  hero: {
    title: "THE FASTEST AND HIGHEST GOODS DELIVERY IN POLAND",
    description: "A company you can trust. A choice you won't regret.",
    cta: "Learn more",
  },
  about: {
    heading: "ABOUT US",
    brand: "NataWest",
    paragraphs: [
      "is a modern e-commerce company engaged in the sale and distribution of goods online. We cooperate with the largest marketplaces such as Allegro and Amazon, and also develop our own online sales channels.",
      "We connect manufacturers, suppliers and customers into one efficient internet sales system, offering both retail and wholesale trade as well as flexible forms of cooperation.",
      "Thanks to experience in import, export and online sales, we effectively introduce products to the market and help partners develop internet sales.",
    ],
  },
  services: {
    heading: "OUR SERVICES",
    items: [
      "ONLINE RETAIL TRADE (E-COMMERCE)",
      "INTERMEDIATION IN THE SALE OF GOODS OF VARIOUS ASSORTMENTS",
      "WHOLESALE TRADE OF CONSUMER ELECTRONICS",
      "WHOLESALE TRADE OF OTHER GOODS",
      "NON-SPECIALIZED WHOLESALE TRADE",
      "OTHER RETAIL TRADE OUTSIDE STORES",
      "TRANSPORT AND LOGISTICS (POSSIBILITY OF GOODS DELIVERY)",
    ],
  },
  contact: {
    heading: "CONTACT",
    email: "Email: natawest23@gmail.com",
    telegram: "Telegram: +48 690 130 305",
    whatsapp: "WhatsApp: +48 690 130 305",
    hours: "Opening hours: 8:00 - 16:00",
  },
  form: {
    heading: "Have questions or want to submit a request?",
    subheading:
      "Fill out the short form on the right — it will only take a moment. Our specialist will contact you as soon as possible to answer all questions and help with the next step.",
    namePlaceholder: "Your name",
    emailPlaceholder: "Your email",
    phonePlaceholder: "Your phone number",
    servicePlaceholder: "What service do you need?",
    formTitle: "Leave a request",
    submit: "Send",
    success: "Message sent! We'll be in touch soon.",
    error: "Error sending. Please try again.",
  },
  map: {
    addressLine1: "Physical address: Ul. Kawaleryjska 17A/apt 6",
    addressLine2: "15-324, Białystok",
  },
  footer: {
    companyName: "NataWest limited liability company",
    email: "Email: natawest23@gmail.com",
    address: "15-324 BIAŁYSTOK, ul. KAWALERYJSKA 18B/6",
    copyright: "© 2023 NataWest sp. z o.o.",
    contactNumber: "+48 513 377 651",
    contactLabel: "Contact number",
    privacy: "Privacy policy",
    terms: "User agreement",
    dataProcessing: "Personal data processing",
  },
};

const translations: Record<Language, Translations> = { pl, en };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "pl",
  setLanguage: () => {},
  t: pl,
});

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguage] = useState<Language>("pl");
  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, t: translations[language] }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
