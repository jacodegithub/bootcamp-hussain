// Write a function called operateOnArray that takes an array and a function (operationFn) as arguments. It should apply operationFn to each element of the array and return a new array with the results.

function operateOnArray(operationFn) {
    let arr = [2, 4, 3, 8, 20, 10, 28];
    return arr.map(operationFn);
}

const operate_func = function(n) {
    return n * n;
}


const newArr = operateOnArray(operate_func);
console.log(newArr);