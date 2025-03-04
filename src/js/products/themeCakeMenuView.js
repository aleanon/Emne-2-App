function createThemesMenuHtml() {
  const themes = document.createElement('div');
  themes.id = 'themes';
  themes.innerHTML = createThemesHtml();
  const overlay = createThemeInfoOverlayElement();
  if (overlay) {
    themes.appendChild(overlay);
  }
  return themes;
}

function createThemesHtml() {
  let cards = '';
  for (const theme of model.themes) {
    cards += createThemeCardHtml(theme);
  }
  return /* HTML*/ `
        <div id='cards-grid-container'>
          <div id='cards-grid'>${cards}</div>
        </div>
      `;
}

function createThemeCardHtmlOld(theme) {
  return /* HTML*/ `
        <div class="product-card">
          <div class='card-header-image' onclick='openThemeInfo()'>
            <div class='product-card-header'>${theme}</div>
            <img src="./img/themes/${theme}.webp" alt="${theme}">
          </div>
        </div>
      `;
}

function createThemeCardHtml(theme, price = 'kr') {
  return /* HTML*/ `
    <article class="product-card">
      <header class="product-card__header" onclick="openThemeInfo()">
        <img class="product-card__image" src="./img/themes/${theme}.webp" alt="${theme}">
        <h2 class="product-card__title">${theme}</h2>
      </header>
      <footer class="product-card__footer">
        <div class="product-card__price">${price}</div>
        <button class="product-card__button-add button__add-to-cart" onclick="addThemeToCart('${theme}');">
          <svg class="cart-icon" fill="currentColor" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 487.1 487.1" xml:space="preserve">
            <path d="M342.3,137.978H385l-63.3-108.6c-5.1-8.8-16.4-11.8-25.2-6.6c-8.8,5.1-11.8,16.4-6.6,25.2L342.3,137.978z" />
            <path d="M197.4,47.978c5.1-8.8,2.2-20.1-6.6-25.2s-20.1-2.2-25.2,6.6l-63.3,108.7H145L197.4,47.978z" />
            <path d="M455.7,171.278H31.3c-17.3,0-31.3,14-31.3,31.3v34.7c0,17.3,14,31.3,31.3,31.3h9.8l30.2,163.7
              c3.8,19.3,21.4,34.6,39.7,34.6h12h78.8c8,0,18.4,0,29,0l0,0h9.6h9.6l0,0c10.6,0,21,0,29,0h78.8h12c18.3,0,35.9-15.3,39.7-34.6
              l30.4-163.8h15.9c17.3,0,31.3-14,31.3-31.3v-34.7C487,185.278,473,171.278,455.7,171.278z M172.8,334.878v70.6
              c0,10.1-8.2,17.7-17.7,17.7c-10.1,0-17.7-8.2-17.7-17.7v-29.6v-69.4c0-10.1,8.2-17.7,17.7-17.7c10.1,0,17.7,8.2,17.7,17.7V334.878
              z M229.6,334.878v70.6c0,10.1-8.2,17.7-17.7,17.7c-10.1,0-17.7-8.2-17.7-17.7v-29.6v-69.4c0-10.1,8.2-17.7,17.7-17.7
              s17.7,8.2,17.7,17.7V334.878z M286.7,375.878v29.6c0,9.5-7.6,17.7-17.7,17.7c-9.5,0-17.7-7.6-17.7-17.7v-70.6v-28.4
              c0-9.5,8.2-17.7,17.7-17.7s17.7,7.6,17.7,17.7V375.878z M343.5,375.878v29.6c0,9.5-7.6,17.7-17.7,17.7c-9.5,0-17.7-7.6-17.7-17.7
              v-70.6v-28.4c0-9.5,7.6-17.7,17.7-17.7c9.5,0,17.7,7.6,17.7,17.7V375.878z" />
          </svg>
          Legg til
        </button>
      </footer>
    </article>
  `;
}

function openThemeInfo(theme) {}

function createThemeInfoOverlayElement() {
  const theme = model.inputs.themeCakeMenu.selectedTheme;

  if (theme != null) {
    return createOverlayWithContent(/* HTML */ `
      <h2>${theme}</h2>
      <img src="./img/themes/${theme}.webp" alt="${theme} bilde" />
      <div id="overlay-description">${product.description}</div>
      <div id="overlay-comment-row">
        <label for="product-comment">Tilpasninger:</label>
        <textarea
          id="product-comment"
          oninput="updateComment(this.value)"
        ></textarea>
      </div>

      <div id="overlay-buy-row">
        <div id="quantity-row">
          <label for="quantity-input">Antall:</label>
          <input
            value="1"
            type="number"
            id="quantity-input"
            oninput="model.inputs.cafeMenu.quantity=this.valueAsNumber"
          />
        </div>
        <button
          id="overlay-buy"
          class="button-primary"
          onclick="addCafeProductToCart(${product.productId})"
        >
          Kjøp 🛒
        </button>
      </div>
    `);
  }
  return null;
}
