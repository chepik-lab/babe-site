(() => {
  const STORAGE_KEY = "babe-lang";
  const SUPPORTED = ["ru", "en"];

  const dict = {
    ru: {
      "meta.description": "babe — bistro & bar, Калварийская 21, Минск.",
      "nav.menu": "Меню",
      "nav.about": "О нас",
      "nav.open": "Открыть меню",
      "nav.close": "Закрыть меню",
      "nav.mobile": "Мобильная навигация",
      "hero.aria": "Главная",
      "hero.contacts": "Контакты",
      "hours.sunThu": "вс–чт 10:00–23:00",
      "hours.friSat": "пт–сб 10:00–24:00",
      "hours.siesta": "Сиеста 16:00–16:30",
      "contact.address": "Калварийская 21, Минск, Беларусь",
      "toast.copied": "Номер скопирован",
      "about.p1":
        "babe — уютное современное бистро смешанной кухни в приятном районе Минска. Мы собираем вкусы из опыта, который привозим с собой из разных стран: блюда, которыми хочется делиться друг с другом, и конечно искреннее гостеприимство.",
      "about.p2.before": "Мы на Калварийской 21. Завтраки до 16:00, вечернее меню с 16:30, бар допоздна. Бронь:",
      "about.p2.mid": "или Direct в Instagram",
      "menu.back": "← На главную",
      "menu.tabs": "Карты меню",
      "menu.breakfast": "Завтраки",
      "menu.evening": "Вечер",
      "menu.bar": "Бар",
      "menu.prices": "цены BYN",
      "menu.barSoftFoot": "безалкогольное меню · до 18",
      "age.kicker": "бар",
      "age.title": "Вам уже есть 18?",
      "age.text": "Алкогольное меню показываем только совершеннолетним.",
      "age.yes": "Да, 18+",
      "age.no": "Нет",
      "lang.label": "Язык",
      sections: {
        "bf-constructor": "Конструктор",
        "bf-addons": "Добавки",
        "bf-ready": "Собрали для тебя",
        "bf-sweet": "На сладкое",
        "bf-soup": "Суп",
        "ev-start": "Старт",
        "ev-snacks": "Закуски",
        "ev-salads": "Салаты",
        "ev-hot": "Горячее",
        "ev-desserts": "Десерты",
        "ev-soup": "Суп",
        "bar-sparkling-cocktails": "Коктейли · игристые",
        "bar-sour": "Коктейли · кислые",
        "bar-sweet": "Коктейли · сладкие",
        "bar-infusions": "Настойки · 40 мл",
        "bar-lemonades": "Лимонады",
        "bar-softs": "Безалкогольные",
        "bar-sparkling-wine": "Игристое",
        "bar-sidra": "Сидр",
        "bar-white": "Белое · 125 мл",
        "bar-red": "Красное · 125 мл",
        "bar-beer": "Пиво · бутылка",
        "bar-beer-soft": "Пиво · безалкогольное",
        "bar-whiskey": "Виски · 40 мл",
        "bar-rum": "Ром · 40 мл",
        "bar-brandy": "Бренди / коньяк · 40 мл",
        "bar-gin": "Джин · 40 мл",
        "bar-tequila": "Текила · 40 мл",
        "bar-vodka": "Водка · 40 мл",
        "bar-liqueurs": "Ликёры · 40 мл",
        "bar-port": "Портвейн · 40 мл",
        "bar-vermouth": "Вермут · 40 мл",
        "bar-coffee": "Кофе и чай",
      },
      notes: {
        "bf-constructor": "Собери свой завтрак",
        "bar-infusions": "Ср–сб настойка дня 2=1",
      },
    },
    en: {
      "meta.description": "babe — bistro & bar, Kalvariyskaya 21, Minsk.",
      "nav.menu": "Menu",
      "nav.about": "About",
      "nav.open": "Open menu",
      "nav.close": "Close menu",
      "nav.mobile": "Mobile navigation",
      "hero.aria": "Home",
      "hero.contacts": "Contacts",
      "hours.sunThu": "Sun–Thu 10:00–23:00",
      "hours.friSat": "Fri–Sat 10:00–24:00",
      "hours.siesta": "Siesta 16:00–16:30",
      "contact.address": "Kalvariyskaya 21, Minsk, Belarus",
      "toast.copied": "Number copied",
      "about.p1":
        "babe is a cozy modern mixed-cuisine bistro in a pleasant part of Minsk. We gather flavours from the experience we bring with us from different countries: dishes made for sharing, and of course sincere hospitality.",
      "about.p2.before":
        "We are at Kalvariyskaya 21. Breakfast until 16:00, evening menu from 16:30, bar until late. Reservations:",
      "about.p2.mid": "or Instagram Direct",
      "menu.back": "← Home",
      "menu.tabs": "Menu cards",
      "menu.breakfast": "Breakfast",
      "menu.evening": "Evening",
      "menu.bar": "Bar",
      "menu.prices": "prices BYN",
      "menu.barSoftFoot": "non-alcoholic menu · under 18",
      "age.kicker": "bar",
      "age.title": "Are you 18 or older?",
      "age.text": "The alcohol menu is shown only to adults.",
      "age.yes": "Yes, 18+",
      "age.no": "No",
      "lang.label": "Language",
      sections: {
        "bf-constructor": "Build your own",
        "bf-addons": "Add-ons",
        "bf-ready": "Made for you",
        "bf-sweet": "Sweet",
        "bf-soup": "Soup",
        "ev-start": "Start",
        "ev-snacks": "Snacks",
        "ev-salads": "Salads",
        "ev-hot": "Mains",
        "ev-desserts": "Desserts",
        "ev-soup": "Soup",
        "bar-sparkling-cocktails": "Cocktails · sparkling",
        "bar-sour": "Cocktails · sour",
        "bar-sweet": "Cocktails · sweet",
        "bar-infusions": "Infusions · 40 ml",
        "bar-lemonades": "Lemonades",
        "bar-softs": "Soft drinks",
        "bar-sparkling-wine": "Sparkling",
        "bar-sidra": "Cider",
        "bar-white": "White · 125 ml",
        "bar-red": "Red · 125 ml",
        "bar-beer": "Beer · bottled",
        "bar-beer-soft": "Beer · non-alcoholic",
        "bar-whiskey": "Whiskey · 40 ml",
        "bar-rum": "Rum · 40 ml",
        "bar-brandy": "Brandy / cognac · 40 ml",
        "bar-gin": "Gin · 40 ml",
        "bar-tequila": "Tequila · 40 ml",
        "bar-vodka": "Vodka · 40 ml",
        "bar-liqueurs": "Liqueurs · 40 ml",
        "bar-port": "Port · 40 ml",
        "bar-vermouth": "Vermouth · 40 ml",
        "bar-coffee": "Coffee & tea",
      },
      notes: {
        "bf-constructor": "Build your breakfast",
        "bar-infusions": "Wed–Sat infusion of the day 2=1",
      },
    },
    zh: {
      "meta.description": "babe — bistro & bar，明斯克 Kalvariyskaya 21。",
      "nav.menu": "菜单",
      "nav.about": "关于我们",
      "nav.open": "打开菜单",
      "nav.close": "关闭菜单",
      "nav.mobile": "移动导航",
      "hero.aria": "首页",
      "hero.contacts": "联系方式",
      "hours.sunThu": "周日–周四 10:00–23:00",
      "hours.friSat": "周五–周六 10:00–24:00",
      "hours.siesta": "Siesta 16:00–16:30",
      "contact.address": "Kalvariyskaya 21，明斯克，白俄罗斯",
      "toast.copied": "号码已复制",
      "about.p1":
        "babe 是一家位于明斯克宜人街区的温馨现代混合料理小馆。我们把从各国带来的体验融进味道：适合分享的菜肴，以及真诚的款待。",
      "about.p2.before":
        "地址：Kalvariyskaya 21。早餐至 16:00，晚餐菜单自 16:30，酒吧营业至深夜。订位：",
      "about.p2.mid": "或 Instagram 私信",
      "menu.back": "← 返回首页",
      "menu.tabs": "菜单分类",
      "menu.breakfast": "早餐",
      "menu.evening": "晚餐",
      "menu.bar": "酒吧",
      "menu.prices": "价格 BYN",
      "menu.barSoftFoot": "无酒精菜单 · 未满 18 岁",
      "age.kicker": "酒吧",
      "age.title": "您已年满 18 岁吗？",
      "age.text": "酒精菜单仅向成年人展示。",
      "age.yes": "是，18+",
      "age.no": "否",
      "lang.label": "语言",
      sections: {
        "bf-constructor": "自己搭配",
        "bf-addons": "加料",
        "bf-ready": "为你准备",
        "bf-sweet": "甜品",
        "bf-soup": "汤",
        "ev-start": "开胃",
        "ev-snacks": "小吃",
        "ev-salads": "沙拉",
        "ev-hot": "热菜",
        "ev-desserts": "甜品",
        "ev-soup": "汤",
        "bar-sparkling-cocktails": "鸡尾酒 · 气泡",
        "bar-sour": "鸡尾酒 · 酸味",
        "bar-sweet": "鸡尾酒 · 甜味",
        "bar-infusions": "浸泡酒 · 40 ml",
        "bar-lemonades": "柠檬水",
        "bar-softs": "软饮",
        "bar-sparkling-wine": "起泡酒",
        "bar-sidra": "苹果酒",
        "bar-white": "白葡萄酒 · 125 ml",
        "bar-red": "红葡萄酒 · 125 ml",
        "bar-beer": "啤酒 · 瓶装",
        "bar-beer-soft": "啤酒 · 无酒精",
        "bar-whiskey": "威士忌 · 40 ml",
        "bar-rum": "朗姆 · 40 ml",
        "bar-brandy": "白兰地 / 干邑 · 40 ml",
        "bar-gin": "金酒 · 40 ml",
        "bar-tequila": "龙舌兰 · 40 ml",
        "bar-vodka": "伏特加 · 40 ml",
        "bar-liqueurs": "利口酒 · 40 ml",
        "bar-port": "波特酒 · 40 ml",
        "bar-vermouth": "苦艾酒 · 40 ml",
        "bar-coffee": "咖啡与茶",
      },
      notes: {
        "bf-constructor": "自己搭配早餐",
        "bar-infusions": "周三至周六当日浸泡酒 2=1",
      },
    },
  };

  function normalize(lang) {
    if (lang === "zh") return "ru";
    if (SUPPORTED.includes(lang)) return lang;
    return "ru";
  }

  function getLang() {
    try {
      return normalize(localStorage.getItem(STORAGE_KEY));
    } catch {
      return "ru";
    }
  }

  function setLang(lang) {
    const next = normalize(lang);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
    document.documentElement.lang = next;
    document.documentElement.dataset.lang = next;
    return next;
  }

  function t(key, lang = getLang()) {
    const pack = dict[normalize(lang)] || dict.ru;
    return pack[key] ?? dict.ru[key] ?? key;
  }

  function sectionTitle(id, fallback, lang = getLang()) {
    const pack = dict[normalize(lang)] || dict.ru;
    return pack.sections?.[id] || fallback || id;
  }

  function sectionNote(id, fallback, lang = getLang()) {
    const pack = dict[normalize(lang)] || dict.ru;
    if (pack.notes && Object.prototype.hasOwnProperty.call(pack.notes, id)) {
      return pack.notes[id];
    }
    return fallback || "";
  }

  function applyStatic() {
    const lang = getLang();
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!key) return;
      el.textContent = t(key, lang);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      if (!key) return;
      el.setAttribute("aria-label", t(key, lang));
    });
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", t("meta.description", lang));

    document.querySelectorAll(".lang-switch [data-lang]").forEach((btn) => {
      const active = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  function bindSwitches() {
    document.querySelectorAll(".lang-switch [data-lang]").forEach((btn) => {
      btn.addEventListener("click", () => {
        setLang(btn.getAttribute("data-lang"));
        applyStatic();
        window.dispatchEvent(
          new CustomEvent("babe:langchange", { detail: { lang: getLang() } })
        );
      });
    });
  }

  setLang(getLang());
  window.BABE_I18N = {
    t,
    getLang,
    setLang,
    applyStatic,
    sectionTitle,
    sectionNote,
    bindSwitches,
    SUPPORTED,
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      bindSwitches();
      applyStatic();
    });
  } else {
    bindSwitches();
    applyStatic();
  }
})();
