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