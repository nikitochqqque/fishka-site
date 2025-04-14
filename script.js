
const translations = {
  ru: {
    "site-title": "Fishka",
    "hero-title": "Лови больше с бойлами Fishka",
    "hero-subtitle": "Наши бойлы — лучший выбор для любого водоема.",
    "product-name": "Бойлы клубничные",
    "price": "€9.99",
    "buy": "Купить",
    "cart": "Корзина",
    "cart-title": "Ваша корзина",
    "total": "Итого: €0.00",
    "checkout": "Оформить заказ"
  },
  en: {
    "site-title": "Fishka",
    "hero-title": "Catch more with Fishka boilies",
    "hero-subtitle": "Our boilies are the best choice for any waters.",
    "product-name": "Strawberry Boilies",
    "price": "€9.99",
    "buy": "Buy",
    "cart": "Cart",
    "cart-title": "Your Cart",
    "total": "Total: €0.00",
    "checkout": "Checkout"
  },
  de: {
    "site-title": "Fishka",
    "hero-title": "Fange mehr mit Fishka Boilies",
    "hero-subtitle": "Unsere Boilies sind die beste Wahl für jedes Gewässer.",
    "product-name": "Erdbeer-Boilies",
    "price": "€9.99",
    "buy": "Kaufen",
    "cart": "Warenkorb",
    "cart-title": "Ihr Warenkorb",
    "total": "Gesamt: €0.00",
    "checkout": "Zur Kasse"
  }
};

let cart = [];

function setLang(lang) {
  localStorage.setItem('lang', lang);
  document.querySelectorAll('[data-lang]').forEach(el => {
    const key = el.getAttribute('data-lang');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

function openCart() {
  document.getElementById('cartModal').style.display = 'flex';
  renderCart();
}

function closeCart() {
  document.getElementById('cartModal').style.display = 'none';
}

function addToCart() {
  cart.push({ name: 'Fishka Boilies', price: 9.99 });
  openCart();
}

function renderCart() {
  const itemsContainer = document.getElementById('cartItems');
  itemsContainer.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    total += item.price;
    itemsContainer.innerHTML += `<p>${item.name} - €${item.price.toFixed(2)}</p>`;
  });
  document.getElementById('cartTotal').textContent = `Итого: €${total.toFixed(2)}`;
}

function checkout() {
  alert('Спасибо за заказ!');
  cart = [];
  closeCart();
}

setLang(localStorage.getItem('lang') || 'ru');
