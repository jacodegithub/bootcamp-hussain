// Write a function called compose that takes two functions as arguments (f and g) and returns a new function. The new function should be the composition of f and g, meaning that calling the new function with an argument x should be equivalent to calling f(g(x)).

function compose(f, g) {
    return function(x) {
        return f(g(x));
    };
}

// For example
function addition(x) {
    return x + x;
}

function multiply(x) {
    return x * x;
}

// Now using compose method
const multiplyThenAdd = compose(addition, multiply);

const answer = compose_answer(4);

console.log(answer);


