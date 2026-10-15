/**
 * babe · «Черновик меню» → Google Таблица.
 *
 * Установка:
 * 1. Создать Google Таблицу → Расширения → Apps Script.
 * 2. Вставить этот код вместо содержимого Code.gs, сохранить.
 * 3. Развернуть → Новое развертывание → тип «Веб-приложение».
 *    Выполнять от имени: «Я». Доступ: «Все».
 * 4. Скопировать URL вида https://script.google.com/macros/s/.../exec
 *    и вставить в FEEDBACK_ENDPOINT в js/draft.js.
 */

const SHEET_NAME = "Отзывы";
const HEADER = ["Дата", "Меню", "Раздел", "Позиция", "Отзыв", "Имя / Instagram", "Язык"];

function doPost(e) {
  let data = {};
  try {
    data = JSON.parse((e && e.postData && e.postData.contents) || "{}");
  } catch (err) {
    return reply_("bad json");
  }

  const comment = clean_(data.comment, 1000);
  if (!comment) return reply_("empty");

  const lock = LockService.getScriptLock();
  lock.waitLock(5000);
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow(HEADER);
      sheet.setFrozenRows(1);
    }
    sheet.appendRow([
      new Date(),
      clean_(data.menu, 40),
      clean_(data.section, 80),
      clean_(data.item, 160),
      comment,
      clean_(data.name, 80),
      clean_(data.lang, 5),
    ]);
  } finally {
    lock.releaseLock();
  }
  return reply_("ok");
}

/* Trim, cap length and neutralise spreadsheet formulas (=, +, -, @). */
function clean_(value, max) {
  const s = String(value == null ? "" : value).trim().slice(0, max);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function reply_(text) {
  return ContentService.createTextOutput(text).setMimeType(ContentService.MimeType.TEXT);
}
