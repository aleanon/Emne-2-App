// checkoutView.js
function createCheckoutView() {
  const container = document.createElement('div');

  switch (model.inputs.shoppingCart.case) {
    case 'PickupTime':
      container.innerHTML = createPickupTimeView();
      break;
    case 'NameAndNumber':
      container.innerHTML = createCustomerInfoView();
      break;
    case 'OrderSent':
      container.innerHTML = createOrderConfirmation();
      break;
    default:
      return createCartOverview();
  }

  return container;
}

function generateTimeOptions(selectedDate) {
  const selectedDay = dayjs(selectedDate).day();
  let openingTime = 8;
  let closingTime = 16;

  if (selectedDay === 6) {
    // Saturday
    openingTime = 9;
    closingTime = 15;
  } else if (selectedDay === 0) {
    // Sunday
    return ''; // No options for Sunday
  }

  let options = '';
  for (let hour = openingTime; hour < closingTime; hour++) {
    const time24 = `${hour.toString().padStart(2, '0')}:00`;
    options += `<option value="${time24}">${time24}</option>`;
    if (hour !== closingTime - 1) {
      const time24Half = `${hour.toString().padStart(2, '0')}:30`;
      options += `<option value="${time24Half}">${time24Half}</option>`;
    }
  }
  return options;
}

function createPickupTimeView() {
  const today = dayjs();

  const hasCake = model.inputs.shoppingCart.products.some((cartItem) => {
    const product = model.products.find(
      (p) => p.productId === cartItem.productId,
    );
    return product && product.categoryIndex === 3; // Returns true if the product is a cake
  });

  const minDate = hasCake ? today.add(7, 'day') : today;
  const maxDate = today.add(6, 'month');

  const helpText = hasCake
    ? 'Kakebestillinger krever minst 7 dagers forhåndsbestilling. <br> Åpningstider: Man–Fre 08:00–16:00, Lør 09:00–15:00.'
    : 'Velg en dato fra og med i dag. <br>Åpningstider: Man–Fre 08:00–16:00, Lør 09:00–15:00.';

  return /* HTML */ `
    <div class="checkout-container">
      <h2>Velg hentetidspunkt</h2>

      <p class="checkout__help-text">${helpText}</p>

      <div class="date-picker-container">
        <label for="pickup-date">Dato:</label>
        <input
          type="date"
          id="pickup-date"
          min="${minDate.format('YYYY-MM-DD')}"
          max="${maxDate.format('YYYY-MM-DD')}"
          onchange="handleDateChange(this.value)"
        />
      </div>

      <div class="time-picker-container">
        <label for="pickup-time">Tid:</label>
        <select id="pickup-time" onchange="updatePickupTime(this.value)">
          <option value="">Velg tid</option>
          ${generateTimeOptions(minDate.format('YYYY-MM-DD'))}
        </select>
      </div>

      <div class="button-row">
        <button
          onclick="model.inputs.shoppingCart.case='Overview'; updateView();"
        >
          Tilbake
        </button>
        <button onclick="goToCustomerInfo()">Neste</button>
      </div>
    </div>
  `;
}

function isDateSelectable(date) {
  const dayOfWeek = dayjs(date).day();
  return dayOfWeek !== 0; // Exclude Sunday (0 = Sunday)
}

function updateAvailableTimes(selectedDate) {
  const timeOptions = generateTimeOptions(selectedDate); // Get options for the selected date
  const timeSelect = document.getElementById('pickup-time');

  // Update the inner HTML of the time <select> element
  timeSelect.innerHTML = `<option value="">Velg tid</option>${timeOptions}`;
}

// Handle date selection, ensuring no Sundays and correct pickup time options
function handleDateChange(selectedDate) {
  if (isDateSelectable(selectedDate)) {
    model.inputs.shoppingCart.pickUpSchedule.date = selectedDate;
    console.log('Selected date:', selectedDate); // Debug log
    updateAvailableTimes(selectedDate);
  } else {
    alert('Søndager er ikke tilgjengelige for henting.');
    document.getElementById('pickup-date').value = '';
    document.getElementById('pickup-time').innerHTML =
      '<option value="">Velg tid</option>';
  }
}

function updatePickupTime(time) {
  model.inputs.shoppingCart.pickUpSchedule.time = time;
  console.log('Selected time:', time); // Debug log
}

function goToCustomerInfo() {
  const date = model.inputs.shoppingCart.pickUpSchedule.date;
  const time = model.inputs.shoppingCart.pickUpSchedule.time;

  console.log('Checking date and time:', date, time); // Debug log

  if (!date || !time) {
    alert('Vennligst velg både dato og tid for henting');
    return;
  }

  model.inputs.shoppingCart.case = 'NameAndNumber';
  updateView();
}

function createCustomerInfoView() {
  return /* HTML */ `
    <div class="checkout-container">
      <h2>Dine opplysninger</h2>

      <div class="form-group">
        <label for="customer-name">Navn:</label>
        <input
          type="text"
          id="customer-name"
          required
          oninput="updateCustomerName(this.value)"
          value="${model.inputs.shoppingCart.customerName}"
        />
      </div>

      <div class="form-group">
        <label for="contact-number">Telefonnummer:</label>
        <input
          type="tel"
          id="contact-number"
          required
          placeholder="12345678"
          oninput="updateContactNumber(this.value)"
          value="${model.inputs.shoppingCart.contactNumber}"
        />
      </div>

      <div class="order-summary">
        <h3>Din bestilling vil være klar:</h3>
        <p>
          ${dayjs(model.inputs.shoppingCart.pickUpSchedule.date).format(
            'DD. MMMM YYYY',
          )}
          kl. ${model.inputs.shoppingCart.pickUpSchedule.time}
        </p>
      </div>

      <div class="button-row">
        <button
          onclick="model.inputs.shoppingCart.case='PickupTime'; updateView();"
        >
          Tilbake
        </button>
        <button onclick="submitOrder()">Send bestilling</button>
      </div>
    </div>
  `;
}

function createOrderConfirmation() {
  const latestOrder = model.orders[model.orders.length - 1];
  return /* HTML */ `
    <div class="checkout-container">
      <h2>Takk for din bestilling!</h2>

      <div class="confirmation-details">
        <p>
          Vi har mottatt din bestilling med bestillings-ID:
          ${latestOrder.orderId}
        </p>
        <p>Din bestilling vil være klar til henting:</p>
        <p class="pickup-time">
          ${dayjs(latestOrder.pickUpSchedule.date).format('DD. MMMM YYYY')} kl.
          ${latestOrder.pickUpSchedule.time}
        </p>

        <p>En ansatt vil snart bekrefte bestillingen din via SMS.</p>
      </div>

      <button onclick="window.location.href='index.html#kafeMeny';">
        Tilbake til meny
      </button>
    </div>
  `;
}

window.generateTimeOptions = generateTimeOptions;

console.log('checkoutView.js loaded');
