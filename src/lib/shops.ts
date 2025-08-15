
export interface Shop {
  id: number;
  name: string;
  category: string;
  floor: number;
  logo: string;
  hint: string;
  description: string;
  images: string[];
  promotions: string[];
  workingHours: string;
  phone: string;
}

export const shopsData: Shop[] = [
  { id: 1, name: "Kari", category: "Обувь", floor: 1, logo: "/images/shops/default-logo.png", hint: "shoe logo", description: "Модная и доступная обувь для всей семьи. Откройте для себя нашу новую коллекцию.", images: ["/images/shops/default-image.png", "/images/shops/default-image.png"], promotions: ["Скидка 20% на новые поступления"], workingHours: "10:00 - 21:00", phone: "(123) 555-1010" },
  { id: 2, name: "ANITA", category: "Одежда", floor: 1, logo: "/images/shops/default-logo.png", hint: "fashion logo", description: "Стильная женская одежда на любой случай. Откройте для себя последние тренды.", images: ["/images/shops/default-image.png"], promotions: [], workingHours: "10:00 - 21:00", phone: "(123) 555-2020" },
  { id: 4, name: "НАПРОТИФ", category: "Одежда", floor: 1, logo: "/images/shops/default-logo.png", hint: "clothing store", description: "Магазин современной одежды для мужчин и женщин. Всегда актуальные коллекции.", images: ["/images/shops/default-image.png", "/images/shops/default-image.png"], promotions: ["Подарок при покупке от 50$"], workingHours: "10:00 - 21:00", phone: "(123) 555-4040" },
  { id: 5, name: "TREND", category: "Одежда", floor: 1, logo: "/images/shops/default-logo.png", hint: "fashion logo", description: "Женская одежда, отражающая последние модные тенденции.", images: ["/images/shops/default-image.png"], promotions: [], workingHours: "11:00 - 20:00", phone: "(123) 555-5050" },
  { id: 6, name: "АВТОКАССЫ", category: "Продажа билетов", floor: 1, logo: "/images/shops/default-logo.png", hint: "ticket office", description: "Продажа билетов на междугородние автобусы.", images: ["/images/shops/default-image.png"], promotions: [], workingHours: "08:00 - 20:00", phone: "(123) 555-6060" },
  { id: 7, name: "ДЖИНСЫ+", category: "Одежда", floor: 1, logo: "/images/shops/default-logo.png", hint: "jeans logo", description: "Широкий выбор джинсовой одежды для всех возрастов.", images: ["/images/shops/default-image.png"], promotions: ["Скидка 15% для студентов"], workingHours: "10:00 - 21:00", phone: "(123) 555-7070" },
  { id: 8, name: "РосМех", category: "Одежда", floor: 1, logo: "/images/shops/default-logo.png", hint: "fur logo", description: "Изделия из натурального меха от российского производителя.", images: ["/images/shops/default-image.png", "/images/shops/default-image.png"], promotions: [], workingHours: "10:00 - 21:00", phone: "(123) 555-8080" },
  { id: 9, name: "Лидер", category: "Одежда", floor: 1, logo: "/images/shops/default-logo.png", hint: "sportswear logo", description: "Спортивная одежда и инвентарь для активного образа жизни.", images: ["/images/shops/default-image.png"], promotions: [], workingHours: "10:00 - 21:00", phone: "(123) 555-9090" },
  { id: 10, name: "ONYX", category: "Ювелирные изделия", floor: 1, logo: "/images/shops/default-logo.png", hint: "jewelry logo", description: "Эксклюзивные ювелирные украшения из драгоценных металлов и камней.", images: ["/images/shops/default-image.png"], promotions: ["Скидка 10% на обручальные кольца"], workingHours: "10:00 - 21:00", phone: "(123) 555-1111" },
  { id: 11, name: "Галатея", category: "Одежда", floor: 1, logo: "/images/shops/default-logo.png", hint: "fashion store", description: "Магазин элегантной женской одежды.", images: ["/images/shops/default-image.png"], promotions: [], workingHours: "10:00 - 21:00", phone: "(123) 555-1212" },
  { id: 12, name: "ИренА", category: "Одежда", floor: 1, logo: "/images/shops/default-logo.png", hint: "fashion store", description: "Стильная одежда для создания вашего неповторимого образа.", images: ["/images/shops/default-image.png", "/images/shops/default-image.png"], promotions: [], workingHours: "10:00 - 21:00", phone: "(123) 555-1313" },
  { id: 13, name: "Веселая затея", category: "Все для праздника", floor: 1, logo: "/images/shops/default-logo.png", hint: "party supplies", description: "Все для вашего праздника: воздушные шары, украшения, карнавальные костюмы.", images: ["/images/shops/default-image.png"], promotions: [], workingHours: "10:00 - 20:00", phone: "(123) 555-1414" },
  { id: 14, name: "Время есть", category: "Кафе/рестораны", floor: 1, logo: "/images/shops/default-logo.png", hint: "cafe logo", description: "Уютное кафе с домашней кухней и свежей выпечкой.", images: ["/images/shops/default-image.png"], promotions: ["Бизнес-ланч по будням"], workingHours: "09:00 - 21:00", phone: "(123) 555-1515" },
  { id: 16, name: "БЕГЕМОТиК", category: "Детский магазин", floor: 1, logo: "/images/shops/begemotik/0-begemotik.jpg", hint: "kids store", description: "Сеть магазинов игрушек и товаров для детей.", images: ["/images/shops/begemotik/1-begemotik.jpg", "/images/shops/begemotik/2-begemotik.jpg", "/images/shops/begemotik/3-begemotik.jpg", "/images/shops/begemotik/4-begemotik.jpg", "/images/shops/begemotik/5-begemotik.jpg", "/images/shops/begemotik/6-begemotik.jpg", "/images/shops/begemotik/7-begemotik.jpg"], promotions: [], workingHours: "10:00 - 21:00", phone: "(123) 555-1616" },
  { id: 17, name: "Дамские штучки", category: "Одежда", floor: 1, logo: "/images/shops/default-logo.png", hint: "lingerie logo", description: "Изысканное нижнее белье и домашняя одежда для женщин.", images: ["/images/shops/default-image.png"], promotions: [], workingHours: "10:00 - 21:00", phone: "(123) 555-1717" },
  { id: 18, name: "Буквоед", category: "Книги", floor: 1, logo: "/images/shops/bukvoed/0-bukvoed.jpg", hint: "bookstore logo", description: "Книжный магазин с широким выбором литературы и канцтоваров.", images: ["/images/shops/bukvoed/1-bukvoed.jpg", "/images/shops/bukvoed/2-bukvoed.jpg", "/images/shops/bukvoed/3-bukvoed.jpg", "/images/shops/bukvoed/4-bukvoed.jpg", "/images/shops/bukvoed/5-bukvoed.jpg", "/images/shops/bukvoed/6-bukvoed.jpg", "/images/shops/bukvoed/7-bukvoed.jpg", "/images/shops/bukvoed/8-bukvoed.jpg", "/images/shops/bukvoed/9-bukvoed.jpg", "/images/shops/bukvoed/10-bukvoed.jpg"], promotions: [], workingHours: "10:00 - 21:00", phone: "(123) 555-1818" },
  { id: 21, name: "FOROOM", category: "Все для дома", floor: 1, logo: "/images/shops/default-logo.png", hint: "home goods", description: "Все для уюта в вашем доме: декор, посуда, текстиль.", images: ["/images/shops/default-image.png"], promotions: [], workingHours: "10:00 - 21:00", phone: "(123) 555-2222" },
  { id: 22, name: "DNS", category: "Цифровая техника", floor: 1, logo: "/images/shops/default-logo.png", hint: "tech logo", description: "Магазин цифровой и бытовой техники. Широкий ассортимент и доступные цены.", images: ["/images/shops/default-image.png"], promotions: [], workingHours: "10:00 - 21:00", phone: "(123) 555-2323" },
  { id: 23, name: "Все инструменты.ру", category: "Инструменты", floor: 1, logo: "/images/shops/vseinstrumenti/0-vseinstrumenti.webp", hint: "tools logo", description: "Профессиональный инструмент и оборудование для строительства и ремонта.", images: ["/images/shops/vseinstrumenti/1-vseintrumenti.jpg", "/images/shops/vseinstrumenti/2-vseintrumenti.jpg", "/images/shops/vseinstrumenti/3-vseintrumenti.jpg", "/images/shops/vseinstrumenti/4-vseintrumenti.jpg", "/images/shops/vseinstrumenti/5-vseintrumenti.jpg"], promotions: [], workingHours: "09:00 - 20:00", phone: "(123) 555-2424" },
  { id: 24, name: "Восторг", category: "Подарки", floor: 2, logo: "/images/shops/vostorg/0-vostorg.jpg", hint: "gift shop", description: "Магазин удивительных подарков и сувениров.", images: ["/images/shops/vostorg/1-vostorg.jpg", "/images/shops/vostorg/2-vostorg.jpg", "/images/shops/vostorg/3-vostorg.jpg", "/images/shops/vostorg/4-vostorg.jpg", "/images/shops/vostorg/5-vostorg.jpg", "/images/shops/vostorg/6-vostorg.jpg", "/images/shops/vostorg/7-vostorg.jpg", "/images/shops/vostorg/8-vostorg.jpg", "/images/shops/vostorg/9-vostorg.jpg", "/images/shops/vostorg/10-vostorg.jpg", "/images/shops/vostorg/11-vostorg.jpg", "/images/shops/vostorg/12-vostorg.jpg"], promotions: [], workingHours: "10:00 - 21:00", phone: "(123) 555-2525" }
];

export const categories = [
  "Все",
  "Обувь",
  "Одежда",
  "Продажа билетов",
  "Ювелирные изделия",
  "Все для праздника",
  "Кафе/рестораны",
  "Детский магазин",
  "Книги",
  "Все для дома",
  "Цифровая техника",
  "Инструменты",
  "Подарки"
].sort();

export const floors = ["Все", "1", "2"];
