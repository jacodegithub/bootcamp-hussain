// Write a function called calculate that takes two numbers (a and b) and a callback function (operationFn) as arguments. It should apply the callback function to a and b and return the result.

const calculate = function(a, b, operationFn) {
    return operationFn(a, b);
}

const operatoin_func = function(a, b) {
    return a + b;
}

const answer = calculate(2, 7, operatoin_func);

console.log(answer);