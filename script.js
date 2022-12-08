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
            if (firstNumber != undefined) {
                numArray.push(button.value);
                mainDisplay.innerText = `${firstNumber} ${operator} ${numArray.join("")}`
            } else if (firstNumber == undefined) {
                numArray.push(button.value);
                mainDisplay.innerText = numArray.join("");
            }

        } else if (button.classList.contains('operator-button')) {
            if (numArray.length < 1 && firstNumber == undefined) {
                mainDisplay.innerText = "";
            } else if (numArray.length > 0 && firstNumber != undefined) { // Uses this if the operate() function has been run.  Thus, user is running a calculation on the answer, AND has already input some numbers.
                secondNumber = numArray.join("");
                secondNumber = parseFloat(secondNumber);
                numArray.length = 0;
                answer = operate(operator, firstNumber, secondNumber);
                if (answer % 1 != 0) { // Checks to see if the answer has a long decimal.  If it does, it changes the result to round to 2 decimal places, preventing overload.
                    answer = answer.toFixed(2);
                }
                operator = button.value;
                mainDisplay.innerText = `${answer} ${operator}`;
                firstNumber = parseFloat(answer);
                secondNumber = undefined;
                console.log("test1");
               
            } else if (answer != undefined && numArray.length < 1) { // function operate() has been run and the answer is now the firstNumber.  User has not input any numbers yet for a secondNumber variable.
                operator = button.value;
                mainDisplay.innerText = `${firstNumber} ${operator}`;
                console.log("test2");
                
            } else if (answer == undefined) { // Uses this if the operate() function has not been run yet.
                operator = button.value;
                firstNumber = numArray.join("");
                firstNumber = parseFloat(firstNumber);
                mainDisplay.innerText = `${firstNumber} ${operator}`;
                numArray.length = 0;
                console.log("test3");
            }

        } else if (button.classList.contains('equal-button')) {
            if (firstNumber == undefined && operator == undefined) {
                mainDisplay.innerText = `${numArray.join("")}`;

            } else if (firstNumber != undefined && operator != undefined && numArray.length > 0) {
                secondNumber = numArray.join("");
                secondNumber = parseFloat(secondNumber);
                numArray.length = 0;
                answer = operate(operator, firstNumber, secondNumber);
                if (answer % 1 != 0) {
                    answer = answer.toFixed(2);
                }
                mainDisplay.innerText = `${firstNumber} ${operator} ${secondNumber} = ${answer}`

                firstNumber = parseFloat(answer);
                secondNumber = undefined;
            }

        } else if (button.classList.contains('clear-button')) {
            clear();

        } else if (button.classList.contains('backspace-button')) {
            // save mainDisplay.innerText in a variable, then remove the last number in the string, then recreate the mainDisplay from that.
            mainDisplay.innerText = mainDisplay.innerText.substring(0, mainDisplay.innerText.length - 1);
            console.log(mainDisplay.innerText);
            numArray.pop();
        }
    })
})


// Create a function that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
function operate(func, num1, num2) {
    if (func === '+') {
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
    firstNumber = undefined;
    secondNumber = undefined;
    operator = undefined;
    answer = undefined;
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