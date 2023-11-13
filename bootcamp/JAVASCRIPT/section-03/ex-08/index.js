// Write a function called composeWithReduce that takes an array of functions and returns a new function. The new function should be the composition of all the functions in the array, achieved using Array.reduce().

const composedWithReduce = function(functions) {
    return function(x) {
        return functions.reduceRight((result, func) => func(result), x) // it iterates over arr from left and accumulates ans in result.
        // return functions.reduce((result, func) => func(result), x)  it iterates from the left and accumulates the ans in result.
    }
}

const addThree = x => x + x + x;
const multiplyByFive = x => x * 5;
const square = x => x * x;

const composeFn = composedWithReduce([addThree, multiplyByFive, square]);
const answer = composeFn(2);

console.log(answer);