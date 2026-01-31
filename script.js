// script.js (INTEGRADO FINAL - LIMPIO)
// ✅ Catálogo + chips + búsqueda + limpiar
// ✅ Selección C&C con rotación semanal (localStorage)
// ✅ Best sellers (“Más pedido”) (localStorage)
// ✅ Carrito (añadir, +/−, vaciar) + checkout WhatsApp
// ✅ Sugerencia en carrito
// ✅ Imágenes robustas (por si cambia – por - o ’ por ')
// ✅ Ads mode (?ads=1)

const PHONE_E164 = "18295733343";
const BRAND = "C&Cfragancias";

/* =========================
   MAPA DE IMÁGENES
   ========================= */
const imageMap = {
  "FUGAZZI – Angel Dust": "img/fugazzi angel dust.jpg",
  "ROOM 1015 – Wavechild": "img/room 1015 wavechild.png",
  "Le Labo – Santal 33": "img/Le labo santal 33.jpg",
  "Sospiro – Vibrato": "img/sospiro Vibrato.png",
  "Initio – Musk Therapy": "img/INITIO - MUSK THERAPY.png",
  "Penhaligon’s – Duchess Rose": "img/PENHALIGONS - DUCHESS ROSE.png",
  "Penhaligon’s – Empressa": "img/PENHALIGONS EMPRESSA.jpg",
  "Gucci Flora – Gorgeous Gardenia": "img/GUCCI FLORA GORGEOUS GARDENIA.jpg",
  "Chanel – Chance": "img/CHANCE - CHANEL.png",
  "Prada – Milano d’Iris": "img/PRADA MILANO D'IRIS.jpg",
  "Montale – Ristretto Intense Café": "img/MONTALE RISTRETTO INTENSE CAFE.jpg",
  "Initio – Absolute Aphrodisiac": "img/ABSOLUTE APHRODISIAC INITIO.jpg",
  "Nishane – Ani": "img/NISHANE ANI.png",
  "BDK – Gris Charnel Extrait": "img/BDK GRIS CHARNEL EXTRAIT.jpg",
  "Creed – Green Irish Tweed": "img/CREED - GREEN IRISH TWEED.jpg",
  "Parfums de Marly – Carlisle": "img/PARFUMS DE MARLY - CARLISLE.jpg",
  "Xerjoff – Tony Iommi Monkey Special": "img/XERJOFF - TONY IOMMI MONKEY SPECIAL.jpg",
  "Parfums de Marly – Sedley": "img/PARFUMS DE MARLY - SEDLEY.jpg",

  "Gritti – Pomelo Sorrento": "img/GRITTI - POMELO SORRENTO.jpg",
  "Parfums de Marly – Greenley": "img/PDM - GREENLEY.jpg",
  "Narcotica – Limonata": "img/NARCOTICA - LIMONATA.jpg",
  "Une Nuit Nomade – Sugar Leather": "img/UNE NUIT NOMADE - SUGAR LEATHER.jpg",
  "Orto Parisi – Bergamask": "img/ORTO PARISI - BERGAMASK.jpg",
  "Tom Ford – Ombré Leather": "img/TOM FORD - OMBRE LEATHER.jpg",
  "Armani – Stronger With You Absolutely": "img/ARMANI - STRONGER WITH YOU ABSOLUTELY.jpg",
  "YSL – Y EDT": "img/YSL - Y EDT.jpg",
  "YSL – MYSLF": "img/YSL - MYSLF.jpg",
  "Valentino – Born in Roma Coral Fantasy": "img/VALENTINO - BORN IN ROMA CORAL FANTASY.jpg",
  "Paco Rabanne – Invictus Parfum": "img/PACO RABANNE - INVICTUS PARFUM.jpg",
  "YSL – La Nuit de L’Homme Bleu Électrique": "img/Yves Saint Laurent -.jpg",
  "Carolina Herrera – CH": "img/CAROLINA HERRERA - CH.png",
  "Jean Paul Gaultier – Le Beau": "img/Jean Paul Gaultier - Le Beau.jpg",
  "Paco Rabanne – 1 Million Lucky": "img/1 Million Lucky.jpg",
  "Valentino – Uomo Born in Roma": "img/VALENTINO - UOMO BORN IN ROMA.jpg",
  "Chanel – Allure Homme": "img/CHANEL - ALLURE HOMME.jpg",
  "Montblanc – Explorer": "img/MONT BLANC - EXPLORER.jpg",
  "Maison Margiela – Jazz Club": "img/MAISON MARGIELA JAZZ CLUB.jpg",
  "Chanel – Égoïste Platinum": "img/CHANEL - EGOISTE PLATINUM.jpg",
  "Montblanc – Legend": "img/MONT BLANC - LEGEND.jpg",
  "Ferragamo – Uomo Urban Feel": "img/FERRAGAMO UOMO - URBAN FEEL.jpg",
  "Cartier – Déclaration L’Eau": "img/CARTIER - DECLARATION L'EAU.jpg",
  "Terre d’Hermès": "img/TERRE D'HERMES.jpg",
  "Jean Paul Gaultier – Monsieur": "img/JEAN PAUL GOUTIER - MONSIEUR.jpg",
  "Polo Blue": "img/POLO BLUE.jpg",
  "Polo Black": "img/POLO BLACK.jpg",
  "Ferragamo – F": "img/F - FERRAGAMO.jpg",
  "Perry Ellis – Perry Ellis": "img/PERRY ELLIS - PERRY ELLIS.jpg",
};

// ✅ lookup robusto (por si cambia – por - o ’ por ')
function normKey(s){
  return (s || "")
    .normalize("NFKD")
    .replace(/[’‘]/g, "'")
    .replace(/[–—]/g, "-")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}
const imageMapNorm = {};
Object.entries(imageMap).forEach(([k, v]) => { imageMapNorm[normKey(k)] = v; });

/* =========================
   CATÁLOGO
   ========================= */
const products = [
  // DAMAS
  { cat: "damas", name: "FUGAZZI – Angel Dust", ml5: 1500, ml10: 2800, note: "Ideal para día · limpio · elegante", featured: true, tags:["dia","fresco"] },
  { cat: "damas", name: "ROOM 1015 – Wavechild", ml5: 1200, ml10: 2250, tags:["dia","afrutado"] },
  { cat: "damas", name: "Le Labo – Santal 33", ml5: 1500, ml10: 2700, tags:["dia","intenso"] },
  { cat: "damas", name: "Sospiro – Vibrato", ml5: 1200, ml10: 2250, note: "Fresco · con carácter", featured: true, tags:["dia","afrutado"] },
  { cat: "damas", name: "Initio – Musk Therapy", ml5: 1250, ml10: 2300, tags:["noche","dia","dulce"] },
  { cat: "damas", name: "Penhaligon’s – Duchess Rose", ml5: 1400, ml10: 2500, tags:["dia","floral"] },
  { cat: "damas", name: "Penhaligon’s – Empressa", ml5: 1200, ml10: 2200, tags:["dia","floral"] },
  { cat: "damas", name: "Gucci Flora – Gorgeous Gardenia", ml5: 950, ml10: 1800, tags:["dia","floral"] },
  { cat: "damas", name: "Chanel – Chance", ml5: 900, ml10: 1700, tags:["dia","fresco"] },
  { cat: "damas", name: "Prada – Milano d’Iris", ml5: 800, ml10: 1500, tags:["dia","floral"] },
  { cat: "damas", name: "Montale – Ristretto Intense Café", ml5: 900, ml10: 1700, tags:["noche","intenso"] },
  { cat: "damas", name: "Initio – Absolute Aphrodisiac", ml5: 1250, ml10: 2400, tags:["noche","dulce"] },
  { cat: "damas", name: "Nishane – Ani", ml5: 1200, ml10: 2300, tags:["noche","dulce"] },
  { cat: "damas", name: "BDK – Gris Charnel Extrait", ml5: 1450, ml10: 2600, note: "Ideal para noche · sofisticado", featured: true, tags:["noche","intenso"] },

  // CABALLEROS
  { cat: "caballeros", name: "Gritti – Pomelo Sorrento", ml5: 1150, ml10: 2150, tags:["dia","afrutado"] },
  { cat: "caballeros", name: "Creed – Green Irish Tweed", ml5: 1300, ml10: 2500, tags:["dia","fresco"] },
  { cat: "caballeros", name: "Parfums de Marly – Carlisle", ml5: 1250, ml10: 2300, tags:["noche","intenso"] },
  { cat: "caballeros", name: "Xerjoff – Tony Iommi Monkey Special", ml5: 1500, ml10: 2750, tags:["noche","intenso"] },
  { cat: "caballeros", name: "Parfums de Marly – Sedley", ml5: 1150, ml10: 2200, tags:["dia","fresco"] },
  { cat: "caballeros", name: "Parfums de Marly – Greenley", ml5: 1150, ml10: 2200, note: "Fresco · muchos cumplidos", featured: true, tags:["dia","fresco"] },
  { cat: "caballeros", name: "Narcotica – Limonata", ml5: 1900, ml10: 3600, tags:["dia","afrutado"] },
  { cat: "caballeros", name: "Une Nuit Nomade – Sugar Leather", ml5: 1500, ml10: 2800, tags:["noche","dulce"] },
  { cat: "caballeros", name: "Orto Parisi – Bergamask", ml5: 1400, ml10: 2700, tags:["dia","intenso"] },
  { cat: "caballeros", name: "Tom Ford – Ombré Leather", ml5: 1200, ml10: 2300, tags:["noche","intenso"] },
  { cat: "caballeros", name: "Armani – Stronger With You Absolutely", ml5: 850, ml10: 1550, tags:["noche","dulce"] },
  { cat: "caballeros", name: "YSL – Y EDT", ml5: 750, ml10: 1350, tags:["dia","fresco"] },
  { cat: "caballeros", name: "YSL – MYSLF", ml5: 900, ml10: 1650, tags:["dia","fresco"] },
  { cat: "caballeros", name: "Valentino – Born in Roma Coral Fantasy", ml5: 800, ml10: 1500, tags:["dia","dulce"] },
  { cat: "caballeros", name: "Paco Rabanne – Invictus Parfum", ml5: 900, ml10: 1700, tags:["noche","intenso"] },
  { cat: "caballeros", name: "YSL – La Nuit de L’Homme Bleu Électrique", ml5: 900, ml10: 1800, tags:["noche","dulce"] },
  { cat: "caballeros", name: "Carolina Herrera – CH", ml5: 650, ml10: 1100, tags:["dia","fresco"] },
  { cat: "caballeros", name: "Jean Paul Gaultier – Le Beau", ml5: 850, ml10: 1550, tags:["dia","afrutado"] },
  { cat: "caballeros", name: "Paco Rabanne – 1 Million Lucky", ml5: 750, ml10: 1350, tags:["noche","dulce"] },
  { cat: "caballeros", name: "Valentino – Uomo Born in Roma", ml5: 750, ml10: 1400 },
  { cat: "caballeros", name: "Chanel – Allure Homme", ml5: 650, ml10: 1300, tags:["dia","noche","fresco"] },
  { cat: "caballeros", name: "Montblanc – Explorer", ml5: 700, ml10: 1450, tags:["dia","fresco"] },
  { cat: "caballeros", name: "Maison Margiela – Jazz Club", ml5: 750, ml10: 1500, tags:["noche","intenso"] },
  { cat: "caballeros", name: "Chanel – Égoïste Platinum", ml5: 750, ml10: 1500 },
  { cat: "caballeros", name: "Montblanc – Legend", ml5: 750, ml10: 1500 },
  { cat: "caballeros", name: "Ferragamo – Uomo Urban Feel", ml5: 700, ml10: 1400 },
  { cat: "caballeros", name: "Cartier – Déclaration L’Eau", ml5: 650, ml10: 1300 },
  { cat: "caballeros", name: "Terre d’Hermès", ml5: 650, ml10: 1300 },
  { cat: "caballeros", name: "Jean Paul Gaultier – Monsieur", ml5: 650, ml10: 1300 },
  { cat: "caballeros", name: "Polo Blue", ml5: 600, ml10: 1200 },
  { cat: "caballeros", name: "Polo Black", ml5: 600, ml10: 1200 },
  { cat: "caballeros", name: "Ferragamo – F", ml5: 400, ml10: 800 },
  { cat: "caballeros", name: "Perry Ellis – Perry Ellis", ml5: 450, ml10: 900 },
];

/* =========================
   ESTADO
   ========================= */
let currentFilter = "todos";
let currentQuery = "";

/* =========================
   HELPERS
   ========================= */
const pesos = (n) => `RD$${Number(n).toLocaleString("es-DO")}`;

function waLink(message) {
  return `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(message)}`;
}

function placeholderDataUri(label = BRAND) {
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="900" height="600">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#ffffff"/>
        <stop offset="1" stop-color="#f3eadb"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#g)"/>
    <text x="50%" y="55%" text-anchor="middle" font-family="Arial" font-size="28" fill="#1f1f1f">${label}</text>
    <text x="50%" y="64%" text-anchor="middle" font-family="Arial" font-size="16" fill="#6b6b6b">Imagen no disponible</text>
  </svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

/* =========================
   BEST SELLERS (LOCAL)
   ========================= */
function trackClick(name){
  const key = "cc_best_sellers";
  const data = JSON.parse(localStorage.getItem(key) || "{}");
  data[name] = (data[name] || 0) + 1;
  localStorage.setItem(key, JSON.stringify(data));
}
function getScore(name){
  const key = "cc_best_sellers";
  const data = JSON.parse(localStorage.getItem(key) || "{}");
  return data[name] || 0;
}

/* =========================
   CARRITO (LOCAL)
   ========================= */
const CART_KEY = "cc_cart_v1";

function toast(msg){
  const t = document.createElement("div");
  t.textContent = msg;
  t.style.cssText = `
    position:fixed; left:50%; bottom:90px; transform:translateX(-50%);
    background:#111; color:#fff; padding:10px 14px;
    border-radius:14px; font-size:13px;
    box-shadow:0 10px 30px rgba(0,0,0,.3);
    z-index:10001; opacity:0; transition:.25s;
  `;
  document.body.appendChild(t);
  requestAnimationFrame(()=> t.style.opacity = "1");
  setTimeout(()=>{
    t.style.opacity="0";
    setTimeout(()=> t.remove(), 250);
  }, 1400);
}

function loadCart(){
  return JSON.parse(localStorage.getItem(CART_KEY) || "[]");
}
function saveCart(items){
  localStorage.setItem(CART_KEY, JSON.stringify(items));
}
function cartLineKey(name, sizeMl){
  return `${name}__${sizeMl}`;
}

function addToCart(p, sizeMl){
  const cart = loadCart();
  const key = cartLineKey(p.name, sizeMl);
  const existing = cart.find(i => i.key === key);

  if (existing) existing.qty += 1;
  else cart.push({
    key,
    name: p.name,
    sizeMl,
    price: (sizeMl === 5 ? p.ml5 : p.ml10),
    qty: 1
  });

  saveCart(cart);
  refreshCartUI();
  toast(`Listo ✅ ${p.name} (${sizeMl} ml) agregado al carrito`);
  if (navigator.vibrate) navigator.vibrate(30);
}

function incCart(key){
  const cart = loadCart();
  const it = cart.find(i => i.key === key);
  if (it) it.qty += 1;
  saveCart(cart);
  refreshCartUI();
}
function decCart(key){
  let cart = loadCart();
  const it = cart.find(i => i.key === key);
  if (!it) return;
  it.qty -= 1;
  if (it.qty <= 0) cart = cart.filter(x => x.key !== key);
  saveCart(cart);
  refreshCartUI();
}
function clearCart(){
  saveCart([]);
  refreshCartUI();
}
function cartTotals(){
  const cart = loadCart();
  const items = cart.reduce((s,i)=> s + i.qty, 0);
  const total = cart.reduce((s,i)=> s + (i.price * i.qty), 0);
  return { cart, items, total };
}

function getSuggestion(cart){
  if (!cart.length) return null;
  const last = cart[cart.length - 1];
  const base = products.find(p => p.name === last.name);
  if (!base || !Array.isArray(base.tags)) return null;

  return products.find(p =>
    p.name !== base.name &&
    Array.isArray(p.tags) &&
    p.tags.some(t => base.tags.includes(t))
  ) || null;
}

/* =========================
   CARD
   ========================= */
function buildCard(p) {
  const card = document.createElement("div");
  card.className = "product";
  card.dataset.cat = p.cat;

  const imgWrap = document.createElement("div");
  imgWrap.className = "pimg-wrap";
  imgWrap.style.position = "relative";

  const img = document.createElement("img");
  img.className = "pimg";
  img.loading = "lazy";
  img.alt = p.name;

  img.src = (
    imageMap[p.name] ||
    imageMapNorm[normKey(p.name)] ||
    placeholderDataUri(BRAND)
  );
  img.onerror = () => { img.src = placeholderDataUri(BRAND); };

  imgWrap.appendChild(img);

  // Badges
  if (p.featured) {
    const badge = document.createElement("div");
    badge.className = "featured-badge";
    badge.textContent = "Selección C&C";
    imgWrap.appendChild(badge);
  }

  const score = getScore(p.name);
  if (score >= 3) {
    const hot = document.createElement("div");
    hot.className = "hot-badge";
    hot.textContent = "Más pedido";
    imgWrap.appendChild(hot);
  }

  const top = document.createElement("div");
  top.className = "product-top";

  const left = document.createElement("div");
  const name = document.createElement("div");
  name.className = "product-name";
  name.textContent = p.name;
  left.appendChild(name);

  if (p.note) {
    const note = document.createElement("div");
    note.className = "product-note";
    note.textContent = p.note;
    left.appendChild(note);
  }

  const tag = document.createElement("div");
  tag.className = "tag";
  tag.textContent = (p.cat === "damas") ? "Damas" : "Caballeros";

  top.appendChild(left);
  top.appendChild(tag);

  const prices = document.createElement("div");
  prices.className = "prices";

  const price5 = document.createElement("div");
  price5.className = "price";
  price5.innerHTML = `<div class="ml">5 ml</div><div class="rd">${pesos(p.ml5)}</div>`;

  const price10 = document.createElement("div");
  price10.className = "price";
  price10.innerHTML = `<div class="ml">10 ml</div><div class="rd">${pesos(p.ml10)}</div>`;

  prices.appendChild(price5);
  prices.appendChild(price10);

  const btnRow = document.createElement("div");
  btnRow.style.display = "grid";
  btnRow.style.gridTemplateColumns = "1fr 1fr";
  btnRow.style.gap = "10px";
  btnRow.style.gridAutoRows = "auto";

  // Añadir al carrito
  const add5 = document.createElement("button");
  add5.type = "button";
  add5.className = "btn btn-ghost";
  add5.textContent = "Añadir 5ml al carrito";
  add5.addEventListener("click", () => addToCart(p, 5));

  const add10 = document.createElement("button");
  add10.type = "button";
  add10.className = "btn btn-ghost";
  add10.textContent = "Añadir 10 ml al carrito";
  add10.addEventListener("click", () => addToCart(p, 10));

  // Pedir directo (WhatsApp)
  const btn5 = document.createElement("a");
  btn5.className = "btn btn-primary";
  btn5.target = "_blank";
  btn5.rel = "noopener";
  btn5.textContent = "Comprar 5 ml";
  btn5.href = waLink(`Hola 👋 quiero ${p.name} (5 ml). ¿Está disponible hoy? Soy de: _____. — Envíos nacionales desde Higüey — ${BRAND}`);
  btn5.addEventListener("click", () => trackClick(p.name));

  const btn10 = document.createElement("a");
  btn10.className = "btn btn-primary";
  btn10.target = "_blank";
  btn10.rel = "noopener";
  btn10.textContent = "Comprar 10 ml";
  btn10.href = waLink(`Hola 👋 quiero ${p.name} (10 ml). ¿Está disponible hoy? Soy de: _____. — Envíos nacionales desde Higüey — ${BRAND}`);
  btn10.addEventListener("click", () => trackClick(p.name));

  btnRow.appendChild(add5);
  btnRow.appendChild(add10);
  btnRow.appendChild(btn5);
  btnRow.appendChild(btn10);

  card.appendChild(imgWrap);
  card.appendChild(top);
  card.appendChild(prices);
  card.appendChild(btnRow);

  return card;
}

/* =========================
   FILTRO + BÚSQUEDA + ORDEN
   ========================= */
function getOrderedProducts(filter, query) {
  const q = (query || "").trim().toLowerCase();

  let filtered = products.filter(p => {
    if (filter === "todos") return true;
    if (filter === "damas" || filter === "caballeros") return p.cat === filter;
    return Array.isArray(p.tags) && p.tags.includes(filter);
  });

  if (q) filtered = filtered.filter(p => p.name.toLowerCase().includes(q));

  // Featured arriba, luego más pedido, luego alfabético
  return filtered.sort((a, b) => {
    const fa = a.featured === true ? 1 : 0;
    const fb = b.featured === true ? 1 : 0;
    if (fb !== fa) return fb - fa;

    const sa = getScore(a.name);
    const sb = getScore(b.name);
    if (sb !== sa) return sb - sa;

    return a.name.localeCompare(b.name, "es");
  });
}

function render(filter = currentFilter, query = currentQuery) {
  currentFilter = filter;
  currentQuery = query;

  const grid = document.getElementById("grid");
  if (!grid) return;

  grid.innerHTML = "";
  const list = getOrderedProducts(filter, query);

  if (list.length === 0) {
    grid.innerHTML = `<div class="muted" style="padding:14px;">No encontré ese perfume. Prueba con otra palabra (ej: Greenley, Vibrato).</div>`;
    return;
  }
  list.forEach(p => grid.appendChild(buildCard(p)));
}

/* =========================
   ROTACIÓN SEMANAL SELECCIÓN C&C
   ========================= */
const FEATURED_POOL = [
  "FUGAZZI – Angel Dust",
  "BDK – Gris Charnel Extrait",
  "Sospiro – Vibrato",
  "Parfums de Marly – Greenley",
  "Initio – Absolute Aphrodisiac",
  "Nishane – Ani",
  "Parfums de Marly – Carlisle",
  "Creed – Green Irish Tweed",
  "Orto Parisi – Bergamask",
  "Maison Margiela – Jazz Club",
  "Initio – Musk Therapy",
  "Une Nuit Nomade – Sugar Leather",
  "Gritti – Pomelo Sorrento",
  "Le Labo – Santal 33",
  "ROOM 1015 – Wavechild",
  "Penhaligon’s – Duchess Rose"
];

function getWeekKey(){
  const d = new Date();
  const oneJan = new Date(d.getFullYear(), 0, 1);
  const week = Math.ceil((((d - oneJan) / 86400000) + oneJan.getDay() + 1) / 7);
  return `${d.getFullYear()}-W${week}`;
}

function rotateFeaturedWeekly(){
  const key = "cc_featured_week";
  const currentWeek = getWeekKey();

  let state = JSON.parse(localStorage.getItem(key) || "{}");

  if (state.week !== currentWeek) {
    const shuffled = [...FEATURED_POOL].sort(() => 0.5 - Math.random());
    state = { week: currentWeek, picks: shuffled.slice(0, 4) };
    localStorage.setItem(key, JSON.stringify(state));
  }

  products.forEach(p => { p.featured = false; });
  products.forEach(p => { if (state.picks.includes(p.name)) p.featured = true; });
}

function renderFeatured() {
  const wrap = document.getElementById("featured");
  if (!wrap) return;

  const featured = products.filter(p => p.featured).slice(0, 4);

  wrap.innerHTML = `
    <div style="grid-column:1/-1">
      <div class="featured-title">Selección C&C</div>
      <div class="muted small">Nuestros 4 recomendados para decidir rápido</div>
    </div>
  `;
  featured.forEach(p => wrap.appendChild(buildCard(p)));
}

/* =========================
   CARRITO UI
   ========================= */
function buildCartMessage(){
  const { cart, items, total } = cartTotals();
  if (items === 0) return waLink(`Hola 👋 quiero información para pedir un decant. — ${BRAND}`);

  const lines = cart.map(i => `• ${i.name} — ${i.sizeMl}ml x${i.qty} = ${pesos(i.price * i.qty)}`);
  const msg =
`Hola 👋 quiero hacer este pedido:

${lines.join("\n")}

Total: ${pesos(total)}
Ciudad / sector: _____

¿Está disponible para envío hoy?
— Envíos nacionales desde Higüey — ${BRAND}`;

  return waLink(msg);
}

function refreshCartUI(){
  const bar = document.getElementById("cartBar");
  const summary = document.getElementById("cartSummary");
  const checkout = document.getElementById("cartCheckout");
  const checkout2 = document.getElementById("cartCheckout2");
  const itemsWrap = document.getElementById("cartItems");
  const totalEl = document.getElementById("cartTotal");

  if (!bar || !summary || !checkout || !itemsWrap || !totalEl) return;

  const { cart, items, total } = cartTotals();

  summary.textContent = items === 1 ? "1 artículo" : `${items} artículos`;
  totalEl.textContent = pesos(total);

  const link = buildCartMessage();
  checkout.href = link;
  if (checkout2) checkout2.href = link;

  itemsWrap.innerHTML = "";

  if (cart.length === 0) {
    itemsWrap.innerHTML = `<div class="muted" style="padding:10px 0;">Tu carrito está vacío.</div>`;
    return;
  }

  // Items
  cart.forEach(i => {
    const row = document.createElement("div");
    row.className = "cartrow";

    const left = document.createElement("div");
    left.innerHTML = `
      <div class="cartrow-name">${i.name}</div>
      <div class="cartrow-meta">${i.sizeMl} ml · ${pesos(i.price)} c/u</div>
    `;

    const right = document.createElement("div");
    right.className = "cartrow-actions";

    const minus = document.createElement("button");
    minus.className = "btn-mini";
    minus.type = "button";
    minus.textContent = "−";
    minus.addEventListener("click", () => decCart(i.key));

    const qty = document.createElement("div");
    qty.className = "qty";
    qty.textContent = String(i.qty);

    const plus = document.createElement("button");
    plus.className = "btn-mini";
    plus.type = "button";
    plus.textContent = "+";
    plus.addEventListener("click", () => incCart(i.key));

    right.appendChild(minus);
    right.appendChild(qty);
    right.appendChild(plus);

    row.appendChild(left);
    row.appendChild(right);
    itemsWrap.appendChild(row);
  });

  // 💡 Sugerencia (después del listado)
  const suggestion = getSuggestion(cart);
  if (suggestion) {
    const sug = document.createElement("div");
    sug.className = "muted";
    sug.style.marginTop = "12px";
    sug.innerHTML = `
      💡 <b>Te puede gustar:</b> ${suggestion.name}
      <button class="btn-mini" style="margin-left:8px">Añadir 5 ml</button>
    `;
    sug.querySelector("button").addEventListener("click", () => addToCart(suggestion, 5));
    itemsWrap.appendChild(sug);
  }
}


function setupCartUI(){
  const modal = document.getElementById("cartModal");
  const open = document.getElementById("cartOpen");
  const close = document.getElementById("cartClose");
  const clear = document.getElementById("cartClear");

  function show(){
    if (!modal) return;
    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
  }
  function hide(){
    if (!modal) return;
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
  }

  if (open) open.addEventListener("click", show);
  if (close) close.addEventListener("click", hide);
  if (modal) modal.addEventListener("click", (e) => { if (e.target === modal) hide(); });
  if (clear) clear.addEventListener("click", () => clearCart());

  refreshCartUI();
}

/* =========================
   CHIPS + INIT
   ========================= */
function setActiveChip(target) {
  document.querySelectorAll(".chip").forEach(ch => {
    const active = ch === target;
    ch.classList.toggle("is-active", active);
    ch.setAttribute("aria-selected", active ? "true" : "false");
  });
}
/* =========================
   QUIZ PERFIL OLFATIVO
   ========================= */
const QUIZ_KEY = "cc_quiz_v1";
let quizState = { time: null, style: null, vibe: null };

function loadQuiz(){
  try { return JSON.parse(localStorage.getItem(QUIZ_KEY) || "null"); }
  catch { return null; }
}
function saveQuiz(){
  localStorage.setItem(QUIZ_KEY, JSON.stringify(quizState));
}
function clearQuiz(){
  quizState = { time: null, style: null, vibe: null };
  localStorage.removeItem(QUIZ_KEY);
}

function setQuizChoice(step, value, wrap){
  quizState[step] = value;
  saveQuiz();

  // UI: marcar activo en ese grupo
  wrap.querySelectorAll("button").forEach(b => {
    const on = b.dataset.value === value;
    b.classList.toggle("is-active", on);
    b.setAttribute("aria-selected", on ? "true" : "false");
  });

  // Si ya están las 3 respuestas, aplicar
  if (quizState.time && quizState.style && quizState.vibe){
    applyQuiz();
  }
}

function applyQuiz(){
  // Prioridad de filtro: estilo (fresco/dulce/intenso) > tiempo (dia/noche) > todos
  const styleTag = quizState.style;
  const timeTag = (quizState.time === "ambos") ? null : quizState.time;

  const chosenFilter = styleTag || timeTag || "todos";

  // Activa chip si existe (para que el usuario “vea” el filtro)
  const chip = document.querySelector(`.chip[data-filter="${chosenFilter}"]`);
  if (chip) setActiveChip(chip);

  // Render con filtro principal
  render(chosenFilter, "");

  // Mensaje arriba del quiz
  const box = document.getElementById("quizResult");
  if (box){
    const timeTxt = quizState.time === "ambos" ? "día o noche" : quizState.time;
    box.style.display = "block";
    box.innerHTML = `
      <div style="font-weight:600;margin-bottom:6px;">Tu perfil:</div>
      <div class="muted" style="margin-bottom:10px;">
        ${timeTxt} · ${quizState.style} · ${quizState.vibe}
      </div>
      <button type="button" class="btn btn-ghost" id="quizResetBtn">Reiniciar</button>
      <a class="btn btn-primary" style="margin-left:8px;" href="#catalogo">Ver resultados</a>
    `;

    const reset = document.getElementById("quizResetBtn");
    if (reset){
      reset.addEventListener("click", () => {
        clearQuiz();
        // Reset UI
        document.querySelectorAll("#quiz .quizopts").forEach(w => {
          w.querySelectorAll("button").forEach(b => {
            b.classList.remove("is-active");
            b.setAttribute("aria-selected", "false");
          });
        });
        box.style.display = "none";
        // Volver a todo
        const chipTodos = document.querySelector(`.chip[data-filter="todos"]`);
        if (chipTodos) setActiveChip(chipTodos);
        render("todos", "");
      });
    }
  }

  // Scroll suave al catálogo
  const cat = document.getElementById("catalogo");
  if (cat) cat.scrollIntoView({ behavior: "smooth" });
}

function initQuiz(){
  // cargar estado guardado si existe
  const saved = loadQuiz();
  if (saved && typeof saved === "object"){
    quizState = { ...quizState, ...saved };
  }

  // bind clicks
  document.querySelectorAll("#quiz .quizopts").forEach(wrap => {
    const step = wrap.getAttribute("data-step");
    wrap.querySelectorAll("button").forEach(btn => {
      btn.addEventListener("click", () => setQuizChoice(step, btn.dataset.value, wrap));
    });
  });

  // pintar selecciones guardadas
  document.querySelectorAll("#quiz .quizopts").forEach(wrap => {
    const step = wrap.getAttribute("data-step");
    const val = quizState[step];
    if (!val) return;
    wrap.querySelectorAll("button").forEach(b => {
      const on = b.dataset.value === val;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-selected", on ? "true" : "false");
    });
  });

  // si ya estaba completo, aplicar
  if (quizState.time && quizState.style && quizState.vibe){
    applyQuiz();
  }
}

function init() {
  // Año (si existe)
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // CTAs generales (si existen)
  const generalHref = waLink(`Hola 👋 quiero información para pedir un decant. — ${BRAND}`);
  ["ctaTop", "ctaHero", "ctaBottom", "ctaFinal"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.href = generalHref;
  });

  // Chips
  document.querySelectorAll(".chip").forEach(chip => {
    chip.addEventListener("click", () => {
      setActiveChip(chip);
      render(chip.dataset.filter, currentQuery);
    });
  });

  // Search
  const search = document.getElementById("search");
  const clearBtn = document.getElementById("clearSearch");

  function syncClearButton() {
    if (!search || !clearBtn) return;
    clearBtn.classList.toggle("show", (search.value || "").trim().length > 0);
  }

  if (search) {
    search.addEventListener("input", (e) => {
      render(currentFilter, e.target.value);
      syncClearButton();
    });
  }

  if (search && clearBtn) {
    clearBtn.addEventListener("click", () => {
      search.value = "";
      currentQuery = "";
      syncClearButton();
      render(currentFilter, "");
      search.focus();
    });
    syncClearButton();
  }

  // Featured (rotación)
  rotateFeaturedWeekly();
  renderFeatured();
  
   initQuiz();

  // Ads mode
  const params = new URLSearchParams(window.location.search);
  if (params.get("ads") === "1") {
    setTimeout(() => {
      const cat = document.getElementById("catalogo");
      if (cat) cat.scrollIntoView({ behavior: "smooth" });
    }, 200);
  }

  // Carrito
  setupCartUI();
  refreshCartUI();

  // Render inicial
  render("todos", "");
}

document.addEventListener("DOMContentLoaded", init);





















