const productos = [
  { nombre: "Figuras Vuala Sorpresa Five Nights At Freddys", precio: 69, categoria: "promocionales", imagen: "img/articulos/figuraswuala.png", enlace: "https://bit.ly/vualaFreddy" },
  { nombre: "Mega Bloks Minifigura Dragón Universe Dragón", precio: 169, categoria: "set construccion", imagen: "img/articulos/DragonUniverseAzul.jpg", enlace: "https://bit.ly/40azzN8" },
  { nombre: "Figura Baby Bop Lyons Partner Ship Lp Vintage 1998 (barney)", precio: 129, categoria: "vintage", imagen: "img/articulos/BabyBop(barney).jpg", enlace: "http://bit.ly/4lGA3mj" },
  { nombre: "Botas Largas Coach Mujer De Piel", precio: 2300, categoria: "zapatos", imagen: "img/articulos/BotasCoachMujerPiel.webp", enlace: "http://bit.ly/4nAG6dQ" },
  { nombre: "Figura Vintage Chapulin Colorado Saltarin Año 70s Base Amarilla", precio: 169, categoria: "vintage", imagen: "img/articulos/chapulinRojoResorte.webp", enlace: "https://bit.ly/4eYqM7f" },
  { nombre: "Set Polly Pocket Princesa Libro Vintage 1995", precio: 999, categoria: "polly pocket", imagen: "img/articulos/pollyPocketLibro.webp", enlace: "http://bit.ly/4nEEekq" },
];

const ITEMS_PER_PAGE = 6;
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




