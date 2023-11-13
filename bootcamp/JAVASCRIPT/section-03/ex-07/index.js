// Write a recursive function called fibonacci that calculates the nth Fibonacci number. The function should use a recursive approach to calculate Fibonacci numbers.

const fibonacci  = function(num) {
    if(num < 1) return 0;
    return num + fibonacci(num - 1);
}

const nth_fib_num = fibonacci(5);

console.log(nth_fib_num);