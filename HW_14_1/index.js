const categoriesContainer = document.getElementById('categories');
const productsContainer = document.getElementById('products');
const productInfoContainer = document.getElementById('product-info');


const data = [
  {name: 'Product 1', category: 'Category 1', price: 10, description: 'Lorem ipsum dolor sit amet 1'},
  {name: 'Product 2', category: 'Category 1', price: 20, description: 'Lorem ipsum dolor sit amet 2'},
  {name: 'Product 3', category: 'Category 1', price: 30, description: 'Lorem ipsum dolor sit amet 3'},
  {name: 'Product 4', category: 'Category 1', price: 40, description: 'Lorem ipsum dolor sit amet 4'},
  {name: 'Product 5', category: 'Category 2', price: 10, description: 'Lorem ipsum dolor sit amet 5'},
  {name: 'Product 6', category: 'Category 2', price: 20, description: 'Lorem ipsum dolor sit amet 6'},
  {name: 'Product 7', category: 'Category 2', price: 30, description: 'Lorem ipsum dolor sit amet 7'},
  {name: 'Product 8', category: 'Category 2', price: 40, description: 'Lorem ipsum dolor sit amet 8'},
  {name: 'Product 9', category: 'Category 3', price: 10, description: 'Lorem ipsum dolor sit amet 9'},
  {name: 'Product 10', category: 'Category 3', price: 20, description: 'Lorem ipsum dolor sit amet 10'},
  {name: 'Product 11', category: 'Category 3', price: 30, description: 'Lorem ipsum dolor sit amet 11'},
  {name: 'Product 12', category: 'Category 3', price: 40, description: 'Lorem ipsum dolor sit amet 12'}
];


function clearElement(...elements) {
  elements.forEach(element => {
    element.innerHTML = '';
  })
}

function displayCategories() {
  const categoryList = document.createElement('ul');
  const uniqueCategories =[...new Set(data.map(product => product.category))];

  for(const category of uniqueCategories){
    let categoryLink = document.createElement('li');
    categoryLink.classList.add('category');
    categoryLink.textContent = category;
    categoryLink.addEventListener('click', () => displayCategoryProducts(category));
    categoryList.appendChild(categoryLink);
  }

  categoriesContainer.appendChild(categoryList);
}

function displayCategoryProducts(category) {
  clearElement(productsContainer, productInfoContainer);
  const productsList = document.createElement('ul');
  const productsInCategory = data.filter(product => product.category === category);

  for(const product of productsInCategory){
    let productItem = document.createElement('li');
    productItem.classList.add('product');
    productItem.textContent = product.name;
    productItem.addEventListener('click', () => displayProductInfo(product));
    productsList.appendChild(productItem);
  }

  productsContainer.appendChild(productsList);
}

function displayProductInfo(product) {
  productInfoContainer.innerHTML = `
  <div class="product-head">
  <h2>${product.name}</h2>
  <span>${product.price} USD</span>
  </div>
  <p>${product.description}</p>
  <button class="buy-button">Buy</button>
  `;

  const buyButton = productInfoContainer.querySelector('.buy-button');

  buyButton.addEventListener('click', () => buyProduct(product));
}

function buyProduct(product) {
  alert(`You have purchased ${product.name}`);
  clearElement(productsContainer, productInfoContainer);
}

displayCategories();