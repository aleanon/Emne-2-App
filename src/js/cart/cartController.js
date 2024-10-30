function saveCartToLocalStorage() {
  localStorage.setItem(
    'shoppingCart',
    JSON.stringify(model.inputs.shoppingCart.products),
  );
}

function loadCartFromLocalStorage() {
  const savedCart = localStorage.getItem('shoppingCart');
  if (savedCart) {
    model.inputs.shoppingCart.products = JSON.parse(savedCart);
  }
}

function addToCart(name, price, productId, quantity = 1, message) {
  const cart = model.inputs.shoppingCart.products;
  const existingItem = cart.find((item) => item.name === name);
  if (existingItem) {
    existingItem.quantity += quantity;
    existingItem.message += message;
  } else {
    cart.push({ name, price, quantity, productId, message });
  }
  updateCartButtonView();
  showCartNotification('Produkt lagt til i handlekurv');
  saveCartToLocalStorage();
}

function setCartItemMessage(itemIndex, text) {
  model.inputs.shoppingCart.products[itemIndex].message = text;
}

function removeFromCart(itemIndex) {
  model.inputs.shoppingCart.products.splice(itemIndex, 1);
  updateView();
  updateCartButtonView();
  showCartNotification('Produkt fjernet fra handlevogn');
  saveCartToLocalStorage();
}

function clearCart() {
  model.inputs.shoppingCart.products = [];
  updateView();
  updateCartButtonView();
  showCartNotification('Handlevognen er nå tom');
  saveCartToLocalStorage();
}

function setCartItemQuantity(itemIndex, quantity) {
  if (quantity <= 0 || isNaN(quantity)) {
    quantity = 1;
  }

  model.inputs.shoppingCart.products[itemIndex].quantity = quantity;

  updateView();
  updateCartButtonView();
  // renderCart();
}

function showShoppingCart() {
  model.app.currentPageIndex = shoppingCart;
  model.inputs.shoppingCart.case = 'Overview';
  updateView();
}

function getCartItems() {
  return model.inputs.shoppingCart.products;
}

function getNrOfItemsInCart() {
  return model.inputs.shoppingCart.products.reduce(
    (sum, item) => sum + item.quantity,
    0,
  );
}

function getSumOfAllItemsInCart() {
  return model.inputs.shoppingCart.products.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0,
  );
}

// Gjør funksjonene globalt tilgjengelige
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.clearCart = clearCart;
window.showShoppingCart = showShoppingCart;
window.getCartItems = getCartItems;

window.addEventListener('load', () => {
  loadCartFromLocalStorage();
  updateCartButtonView(); // Refresh cart button if needed
});

// Initialisering av handlevogn

console.log('cartController.js loaded');
