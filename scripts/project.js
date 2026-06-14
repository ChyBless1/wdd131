const products = [
  {
    name: "Green Food Flask",
    size: "750ml",
    price: "26,000 Kz",
    image: "../images/food-flask-green-750ml.jpg",
    description: "Compact insulated food flask suitable for school, work, and daily meals."
  },
  {
    name: "Silver Water Flask",
    size: "750ml",
    price: "15,000 Kz",
    image: "../images/water-flask-silver-750ml.jpg",
    description: "Durable stainless steel vacuum flask for hot and cold drinks."
  },
  {
    name: "Gold Water Flask",
    size: "1500ml",
    price: "20,000 Kz",
    image: "../images/water-flask-gold-1500ml.jpg",
    description: "Large capacity flask designed for long hours of temperature retention."
  },
  {
    name: "Gold Food Flask",
    size: "1700ml",
    price: "25,000 Kz",
    image: "../images/food-flask-gold-1700ml.jpg",
    description: "Premium family-size food flask for storing meals safely."
  },
  {
    name: "Silver Food Flask",
    size: "1900ml",
    price: "18,000 Kz",
    image: "../images/food-flask-silver-1900ml.jpg",
    description: "Strong food flask with a wide opening for easy serving."
  },
  {
    name: "Blue Food Flask",
    size: "750ml",
    price: "26,000 Kz",
    image: "../images/food-flask-blue-750ml.jpg",
    description: "Portable food flask with a neat design for children and workers."
  },
  {
    name: "Brown Food Flask",
    size: "750ml",
    price: "26,000 Kz",
    image: "../images/food-flask-brown-750ml.jpg",
    description: "Stylish insulated flask with carrying pouch for daily use."
  },
  {
    name: "Green Food Flask",
    size: "1200ml",
    price: "30,000 Kz",
    image: "../images/food-flask-green-1200ml.jpg",
    description: "Medium-size food flask with cup and container sections."
  },
  {
    name: "Mixed Color Food Flasks",
    size: "Assorted",
    price: "Varies",
    image: "../images/food-flask-colors.jpg",
    description: "Different colors and sizes available for family and personal use."
  }
];

function createProductCard(product) {
  return `
    <article class="product-card">
      <img src="${product.image}" alt="${product.name}" loading="lazy">
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p><strong>Size:</strong> ${product.size}</p>
        <p class="price">${product.price}</p>
        <button class="save-button" data-name="${product.name}">Save Item</button>
      </div>
    </article>
  `;
}

function displayProducts() {
  const productContainer = document.querySelector("#product-list");

  if (productContainer) {
    productContainer.innerHTML = products.map(createProductCard).join("");
  }
}

function setupMenu() {
  const menuButton = document.querySelector("#menu-button");
  const navMenu = document.querySelector("#nav-menu");

  if (menuButton && navMenu) {
    menuButton.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });
  }
}

function saveProductChoice() {
  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("save-button")) {
      const productName = event.target.dataset.name;
      localStorage.setItem("savedProduct", productName);
      event.target.textContent = "Saved";
    }
  });
}

displayProducts();
setupMenu();
saveProductChoice();

