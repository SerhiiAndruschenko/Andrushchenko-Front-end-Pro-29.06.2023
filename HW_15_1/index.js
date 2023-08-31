const categoriesContainer = document.getElementById('categories');
const productsContainer = document.getElementById('products');
const productInfoContainer = document.getElementById('product-info');
const ordersWrap = document.getElementById('orders');
const ordersDetails = document.getElementById('order-info');
const ordersElement = document.getElementById('orders-head');
const shopWrap = document.querySelector('.shop');

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

//Функція для очищення елементів
function clearElement(...elements) {
  elements.forEach(element => {
    element.innerHTML = '';
  })
}

//Відображення списку категорій, залишив таким же, як і в минулому ДЗ
function displayCategories() {
  const categoryList = document.createElement('ul');
  const uniqueCategories = [...new Set(data.map(product => product.category))];
  
  for(const category of uniqueCategories){
    let categoryLink = document.createElement('li');
    categoryLink.classList.add('category');
    categoryLink.textContent = category;
    categoryLink.addEventListener('click', () => displayCategoryProducts(category));
    categoryList.appendChild(categoryLink);
  }

  categoriesContainer.appendChild(categoryList);
}

//Відображення товарів з категорії
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

//Відображення інформації про товар
function displayProductInfo(product) {
  productInfoContainer.innerHTML = `
  <div class="product-head">
  <h2>${product.name}</h2>
  <span>${product.price} USD</span>
  </div>
  <p>${product.description}</p>
  <button class="buy-button">Buy</button>`;

  const buyButton = productInfoContainer.querySelector('.buy-button');
  buyButton.addEventListener('click', () => buyProduct(product));
}


//Функція покупки. тут створюю об'єкт order, який додаю в localStorage
function buyProduct(product) {
  const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
  const newOrderId = savedOrders.length > 0 ? savedOrders[savedOrders.length - 1].id + 1 : 1;
  var currentDate = new Date(); 

  const order = {
    id: newOrderId,
    date: currentDate,
    product: {
      name: product.name,
      price: product.price
    }
  };

  savedOrders.push(order);
  localStorage.setItem('orders', JSON.stringify(savedOrders));

  alert(`You have purchased ${product.name}`);
  displayOrderButton();
  productsContainer.innerHTML = '';
  productInfoContainer.innerHTML = '';
}

//Функція відображення кнопки ордерів. Кнопка відображається тільки, коли в locarStorage є ордери
function displayOrderButton() {
  clearElement(ordersElement);
  const savedOrders = localStorage.getItem('orders');
  if(savedOrders !== null){
    const orderButton = document.createElement('button');
    orderButton.classList.add('order-button');
    orderButton.textContent = 'My Orders';
    orderButton.addEventListener('click', () => displayOrders());
    ordersElement.appendChild(orderButton);
  }
}

//Функція для відображення кнопки закриття блоку з ордерами. В задачі не було, але так зручніше
function displayCloseOrderButton() {
  clearElement(ordersElement);
  const closeButton = document.createElement('button');
  closeButton.textContent = 'Close';
  closeButton.addEventListener('click', () => closeOrders());
  ordersElement.appendChild(closeButton);
}

//Функція відображення ордерів, підтягую ордери з localStorage і з допомогою for вставляю в таблицю
function displayOrders() {
  clearElement(ordersWrap);
  shopWrap.style.display = 'none';
  ordersWrap.innerHTML = '<thead><tr><th>№</th><th>Date</th><th>Total</th><th></th></tr></thead>';

  const savedOrders = JSON.parse(localStorage.getItem('orders'));
  for(const order of savedOrders) {
    const orderItem = document.createElement('tr');
    orderItem.classList.add('order-item');

    orderItem.innerHTML = `<td class="order-info">Order #${order.id}</td><td>${order.date}</td><td>${order.product.price} USD</td><td><span class="delete"></span></td>`;
    orderItem.querySelector('.delete').addEventListener('click', () => deleteOrder(order));
    orderItem.querySelector('.order-info').addEventListener('click', () => displayOrderDetails(order));

    ordersWrap.appendChild(orderItem);
  }

  displayCloseOrderButton();
}

//Функція видалення ордеру. Видаляє сам ордер з localStorage і повторно відображає відразу ж оновлений список ордерів
function deleteOrder(order) {
  clearElement(ordersDetails);
  const savedOrders = JSON.parse(localStorage.getItem('orders'));

  const newDataArray = savedOrders.filter(item => JSON.stringify(item) !== JSON.stringify(order));
  localStorage.setItem('orders', JSON.stringify(newDataArray));
  displayOrders()
}

//Функція для відображень більш детальної інформації по ордеру
function displayOrderDetails(order) {
  ordersDetails.innerHTML = `
  <h2>Order #${order.id}</h2>
  <p>Order date: ${order.date}</p>
  <p>Order items: ${order.product.name}</p>
  <p>Order total: ${order.product.price} USD</p>`;
}

//Закриття блоку з ордерами
function closeOrders() {
  displayOrderButton();
  clearElement(ordersDetails, ordersWrap);
  shopWrap.style.display = 'flex';
}

function init() {
  displayCategories();
  displayOrderButton();
}

init();