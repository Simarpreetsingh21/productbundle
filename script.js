let quantities = [0, 0, 0, 0, 0];  // Initialize quantities for each chocolate
const prices = [2.00, 1.00, 1.50, 4.00, 3.00];  // Prices for each chocolate type

function addChocolate(index) {
  if (quantities[index] < 8) {
    quantities[index]++;
    updateTotalPrice();
  } else {
    alert('You can only add up to 8 chocolates of this type.');
  }
}

function updateTotalPrice() {
  let totalPrice = 0;
  for (let i = 0; i < quantities.length; i++) {
    totalPrice += quantities[i] * prices[i];
  }

  if (totalPrice > 8) {
    alert('Total chocolates cannot exceed 8.');
    totalPrice = 8;
    quantities = [0, 0, 0, 0, 0];  // Reset quantities
  }

  document.getElementById('total-price').textContent = `$${totalPrice.toFixed(2)}`;

  // Update the displayed quantities
  const quantityElements = document.querySelectorAll('.quantity');
  quantityElements.forEach((element, index) => {
    element.textContent = quantities[index];
  });
}
