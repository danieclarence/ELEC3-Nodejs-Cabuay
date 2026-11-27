// Name: Danica A. Cabuay
// Section: IV-BSIT B
// Activity: N2
// Date: November 27, 2026

// Math functions only (custom module)
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero.");
  }
  return a / b;
}

function average(...numbers) {
  const total = numbers.reduce((sum, n) => sum + n, 0);
  return total / numbers.length;
}

// Share the functions with other files
module.exports = { add, subtract, multiply, divide, average };
