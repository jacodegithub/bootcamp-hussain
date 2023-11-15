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
    if(b !== 0) {
        return a / b;
    }
    return console.error('Cannot divide by zero.');
}

function sqrRoot(a) {
    return Math.sqrt(a);
}

module.exports = {
    add, subtract, multiply, divide, sqrRoot
}