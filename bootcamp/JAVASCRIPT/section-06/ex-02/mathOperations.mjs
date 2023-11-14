export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export function multiply(a, b) {
    return a * b;
}

export function divide(a, b) {
    if(b !== 0) {
        return a / b;
    }
    return console.error('Cannot divide by zero.');
}

export function sqrRoot(a) {
    return Math.sqrt(a);
}