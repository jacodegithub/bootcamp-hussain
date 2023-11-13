// Given an array of numbers, find the sum of all positive numbers.

function sum_func(arr) {
    let sum = 0;
    arr.map(n => {
        if(n > 0) {
            sum += n;
        }
    })
    return sum;
}

let arr = [-10, -293, 20, 2039, 2, -392, -22, 0, 2039, -32]

const sum = sum_func(arr) 

console.log(sum);