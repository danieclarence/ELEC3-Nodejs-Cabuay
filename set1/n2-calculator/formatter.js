// Name: Danica A. Cabuay
// Section: IV-BSIT B
// Activity: N2
// Date: November 27, 2026

// Builds the text shown to the user, e.g. 12 + 8 = 20
function formatResult(operation, numbers, result) {
  const symbols = { add: "+", subtract: "-", multiply: "*", divide: "/" };

  if (operation === "average") {
    return `average of ${numbers.join(", ")} = ${result}`;
  }
  return `${numbers[0]} ${symbols[operation]} ${numbers[1]} = ${result}`;
}

module.exports = { formatResult };