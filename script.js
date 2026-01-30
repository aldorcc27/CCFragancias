// script.js (FINAL)
// - Catálogo completo con nombres + precios
// - Filtros: Todos / Damas / Caballeros
// - Botones WhatsApp con mensaje automático
// - Fotos por perfume (usa img/<archivo> cuando las subas a GitHub)
// - ELIMINADOS: God of Fire y Bleu de Chanel (en todas sus apariciones)

const PHONE_E164 = "18295733343"; // +1 829...
const BRAND = "C&Cfragancias";

// Mapa: NOMBRE EXACTO -> RUTA EN TU REPO
// IMPORTANTE: Para que se vean, sube las fotos a /img/ en GitHub (raíz).
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
  "YSL – La Nuit de L’Homme Bleu Électrique": "img/Yves Saint Laurent -.jpg", // tu zip trae ese nombre raro
  "Carolina Herrera – CH": "img/CAROLINA HERRERA - CH.png",
  "Jean Paul Gaultier – Le Beau": "img/Jean Paul Gaultier - Le Beau.jpg",
  "Paco Rabanne – 1 Million Lucky": "img/1 Million Lucky.jpg",
  "Valentino – Uomo Born in Roma": "img/VALENTINO - UOMO BORN IN ROMA.jpg", // si no existe, verás placeholder
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

// Catálogo FINAL (SIN God of Fire, SIN Bleu de Chanel)
const products = [
  // DAMAS
  { cat: "damas", name: "FUGAZZI – Angel Dust", ml5: 1500, ml10: 2800 },
  { cat: "damas", name: "ROOM 1015 – Wavechild", ml5: 1200, ml10: 2250 },
  { cat: "damas", name: "Le Labo – Santal 33", ml5: 1500, ml10: 2700 },
  { cat: "damas", name: "Sospiro – Vibrato", ml5: 1200, ml10: 2250 },
  { cat: "damas", name: "Initio – Musk Therapy", ml5: 1250, ml10: 2300 },
  { cat: "damas", name: "Penhaligon’s – Duchess Rose", ml5: 1400, ml10: 2500 },
  { cat: "damas", name: "Penhaligon’s – Empressa", ml5: 1200, ml10: 2200 },
  { cat: "damas", name: "Gucci Flora – Gorgeous Gardenia", ml5: 950, ml10: 1800 },
  { cat: "damas", name: "Chanel – Chance", ml5: 900, ml10: 1700 },
  { cat: "damas", name: "Prada – Milano d’Iris", ml5: 800, ml10: 1500 },
  { cat: "damas", name: "Montale – Ristretto Intense Café", ml5: 900, ml10: 1700 },
  { cat: "damas", name: "Initio – Absolute Aphrodisiac", ml5: 1250, ml10: 2400 },
  { cat: "damas", name: "Nishane – Ani", ml5: 1200, ml10: 2300 },
  { cat: "damas", name: "BDK – Gris Charnel Extrait", ml5: 1450, ml10: 2600 },
  { cat: "damas", name: "Creed – Green Irish Tweed", ml5: 1300, ml10: 2500 },
  { cat: "damas", name: "Parfums de Marly – Carlisle", ml5: 1250, ml10: 2300 },
  { cat: "damas", name: "Xerjoff – Tony Iommi Monkey Special", ml5: 1500, ml10: 2750 },
  { cat: "damas", name: "Parfums de Marly – Sedley", ml5: 1150, ml10: 2200 },

  // CABALLEROS
  { cat: "caballeros", name: "Gritti – Pomelo Sorrento", ml5: 1150, ml10: 2150 },
  { cat: "caballeros", name: "Parfums de Marly – Greenley", ml5: 1150, ml10: 2200 },
  { cat: "caballeros", name: "Narcotica – Limonata", ml5: 1900, ml10: 3600 },
  { cat: "caballeros", name: "Une Nuit Nomade – Sugar Leather", ml5: 1500, ml10: 2800 },
  { cat: "caballeros", name: "Orto Parisi – Bergamask", ml5: 1400, ml10: 2700 },
  { cat: "caballeros", name: "Tom Ford – Ombré Leather", ml5: 1200, ml10: 2300 },
  { cat: "caballeros", name: "Armani – Stronger With You Absolutely", ml5: 850, ml10: 1550 },
  { cat: "caballeros", name: "YSL – Y EDT", ml5: 750, ml10: 1350 },
  { cat: "caballeros", name: "YSL – MYSLF", ml5: 900, ml10: 1650 },
  { cat: "caballeros", name: "Valentino – Born in Roma Coral Fantasy", ml5: 800, ml10: 1500 },
  { cat: "caballeros", name: "Paco Rabanne – Invictus Parfum", ml5: 900, ml10: 1700 },
  { cat: "caballeros", name: "YSL – La Nuit de L’Homme Bleu Électrique", ml5: 900, ml10: 1800 },
  { cat: "caballeros", name: "Carolina Herrera – CH", ml5: 650, ml10: 1100 },
  { cat: "caballeros", name: "Jean Paul Gaultier – Le Beau", ml5: 850, ml10: 1550 },
  { cat: "caballeros", name: "Paco Rabanne – 1 Million Lucky", ml5: 750, ml10: 1350 },
  { cat: "caballeros", name: "Valentino – Uomo Born in Roma", ml5: 750, ml10: 1400 },
  { cat: "caballeros", name: "Chanel – Allure Homme", ml5: 650, ml10: 1300 },
  { cat: "caballeros", name: "Montblanc – Explorer", ml5: 700, ml10: 1450 },
  { cat: "caballeros", name: "Maison Margiela – Jazz Club", ml5: 750, ml10: 1500 },
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

const pesos = (n) => `RD$${Number(n).toLocaleString("es-DO")}`;

function waLink(message) {
  return `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(message)}`;
}

function placeholderDataUri(label = "C&Cfragancias") {
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
    <text x="50%" y="61%" text-anchor="middle" font-family="Arial" font-size="18" fill="#6b6b6b">Sube las fotos a /img/</text>
  </svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

function buildCard(p) {
  const card = document.createElement("div");
  card.className = "product";
  card.dataset.cat = p.cat;

  // FOTO
  const imgWrap = document.createElement("div");
  imgWrap.className = "pimg-wrap";

  const img = document.createElement("img");
  img.className = "pimg";
  img.loading = "lazy";
  img.alt = p.name;

  const url = imageMap[p.name];
  img.src = url || placeholderDataUri("C&Cfragancias");
  img.onerror = () => { img.src = placeholderDataUri("C&Cfragancias"); };

  imgWrap.appendChild(img);

  // TOP
  const top = document.createElement("div");
  top.className = "product-top";

  const left = document.createElement("div");
  const name = document.createElement("div");
  name.className = "product-name";
  name.textContent = p.name;
  left.appendChild(name);

  const tag = document.createElement("div");
  tag.className = "tag";
  tag.textContent = (p.cat === "damas") ? "Damas" : "Caballeros";

  top.appendChild(left);
  top.appendChild(tag);

  // PRECIOS
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

  // BOTONES
  const btnRow = document.createElement("div");
  btnRow.style.display = "grid";
  btnRow.style.gridTemplateColumns = "1fr 1fr";
  btnRow.style.gap = "10px";

  const btn5 = document.createElement("a");
  btn5.className = "btn btn-primary";
  btn5.target = "_blank";
  btn5.rel = "noopener";
  btn5.textContent = "Pedir 5 ml";
  btn5.href = waLink(`Hola, quiero ${p.name} 5 ml. — ${BRAND}`);

  const btn10 = document.createElement("a");
  btn10.className = "btn btn-primary";
  btn10.target = "_blank";
  btn10.rel = "noopener";
  btn10.textContent = "Pedir 10 ml";
  btn10.href = waLink(`Hola, quiero ${p.name} 10 ml. — ${BRAND}`);

  btnRow.appendChild(btn5);
  btnRow.appendChild(btn10);

  // ENSAMBLA
  card.appendChild(imgWrap);
  card.appendChild(top);
  card.appendChild(prices);
  card.appendChild(btnRow);

  return card;
}

function render(filter) {
  const grid = document.getElementById("grid");
  if (!grid) return;
  grid.innerHTML = "";

  products
    .filter(p => filter === "todos" ? true : p.cat === filter)
    .forEach(p => grid.appendChild(buildCard(p)));
}

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

  // CTAs generales
  const generalHref = waLink(`Hola, quiero información para pedir un decant. — ${BRAND}`);
  ["ctaTop", "ctaHero", "ctaBottom", "ctaFinal"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.href = generalHref;
  });

  // Filtros
  document.querySelectorAll(".chip").forEach(chip => {
    chip.addEventListener("click", () => {
      setActiveChip(chip);
      render(chip.dataset.filter);
    });
  });

  render("todos");
}

document.addEventListener("DOMContentLoaded", init);


