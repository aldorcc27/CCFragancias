// script.js (INTEGRADO FINAL)
// ✅ Chips funcionan (Todos/Damas/Caballeros)
// ✅ Búsqueda funciona + botón limpiar (X) + estado currentFilter/currentQuery
// ✅ Mensaje “sin resultados” (nunca queda vacío raro)
// ✅ Selección C&C (Angel Dust, Gris Charnel Extrait, Vibrato, Greenley)
// ✅ Featured arriba + resto ordenado por nombre
// ✅ WhatsApp cerrador + ciudad
// ✅ Fotos desde /img/

const PHONE_E164 = "18295733343";
const BRAND = "C&Cfragancias";

/* =========================
   MAPA DE IMÁGENES
   ========================= */
const imageMap = {
  // DAMAS
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

  // CABALLEROS
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
  "Jean Paul Gaultier – Monsieur": "img/JEAN PAUL GAULTIER - MONSIEUR.jpg",
  "Polo Blue": "img/POLO BLUE.jpg",
  "Polo Black": "img/POLO BLACK.jpg",
  "Ferragamo – F": "img/F - FERRAGAMO.jpg",
  "Perry Ellis – Perry Ellis": "img/PERRY ELLIS - PERRY ELLIS.jpg",
};

/* =========================
   CATÁLOGO (SIN God of Fire, SIN Bleu de Chanel)
   + featured + note para 4 seleccionados
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
  { cat: "damas", name: "Chanel – Chance", ml5: 900, ml10: 1700, tags:["dia","fresco"]  },
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
  { cat: "caballeros", name: "Parfums de Marly – Greenley", ml5: 1150, ml10: 2200, note: "Fresco · muy cumplido", featured: true, tags:["dia","fresco"] },
  { cat: "caballeros", name: "Narcotica – Limonata", ml5: 1900, ml10: 3600, tags:["dia","afrutado"] },
  { cat: "caballeros", name: "Une Nuit Nomade – Sugar Leather", ml5: 1500, ml10: 2800, tags:["noche","dulce"] },
  { cat: "caballeros", name: "Orto Parisi – Bergamask", ml5: 1400, ml10: 2700, tags:["dia","intenso"]},
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
  { cat: "caballeros", name: "Chanel – Allure Homme", ml5: 650, ml10: 1300 },
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
    <circle cx="70%" cy="35%" r="180" fill="#efe3d2" opacity="0.9"/>
    <circle cx="30%" cy="70%" r="220" fill="#ffffff" opacity="0.65"/>
    <text x="50%" y="52%" text-anchor="middle" font-family="Arial" font-size="34" fill="#1f1f1f">${label}</text>
    <text x="50%" y="61%" text-anchor="middle" font-family="Arial" font-size="18" fill="#6b6b6b">Imagen no disponible</text>
  </svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

/* =========================
   CARD
   ========================= */
function buildCard(p) {
  const card = document.createElement("div");
  card.className = "product";
  card.dataset.cat = p.cat;

  // Imagen
  const imgWrap = document.createElement("div");
  imgWrap.className = "pimg-wrap";
  imgWrap.style.position = "relative";

  const img = document.createElement("img");
  img.className = "pimg";
  img.loading = "lazy";
  img.alt = p.name;

  const url = imageMap[p.name];
  img.src = url || placeholderDataUri(BRAND);
  img.onerror = () => { img.src = placeholderDataUri(BRAND); };

  imgWrap.appendChild(img);

  // Badge Selección
  if (p.featured) {
    const badge = document.createElement("div");
    badge.className = "featured-badge";
    badge.textContent = "Selección C&C";
    imgWrap.appendChild(badge);
  }

  // Top
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

  // Precios
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

  // Botones
  const btnRow = document.createElement("div");
  btnRow.style.display = "grid";
  btnRow.style.gridTemplateColumns = "1fr 1fr";
  btnRow.style.gap = "10px";

  const btn5 = document.createElement("a");
  btn5.className = "btn btn-primary";
  btn5.target = "_blank";
  btn5.rel = "noopener";
  btn5.textContent = "Pedir 5 ml";
  btn5.href = waLink(`Hola 👋 quiero ${p.name} (5 ml). ¿Está disponible hoy? Soy de: _____. — Envíos nacionales desde Higüey — ${BRAND}`);

  const btn10 = document.createElement("a");
  btn10.className = "btn btn-primary";
  btn10.target = "_blank";
  btn10.rel = "noopener";
  btn10.textContent = "Pedir 10 ml";
  btn10.href = waLink(`Hola 👋 quiero ${p.name} (10 ml). ¿Está disponible hoy? Soy de: _____. — Envíos nacionales desde Higüey — ${BRAND}`);

  btnRow.appendChild(btn5);
  btnRow.appendChild(btn10);

  card.appendChild(imgWrap);
  card.appendChild(top);
  card.appendChild(prices);
  card.appendChild(btnRow);

  return card;
}

/* =========================
   FILTRO + BUSQUEDA + ORDEN
   ========================= */
function getOrderedProducts(filter, query) {
  const q = (query || "").trim().toLowerCase();

  let filtered = products.filter(p => {
  if (filter === "todos") return true;
  if (filter === "damas" || filter === "caballeros") return p.cat === filter;
  return Array.isArray(p.tags) && p.tags.includes(filter);
});

  if (q) {
    filtered = filtered.filter(p => p.name.toLowerCase().includes(q));
  }

  // Featured arriba, resto alfabético
  return filtered.sort((a, b) => {
    const fa = a.featured === true ? 1 : 0;
    const fb = b.featured === true ? 1 : 0;
    if (fb !== fa) return fb - fa;
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
   FEATURED BLOQUE (si existe #featured)
   ========================= */
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
   INIT
   ========================= */
function setActiveChip(target) {
  document.querySelectorAll(".chip").forEach(ch => {
    const active = ch === target;
    ch.classList.toggle("is-active", active);
    ch.setAttribute("aria-selected", active ? "true" : "false");
  });
}

function init() {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

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

  // Search input
  const search = document.getElementById("search");
  if (search) {
    search.addEventListener("input", (e) => {
      render(currentFilter, e.target.value);
      syncClearButton();
    });
  }

  // Clear search button (si existe)
  const clearBtn = document.getElementById("clearSearch");
  function syncClearButton() {
    if (!search || !clearBtn) return;
    clearBtn.classList.toggle("show", (search.value || "").trim().length > 0);
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

  // Featured (si existe en HTML)
  renderFeatured();

  // Render inicial
  render("todos", "");
}

document.addEventListener("DOMContentLoaded", init);





