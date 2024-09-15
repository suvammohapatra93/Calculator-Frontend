// Get the display element
let display = document.forms["calculator"]["display"];

// Function to clear the display
function clearDisplay() {
  display.value = "";
}

// Function to delete the last character from the display
function deleteLastChar() {
  display.value = display.value.slice(0, -1);
}

// Function to append value to the display
function appendToDisplay(value) {
  // Prevent multiple operators in a row
  const lastChar = display.value.slice(-1);
  if (isOperator(value) && isOperator(lastChar)) return;
  display.value += value;
}

// Function to check if a character is an operator
function isOperator(value) {
  return ["+", "-", "*", "/", "%", "^"].includes(value);
}

// Function to calculate the result
function calculate() {
  try {
    // Replace "^" with "**" for exponentiation in JS
    let result = display.value.replace(/\^/g, "**");
    display.value = eval(result);
  } catch (error) {
    display.value = "Error";
  }
}

// Function to calculate square root
function calculateSquareRoot() {
  try {
    display.value = Math.sqrt(eval(display.value));
  } catch (error) {
    display.value = "Error";
  }
}

// Adding keyboard support
document.addEventListener("keydown", function (event) {
  const key = event.key;
  if (key >= "0" && key <= "9") {
    appendToDisplay(key);
  } else if (key === ".") {
    appendToDisplay(".");
  } else if (key === "Backspace") {
    deleteLastChar();
  } else if (key === "Enter" || key === "=") {
    calculate();
  } else if (["+", "-", "*", "/", "%"].includes(key)) {
    appendToDisplay(key);
  } else if (key === "Escape") {
    clearDisplay();
  }
});
