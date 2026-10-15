window.BABE_MENU = {
  venue: {
    name: "babe",
    tagline: "bistro & bar",
    address: "Минск, ул. Калварийская 21",
    instagram: "https://www.instagram.com/babe_minsk/",
    hoursNote: "Завтраки до 16:00 · Вечернее меню с 16:30",
  },

  promos: [
    {
      id: "sun-taco",
      days: [0],
      title: "Воскресенье · Taco party 35 BYN",
      text: "Два разных тако (говядина + креветка) + Corona. Уличный гриль-пати. Текила и сангрита — по меню.",
      badge: "сегодня",
    },
    {
      id: "infusion",
      days: [3, 4, 5, 6],
      title: "Настойки 2=1",
      text: "Только настойка дня: среда смородина · четверг черника · пятница вишня · суббота малина. Лимончелло отдельно.",
      badge: "акция",
    },
    {
      id: "infusion-all",
      days: [1, 2, 0],
      title: "Настойки недели",
      text: "Пн–вт и вс — новые вкусы (уточняйте у бармена). Ср–сб — именные дни. Акция 2=1 на настойку дня ср–сб.",
      badge: "бар",
    },
  ],

  menus: {
    breakfast: {
      id: "breakfast",
      title: "Завтраки",
      subtitle: "10:00 – 16:00 · пн–вс",
      sections: [
        {
          id: "bf-constructor",
          title: "Конструктор",
          items: [
            { id: "bf-bread", name: "Хлеб кампань и взбитое сливочное масло", price: 8 },
            {
              id: "bf-eggs",
              name: "Приготовим яйца по Вашему желанию",
              price: 7,
              desc: "Глазунья — 2 шт · Скрэмбл · Омлет французский · Мягкосваренные яйца — 2 шт",
            },
            {
              id: "bf-oats",
              name: "Цельнозерновая овсяная каша",
              price: 7,
              desc: "молоко / вода",
            },
            { id: "bf-pancakes", name: "Панкейки", price: 7, desc: "200 г" },
            { id: "bf-three-cheese", name: "Сэндвич с тремя сырами", price: 18 },
            { id: "bf-avo-toast", name: "Авокадо тост", price: 12 },
          ],
        },
        {
          id: "bf-addons",
          title: "Собери сам",
          items: [
            {
              id: "bf-cheese",
              name: "Сыр Маасдам / Чеддер / Моцарелла",
              price: 6,
              desc: "80 г",
            },
            { id: "bf-bacon", name: "Бекон", price: 6, desc: "80 г" },
            { id: "bf-parma", name: "Парма", price: 10, desc: "80 г" },
            { id: "bf-shrimp", name: "Креветки", price: 10, desc: "80 г" },
            { id: "bf-trout", name: "Слабосолёная форель", price: 12, desc: "80 г" },
            { id: "bf-sausage", name: "Куриные сосиски", price: 6, desc: "80 г" },
            { id: "bf-crepes", name: "Крепы со сметаной", price: 8, desc: "80 г" },
            { id: "bf-beans", name: "Фасоль в томатном соусе", price: 5, desc: "80 г" },
            { id: "bf-guac", name: "Гуакамоле", price: 7, desc: "80 г" },
            { id: "bf-tomato-avo", name: "Салат из томатов и авокадо", price: 11, desc: "80 г" },
            { id: "bf-leaves", name: "Листья салата", price: 3, desc: "80 г" },
          ],
        },
        {
          id: "bf-ready",
          title: "Собрали для тебя",
          items: [
            { id: "bf-shakshuka", name: "Шакшука", price: 19 },
            { id: "bf-turkish", name: "Яйца по-турецки", price: 19 },
            {
              id: "bf-jam-cheese",
              name: "Сэндвич с пряным вареньем и сыром",
              price: 21,
            },
            {
              id: "bf-syrniki",
              name: "Сырники с ванильным кремом и домашним вареньем",
              price: 12,
            },
            { id: "bf-tartare-toast", name: "Тост тар-тар", price: 21 },
            { id: "bf-eel", name: "Тост угорь / страчателла", price: 24 },
            { id: "bf-chorizo", name: "Сэндвич с чоризо", price: 24 },
          ],
        },
        {
          id: "bf-sweet",
          title: "На сладкое",
          items: [
            {
              id: "bf-french",
              name: "Френч-тост с ванильным кремом и смородиной",
              price: 18,
            },
            {
              id: "bf-donuts",
              name: "Творожные пончики с кремом из варёной сгущёнки",
              price: 17,
            },
            {
              id: "bf-pancakes-ganache",
              name: "Панкейки с шоколадным ганашем",
              price: 12,
            },
          ],
        },
      ],
    },

    evening: {
      id: "evening",
      title: "Вечернее меню",
      subtitle: "с 16:30",
      sections: [
        {
          id: "ev-snacks",
          title: "Закуски",
          items: [
            { id: "ev-bread", name: "Хлеб и взбитое масло", price: 10, desc: "200 г" },
            { id: "ev-hummus", name: "Хумус с овощами", price: 18, desc: "165 г" },
            { id: "ev-batat", name: "Батат фри с Лабне", price: 18, desc: "200 г" },
            { id: "ev-bolognese", name: "Тост Болоньезе", price: 18, desc: "170 г" },
            { id: "ev-croquettes", name: "Крокеты чоризо", price: 25, desc: "230 г" },
            {
              id: "ev-pepper",
              name: "Тёплый перец с соусом тоннато",
              price: 18,
              desc: "180 г",
            },
            { id: "ev-carpaccio", name: "Карпаччо из говядины", price: 27, desc: "210 г" },
            { id: "ev-tartare", name: "Пряный тартар из говядины", price: 30, desc: "240 г" },
            { id: "ev-wine-mini", name: "Винная Mini", price: 29, desc: "250 г" },
          ],
        },
        {
          id: "ev-salads",
          title: "Салаты",
          items: [
            { id: "ev-caesar-chicken", name: "Цезарь с цыплёнком", price: 25, desc: "250 г" },
            { id: "ev-caesar-salmon", name: "Цезарь с лососем", price: 28, desc: "250 г" },
            { id: "ev-beef-salad", name: "Салат с тёплой говядиной", price: 38, desc: "360 г" },
            {
              id: "ev-shrimp-salad",
              name: "Салат с креветками в медово-горчичном соусе",
              price: 33,
              desc: "220 г",
            },
          ],
        },
        {
          id: "ev-hot",
          title: "Горячее",
          items: [
            { id: "ev-burger", name: "Чизбургер", price: 33, desc: "380 г" },
            { id: "ev-sando", name: "Сандо с куриным бедром", price: 29, desc: "380 г" },
            { id: "ev-classic", name: "Сэндвич с цыплёнком Classic", price: 32, desc: "320 г" },
            {
              id: "ev-schnitzel",
              name: "Шницель Мельт & Крисп",
              price: 32,
              desc: "420 г",
            },
            { id: "ev-gnocchi", name: "Ньокки с креветками том-ям", price: 31, desc: "340 г" },
            {
              id: "ev-steak",
              name: "Стейк с французским маслом и фри",
              price: 47,
              desc: "260 г",
            },
            { id: "ev-steak-pepper", name: "Стейк с перечным соусом", price: 50, desc: "350 г" },
            { id: "ev-salmon", name: "Лосось, спаржа, редис", price: 45, desc: "330 г" },
          ],
        },
        {
          id: "ev-desserts",
          title: "Десерты",
          items: [
            { id: "ev-cheesecake", name: "Чизкейк", price: 20, desc: "200 г" },
            {
              id: "ev-fondant",
              name: "Фондан, мороженое из белых грибов",
              price: 23,
              desc: "220 г",
            },
            {
              id: "ev-donuts",
              name: "Творожные пончики с кремом из варёной сгущёнки",
              price: 17,
              desc: "220 г",
            },
          ],
        },
        {
          id: "ev-soup",
          title: "Суп",
          items: [
            {
              id: "ev-chowder",
              name: "Суп Чаудер с беконом и халапеньо",
              price: 24,
              desc: "320 г",
            },
          ],
        },
      ],
    },

    bar: {
      id: "bar",
      title: "Бар",
      subtitle: "коктейли · вино · крепкое · кофе",
      sections: [
        {
          id: "bar-sparkling-cocktails",
          title: "Коктейли · игристые",
          items: [
            {
              id: "cock-gin-fiz",
              name: "Gin Basil Fiz",
              price: 23,
              desc: "игристое с джином, базиликом и огурцом",
            },
            {
              id: "cock-lychee",
              name: "Lychee Bliss",
              price: 23,
              desc: "личи и просекко с воздушной пеной",
            },
            {
              id: "cock-cran",
              name: "Cranberry Bellini",
              price: 23,
              desc: "игристое, клюква с ромом и цитрусом",
            },
            {
              id: "cock-mango-lillet",
              name: "Mango Lillet",
              price: 23,
              desc: "манго-маракуйя с Lillet и пузырьками",
            },
          ],
        },
        {
          id: "bar-sour",
          title: "Коктейли · кислые",
          items: [
            {
              id: "cock-smash",
              name: "Gin Basil Smash",
              price: 23,
              desc: "джин с базиликом и свежим лимоном",
            },
            {
              id: "cock-aperol",
              name: "Aperol Sour",
              price: 23,
              desc: "цитрусовый Aperol с джином и пеной",
            },
            {
              id: "cock-mango-sour",
              name: "Mango Sour",
              price: 23,
              desc: "манго-маракуйя с лёгкой горчинкой",
            },
            {
              id: "cock-gimlet",
              name: "Gimlet Kiwi",
              price: 23,
              desc: "джин с киви и свежим лаймом",
            },
          ],
        },
        {
          id: "bar-sweet",
          title: "Коктейли · сладкие",
          note: "По вашему желанию мы приготовим любой классический коктейль",
          items: [
            {
              id: "cock-blue",
              name: "Blueberry Bon",
              price: 23,
              desc: "бурбон с черникой и сладким миндалём",
            },
            {
              id: "cock-mai",
              name: "Mai Tai Shu",
              price: 23,
              desc: "тропический ром с апельсином и лаймом",
            },
            {
              id: "cock-layth",
              name: "Layth kiwi",
              price: 23,
              desc: "ром с киви, лимоном и газировкой",
            },
            {
              id: "cock-yuzu",
              name: "Yuzu",
              price: 23,
              desc: "текила с юдзу и сладким личи",
            },
          ],
        },
        {
          id: "bar-infusions",
          title: "Настойки · 40 мл",
          note: "Ср–сб настойка дня 2=1",
          items: [
            { id: "bar-currant", name: "Смородиновая среда", price: 8 },
            { id: "bar-blueberry", name: "Черничный четверг", price: 8 },
            { id: "bar-cherry", name: "Вишнёвая пятница", price: 8 },
            { id: "bar-raspberry", name: "Малиновая суббота", price: 8 },
            { id: "bar-limoncello", name: "Лимончелло", price: 8 },
          ],
        },
        {
          id: "bar-lemonades",
          title: "Лимонады",
          alcohol: false,
          items: [
            { id: "bar-kiwi", name: "Киви", price: 12 },
            { id: "bar-mango", name: "Манго-маракуйя", price: 12 },
            { id: "bar-basil", name: "Базилик-лимон", price: 12 },
            { id: "bar-lychee", name: "Личи", price: 12 },
            { id: "bar-berry", name: "Черника", price: 12 },
            { id: "bar-rasp", name: "Малина", price: 12 },
            { id: "bar-cran", name: "Клюква", price: 12 },
          ],
        },
        {
          id: "bar-sidra",
          title: "Сидр",
          items: [
            {
              id: "sidra-garcon",
              name: "Un Joyeux Garçon",
              price: 12,
              desc: "330 мл · наше производство",
            },
          ],
        },
        {
          id: "bar-sparkling-wine",
          title: "Игристое",
          items: [
            { id: "wine-prosecco", name: "Prosecco Extra Dry Toso", price: 20, desc: "125 мл" },
            { id: "wine-cava", name: "Cava Orlenne Brut", price: 20, desc: "125 мл" },
          ],
        },
        {
          id: "bar-white",
          title: "Белое · 125 мл",
          items: [
            {
              id: "white-riesling",
              name: "Riesling",
              price: 16,
              desc: "Das Ist, 2025 · Germany",
            },
            {
              id: "white-pecorino",
              name: "Pecorino",
              price: 16,
              desc: "Tombacco, 2025 · Italy",
            },
            {
              id: "white-verm",
              name: "Vermentino",
              price: 16,
              desc: "St. Giorgio, 2025 · Italy",
            },
            {
              id: "white-sauv",
              name: "Sauvignon Blanc",
              price: 16,
              desc: "Cono Sur Bicicleta, 2024 · Chile",
            },
          ],
        },
        {
          id: "bar-red",
          title: "Красное · 125 мл",
          items: [
            {
              id: "red-shiraz",
              name: "Shiraz",
              price: 16,
              desc: "Sand Stone, 2025 · Portugal",
            },
            {
              id: "red-temp",
              name: "Tempranillo, Garnacha",
              price: 16,
              desc: "Telmo Rodriguez LZ, 2023 · Spain",
            },
            {
              id: "red-nero",
              name: "Nero di Troia",
              price: 16,
              desc: "Lama di Pietra, 2024 · Italy",
            },
            {
              id: "red-negroamaro",
              name: "Negroamaro",
              price: 16,
              desc: "Luccarelli, 2024 · Italy",
            },
          ],
        },
        {
          id: "bar-beer",
          title: "Пиво · бутылка",
          items: [
            { id: "beer-pilsner", name: "Czech Pilsner", price: 15, desc: "0.45 л" },
            { id: "beer-cassis", name: "Mon Cher Cassis", price: 15, desc: "0.45 л" },
            { id: "beer-blanche", name: "Blanche Ma Chérie", price: 15, desc: "0.45 л" },
            { id: "beer-milk", name: "Milk of Amnesia", price: 15, desc: "0.45 л" },
            { id: "beer-bowler", name: "Bowler IPA", price: 15, desc: "0.5 л" },
            { id: "beer-blue", name: "Blue Moncky", price: 15, desc: "0.45 л" },
            { id: "beer-nut", name: "Nut Butter Brown Ale", price: 15, desc: "0.5 л" },
            { id: "beer-moose", name: "Moose, Just Moose", price: 10, desc: "0.5 л" },
          ],
        },
        {
          id: "bar-hot",
          title: "Тёплые напитки · 600 мл",
          alcohol: "mixed",
          items: [
            {
              id: "hot-gluhwein",
              name: "Глинтвейн / глинтвейн б/а",
              price: 23,
            },
            { id: "hot-sea", name: "Облепиховый чай б/а", price: 23, alcohol: false },
            { id: "hot-ginger", name: "Имбирно-лимонный чай б/а", price: 23, alcohol: false },
            { id: "hot-grog", name: "Грог пряный яблочный", price: 23 },
            { id: "hot-wunsch-rasp", name: "Вуншпунш малиновый", price: 23 },
            { id: "hot-wunsch-blue", name: "Вуншпунш черничный", price: 23 },
            { id: "hot-wunsch-cran", name: "Вуншпунш клюквенный", price: 23 },
          ],
        },
        {
          id: "bar-softs",
          title: "Напитки",
          alcohol: false,
          items: [{ id: "bar-softs", name: "Schweppes / Coca-Cola / сок", price: 6 }],
        },
        {
          id: "bar-whiskey",
          title: "Виски · 40 мл",
          items: [
            { id: "wh-bush", name: "Bushmills Original", price: 14 },
            { id: "wh-jameson", name: "Jameson", price: 15 },
          ],
        },
        {
          id: "bar-bourbon",
          title: "Бурбон · 40 мл",
          items: [
            { id: "wh-jack", name: "Jack Daniel's", price: 20 },
            { id: "wh-beam", name: "Jim Beam Straight", price: 14 },
          ],
        },
        {
          id: "bar-rum",
          title: "Ром · 40 мл",
          items: [
            { id: "rum-spiced", name: "Captain Spiced", price: 14 },
            { id: "rum-black", name: "Captain Morgan Black", price: 15 },
            { id: "rum-white", name: "Captain Morgan White", price: 15 },
          ],
        },
        {
          id: "bar-brandy",
          title: "Бренди / коньяк · 40 мл",
          items: [
            { id: "br-ani", name: "Ararat Ani", price: 15 },
            { id: "br-flav", name: "Ararat cherry / honey / coffee / apricot", price: 13 },
            { id: "br-torres", name: "Torres 10 years", price: 15 },
          ],
        },
        {
          id: "bar-gin",
          title: "Джин · 40 мл",
          items: [
            { id: "gin-kinross", name: "Kinross", price: 13 },
            { id: "gin-gordon", name: "Gordon's", price: 13 },
          ],
        },
        {
          id: "bar-tequila",
          title: "Текила · 40 мл",
          items: [
            { id: "teq-blanco", name: "Olmeca Blanco Silver", price: 15 },
            { id: "teq-gold", name: "Olmeca Gold", price: 16 },
            { id: "teq-ouro", name: "Ouroboros", price: 15 },
            { id: "teq-sangrita", name: "Sangrita", price: 3 },
          ],
        },
        {
          id: "bar-vodka",
          title: "Водка · 40 мл",
          items: [
            { id: "vod-danzka", name: "Danzka", price: 10 },
            { id: "vod-flav", name: "Danzka Apple / Cranraz / Grapefruit", price: 12 },
          ],
        },
        {
          id: "bar-liqueurs",
          title: "Ликёры · 40 мл",
          items: [
            { id: "liq-campari", name: "Campari", price: 15 },
            { id: "liq-amaretto", name: "Amaretto", price: 14 },
            { id: "liq-jager", name: "Jägermeister", price: 15 },
            { id: "liq-becher", name: "Becherovka", price: 15 },
          ],
        },
        {
          id: "bar-port",
          title: "Портвейн · 40 мл",
          items: [
            { id: "port-ruby", name: "Quevedo Ruby", price: 10 },
            { id: "port-tawny", name: "Quevedo Tawny", price: 10 },
          ],
        },
        {
          id: "bar-vermouth",
          title: "Вермут · 40 мл",
          items: [
            { id: "verm-rosso", name: "Martini Rosso", price: 10 },
            { id: "verm-bianco", name: "Martini Bianco", price: 10 },
            { id: "verm-dry", name: "Martini Extra Dry", price: 10 },
          ],
        },
        {
          id: "bar-coffee",
          title: "Кофе и чай",
          alcohol: false,
          items: [
            { id: "bar-coffee-espresso", name: "Эспрессо", price: 7 },
            { id: "bar-coffee-americano", name: "Американо", price: 7 },
            { id: "bar-coffee-cappuccino", name: "Капучино", price: 9 },
            { id: "bar-coffee-latte", name: "Латте", price: 10 },
            { id: "bar-coffee-raf", name: "Раф", price: 10 },
            { id: "bar-coffee-cocoa", name: "Какао", price: 9 },
            { id: "bar-coffee-flat", name: "Флэт уайт", price: 10 },
            { id: "bar-coffee-tonic", name: "Эспрессо-тоник", price: 10 },
            { id: "bar-coffee-bumble", name: "Бамбл", price: 10 },
            { id: "bar-coffee-plant", name: "Растительное молоко", price: 3 },
            { id: "bar-coffee-tea", name: "Чай в чайнике", price: 12 },
            { id: "bar-coffee-filter", name: "Фильтр-кофе", price: 8, desc: "до 16:00" },
          ],
        },
      ],
    },
  },
};
