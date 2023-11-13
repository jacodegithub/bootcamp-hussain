// Write a function called sortNumbers that takes an array of numbers and a comparison function (compareFn). It should use the Array.sort() method with the custom comparison function to sort the numbers.

function sortNumbers(arr, compareFn) {
    return arr.sort(compareFn);
}

const sortingFn = function (a, b) {
    return a - b;
}

let arr = [3, 24, 90, 23, 4, 8, 9];

const answer = sortNumbers(arr, sortingFn);
console.log(answer)