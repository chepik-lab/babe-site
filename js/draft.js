(() => {
  /* Google Apps Script web app URL (Deploy → Web app → /exec). */
  const FEEDBACK_ENDPOINT =
    "https://script.google.com/macros/s/AKfycbySDfpl_ADatTiyjuLaURenVOe6IYGaeJEIxUMVf75FVTao_Un0IzLncnAYd5cotJ-q/exec";

  const root = document.getElementById("draftRoot");
  const ageGate = document.getElementById("ageGate");
  const nameInput = document.getElementById("draftName");
  const honeypot = document.getElementById("draftHp");
  const data = window.BABE_MENU;
  if (!root || !data?.menus) return;

  const MENU_KEYS = ["breakfast", "evening", "bar"];
  const openIds = new Set();
  const sentIds = new Set();
  const drafts = new Map();
  let activeMenu = "breakfast";
  let barAdult = null; // null | true | false

  const i18n = () => window.BABE_I18N;
  const tr = (key, fallback) => i18n()?.t(key) ?? fallback;
  const lang = () => i18n()?.getLang?.() || "ru";

  function esc(s) {
    return String(s)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }

  function itemName(item) {
    if (lang() === "ru") return item.name;
    return window.BABE_MENU_I18N?.items?.[item.id]?.[lang()] || item.name;
  }

  function sectionTitle(section) {
    return i18n()?.sectionTitle(section.id, section.title) || section.title;
  }

  function barSections(sections, adult) {
    if (adult) return sections;
    return sections
      .map((section) => {
        if (section.alcohol === false) return section;
        if (section.alcohol === "mixed") {
          const items = section.items.filter((item) => item.alcohol === false);
          return items.length ? { ...section, items } : null;
        }
        return null;
      })
      .filter(Boolean);
  }

  function sectionsFor(key) {
    const sections = data.menus[key]?.sections || [];
    return key === "bar" ? barSections(sections, barAdult !== false) : sections;
  }

  function renderPanel(item) {
    if (sentIds.has(item.id)) {
      return `<p class="draft-row__thanks">${esc(
        tr("draft.thanks", "Спасибо! Мы обязательно прочтём и учтём ваши пожелания.")
      )}</p>`;
    }
    return `<textarea class="draft-row__input" rows="3" maxlength="1000" placeholder="${esc(
      tr("draft.placeholder", "Что понравилось, что стоит изменить?")
    )}">${esc(drafts.get(item.id) || "")}</textarea>
      <div class="draft-row__actions">
        <button type="button" class="draft-row__send" data-send="${esc(item.id)}">${esc(
          tr("draft.send", "Отправить")
        )}</button>
        <p class="draft-row__status" role="status"></p>
      </div>`;
  }

  function renderItem(item) {
    const open = openIds.has(item.id);
    const panelId = `draft-panel-${item.id}`;
    return `<li class="draft-row${open ? " is-open" : ""}" data-item="${esc(item.id)}">
      <button type="button" class="draft-row__toggle" data-toggle="${esc(item.id)}"
        aria-expanded="${open}" aria-controls="${esc(panelId)}">
        <span class="draft-row__name">${esc(itemName(item))}</span>
        <span class="draft-row__plus" aria-hidden="true"></span>
      </button>
      <div class="draft-row__panel" id="${esc(panelId)}"${open ? "" : " hidden"}>
        ${open ? renderPanel(item) : ""}
      </div>
    </li>`;
  }

  function renderSection(section) {
    return `<section class="menu-section">
      <h2 class="section-title">${esc(sectionTitle(section))}</h2>
      <ul class="menu-list draft-list">${section.items.map(renderItem).join("")}</ul>
    </section>`;
  }

  function render() {
    root.innerHTML = sectionsFor(activeMenu).map(renderSection).join("");
    if (nameInput) {
      nameInput.placeholder = tr("draft.namePlaceholder", "Например, Аня или @anya");
    }
    document.querySelectorAll("[data-draft-tab]").forEach((tab) => {
      const on = tab.dataset.draftTab === activeMenu;
      tab.classList.toggle("is-active", on);
      tab.setAttribute("aria-selected", String(on));
    });
  }

  function findItem(id) {
    for (const key of MENU_KEYS) {
      for (const section of data.menus[key]?.sections || []) {
        const item = section.items.find((it) => it.id === id);
        if (item) return { key, section, item };
      }
    }
    return null;
  }

  function toggle(id) {
    if (openIds.has(id)) {
      openIds.delete(id);
      sentIds.delete(id);
    } else {
      openIds.add(id);
    }
    render();
    if (openIds.has(id)) {
      root.querySelector(`[data-item="${CSS.escape(id)}"] .draft-row__input`)?.focus();
    }
  }

  async function send(id, button) {
    const row = button.closest(".draft-row");
    const input = row?.querySelector(".draft-row__input");
    const status = row?.querySelector(".draft-row__status");
    const comment = input?.value.trim() || "";
    if (!comment) {
      if (status) status.textContent = tr("draft.empty", "Напишите пару слов");
      input?.focus();
      return;
    }
    if (honeypot?.value) return;

    const found = findItem(id);
    if (!found) return;

    if (!FEEDBACK_ENDPOINT) {
      console.warn("[draft] FEEDBACK_ENDPOINT is not configured");
      if (status) status.textContent = tr("draft.error", "Не удалось отправить. Попробуйте позже.");
      return;
    }

    button.disabled = true;
    if (status) status.textContent = tr("draft.sending", "Отправляем…");

    const payload = {
      menu: data.menus[found.key]?.title || found.key,
      section: found.section.title,
      item: found.item.name,
      itemId: found.item.id,
      comment,
      name: nameInput?.value.trim() || "",
      lang: lang(),
    };

    try {
      // Apps Script does not return CORS headers: send as text/plain without preflight.
      await fetch(FEEDBACK_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
      });
      drafts.delete(id);
      sentIds.add(id);
      render();
    } catch (err) {
      console.warn("[draft] send failed", err);
      button.disabled = false;
      if (status) status.textContent = tr("draft.error", "Не удалось отправить. Попробуйте позже.");
    }
  }

  root.addEventListener("click", (e) => {
    const toggleBtn = e.target.closest("[data-toggle]");
    if (toggleBtn) {
      toggle(toggleBtn.dataset.toggle);
      return;
    }
    const sendBtn = e.target.closest("[data-send]");
    if (sendBtn) send(sendBtn.dataset.send, sendBtn);
  });

  root.addEventListener("input", (e) => {
    const input = e.target.closest(".draft-row__input");
    const id = input?.closest(".draft-row")?.dataset.item;
    if (id) drafts.set(id, input.value);
  });

  function activate(key) {
    activeMenu = key;
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  document.querySelectorAll("[data-draft-tab]").forEach((tab) => {
    tab.addEventListener("click", () => {
      const key = tab.dataset.draftTab;
      if (key === "bar" && barAdult === null) {
        if (ageGate) {
          ageGate.hidden = false;
          ageGate.querySelector("[data-age='yes']")?.focus();
        }
        return;
      }
      activate(key);
    });
  });

  ageGate?.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-age]");
    if (!btn) {
      if (e.target === ageGate) ageGate.hidden = true;
      return;
    }
    barAdult = btn.dataset.age === "yes";
    ageGate.hidden = true;
    activate("bar");
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && ageGate) ageGate.hidden = true;
  });

  window.addEventListener("babe:langchange", render);

  render();
})();
