
  
  const productos = [
  { nombre: "Spiderman Figura Toy Biz Hombre Araña Super Poseable 2003", precio: 1.999, categoria: "figuras", imagen: "img/articulos/spidermanToyBiz2003.webp", enlace: "http://bit.ly/3Iy7fy0" },
  { nombre: "Battle Goliath Gargoyles Kenner 1995 Gargolas - Incompleto", precio: 229, categoria: "figuras", imagen: "img/articulos/goliathGargoyles.webp", enlace: "http://bit.ly/4kMjiWd" },
  { nombre: "Neonlicious Lol Surprise Omg Serie 1 Millennial Girls 2021", precio: 499, categoria: "muñecas", imagen: "img/articulos/neonliciusLol.webp", enlace: "http://bit.ly/3Tuvm2Z" },
  { nombre: "Figuras Vuala Sorpresa Five Nights At Freddys", precio: 69, categoria: "promocionales", imagen: "img/articulos/figuraswuala.webp", enlace: "https://bit.ly/vualaFreddy" },
  { nombre: "Mega Bloks Minifigura Dragón Universe Dragón", precio: 169, categoria: "set construccion", imagen: "img/articulos/DragonUniverseAzul.webp", enlace: "https://bit.ly/40azzN8" },
  { nombre: "Figura Andaluz Caballo Schleich Germany 2005 Vintage Loose", precio: 299, categoria: "animales", imagen: "img/articulos/andaluz.webp", enlace: "https://bit.ly/4ktJZ1x" },
  { nombre: "Figura Baby Bop Lyons Partner Ship Lp Vintage 1998 (barney)", precio: 129, categoria: "vintage", imagen: "img/articulos/BabyBop(barney).webp", enlace: "http://bit.ly/4lGA3mj" },
  { nombre: "Botas Largas Coach Mujer De Piel", precio: 2300, categoria: "zapatos", imagen: "img/articulos/BotasCoachMujerPiel.webp", enlace: "http://bit.ly/4nAG6dQ" },
  { nombre: "Figura Vintage Chapulin Colorado Saltarin Año 70s Base Amarilla", precio: 169, categoria: "vintage", imagen: "img/articulos/chapulinRojoResorte.webp", enlace: "https://bit.ly/4eYqM7f" },
  { nombre: "Figura Dragon Kazuki Takahashi 1996 Mini Figura Yu Gi Oh!", precio: 169, categoria: "figuras", imagen: "img/articulos/miniDragonKazuki.webp", enlace: "http://bit.ly/4nBSni7" },
  { nombre: "Def Jam Vendetta - Solo Estuche Con Manual ** No Disco **", precio: 229, categoria: "videojuegos", imagen: "img/articulos/estucheDefJamGC.webp", enlace: "http://bit.ly/45ZBmID" },
  { nombre: "Figura Rainforest Cafe Gorilla Toy Mono Gorila Jungla", precio: 169, categoria: "animales", imagen: "img/articulos/gorillaRainForestCafe.webp", enlace: "http://bit.ly/3GFdFL8" },
  { nombre: "4 Vasos Batman Pepsi - Michael Keaton (batman) 1989 Vintage", precio: 299, categoria: "promocionales", imagen: "img/articulos/vasosPepsiBatman.webp", enlace: "http://bit.ly/3TPh39z" },
  { nombre: "4 Dinosaurios Mini Jurassic World Park Mattel Coleccionables", precio: 299, categoria: "animales", imagen: "img/articulos/dinosaurios4mini.webp", enlace: "http://bit.ly/4kt3CGS" },
  { nombre: "Figura Blancanieves Y Los 7 Enanitos Vintage Baquelita Azul", precio: 299, categoria: "vintage", imagen: "img/articulos/blancaNievesAzul.webp", enlace: "http://bit.ly/45ZJGrR" },
  { nombre: "Lote Figuras Hatchimals Sueltos - Sin Repetir Coleccionables", precio: 299, categoria: "animales", imagen: "img/articulos/hatchimals.webp", enlace: "http://bit.ly/4lHsvjb" },
  { nombre: "Figura Wartortle Pokémon Nintendo Tomy 2015 Loose", precio: 299, categoria: "figuras", imagen: "img/articulos/wartortle2015.webp", enlace: "http://bit.ly/4lJd5Lo" },
  { nombre: "Starcraft Ii Wings Of Liberty Pc Original - Estrategia Épica", precio: 325, categoria: "videojuegos", imagen: "img/articulos/starcraftPc.webp", enlace: "http://bit.ly/3IjJYQi" },
  { nombre: "Figura Oso Grizzly Chap Mei", precio: 299, categoria: "animales", imagen: "img/articulos/osoGrizzly.webp", enlace: "http://bit.ly/4kDLNW0" },
  { nombre: "Figura Dr Strange Marvel Legends Infinite Series Loose", precio: 375, categoria: "figuras", imagen: "img/articulos/drStrange.webp", enlace: "http://bit.ly/46wvBCg" },
  { nombre: "Palomera Baby Groot Cinepolis Guardianes Dela Galaxia 2 2017", precio: 299, categoria: "promocionales", imagen: "img/articulos/palomeraGroot.webp", enlace: "http://bit.ly/3TPgtZr" },
  { nombre: "Kraven El Cazador Marvel Legends Spiderman Toybiz 2002", precio: 299, categoria: "figuras", imagen: "img/articulos/kravenMarvel2002.webp", enlace: "http://bit.ly/460elFj" },
  { nombre: "Lentes Real D 3d Edicion Ironman War Machine Iron Patriot", precio: 229, categoria: "promocionales", imagen: "img/articulos/lentesEdicioMarvel.webp", enlace: "http://bit.ly/45V0tfy" },
  { nombre: "Recreo Serie Animada De Disney Colección Completa Mcdonalds", precio: 499, categoria: "promocionales", imagen: "img/articulos/coleccionMcDonaldsRecreo.webp", enlace: "http://bit.ly/408rhp3" },
  { nombre: "Figura Pikachu Pokémon Nintendo Tomy 2015 Loose", precio: 299, categoria: "figuras", imagen: "img/articulos/pikachu2015.webp", enlace: "http://bit.ly/3IklZAt" },
  { nombre: "Figura Marvel Legends War Machine Deluxe Hasbro 2020 Loose", precio: 299, categoria: "figuras", imagen: "img/articulos/warMachine.webp", enlace: "http://bit.ly/40KbAEy" },
  { nombre: "Estampa Lautaro Martinez Fifa World Cup Qatar 2022 Limited E", precio: 299, categoria: "estampas", imagen: "img/articulos/lautaroQatar2022.webp", enlace: "http://bit.ly/4lO4jMh" },
  { nombre: "Figura Appaloosa Caballo Schleich Germany 2002 Vintage Loose", precio: 299, categoria: "animales", imagen: "img/articulos/appaloosa.webp", enlace: "http://bit.ly/44sSpjC" },
  { nombre: "Dados De Rol D&d Calabozos Y Dragones Negros 7 Piezas", precio: 129, categoria: "set construccion", imagen: "img/articulos/dadosRol.webp", enlace: "http://bit.ly/44QHHVv" },
  { nombre: "Jurassic Park Lost World Roland Tembo Hasbro 1997 Vintage", precio: 135, categoria: "figuras", imagen: "img/articulos/rolandTembo.webp", enlace: "http://bit.ly/44SgT7s" },
  { nombre: "Barbie Signature Mermaid Enchantress Mythical Muse Sirena", precio: 5799, categoria: "muñecas", imagen: "img/articulos/barbieMermaid.webp", enlace: "https://bit.ly/3GzXdfd" },
  { nombre: "Audífonos Vintage Windsor Hp-90 Con Radio Am/fm Funcionando", precio: 299, categoria: "electronicos", imagen: "img/articulos/audifonosWindsor.webp", enlace: "http://bit.ly/4lC1eyK" },
  { nombre: "Control Remoto Audifonos Sony Psp Modelo Psp-120", precio: 169, categoria: "electronicos", imagen: "img/articulos/audifonosPsp.webp", enlace: "http://bit.ly/3Gyf4mO" },
  { nombre: "Figura Darth Vader Hasbro 2005 Original Star Wars Loose", precio: 299, categoria: "figuras", imagen: "img/articulos/darthVader.webp", enlace: "http://bit.ly/4kqbyJf" },
  { nombre: "Lote De 21 Hielocos Coca-cola Futboleros - Vintage Original", precio: 749, categoria: "promocionales", imagen: "img/articulos/hielocos21.webp", enlace: "http://bit.ly/3U7ZbXf" },
  { nombre: "Figura Kraang Droide Playmates Viacom 2012 Tortugas Ninja", precio: 649, categoria: "figuras", imagen: "img/articulos/kraang2012.webp", enlace: "http://bit.ly/4kwK6JI" },
  { nombre: "Figura Knabstrupper Caballo Schleich Germany Vintage Loose", precio: 299, categoria: "animales", imagen: "img/articulos/knsbdtrupper.webp", enlace: "https://bit.ly/3GpLakL" },
  { nombre: "Set Polly Pocket Princesa Libro Vintage 1995", precio: 999, categoria: "vintage", imagen: "img/articulos/pollyPocketLibro.webp", enlace: "http://bit.ly/4nEEekq" },

];

const ITEMS_PER_PAGE = 10;
let currentPage = 1;
let mostrandoFavoritos = false;

const catalog = document.getElementById('catalog');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const categorySelect = document.getElementById('categorySelect');
const pagination = document.getElementById('pagination');

// Favoritos
function toggleFavorito(producto) {
  let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
  const index = favoritos.findIndex(f => f.nombre === producto.nombre);

  if (index >= 0) {
    favoritos.splice(index, 1);
  } else {
    favoritos.push(producto);
  }

  localStorage.setItem("favoritos", JSON.stringify(favoritos));
  updateCatalog();
}

function esFavorito(nombre) {
  const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
  return favoritos.some(p => p.nombre === nombre);
}

// Renderizado
function filterAndSort() {
  let baseData = mostrandoFavoritos
    ? JSON.parse(localStorage.getItem("favoritos")) || []
    : productos;

  let filtered = baseData.filter(p => {
    const matchSearch = p.nombre.toLowerCase().includes(searchInput.value.toLowerCase());
    const matchCategory = categorySelect.value === 'all' || p.categoria === categorySelect.value;
    return matchSearch && matchCategory;
  });

  if (sortSelect.value === 'low') {
    filtered.sort((a, b) => a.precio - b.precio);
  } else if (sortSelect.value === 'high') {
    filtered.sort((a, b) => b.precio - a.precio);
  }

  return filtered;
}

function renderCatalogPage(data, page) {
  catalog.innerHTML = '';
  const start = (page - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const pageItems = data.slice(start, end);

  if (pageItems.length === 0) {
    catalog.innerHTML = "<p style='grid-column: span 5; text-align: center;'>No hay artículos para mostrar.</p>";
    pagination.innerHTML = '';
    return;
  }

  pageItems.forEach(p => {
    const item = document.createElement('div');
    item.className = 'item';
    item.innerHTML = `
      <img src="${p.imagen}" alt="${p.nombre}">
      <h4>${p.nombre}</h4>
      <p>$${p.precio}</p>
      <a href="${p.enlace}" target="_blank">Ver en Mercado Libre</a><br>
      <button onclick='toggleFavorito(${JSON.stringify(p)})'>
        ${esFavorito(p.nombre) ? "⭐ Favorito" : "☆ Agregar a Favoritos"}
      </button>
    `;
    catalog.appendChild(item);
  });
}

function renderPagination(totalItems) {
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  pagination.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement('button');
    btn.textContent = i;
    btn.className = i === currentPage ? 'active' : '';
    btn.addEventListener('click', () => {
      currentPage = i;
      updateCatalog();
      scrollToTop(); // ✅ NUEVO: hace scroll al inicio en móvil/PC
    });
    pagination.appendChild(btn);
  }

  if (mostrandoFavoritos && totalItems > 0) {
    const label = document.createElement('p');
    label.style.textAlign = 'center';
    label.textContent = "Mostrando favoritos ⭐";
    pagination.prepend(label);
  }
}

function updateCatalog() {
  const filtered = filterAndSort();
  renderCatalogPage(filtered, currentPage);
  renderPagination(filtered.length);
}

searchInput.addEventListener('input', () => {
  currentPage = 1;
  updateCatalog();
});
sortSelect.addEventListener('change', () => {
  currentPage = 1;
  updateCatalog();
});
categorySelect.addEventListener('change', () => {
  currentPage = 1;
  updateCatalog();
});

// Ver favoritos
document.getElementById('verFavoritosBtn').addEventListener('click', (e) => {
  e.preventDefault();
  mostrandoFavoritos = true;
  currentPage = 1;
  updateCatalog();
});

// Ver todo
document.getElementById('verTodoBtn').addEventListener('click', (e) => {
  e.preventDefault();
  mostrandoFavoritos = false;
  currentPage = 1;
  updateCatalog();
});

// Banner rotativo
const bannerImages = document.querySelectorAll('.banner img');
let currentBanner = 0;
setInterval(() => {
  bannerImages[currentBanner].classList.remove('active');
  currentBanner = (currentBanner + 1) % bannerImages.length;
  bannerImages[currentBanner].classList.add('active');
}, 3000);

// Sticky Header
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if (window.scrollY > 50) {
    header.classList.add('solid');
  } else {
    header.classList.remove('solid');
  }
});

// 🌙 Modo oscuro
const darkToggle = document.getElementById('darkModeToggle');
const body = document.body;

function setDarkMode(isDark) {
  if (isDark) {
    body.classList.add('dark');
    localStorage.setItem("modoOscuro", "true");
    darkToggle.checked = true;
  } else {
    body.classList.remove('dark');
    localStorage.setItem("modoOscuro", "false");
    darkToggle.checked = false;
  }
}

darkToggle.addEventListener('change', () => {
  setDarkMode(darkToggle.checked);
});

window.addEventListener('DOMContentLoaded', () => {
  const modoOscuroGuardado = localStorage.getItem("modoOscuro") === "true";
  setDarkMode(modoOscuroGuardado);
  updateCatalog();
});


// ✅ NUEVO: Scroll al principio compatible con móviles y navegadores modernos
function scrollToTop() {
  const scrollEl = document.scrollingElement || document.documentElement || document.body;
  scrollEl.scrollTo({ top: 0, behavior: 'smooth' });
}
