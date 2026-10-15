// Regenerates search/AI files from js/menu-data.js:
//   sitemap.xml, llms.txt, JSON-LD in index.html and menu.html.
// Run after every menu change:   node tools/build-seo.mjs
// After deploying, notify Yandex/Bing:   node tools/build-seo.mjs --ping

import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SITE = "https://babeminsk.site";
const INDEXNOW_KEY = "7c3f9a1e5b2d4c8e9f0a6b1d2e3c4f5a";

const VENUE = {
  name: "babe",
  fullName: "babe · bistro & bar",
  description:
    "babe — уютное современное бистро смешанной кухни и бар на Калварийской 21 в Минске. " +
    "Завтраки до 16:00, вечернее меню с 16:30, коктейли, вино и настойки допоздна.",
  descriptionEn:
    "babe is a cosy modern bistro & bar in Minsk (Kalvariyskaya 21): breakfast until 4 pm, " +
    "evening menu from 4:30 pm, cocktails, wine and house infusions until late.",
  street: "ул. Калварийская, 21",
  city: "Минск",
  country: "BY",
  phone: "+375255042551",
  phoneDisplay: "+375 25 504-25-51",
  instagram: "https://www.instagram.com/babe_minsk/",
  map: "https://maps.google.com/?q=Kalvariyskaya+21,+Minsk,+Belarus",
  // Extra profiles (Yandex Maps, Google Maps, Telegram…) — add URLs here.
  sameAs: ["https://www.instagram.com/babe_minsk/"],
  hours: [
    { days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"], opens: "10:00", closes: "23:00" },
    { days: ["Friday", "Saturday"], opens: "10:00", closes: "23:59" },
  ],
  hoursText: ["вс–чт 10:00–23:00", "пт–сб 10:00–24:00", "сиеста кухни 16:00–16:30"],
};

const PAGES = [
  { loc: "/", priority: "1.0", changefreq: "weekly" },
  { loc: "/menu.html", priority: "0.9", changefreq: "weekly" },
];

function loadMenu() {
  const ctx = { window: {} };
  vm.runInNewContext(fs.readFileSync(path.join(ROOT, "js/menu-data.js"), "utf8"), ctx);
  return ctx.window.BABE_MENU;
}

function write(rel, content) {
  fs.writeFileSync(path.join(ROOT, rel), content.replace(/\r?\n/g, "\n"), "utf8");
  console.log("updated", rel);
}

function replaceJsonLd(rel, data) {
  const file = path.join(ROOT, rel);
  const html = fs.readFileSync(file, "utf8");
  const re = /(<script type="application\/ld\+json" id="seo-ld">)[\s\S]*?(<\/script>)/;
  if (!re.test(html)) throw new Error(`${rel}: <script id="seo-ld"> not found`);
  const json = JSON.stringify(data, null, 2).replace(/</g, "\\u003c");
  fs.writeFileSync(file, html.replace(re, `$1\n${json}\n  $2`), "utf8");
  console.log("updated", rel, "(JSON-LD)");
}

function restaurantLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Restaurant",
        "@id": `${SITE}/#restaurant`,
        name: VENUE.name,
        alternateName: [VENUE.fullName, "babe bistro & bar", "бейб бистро"],
        description: VENUE.description,
        url: `${SITE}/`,
        image: [`${SITE}/assets/og-image.jpg`, `${SITE}/assets/photo-facade.png`],
        logo: `${SITE}/assets/icon-512.png`,
        telephone: VENUE.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: VENUE.street,
          addressLocality: VENUE.city,
          addressCountry: VENUE.country,
        },
        hasMap: VENUE.map,
        openingHoursSpecification: VENUE.hours.map((h) => ({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: h.days,
          opens: h.opens,
          closes: h.closes,
        })),
        servesCuisine: ["Смешанная кухня", "Завтраки", "Коктейли"],
        priceRange: "$$",
        currenciesAccepted: "BYN",
        acceptsReservations: true,
        hasMenu: `${SITE}/menu.html`,
        sameAs: VENUE.sameAs,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE}/#website`,
        name: VENUE.fullName,
        url: `${SITE}/`,
        inLanguage: ["ru", "en"],
        publisher: { "@id": `${SITE}/#restaurant` },
      },
    ],
  };
}

function menuLd(menu) {
  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    "@id": `${SITE}/menu.html#menu`,
    name: "Меню babe",
    url: `${SITE}/menu.html`,
    inLanguage: "ru",
    mainEntityOfPage: `${SITE}/menu.html`,
    hasMenuSection: Object.values(menu.menus).map((m) => ({
      "@type": "MenuSection",
      name: m.title,
      description: m.subtitle,
      hasMenuSection: m.sections.map((s) => ({
        "@type": "MenuSection",
        name: s.title,
        ...(s.note ? { description: s.note } : {}),
        hasMenuItem: s.items.map((it) => ({
          "@type": "MenuItem",
          name: it.name,
          ...(it.desc ? { description: it.desc } : {}),
          offers: { "@type": "Offer", price: String(it.price), priceCurrency: "BYN" },
        })),
      })),
    })),
  };
}

function llmsTxt(menu) {
  const lines = [
    `# ${VENUE.fullName} — Минск`,
    "",
    `> ${VENUE.description}`,
    "",
    VENUE.descriptionEn,
    "",
    "## Контакты",
    "",
    `- Адрес: ${VENUE.street}, ${VENUE.city}, Беларусь`,
    `- Телефон и бронь: ${VENUE.phoneDisplay} или Direct в Instagram`,
    `- Instagram: ${VENUE.instagram}`,
    `- Часы работы: ${VENUE.hoursText.join("; ")}`,
    "",
    "## Страницы",
    "",
    `- [Главная](${SITE}/): о бистро, адрес, часы, контакты`,
    `- [Меню](${SITE}/menu.html): завтраки, вечернее меню и бар с ценами`,
    `- [Черновик меню](${SITE}/draft.html): гости оставляют шефу отзывы и пожелания к блюдам`,
    "",
    "## Меню (цены в BYN)",
  ];
  for (const m of Object.values(menu.menus)) {
    lines.push("", `### ${m.title}${m.subtitle ? ` (${m.subtitle})` : ""}`);
    for (const s of m.sections) {
      lines.push("", `**${s.title}**${s.note ? ` — ${s.note}` : ""}`, "");
      for (const it of s.items) {
        lines.push(`- ${it.name}${it.desc ? ` (${it.desc})` : ""} — ${it.price} BYN`);
      }
    }
  }
  lines.push("", "Алкоголь подаётся только гостям старше 18 лет.", "");
  return lines.join("\n");
}

function sitemap(today) {
  const urls = PAGES.map(
    (p) =>
      `  <url>\n    <loc>${SITE}${p.loc}</loc>\n    <lastmod>${today}</lastmod>\n` +
      `    <changefreq>${p.changefreq}</changefreq>\n    <priority>${p.priority}</priority>\n  </url>`,
  ).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

async function ping() {
  const body = {
    host: new URL(SITE).host,
    key: INDEXNOW_KEY,
    keyLocation: `${SITE}/${INDEXNOW_KEY}.txt`,
    urlList: PAGES.map((p) => `${SITE}${p.loc}`),
  };
  for (const endpoint of ["https://yandex.com/indexnow", "https://api.indexnow.org/indexnow"]) {
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(body),
      });
      console.log("IndexNow", endpoint, res.status);
    } catch (err) {
      console.error("IndexNow failed", endpoint, err.message);
    }
  }
}

const menu = loadMenu();
const today = new Date().toISOString().slice(0, 10);
write("sitemap.xml", sitemap(today));
write("llms.txt", llmsTxt(menu));
replaceJsonLd("index.html", restaurantLd());
replaceJsonLd("menu.html", menuLd(menu));
if (process.argv.includes("--ping")) await ping();
