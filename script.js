const PHONE_E164 = "18295733343"; // RD: +1 829...
const BRAND = "C&Cfragancias";

const products = [
  // DAMAS
  {cat:"damas", name:"FUGAZZI – Angel Dust", ml5:1500, ml10:2800},
  {cat:"damas", name:"ROOM 1015 – Wavechild", ml5:1200, ml10:2250},
  {cat:"damas", name:"Le Labo – Santal 33", ml5:1500, ml10:2700},
  {cat:"damas", name:"Sospiro – Vibrato", ml5:1200, ml10:2250},
  {cat:"damas", name:"Initio – Musk Therapy", ml5:1250, ml10:2300},
  {cat:"damas", name:"Penhaligon’s – Duchess Rose", ml5:1400, ml10:2500},
  {cat:"damas", name:"Penhaligon’s – Empressa", ml5:1200, ml10:2200},
  {cat:"damas", name:"Gucci Flora – Gorgeous Gardenia", ml5:950, ml10:1800},
  {cat:"damas", name:"Stephane Humbert Lucas – God of Fire", ml5:1800, ml10:3500},
  {cat:"damas", name:"Chanel – Chance", ml5:900, ml10:1700},
  {cat:"damas", name:"Prada – Milano d’Iris", ml5:800, ml10:1500},
  {cat:"damas", name:"Montale – Ristretto Intense Café", ml5:900, ml10:1700},
  {cat:"damas", name:"Initio – Absolute Aphrodisiac", ml5:1250, ml10:2400},
  {cat:"damas", name:"Nishane – Ani", ml5:1200, ml10:2300},
  {cat:"damas", name:"BDK – Gris Charnel Extrait", ml5:1450, ml10:2600},
  {cat:"damas", name:"Creed – Green Irish Tweed", ml5:1300, ml10:2500},
  {cat:"damas", name:"Parfums de Marly – Carlisle", ml5:1250, ml10:2300},
  {cat:"damas", name:"Xerjoff – Tony Iommi Monkey Special", ml5:1500, ml10:2750},
  {cat:"damas", name:"Parfums de Marly – Sedley", ml5:1150, ml10:2200},
  {cat:"damas", name:"Chanel – Bleu de Chanel Parfum", ml5:1100, ml10:2100},

  // CABALLEROS
  {cat:"caballeros", name:"Gritti – Pomelo Sorrento", ml5:1150, ml10:2150},
  {cat:"caballeros", name:"Parfums de Marly – Greenley", ml5:1150, ml10:2200},
  {cat:"caballeros", name:"Narcotica – Limonata", ml5:1900, ml10:3600},
  {cat:"caballeros", name:"Une Nuit Nomade – Sugar Leather", ml5:1500, ml10:2800},
  {cat:"caballeros", name:"Orto Parisi – Bergamask", ml5:1400, ml10:2700},
  {cat:"caballeros", name:"Chanel – Bleu de Chanel Parfum", ml5:1100, ml10:2100},
  {cat:"caballeros", name:"Tom Ford – Ombré Leather", ml5:1200, ml10:2300},
  {cat:"caballeros", name:"Armani – Stronger With You Absolutely", ml5:850, ml10:1550},
  {cat:"caballeros", name:"YSL – Y EDT", ml5:750, ml10:1350},
  {cat:"caballeros", name:"YSL – MYSLF", ml5:900, ml10:1650},
  {cat:"caballeros", name:"Valentino – Born in Roma Coral Fantasy", ml5:800, ml10:1500},
  {cat:"caballeros", name:"Paco Rabanne – Invictus Parfum", ml5:900, ml10:1700},
  {cat:"caballeros", name:"YSL – La Nuit de L’Homme Bleu Électrique", ml5:900, ml10:1800},
  {cat:"caballeros", name:"Carolina Herrera – CH", ml5:650, ml10:1100},
  {cat:"caballeros", name:"Jean Paul Gaultier – Le Beau", ml5:850, ml10:1550},
  {cat:"caballeros", name:"Paco Rabanne – 1 Million Lucky", ml5:750, ml10:1350},
  {cat:"caballeros", name:"Valentino – Uomo Born in Roma", ml5:750, ml10:1400},
  {cat:"caballeros", name:"Chanel – Allure Homme", ml5:650, ml10:1300},
  {cat:"caballeros", name:"Montblanc – Explorer", ml5:700, ml10:1450},
  {cat:"caballeros", name:"Maison Margiela – Jazz Club", ml5:750, ml10:1500},
  {cat:"caballeros", name:"Chanel – Égoïste Platinum", ml5:750, ml10:1500},
  {cat:"caballeros", name:"Montblanc – Legend", ml5:750, ml10:1500},
  {cat:"caballeros", name:"Ferragamo – Uomo Urban Feel", ml5:700, ml10:1400},
  {cat:"caballeros", name:"Cartier – Déclaration L’Eau", ml5:650, ml10:1300},
  {cat:"caballeros", name:"Terre d’Hermès", ml5:650, ml10:1300},
  {cat:"caballeros", name:"Jean Paul Gaultier – Monsieur", ml5:650, ml10:1300},
  {cat:"caballeros", name:"Polo Blue", ml5:600, ml10:1200},
  {cat:"caballeros", name:"Polo Black", ml5:600, ml10:1200},
  {cat:"caballeros", name:"Ferragamo – F", ml5:400, ml10:800},
  {cat:"caballeros", name:"Perry Ellis – Perry Ellis", ml5:450, ml10:900},
];

const pesos = (n) => `RD$${n.toLocaleString("es-DO")}`;

function waLink(message){
  const encoded = encodeURIComponent(message);
  // wa.me uses phone without +
  return `https://wa.me/${PHONE_E164}?text=${encoded}`;
}

function buildCard(p){
  const card = document.createElement("div");
  card.className = "product";
  card.dataset.cat = p.cat;

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

  const btn5 = document.createElement("a");
  btn5.className = "btn btn-primary";
  btn5.target = "_blank";
  btn5.rel = "noopener";
  btn5.textContent = "Pedir 5 ml";

  const btn10 = document.createElement("a");
  btn10.className = "btn btn-primary";
  btn10.target = "_blank";
  btn10.rel = "noopener";
  btn10.textContent = "Pedir 10 ml";

  btn5.href = waLink(`Hola, quiero ${p.name} 5 ml. — ${BRAND}`);
  btn10.href = waLink(`Hola, quiero ${p.name} 10 ml. — ${BRAND}`);

  btnRow.appendChild(btn5);
  btnRow.appendChild(btn10);

  card.appendChild(top);
  card.appendChild(prices);
  card.appendChild(btnRow);

  return card;
}

function render(filter){
  const grid = document.getElementById("grid");
  grid.innerHTML = "";

  products
    .filter(p => filter === "todos" ? true : p.cat === filter)
    .forEach(p => grid.appendChild(buildCard(p)));
}

function setActiveChip(target){
  document.querySelectorAll(".chip").forEach(ch => {
    const active = ch === target;
    ch.classList.toggle("is-active", active);
    ch.setAttribute("aria-selected", active ? "true" : "false");
  });
}

function init(){
  document.getElementById("year").textContent = new Date().getFullYear();

  // CTAs globales
  const generalMsg = `Hola, quiero información para pedir un decant. — ${BRAND}`;
  const generalHref = waLink(generalMsg);
  ["ctaTop","ctaHero","ctaBottom","ctaFinal"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.href = generalHref;
  });

  // Filtros
  document.querySelectorAll(".chip").forEach(chip => {
    chip.addEventListener("click", () => {
      const f = chip.dataset.filter;
      setActiveChip(chip);
      render(f);
    });
  });

  render("todos");
}

document.addEventListener("DOMContentLoaded", init);
