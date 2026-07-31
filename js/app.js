(() => {
  const toggle = document.getElementById("menuBtn");
  const drawer = document.getElementById("menuBox");
  const iconBars = toggle?.querySelector(".icon-bars");
  const iconClose = toggle?.querySelector(".icon-close");
  const toast = document.getElementById("toast");
  let toastTimer = 0;

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.removeAttribute("hidden");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => {
      toast.setAttribute("hidden", "");
    }, 1800);
  }

  async function copyPhone(btn) {
    const phone = btn.getAttribute("data-phone") || "";
    if (!phone) return;
    const copied = window.BABE_I18N?.t("toast.copied") || "Номер скопирован";
    try {
      await navigator.clipboard.writeText(phone);
      showToast(copied);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = phone;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
        showToast(copied);
      } catch {
        showToast(phone);
      }
      ta.remove();
    }
  }

  document.querySelectorAll(".js-copy-phone").forEach((btn) => {
    btn.addEventListener("click", () => copyPhone(btn));
  });

  function setOpen(open) {
    if (!toggle || !drawer) return;
    const i18n = window.BABE_I18N;
    if (open) {
      drawer.removeAttribute("hidden");
      toggle.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute(
        "aria-label",
        i18n?.t("nav.close") || "Закрыть меню"
      );
      iconBars?.setAttribute("hidden", "");
      iconClose?.removeAttribute("hidden");
    } else {
      drawer.setAttribute("hidden", "");
      toggle.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute(
        "aria-label",
        i18n?.t("nav.open") || "Открыть меню"
      );
      iconClose?.setAttribute("hidden", "");
      iconBars?.removeAttribute("hidden");
    }
  }

  if (toggle && drawer) {
    toggle.addEventListener("click", () => {
      setOpen(drawer.hasAttribute("hidden"));
    });

    drawer.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setOpen(false));
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        hideAgeGate();
      }
    });
  }

  /* ===== Full menu render ===== */
  const root = document.getElementById("menuRoot");
  const ageGate = document.getElementById("ageGate");
  const data = window.BABE_MENU;
  let barAdult = null; // null | true | false

  function esc(s) {
    return String(s)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }

  function itemName(item) {
    const lang = window.BABE_I18N?.getLang?.() || "ru";
    if (lang === "ru" || !item.id) return item.name;
    const tr = window.BABE_MENU_I18N?.items?.[item.id];
    return tr?.[lang] || item.name;
  }

  function itemDesc(item) {
    if (!item.desc) return "";
    const lang = window.BABE_I18N?.getLang?.() || "ru";
    if (lang === "ru" || !item.id) return item.desc;
    const tr = window.BABE_MENU_I18N?.items?.[item.id];
    return tr?.desc?.[lang] || item.desc;
  }

  function menuSubtitle(menu) {
    const lang = window.BABE_I18N?.getLang?.() || "ru";
    const key = `${menu.id}.subtitle`;
    return (
      window.BABE_MENU_I18N?.menuMeta?.[lang]?.[key] ||
      window.BABE_MENU_I18N?.menuMeta?.ru?.[key] ||
      menu.subtitle ||
      ""
    );
  }

  function formatTitle(title) {
    const safe = esc(title);
    return safe.replace(
      /(·\s*)?(\d+(?:[.,]\d+)?\s*(?:мл|ml))/gi,
      (_, dot, unit) => `${dot || ""}<span class="unit-ml">${unit}</span>`
    );
  }

  function formatDesc(desc) {
    const safe = esc(desc);
    return safe.replace(
      /(\d+(?:[.,]\d+)?\s*(?:мл|ml))/gi,
      '<span class="unit-ml">$1</span>'
    );
  }

  function renderItem(item) {
    const descRaw = itemDesc(item);
    const desc = descRaw
      ? `<span class="menu-row__desc">${formatDesc(descRaw)}</span>`
      : "";
    return `<li class="menu-row">
      <span class="menu-row__name">${esc(itemName(item))}${desc}</span>
      <span class="menu-row__price">${esc(item.price)}</span>
    </li>`;
  }

  function filterBarSections(sections, adult) {
    if (adult) return sections;
    const i18n = window.BABE_I18N;
    return sections
      .map((section) => {
        if (section.alcohol === false) return section;
        if (section.alcohol === "mixed") {
          const items = section.items.filter((item) => item.alcohol === false);
          if (!items.length) return null;
          return {
            ...section,
            id: "bar-beer-soft",
            title:
              i18n?.sectionTitle("bar-beer-soft", "Пиво · безалкогольное") ||
              "Пиво · безалкогольное",
            items,
          };
        }
        return null;
      })
      .filter(Boolean);
  }

  function renderSection(section) {
    const i18n = window.BABE_I18N;
    const title =
      i18n?.sectionTitle(section.id, section.title) || section.title;
    const noteText = i18n
      ? i18n.sectionNote(section.id, section.note || "")
      : section.note || "";
    const note = noteText
      ? `<p class="section-note">${esc(noteText)}</p>`
      : "";
    return `<section class="menu-section">
      <h2 class="section-title">${formatTitle(title)}</h2>
      ${note}
      <ul class="menu-list">${section.items.map(renderItem).join("")}</ul>
    </section>`;
  }

  const menuArt = {
    breakfast: {
      src: "assets/sketch-buffet-v3-page.png",
      side: "left",
      alt: "Скетч коридора babe",
    },
    evening: {
      src: "assets/sketch-wardrobe-v3-page.png",
      side: "right",
      alt: "Скетч зала babe",
    },
  };

  function renderMenu(key, hidden, adult = true) {
    const menu = data.menus[key];
    if (!menu) return "";
    const i18n = window.BABE_I18N;
    let sections = menu.sections;
    let footExtra = "";
    if (key === "bar") {
      sections = filterBarSections(sections, adult);
      footExtra = adult
        ? ""
        : `<p class="page-foot page-foot--soft">${esc(
            i18n?.t("menu.barSoftFoot") || "безалкогольное меню · до 18"
          )}</p>`;
    }
    const prices = i18n?.t("menu.prices") || "цены BYN";
    const sub = menuSubtitle(menu);
    const foot = sub
      ? `<p class="page-foot">${esc(sub)} · ${esc(prices)}</p>`
      : "";

    const art = menuArt[key];
    const artHtml = art
      ? `<aside class="menu-decor menu-decor--${art.side}" aria-hidden="true">
          <img src="${art.src}" alt="" width="320" height="480" loading="lazy" />
        </aside>`
      : "";

    const panelClass = art
      ? `menu-panel menu-panel--decor menu-panel--decor-${art.side}`
      : "menu-panel";

    const body = `<div class="menu-panel__content">
      <div class="menu-grid">
        ${sections.map(renderSection).join("")}
      </div>
      ${footExtra}
      ${foot}
    </div>`;

    const inner =
      art?.side === "right"
        ? `${body}${artHtml}`
        : art
          ? `${artHtml}${body}`
          : body;

    return `<div class="${panelClass}" data-menu-panel="${key}"${hidden ? " hidden" : ""}>
      ${inner}
    </div>`;
  }

  function rebuildMenus() {
    if (!root || !data?.menus) return;
    const active =
      document.querySelector("[data-menu-tab].is-active")?.dataset.menuTab ||
      "breakfast";
    root.innerHTML =
      renderMenu("breakfast", active !== "breakfast") +
      renderMenu("evening", active !== "evening") +
      renderMenu("bar", active !== "bar", barAdult !== false);
  }

  function showAgeGate() {
    if (!ageGate) return;
    ageGate.hidden = false;
    ageGate.querySelector("[data-age='yes']")?.focus();
  }

  function hideAgeGate() {
    if (!ageGate) return;
    ageGate.hidden = true;
  }

  function activateTab(id) {
    document.querySelectorAll("[data-menu-tab]").forEach((t) => {
      const on = t.dataset.menuTab === id;
      t.classList.toggle("is-active", on);
      t.setAttribute("aria-selected", String(on));
    });
    document.querySelectorAll("[data-menu-panel]").forEach((p) => {
      p.toggleAttribute("hidden", p.dataset.menuPanel !== id);
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  rebuildMenus();

  window.addEventListener("babe:langchange", () => {
    rebuildMenus();
  });

  document.querySelectorAll("[data-menu-tab]").forEach((tab) => {
    tab.addEventListener("click", () => {
      const id = tab.dataset.menuTab;
      if (id === "bar" && barAdult === null) {
        showAgeGate();
        return;
      }
      activateTab(id);
    });
  });

  ageGate?.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-age]");
    if (!btn) {
      if (e.target === ageGate) hideAgeGate();
      return;
    }
    barAdult = btn.dataset.age === "yes";
    hideAgeGate();
    rebuildMenus();
    activateTab("bar");
  });
})();
