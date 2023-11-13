// Write a function called curry that takes a binary function (additionFn) as an argument and returns a curried version of it. The curried function should allow partial application for addition.

function curry(additionFn) {
    return function(x) {
        return function(y) {
            return additionFn(x, y);
        }
    }
}


// function for addition 
const addition = function(x, y) {
    return x + y;
}

const curriedFn = curry(addition);
const secondCurryFn = curriedFn(10);

console.log(secondCurryFn(3));