// TO DO
// ✅ create a super simple calculator addition function a + b
// ✅ create buttons for number 1-3, 'add', and 'equals'
// ✅ create subtract button
// ✅ make each button return its number
// ✅ provide functionality to the function buttons
// ✅ create a 'calculate' function that takes all the inputs and makes it happen
// ✅ make the equal button actually do the 'calculate' function
// ✅ expand through 9 and 0
// ✅ allow for double digits
// ✅ style a little more
// ✅ allow for typing in numbers
// figure out how to get first input to be justified left
// put some text on page explaining keystroke options
// refactor code to clean things up

//Variables
const zero = document.getElementById("_0");
const one = document.getElementById("_1");
const two = document.getElementById("_2");
const three = document.getElementById("_3");
const four = document.getElementById("_4");
const five = document.getElementById("_5");
const six = document.getElementById("_6");
const seven = document.getElementById("_7");
const eight = document.getElementById("_8");
const nine = document.getElementById("_9");
const addBtn = document.getElementById("add-btn");
const subtractBtn = document.getElementById("subtract-btn");
const multiplyBtn = document.getElementById("multiply-btn");
const divideBtn = document.getElementById("divide-btn");
const equalBtn = document.getElementById("equal-btn");
const resultDisplay = document.getElementById("result-display");
const prevInput = document.getElementById("previous-input");
const currInput = document.getElementById("current-input");
const operatorInput = document.getElementById("operator-input");
const equalInput = document.getElementById("equal-input");
const clearBtn = document.getElementById("clear-btn");

let currentInput = 0;
let previousInput = 0;
let operator;

//Functions
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
  return a / b;
}

function getCurrentNumber(e) {
  const num = Number(e.target.innerHTML);
  if (isNaN(num)) {
    console.error(`invalid number: ${e.target.innerHTML}`);
  }

  if (currentInput) {
    currentInput = currentInput * 10 + num;
    currInput.innerHTML = `${currentInput}`;
  } else {
    currentInput = num;
    currInput.innerHTML = `${currentInput}`;
  }
}

function getTypedCurrentNumber(e) {
  const num = Number(e.innerHTML);
  if (isNaN(num)) {
    console.error(`invalid number: ${e.target.innerHTML}`);
  }

  if (currentInput) {
    currentInput = currentInput * 10 + num;
    currInput.innerHTML = `${currentInput}`;
  } else {
    currentInput = num;
    currInput.innerHTML = `${currentInput}`;
  }
}

function getOperator(e) {
  if (!isNaN(currentInput)) {
    previousInput = currentInput;
    currentInput = 0;

    if (e.target.innerHTML.includes("+")) {
      operator = add;
      operatorInput.innerHTML = "+";
    } else if (e.target.innerHTML.includes("-")) {
      operator = subtract;
      operatorInput.innerHTML = "-";
    } else if (e.target.innerHTML.includes("x")) {
      operator = multiply;
      operatorInput.innerHTML = "x";
    } else if (e.target.innerHTML.includes("/")) {
      operator = divide;
      operatorInput.innerHTML = "/";
    }
  }
  prevInput.innerHTML = `${previousInput}`;

  currInput.innerHTML = ``;
}

function getTypedOperator(e) {
  previousInput = currentInput;
  currentInput = 0;

  if (e == "+") {
    operator = add;
    operatorInput.innerHTML = "+";
  } else if (e == "-") {
    operator = subtract;
    operatorInput.innerHTML = "-";
  } else if (e == "x" || e == "*") {
    operator = multiply;
    operatorInput.innerHTML = "x";
  } else if (e == "/") {
    operator = divide;
    operatorInput.innerHTML = "/";
  }

  prevInput.innerHTML = `${previousInput}`;

  currInput.innerHTML = ``;
}

function calculate(previousInput, currentInput, operator) {
  equalInput.innerHTML = "=";

  if (operator) {
    const result = operator(previousInput, currentInput);
    currentInput = 0;
    prevInput.innerHTML = `${result}`;
    currInput.innerHTML = "";
    operatorInput.innerHTML = "";
    equalInput.innerHTML = "";
    return result;
  } else {
    console.error("no operator set");
    return null;
  }
}

function clearResults() {
  resultDisplay.innerHTML = "";
  prevInput.innerHTML = "";
  currInput.innerHTML = "";
  operatorInput.innerHTML = "";
  equalInput.innerHTML = "";
  currentInput = 0;
}

//Event listeners
zero.addEventListener("click", getCurrentNumber);
one.addEventListener("click", getCurrentNumber);
two.addEventListener("click", getCurrentNumber);
three.addEventListener("click", getCurrentNumber);
four.addEventListener("click", getCurrentNumber);
five.addEventListener("click", getCurrentNumber);
six.addEventListener("click", getCurrentNumber);
seven.addEventListener("click", getCurrentNumber);
eight.addEventListener("click", getCurrentNumber);
nine.addEventListener("click", getCurrentNumber);

addBtn.addEventListener("click", function (e) {
  getOperator(e);
});
subtractBtn.addEventListener("click", function (e) {
  getOperator(e);
});
multiplyBtn.addEventListener("click", function (e) {
  getOperator(e);
});
divideBtn.addEventListener("click", function (e) {
  getOperator(e);
});
equalBtn.addEventListener("click", function () {
  calculate(previousInput, currentInput, operator);
});
clearBtn.addEventListener("click", clearResults);

// Listeners for typing events
document.addEventListener("keydown", function (e) {
  if (e.key === "1") {
    getTypedCurrentNumber(one);
  } else if (e.key === "2") {
    getTypedCurrentNumber(two);
  } else if (e.key === "3") {
    getTypedCurrentNumber(three);
  } else if (e.key === "4") {
    getTypedCurrentNumber(four);
  } else if (e.key === "5") {
    getTypedCurrentNumber(five);
  } else if (e.key === "6") {
    getTypedCurrentNumber(six);
  } else if (e.key === "7") {
    getTypedCurrentNumber(seven);
  } else if (e.key === "8") {
    getTypedCurrentNumber(eight);
  } else if (e.key === "9") {
    getTypedCurrentNumber(nine);
  } else if (e.key === "0") {
    getTypedCurrentNumber(zero);
  } else if (e.key === "+") {
    getTypedOperator("+");
  } else if (e.key === "-") {
    getTypedOperator("-");
  } else if (e.key === "x" || e.key === "*") {
    getTypedOperator("x");
  } else if (e.key === "/") {
    getTypedOperator("/");
  } else if (e.key === "Enter") {
    calculate(previousInput, currentInput, operator);
  } else if (e.key === "Backspace") {
    clearResults();
  }
});
