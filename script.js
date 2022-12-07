// Variables for DOM manipulation.
const buttons = document.querySelectorAll('button');
const mainDisplay = document.getElementById('mainDisplay');
const secondaryDisplay = document.getElementById('secondaryDisplay');
const numButtons = document.querySelectorAll('.number-button');
const opButtons = document.querySelectorAll('.operator-button');
const plusButton = document.getElementById('plusButton');
const minusButton = document.getElementById('minusButton');
const multiplyButton = document.getElementById('multiplyButton');
const divideButton = document.getElementById('divideButton');
const equalsButton = document.getElementById('equalButton');

// Setting up variables to store values for future use in calculations.
const numArray = [];
let firstNumber;
let secondNumber;
let operator;
let answer;

// Function which changes display to match the value of the number button clicked.  Stores value in variable numValue.
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.classList.contains('number-button')) {
            numArray.push(button.value);
            secondaryDisplay.innerText = numArray.join("");

            if (firstNumber != undefined) {
                secondaryDisplay.innerText = `${firstNumber} ${operator} ${numArray.join("")}`;
            }

        } else if (button.classList.contains('operator-button')) {
            operator = button.value;
            if (answer == undefined) {
                firstNumber = numArray.join("");
                firstNumber = parseFloat(firstNumber);
                mainDisplay.innerText = " ";
            } else if (answer != undefined) {
                firstNumber = parseFloat(answer);
                secondaryDisplay = `${firstNumber} ${operator} ${numArray.join("")}`
    
                secondNumber = numArray.join("").push();
                secondNumber = parseFloat(secondNumber);
            } else if (secondNumber != undefined) {
                answer = operate(operator, answer, secondNumber)
            }

            numArray.length = 0;

            if (answer == undefined) {
                
                secondaryDisplay.innerText = `${firstNumber} ${operator}`;
            } else if (answer != undefined) {
                secondaryDisplay.innerText = `${answer} ${operator}`;
                firstNumber = answer;
                
                answer = operate(operator, firstNumber, secondNumber);
            } 

        } else if (button.classList.contains('equal-button')) {
            secondNumber = numArray.join("");
            secondNumber = parseFloat(secondNumber);
            console.log(firstNumber);
            console.log(secondNumber);
            console.log(operator);
            numArray.length = 0;
            answer = operate(operator, firstNumber, secondNumber);
            console.log(answer);
            mainDisplay.innerText = answer;
            firstNumber = parseFloat(answer);
            secondNumber = undefined;
        } else if (button.classList.contains('clear-button')) {
            clear();
        }
    })
})  


// Create a function that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
function operate(func, num1, num2) {
    secondaryDisplay.innerText = `${num1} ${func} ${num2} =`
    if (func === '+') {
        // secondaryDisplay.innerText = `${num1} ${func} ${num2} =`
        return add(num1, num2);
    } else if (func === '-') {
        return subtract(num1, num2);
    } else if (func === '*') {
        return multiply(num1, num2);
    } else if (func === '/') {
        if ((num1 || num2) != 0) {
            return divide(num1, num2);
        } else {
            return "Can't Divide By Zero";
        }
    }
}

// function that clears everything

function clear() {
    mainDisplay.innerText = "";
    secondaryDisplay.innerText = "";
    firstNumber = "";
    secondNumber = "";
    operator = null;
    numArray.length = 0;
}

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
    if (a || b != 0) {
        return a / b;
    } else {
        return "Cannot divide by zero";
    } 
}