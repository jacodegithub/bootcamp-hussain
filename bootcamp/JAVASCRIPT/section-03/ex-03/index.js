// Write a higher-order function called multiplyBy that takes a number x as an argument and returns a function. The returned function should take another number y and multiply it by x.

const multiplyBy = (x) => {
    return function(y) {
        return x * y;
    }
}

const operation = multiplyBy(4);
const answer = operation(10);

console.log(answer);