// Name: Danica A. Cabuay
// Section: IV-BSIT B
// Activity: N2
// Date: November 27, 2026

const os = require("os"); // built-in module
const operations = require("./operations"); // custom module
const { formatResult } = require("./formatter"); // custom module

// process.argv: [node path, file path, operation, number, number, ...]
const [operation, ...inputs] = process.argv.slice(2);
const numbers = inputs.map(Number);

function main() {
  console.log(`Calculator by Danica A. Cabuay (user: ${os.userInfo().username})`);

  if (!Object.hasOwn(operations, operation)) {
    console.log("Error: unknown operation. Use add, subtract, multiply, divide or average.");
    return;
  }

  if (numbers.length === 0 || numbers.some(Number.isNaN)) {
    console.log("Error: please enter valid numbers.");
    return;
  }

  if (operation !== "average" && numbers.length !== 2) {
    console.log("Error: this operation needs exactly 2 numbers.");
    return;
  }

  try {
    const result = operations[operation](...numbers);
    console.log(formatResult(operation, numbers, result));
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
}

main();