const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const added = (t = "bổ sung") => ` <span class="added" title="Không có trong file gốc">✎ ${t}</span>`;
const ADDED = added();

// ---------- roadmap ----------
const today = new Date();
today.setHours(0, 0, 0, 0);
const asDate = (s) => new Date(s + "T00:00:00");
const fmt = (s) => { const [y, m, d] = s.split("-"); return `${d}/${m}`; };
const nextSlot = SLOTS.find((s) => asDate(s.date) >= today);
const slotState = (s) => (nextSlot && s.n === nextSlot.n ? "next" : asDate(s.date) < today ? "done" : "");

$("strip").innerHTML = SLOTS.map((s) => {
  const st = slotState(s);
  const label = `Slot ${s.n}, ${fmt(s.date)}: ${s.topic}`;
  return `<a class="cell ${st} ${s.test ? "test" : ""}" href="#slot-${s.n}" title="${esc(label)}" aria-label="${esc(label)}">${s.n}</a>`;
}).join("");

const doneCount = SLOTS.filter((s) => slotState(s) === "done").length;
$("strip-note").innerHTML = nextSlot
  ? `Đã qua ${doneCount}/20 slot. Buổi tới: <b>slot ${nextSlot.n}, ${fmt(nextSlot.date)}</b> – ${esc(nextSlot.topic)}`
  : "Đã học xong 20 slot. Giờ chỉ còn ôn thi nói cuối kỳ.";

$("phases").innerHTML = Object.entries(PHASES).map(([key, p], i) => {
  const slots = SLOTS.filter((s) => s.phase === key);
  const allDone = slots.every((s) => slotState(s) === "done");
  const current = slots.some((s) => slotState(s) === "next");
  const cls = current ? "is-current" : allDone ? "is-done" : "";
  const state = current ? "Đang học" : allDone ? "Đã xong" : "Sắp tới";
  return `<div class="phase ${cls}">
    <div class="phase-head">
      <div class="num">${i + 1}</div>
      <div class="name">${esc(p.name)}</div>
      <div class="slots">${esc(p.slots)}</div>
      <span class="state">${state}</span>
    </div>
    <div>
      <p class="goal">${esc(p.goal)}</p>
      <ul class="home">${p.home.map((h) => `<li>${esc(h)}</li>`).join("")}</ul>
      <ul class="slot-list">${slots.map((s) => `<li id="slot-${s.n}" class="${slotState(s)}">
        <span class="sn">Slot ${s.n}${s.test ? `<span class="tag">${esc(s.test)}</span>` : ""}</span>
        <span class="sd">${fmt(s.date)}</span>
        <span class="st">${esc(s.topic)}</span></li>`).join("")}</ul>
    </div>
  </div>`;
}).join("");

// ---------- kana ----------
let kanaMode = "hira";
function cell(c, r) {
  return c ? `<div class="k"><span class="c" lang="ja">${c}</span><span class="r">${r}</span></div>` : `<div class="k empty"></div>`;
}
function renderKana() {
  const base = kanaMode === "hira" ? HIRAGANA : KATAKANA;
  const head = `<div class="k head"></div>` + ["a", "i", "u", "e", "o"].map((v) => `<div class="k head">${v}</div>`).join("");
  $("kana-basic").innerHTML = head + base.map((row, i) =>
    `<div class="k head">${KANA_ROWS[i] || "–"}</div>` + row.map((c, j) => cell(c, ROMAJI[i][j])).join("")
  ).join("") + `<div class="k head">n</div>` + cell(kanaMode === "hira" ? "ん" : "ン", "n") + `<div class="k empty"></div>`.repeat(4);

  const dk = DAKUTEN[kanaMode];
  $("kana-dakuten").innerHTML = head + dk.map((row, i) =>
    `<div class="k head">${["g", "z", "d", "b", "p"][i]}</div>` + row.map((c, j) => cell(c, DAKUTEN.romaji[i][j])).join("")
  ).join("");

  const yo = YOON[kanaMode];
  $("kana-yoon").innerHTML = yo.map((row, i) => row.map((c, j) => cell(c, YOON.romaji[i][j])).join("")).join("");

  $("kata-special").innerHTML = kanaMode === "kata"
    ? `<h3>Âm ghép đặc biệt của Katakana${ADDED}</h3><ul class="special">${KATA_SPECIAL.map((x) => {
        const [k, r] = x.split(" "); return `<li><span class="jp" lang="ja">${k}</span>${r}</li>`;
      }).join("")}</ul>`
    : "";
}
document.querySelectorAll("[data-kana]").forEach((b) => b.addEventListener("click", () => {
  kanaMode = b.dataset.kana;
  document.querySelectorAll("[data-kana]").forEach((x) => x.classList.toggle("is-on", x === b));
  renderKana();
}));
$("hide-romaji").addEventListener("change", (e) => $("bang-chu").classList.toggle("hide-romaji", e.target.checked));
renderKana();

$("kana-rules").innerHTML = KANA_RULES.map((r) => `<div class="rule"><h4>${esc(r.title)}</h4><p>${esc(r.body)}</p>
  <ul lang="ja">${r.ex.map((e) => `<li>${esc(e)}</li>`).join("")}</ul></div>`).join("");
$("kana-links").innerHTML = KANA_LINKS.map((l) => `<li><a href="${l.url}" target="_blank" rel="noopener">${l.url.replace(/^https:\/\//, "")}</a> – ${esc(l.note)}</li>`).join("");

// ---------- grammar / vocab / kanji ----------
function grammar(list) {
  return list.map((g) => `<div class="g">
    <div class="pat">${esc(g.p)}</div>
    <div><p class="mean">${esc(g.m)}${g.added ? ADDED : ""}</p>
      <ul class="ex">${g.ex.map(([ja, vi]) => `<li><span class="ja" lang="ja">${esc(ja)}</span><span class="vi">${esc(vi)}</span></li>`).join("")}</ul></div>
  </div>`).join("");
}
function vocab(groups) {
  return groups.map((g) => `<div class="vgroup"><h4>${esc(g.group)}</h4><dl>${g.items.map(([ja, vi]) =>
    `<dt lang="ja">${esc(ja)}</dt><dd>${esc(vi)}</dd>`).join("")}</dl></div>`).join("");
}
function kanji(list) {
  return list.map(([ch, hv, kun, on, ex]) => `<div class="kj">
    <div class="ch" lang="ja">${ch}</div><div class="hv">${hv}</div>
    <div class="rd" lang="ja"><b>Kun</b>${kun}</div><div class="rd" lang="ja"><b>On</b>${on}</div>
    <div class="ex" lang="ja">${esc(ex)}</div></div>`).join("");
}
$("g-b1").innerHTML = grammar(GRAMMAR_B1);
$("v-b1").innerHTML = vocab(VOCAB_B1);
$("k-b1").innerHTML = kanji(KANJI_B1);
$("g-b2").innerHTML = grammar(GRAMMAR_B2);
$("v-b2").innerHTML = vocab(VOCAB_B2);
$("k-b2").innerHTML = kanji(KANJI_B2);
$("g-b3").innerHTML = grammar(GRAMMAR_B3);
// Học liệu gốc bài 1 có kanji nhưng cách đọc nằm trong ảnh; nghĩa từ vựng bài 2 cũng vậy.
document.querySelector("#bai-1 h3:nth-of-type(3)").insertAdjacentHTML("beforeend", added("cách đọc bổ sung"));
document.querySelector("[data-hide='v-b2']").insertAdjacentHTML("beforebegin", added("nghĩa bổ sung"));

document.querySelectorAll("[data-hide]").forEach((b) => b.addEventListener("click", () => {
  const box = $(b.dataset.hide);
  const on = box.classList.toggle("hide-mean");
  b.classList.toggle("is-on", on);
  b.textContent = on ? "Hiện nghĩa" : "Ẩn nghĩa";
  box.querySelectorAll("dd.peek").forEach((d) => d.classList.remove("peek"));
}));
document.addEventListener("click", (e) => {
  const dd = e.target.closest(".hide-mean dd");
  if (dd) dd.classList.toggle("peek");
});

// ---------- numbers ----------
const row = (l, v, irr) => `<div class="d ${irr ? "irr" : ""}"><span class="l">${l}</span><span class="v" lang="ja">${v}</span></div>`;
$("dates").innerHTML =
  `<div class="subhead">Tháng</div>` + MONTHS.map((m, i) => row(`Tháng ${i + 1}`, m, [4, 7, 9].includes(i + 1))).join("") +
  `<div class="subhead">Ngày trong tháng</div>` + DAYS.map((d, i) => row(`Ngày ${i + 1}`, d, IRREGULAR_DAYS.has(i + 1))).join("") +
  `<p class="legend subhead" style="font-weight:400">Chữ <b>đỏ</b> là cách đọc đặc biệt, cần học thuộc.</p>`;
$("numbers").innerHTML =
  `<div class="subhead">Số đếm</div>` + NUMBERS.map(([n, r]) => row(n, r, /びゃく|ぴゃく|ぜん|っせん/.test(r))).join("") +
  `<div class="subhead">Đếm đồ vật (～つ)</div>` + COUNT_THINGS.map((c, i) => row(i + 1, c)).join("") +
  `<p class="legend subhead" style="font-weight:400">Ví dụ đọc giá: 970.000 = <span lang="ja">きゅうじゅうななまん</span>; 8.500 = <span lang="ja">はっせんごひゃく</span>.</p>`;
$("time").innerHTML =
  `<div class="subhead">Giờ (～時)</div>` + HOURS.map((h, i) => row(`${i + 1} giờ`, h, [4, 7, 9].includes(i + 1))).join("") +
  `<div class="subhead">Phút (～分)</div>` + MINUTES.map(([m, r]) => row(`${m} phút`, r, /ぷん/.test(r))).join("") +
  `<div class="subhead">Thứ trong tuần</div>` + WEEKDAYS.map(([j, v]) => row(v, j)).join("");

// ---------- exam ----------
$("exam-format").textContent = EXAM.format;
$("exam-parts").innerHTML = EXAM.parts.map((p) => `<div class="part">
  <div class="pts">${p.pts}<small>/100</small></div><h4>${p.name}</h4><p>${esc(p.desc)}</p>
  <table>${p.rows.map(([a, b]) => `<tr><td>${esc(a)}</td><td>${esc(b)}</td></tr>`).join("")}</table></div>`).join("");
$("exam-notes").innerHTML = EXAM.notes.map((n) => `<li>${esc(n)}</li>`).join("");
$("reading").textContent = EXAM.readingSample;
const qa = (list) => list.map(([q, a]) => `<div class="q"><div class="ask" lang="ja">${esc(q)}</div><div class="ans" lang="ja">${esc(a)}</div></div>`).join("");
$("qa-nopic").innerHTML = qa(EXAM.noPicture);
$("qa-pic").innerHTML = EXAM.pictures.map((p) => `<div class="pic"><h4>${esc(p.title)}</h4><p class="info">${esc(p.info)}</p><div class="qa">${qa(p.qa)}</div></div>`).join("");

// ---------- active tab ----------
const links = [...document.querySelectorAll(".tabs a")];
const io = new IntersectionObserver((entries) => entries.forEach((en) => {
  if (en.isIntersecting) links.forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === "#" + en.target.id));
}), { rootMargin: "-40% 0px -55% 0px" });
document.querySelectorAll("main section").forEach((s) => io.observe(s));
