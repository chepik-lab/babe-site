(() => {
  /* Item name/desc translations. RU lives in menu-data.js */
  const items = {
    "bf-bread": {
      en: "Campagne bread with whipped butter",
      zh: "康庞面包配打发黄油",
    },
    "bf-eggs": {
      en: "Eggs your way",
      zh: "自选鸡蛋",
      desc: {
        en: "Sunny-side up 2 pcs · Scramble · French omelette · Soft-boiled 2 pcs",
        zh: "太阳蛋 2 个 · 炒蛋 · 法式蛋饼 · 半熟蛋 2 个",
      },
    },
    "bf-cheese": { en: "Cheese", zh: "奶酪" },
    "bf-bacon": { en: "Bacon", zh: "培根" },
    "bf-shrimp": { en: "Shrimp", zh: "虾" },
    "bf-trout": { en: "Lightly salted trout", zh: "轻盐鳟鱼" },
    "bf-sausage": { en: "Chicken sausages", zh: "鸡肉香肠" },
    "bf-riet": { en: "Salmon rillettes", zh: "三文鱼肉酱" },
    "bf-crepes": { en: "Crêpes with sour cream", zh: "酸奶油可丽饼" },
    "bf-beans": { en: "Beans in tomato sauce", zh: "番茄酱豆子" },
    "bf-guac": { en: "Guacamole", zh: "牛油果酱" },
    "bf-tomato-avo": { en: "Tomato & avocado salad", zh: "番茄牛油果沙拉" },
    "bf-leaves": { en: "Salad leaves", zh: "沙拉叶" },
    "bf-rosti": { en: "Rösti", zh: "薯饼" },
    "bf-anchovy": { en: "Anchovy toast", zh: "凤尾鱼吐司" },
    "bf-turkish": { en: "Turkish eggs", zh: "土耳其鸡蛋" },
    "bf-avo-toast": { en: "Avocado toast", zh: "牛油果吐司" },
    "bf-eel": { en: "Eel / stracciatella toast", zh: "鳗鱼 / 斯特拉奇泰拉吐司" },
    "bf-frittata": { en: "Frittata with prosciutto", zh: "意式蛋饼配生火腿" },
    "bf-chicken": { en: "Chicken / pickles", zh: "鸡肉 / 酸黄瓜" },
    "bf-mash": { en: "Mashed potatoes / mushroom ragout", zh: "土豆泥 / 蘑菇炖菜" },
    "bf-chorizo": { en: "Chorizo sandwich", zh: "西班牙香肠三明治" },
    "bf-french": {
      en: "French toast with vanilla cream and currant",
      zh: "法式吐司配香草奶油与醋栗",
    },
    "bf-donuts": {
      en: "Cottage cheese donuts with boiled condensed milk cream",
      zh: "奶渣甜甜圈配炼乳奶油",
    },

    "ev-bread": {
      en: "Bread and whipped butter",
      zh: "面包配打发黄油",
      desc: { en: "200 g", zh: "200 克" },
    },
    "ev-hummus": {
      en: "Hummus with vegetables",
      zh: "蔬菜鹰嘴豆泥",
      desc: { en: "165 g", zh: "165 克" },
    },
    "ev-batat": {
      en: "Sweet potato fries with labneh",
      zh: "红薯条配拉布尼",
      desc: { en: "200 g", zh: "200 克" },
    },
    "ev-bolognese": {
      en: "Bolognese toast",
      zh: "肉酱吐司",
      desc: { en: "170 g", zh: "170 克" },
    },
    "ev-croquettes": {
      en: "Chorizo croquettes",
      zh: "西班牙香肠可乐饼",
      desc: { en: "290 g", zh: "290 克" },
    },
    "ev-pepper": {
      en: "Warm pepper with tonnato sauce",
      zh: "暖椒配金枪鱼酱",
      desc: { en: "180 g · seasonal", zh: "180 克 · 时令" },
    },
    "ev-carpaccio": {
      en: "Beef carpaccio",
      zh: "牛肉薄片",
      desc: { en: "210 g", zh: "210 克" },
    },
    "ev-tartare": {
      en: "Spicy beef tartare",
      zh: "香辣牛肉鞑靼",
      desc: { en: "240 g", zh: "240 克" },
    },
    "ev-wine-mini": {
      en: "Wine Mini",
      zh: "迷你拼盘",
      desc: { en: "250 g", zh: "250 克" },
    },
    "ev-caesar-chicken": {
      en: "Caesar with chicken",
      zh: "鸡肉凯撒沙拉",
      desc: { en: "250 g", zh: "250 克" },
    },
    "ev-caesar-salmon": {
      en: "Caesar with salmon",
      zh: "三文鱼凯撒沙拉",
      desc: { en: "250 g", zh: "250 克" },
    },
    "ev-beef-salad": {
      en: "Salad with warm beef",
      zh: "暖牛肉沙拉",
      desc: { en: "360 g · seasonal", zh: "360 克 · 时令" },
    },
    "ev-shrimp-salad": {
      en: "Shrimp salad with honey-mustard sauce",
      zh: "蜂蜜芥末虾沙拉",
      desc: { en: "220 g", zh: "220 克" },
    },
    "ev-burger": {
      en: "Cheeseburger",
      zh: "芝士汉堡",
      desc: { en: "380 g", zh: "380 克" },
    },
    "ev-sando": {
      en: "Chicken thigh sando",
      zh: "鸡腿三明治",
      desc: { en: "380 g", zh: "380 克" },
    },
    "ev-classic": {
      en: "Chicken sandwich Classic",
      zh: "经典鸡肉三明治",
      desc: { en: "320 g · seasonal", zh: "320 克 · 时令" },
    },
    "ev-kiev": {
      en: "Chicken Kiev with mash",
      zh: "基辅鸡排配土豆泥",
      desc: { en: "420 g", zh: "420 克" },
    },
    "ev-gnocchi": {
      en: "Gnocchi with shrimp tom yum",
      zh: "冬阴功鲜虾意大利团子",
      desc: { en: "340 g · seasonal", zh: "340 克 · 时令" },
    },
    "ev-steak": {
      en: "Steak with French butter and fries",
      zh: "牛排配法式黄油与薯条",
      desc: { en: "260 g", zh: "260 克" },
    },
    "ev-steak-pepper": {
      en: "Steak with pepper sauce",
      zh: "胡椒汁牛排",
      desc: { en: "350 g · seasonal", zh: "350 克 · 时令" },
    },
    "ev-salmon": {
      en: "Salmon, asparagus, radish",
      zh: "三文鱼、芦笋、萝卜",
      desc: { en: "330 g", zh: "330 克" },
    },
    "ev-cheesecake": {
      en: "Cheesecake",
      zh: "芝士蛋糕",
      desc: { en: "200 g", zh: "200 克" },
    },
    "ev-fondant": {
      en: "Fondant, porcini ice cream",
      zh: "熔岩蛋糕配牛肝菌冰淇淋",
      desc: { en: "120 g · seasonal", zh: "120 克 · 时令" },
    },
    "ev-donuts": {
      en: "Cottage cheese donuts with boiled condensed milk cream",
      zh: "奶渣甜甜圈配炼乳奶油",
      desc: { en: "220 g", zh: "220 克" },
    },
    "ev-chowder": {
      en: "Chowder with bacon and jalapeño",
      zh: "培根哈拉佩尼奥浓汤",
      desc: { en: "320 g · seasonal", zh: "320 克 · 时令" },
    },

    "bar-currant": { en: "Currant Wednesday", zh: "周三醋栗" },
    "bar-blueberry": { en: "Blueberry Thursday", zh: "周四蓝莓" },
    "bar-cherry": { en: "Cherry Friday", zh: "周五樱桃" },
    "bar-raspberry": { en: "Raspberry Saturday", zh: "周六覆盆子" },
    "bar-limoncello": { en: "Limoncello", zh: "柠檬甜酒" },
    "bar-kiwi": { en: "Kiwi", zh: "猕猴桃" },
    "bar-mango": { en: "Mango–passion fruit", zh: "芒果百香果" },
    "bar-basil": { en: "Basil lemon", zh: "罗勒柠檬" },
    "bar-lychee": { en: "Lychee", zh: "荔枝" },
    "bar-berry": { en: "Blueberry", zh: "蓝莓" },
    "bar-rasp": { en: "Raspberry", zh: "覆盆子" },
    "bar-cran": { en: "Cranberry", zh: "蔓越莓" },
    "bar-softs": { en: "Schweppes / Coca-Cola / Juice", zh: "汤力水 / 可乐 / 果汁" },

    "wh-bush": { desc: { en: "Irish", zh: "爱尔兰" } },
    "wh-jameson": { desc: { en: "Irish", zh: "爱尔兰" } },
    "wh-jack": { desc: { en: "American", zh: "美国" } },
    "wh-beam": { desc: { en: "American", zh: "美国" } },

    "bar-coffee-espresso": { en: "Espresso", zh: "意式浓缩" },
    "bar-coffee-doppio": { en: "Double espresso", zh: "双份浓缩" },
    "bar-coffee-americano": { en: "Americano", zh: "美式咖啡" },
    "bar-coffee-cappuccino": { en: "Cappuccino", zh: "卡布奇诺" },
    "bar-coffee-latte": { en: "Latte", zh: "拿铁" },
    "bar-coffee-raf": { en: "Raf", zh: "拉夫咖啡" },
    "bar-coffee-cocoa": { en: "Cocoa", zh: "可可" },
    "bar-coffee-flat": { en: "Flat white", zh: "扁白" },
    "bar-coffee-matcha": { en: "Matcha latte", zh: "抹茶拿铁" },
    "bar-coffee-tonic": { en: "Espresso tonic", zh: "浓缩通宁" },
    "bar-coffee-bumble": { en: "Bumble", zh: "邦博咖啡" },
    "bar-coffee-plant": { en: "Plant milk", zh: "植物奶" },
    "bar-coffee-tea": { en: "Tea in a teapot", zh: "茶壶茶" },
    "bar-coffee-filter": {
      en: "Filter coffee",
      zh: "滴滤咖啡",
      desc: { en: "until 16:00", zh: "至 16:00" },
    },
  };

  const menuMeta = {
    ru: {
      "breakfast.subtitle": "10:00 – 16:00 · пн–вс",
      "evening.subtitle": "с 16:30",
      "bar.subtitle": "коктейли · вино · крепкое · кофе",
    },
    en: {
      "breakfast.subtitle": "10:00 – 16:00 · daily",
      "evening.subtitle": "from 16:30",
      "bar.subtitle": "cocktails · wine · spirits · coffee",
    },
    zh: {
      "breakfast.subtitle": "10:00 – 16:00 · 周一至周日",
      "evening.subtitle": "16:30 起",
      "bar.subtitle": "鸡尾酒 · 葡萄酒 · 烈酒 · 咖啡",
    },
  };

  window.BABE_MENU_I18N = { items, menuMeta };
})();
