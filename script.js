// Create 4 functions. add, subtract, multiply, divide (Start with 2 parameters).
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

// Create a function that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
function operate(func, num1, num2) {
    if (func === 'add') {
        return add(num1, num2);
    } else if (func === 'subtract') {
        return subtract(num1, num2);
    } else if (func === 'multiply') {
        return multiply(num1, num2);
    } else if (func === 'divide') {
        return divide(num1, num2);
    }
}

// Variables for DOM manipulation.
const buttons = document.querySelectorAll('button');
const display = document.getElementById('calculatorDisplay');
const numButtons = document.querySelectorAll('.number-button');
const opButtons = document.querySelectorAll('.operator-button');
const plusButton = document.getElementById('plusButton');
const minusButton = document.getElementById('minusButton');
const multiplyButton = document.getElementById('multiplyButton');
const divideButton = document.getElementById('divideButton');
const equalsButton = document.getElementById('equalButton');

// Setting up variables to store values for future use in calculations.
const numArray = [];

let displayValue;
let operator;

// Function which changes display to match the value of the number button clicked.  Stores value in variable numValue.
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.classList.contains('number-button')) {
            display.innerText = button.value;
            displayValue = parseInt(button.value);
        } else if (button.classList.contains('operator-button')) {
            display.innerText = button.value;
            operator = button.value;
            numArray.push(displayValue);
            console.log(displayValue);
            console.table([numArray]);
            console.log(operator);
        } else if (button.classList.contains('equal-button')) {
            numArray.push(displayValue);
            let answer = operate(operator, numArray[0], numArray[1]);
            console.log(answer);
          
        }
    })
})   
