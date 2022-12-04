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

function divide (a, b) {
    return a / b;
}

// Create a function that takes an operator and 2 numbers and then calls one of the above functions on the numbers.

function operate(op, c, d) {
    return op(c, d); 
}

// Create function(s) that display the number of the button clicked and put into the display.

const calculatorDisplay = document.getElementById('calculatorDisplay');

const numButtons = document.querySelectorAll('.number-button');
const operatorButtons = document.querySelectorAll('.operator-button');


function storeVal(val) {
    return val.value;
}





// numButtons.addEventListener('click', display());

function display() {
    return calculatorDisplay.innerText = storeVal();
}