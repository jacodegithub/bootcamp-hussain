// Write a function called filterAndMap that takes an array of numbers and two functions (filterFn and mapFn). It should filter out the even numbers using filterFn and then apply mapFn to square each remaining number.

// function filterAndMap(filterFn, mapFn) {
//     return function(arr) {
//         return mapFn(filterFn(arr));
//     }
// }


// function filterFn(arr) {
//     return arr.filter(n => n % 2 !== 0)
// }

// function mapFn(arr) {
//     return arr.map(n => n * n);
// }

// let arr = [2, 23, 17, 2034, 2039, 20, 2391];
// let arr1 = [2, 3, 4, 5, 6, 7, 8, 9];

// const filterThenMap = filterAndMap(filterFn, mapFn);

// const compose_answer = filterThenMap(arr1)

// console.log(compose_answer);

function filterAndMap(arr, filterFn, mapFn) {
    const filteredNumbers = arr.filter(filterFn);

    const mappedNumbers = filteredNumbers.map(mapFn);

    return mappedNumbers;
}

const filterNum = function (n) {
    return n % 2 !== 0;
}

const squaredNum = function (n) {
    return n * n;
}

let arr = [2, 3, 4, 5, 6, 7, 8, 9];

const answer = filterAndMap(arr, filterNum, squaredNum);

console.log(answer);

