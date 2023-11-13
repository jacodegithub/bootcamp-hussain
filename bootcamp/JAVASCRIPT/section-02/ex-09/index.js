// Given an array of numbers, create a new array with each number squared.

function square_num_func(arr) {
    let sqr = arr.map(n => {
        return n * n;
    })
    return sqr;
}

let arr = [23, 17, 44, 203, 293059];

// let sqrArray = arr.map((ele)=>{
//     return ele * ele;
// })

const squre_nums = square_num_func(arr);

console.log(squre_nums);