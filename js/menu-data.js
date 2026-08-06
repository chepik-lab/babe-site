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
      id: "wed35",
      days: [3],
      title: "Среда · 35 BYN",
      text: "Тартар с кочуджаном + классическая итальянская + Asahi или Peroni. С 16:00 до закрытия, зал и терраса.",
      badge: "сегодня",
    },
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
          note: "Собери свой завтрак",
          items: [
            { id: "bf-bread", name: "Хлеб кампань и взбитое сливочное масло", price: 8 },
            {
              id: "bf-eggs",
              name: "Яйца по вашему желанию",
              price: 7,
              desc: "Глазунья 2 шт · Скрэмбл · Омлет французский · Мягкосваренные 2 шт",
            },
          ],
        },
        {
          id: "bf-addons",
          title: "Добавки",
          items: [
            { id: "bf-cheese", name: "Сыр", price: 5 },
            { id: "bf-bacon", name: "Бекон", price: 7 },
            { id: "bf-shrimp", name: "Креветки", price: 19 },
            { id: "bf-trout", name: "Слабосоленая форель", price: 14 },
            { id: "bf-sausage", name: "Куриные сосиски", price: 9 },
            { id: "bf-riet", name: "Риет из лосося", price: 9 },
            { id: "bf-crepes", name: "Крепы со сметаной", price: 8 },
            { id: "bf-beans", name: "Фасоль в томатном соусе", price: 5 },
            { id: "bf-guac", name: "Гуакамоле", price: 7 },
            { id: "bf-tomato-avo", name: "Салат из томатов и авокадо", price: 11 },
            { id: "bf-leaves", name: "Листья салата", price: 3 },
            { id: "bf-rosti", name: "Решти", price: 7 },
          ],
        },
        {
          id: "bf-ready",
          title: "Собрали для тебя",
          items: [
            { id: "bf-anchovy", name: "Тост с анчоусом", price: 19 },
            { id: "bf-turkish", name: "Яйца по-турецки", price: 19 },
            { id: "bf-avo-toast", name: "Авокадо тост", price: 24 },
            { id: "bf-eel", name: "Тост угорь / страчателла", price: 24 },
            { id: "bf-frittata", name: "Фритата с прошутто", price: 25 },
            { id: "bf-chicken", name: "Цыпленок / пикули", price: 17 },
            { id: "bf-mash", name: "Картофельное пюре / грибное рагу", price: 15 },
            { id: "bf-chorizo", name: "Сендвич с чориззо", price: 24 },
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
          ],
        },
        {
          id: "bf-soup",
          title: "Суп",
          items: [{ id: "bf-coldnik", name: "Холодник с картофелем", price: 17 }],
        },
      ],
    },

    evening: {
      id: "evening",
      title: "Вечернее меню",
      subtitle: "с 16:30",
      sections: [
        {
          id: "ev-start",
          title: "Старт",
          items: [
            { id: "ev-bread", name: "Хлеб и взбитое масло", price: 8 },
            { id: "ev-olives", name: "Оливки микс", price: 14 },
            { id: "ev-pickles", name: "Пикули", price: 7 },
            { id: "ev-pan", name: "Pan con tomate", price: 17 },
          ],
        },
        {
          id: "ev-snacks",
          title: "Закуски",
          items: [
            { id: "ev-tartare", name: "Тартар с кочуджаном", price: 25 },
            { id: "ev-tuna", name: "Карпаччо тунец", price: 27 },
            { id: "ev-hummus", name: "Хумус с овощами", price: 18 },
            { id: "ev-croquettes", name: "Крокеты чоризо", price: 18 },
            { id: "ev-bolognese", name: "Тост болоньезе", price: 18 },
            { id: "ev-batat", name: "Батат фри с лабне", price: 18 },
          ],
        },
        {
          id: "ev-salads",
          title: "Салаты",
          items: [
            { id: "ev-strawberry", name: "Салат с клубникой", price: 25 },
            { id: "ev-caesar", name: "Цезарь с бедром", price: 27 },
            { id: "ev-shrimp-salad", name: "Салат с креветкой", price: 35 },
          ],
        },
        {
          id: "ev-hot",
          title: "Горячее",
          items: [
            { id: "ev-burger", name: "Чизбургер с луковым мармеладом", price: 33 },
            { id: "ev-sando", name: "Сандо с куриным бедром", price: 29 },
            { id: "ev-steak", name: "Стейк с французским маслом и фри", price: 47 },
            { id: "ev-kiev", name: "Котлета киевская с пюре", price: 27 },
          ],
        },
        {
          id: "ev-desserts",
          title: "Десерты",
          items: [
            { id: "ev-panna", name: "Панна-котта с клубничным россини", price: 20 },
            { id: "ev-cheesecake", name: "Чизкейк", price: 20 },
          ],
        },
        {
          id: "ev-soup",
          title: "Суп",
          items: [{ id: "ev-coldnik", name: "Холодник с картофелем", price: 17 }],
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
            { id: "cock-gin-fiz", name: "Gin Basil Fiz", price: 23 },
            { id: "cock-lychee", name: "Lychee Bliss", price: 23 },
            { id: "cock-cran", name: "Cranberry Bellini", price: 23 },
            { id: "cock-mango-lillet", name: "Mango Lillet", price: 23 },
          ],
        },
        {
          id: "bar-sour",
          title: "Коктейли · кислые",
          items: [
            { id: "cock-smash", name: "Gin Basil Smash", price: 23 },
            { id: "cock-aperol", name: "Aperol Sour", price: 23 },
            { id: "cock-mango-sour", name: "Mango Sour", price: 23 },
            { id: "cock-gimlet", name: "Gimlet Kiwi", price: 23 },
          ],
        },
        {
          id: "bar-sweet",
          title: "Коктейли · сладкие",
          items: [
            { id: "cock-blue", name: "Blueberry Bon", price: 23 },
            { id: "cock-mai", name: "Mai Tai Shu", price: 23 },
            { id: "cock-layth", name: "Layth kiwi", price: 23 },
            { id: "cock-yuzu", name: "Yuzu", price: 23 },
          ],
        },
        {
          id: "bar-infusions",
          title: "Настойки · 40 мл",
          note: "Ср–сб настойка дня 2=1",
          items: [
            { id: "bar-currant", name: "Смородиновая среда", price: 8 },
            { id: "bar-blueberry", name: "Черничный четверг", price: 8 },
            { id: "bar-cherry", name: "Вишневая пятница", price: 8 },
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
            { id: "bar-basil", name: "Базилик лимон", price: 12 },
            { id: "bar-lychee", name: "Личи", price: 12 },
            { id: "bar-berry", name: "Черника", price: 12 },
            { id: "bar-rasp", name: "Малина", price: 12 },
            { id: "bar-cran", name: "Клюква", price: 12 },
          ],
        },
        {
          id: "bar-softs",
          title: "Безалкогольные",
          alcohol: false,
          items: [{ id: "bar-softs", name: "Швепс / Кока-кола / Сок", price: 6 }],
        },
        {
          id: "bar-sparkling-wine",
          title: "Игристое",
          items: [
            { id: "wine-prosecco", name: "Prosecco Extra Dry Toso", price: 20, desc: "125 ml" },
            { id: "wine-cava", name: "Cava Orlenne Brut", price: 20, desc: "125 ml" },
          ],
        },
        {
          id: "bar-sidra",
          title: "Сидр",
          items: [
            {
              id: "sidra-trabanco",
              name: "Trabanco Natural Espumosa Lagar de Camin, Brut",
              price: 16,
              desc: "125 ml",
            },
            {
              id: "sidra-gaitero",
              name: "El Gaitero Extra Oro, Dulce",
              price: 15,
              desc: "125 ml",
            },
            {
              id: "sidra-poire",
              name: "Poire Eric Bordelet Authentique",
              price: 35,
              desc: "Normandie · 330 ml",
            },
          ],
        },
        {
          id: "bar-white",
          title: "Белое · 125 мл",
          items: [
            {
              id: "white-riesling-erben",
              name: "Riesling Halbtrocken",
              price: 14,
              desc: "Erben, 2025 · Germany",
            },
            {
              id: "white-pecorino",
              name: "Pecorino",
              price: 14,
              desc: "Tombacco, 2025 · Italy",
            },
            {
              id: "white-verm",
              name: "Vermentino",
              price: 14,
              desc: "St. Giorgio, 2021 · Italy",
            },
            {
              id: "white-sauv-ms",
              name: "Sauvignon Blanc",
              price: 14,
              desc: "Marlborough Springs, 2025 · New Zealand",
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
              price: 14,
              desc: "Sand Stone, 2023 · Portugal",
            },
            {
              id: "red-temp",
              name: "Tempranillo, Graciano, Garnacha",
              price: 14,
              desc: "Telmo Rodriguez LZ, 2021 · Spain",
            },
            {
              id: "red-mona",
              name: "Monastrell",
              price: 14,
              desc: "Telmo Rodriguez Al-muvedre, 2021 · Spain",
            },
            {
              id: "red-xino",
              name: "Xinomavro, Mandilaria",
              price: 14,
              desc: "Atma, 2019 · Greece",
            },
          ],
        },
        {
          id: "bar-beer",
          title: "Пиво · бутылка",
          alcohol: "mixed",
          items: [
            { id: "beer-corona", name: "Corona Extra", price: 15, desc: "0.33 l" },
            { id: "beer-hoe", name: "Hoegaarden", price: 15, desc: "0.33 l" },
            { id: "beer-guinness", name: "Guinness", price: 19, desc: "0.5 l" },
            { id: "beer-milk", name: "Milk of Amnesia", price: 17, desc: "0.5 l" },
            { id: "beer-bowler", name: "Bowler IPA", price: 17, desc: "0.5 l" },
            { id: "beer-blue", name: "Blue Monkey", price: 17, desc: "0.5 l" },
            { id: "beer-nut", name: "Nut Butter Brown Ale", price: 17, desc: "0.5 l" },
            { id: "beer-bud", name: "Bud non-alc", price: 10, desc: "0.33 l", alcohol: false },
          ],
        },
        {
          id: "bar-whiskey",
          title: "Виски · 40 мл",
          items: [
            { id: "wh-bush", name: "Bushmills Original", price: 14, desc: "Irish" },
            { id: "wh-jameson", name: "Jameson", price: 15, desc: "Irish" },
            { id: "wh-jack", name: "Jack Daniel's", price: 20, desc: "American" },
            { id: "wh-beam", name: "Jim Beam Straight", price: 14, desc: "American" },
          ],
        },
        {
          id: "bar-rum",
          title: "Ром · 40 мл",
          items: [
            { id: "rum-spiced", name: "Captain Spiced", price: 14 },
            { id: "rum-black", name: "Captain Morgan Black", price: 13 },
            { id: "rum-white", name: "Captain Morgan White", price: 13 },
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
            { id: "verm-cinzano", name: "Cinzano Rosso", price: 10 },
            { id: "verm-bianco", name: "Martini Bianco", price: 10 },
            { id: "verm-dry", name: "Martini Extra Dry", price: 10 },
          ],
        },
        {
          id: "bar-coffee",
          title: "Кофе и чай",
          alcohol: false,
          items: [
            { id: "bar-coffee-espresso", name: "Эспрессо", price: 6 },
            { id: "bar-coffee-doppio", name: "Двойной эспрессо", price: 8 },
            { id: "bar-coffee-americano", name: "Американо", price: 6 },
            { id: "bar-coffee-cappuccino", name: "Капучино", price: 8 },
            { id: "bar-coffee-latte", name: "Латте", price: 9 },
            { id: "bar-coffee-raf", name: "Раф", price: 10 },
            { id: "bar-coffee-cocoa", name: "Какао", price: 9 },
            { id: "bar-coffee-flat", name: "Флэт уайт", price: 9 },
            { id: "bar-coffee-matcha", name: "Матча-латте", price: 9 },
            { id: "bar-coffee-tonic", name: "Эспрессо-тоник", price: 9 },
            { id: "bar-coffee-bumble", name: "Бамбл", price: 9 },
            { id: "bar-coffee-plant", name: "Растительное молоко", price: 3 },
            { id: "bar-coffee-tea", name: "Чай в чайнике", price: 12 },
            { id: "bar-coffee-filter", name: "Фильтр кофе", price: 8, desc: "до 16:00" },
          ],
        },
      ],
    },
  },
};
