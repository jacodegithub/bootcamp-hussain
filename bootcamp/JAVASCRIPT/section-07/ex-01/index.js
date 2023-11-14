
// Drill 1:

//     Write Fibonacci function (where fib(1) = 1 and fib(0)=1 and fib(n)=fib(n-1)+fib(n-2))
//     Write a program that uses the function. Take a number on the command line and print the result.
//     Add timing information on how long it takes.
//     Use different fibonacci function (with recursion and caching) (fib1, fib2, fib3 functions) and time them.

function fib1(n) {
    if(n <= 1) {
        return 1;  
    } 
    return fib1(n-1) + fib1(n-2);
}

const fib2 = function(n, dp = {}) {

    if(n <= 1) return 1;

    if(dp[n] !== undefined) {
        return dp[n];
    }

    let result = fib2(n-1, dp) + fib2(n-2, dp);
    dp[n] = result;
    return dp[n]; 

}

const fib3 = function(n) {
    
    dp = [1, 1]

    for(let i=2; i<=n; ++i) {
        dp[i] = dp[i-1] + dp[i-2];
    }

    return dp[n];
}

// function to calculate time taken by funciton to execute
function functionTimeExecution(func, n) {
    const start = process.hrtime();

    console.log('start ', start)
    const result = func(n);
    const end = process.hrtime(start);
    console.log('end ', end)
    
    console.log(`Execution time: ${end[0]}s ${end[1] / 1e6}ms`);
    
    return result;
}

// getting input from command line
const inputNumber = parseInt(process.argv[2], 10)

console.log(`Fibnonacci(${inputNumber}) using fib1: ${functionTimeExecution(fib1, inputNumber)}`)
console.log(`Fibnonacci(${inputNumber}) using fib2: ${functionTimeExecution(fib2, inputNumber)}`)
console.log(`Fibnonacci(${inputNumber}) using fib3: ${functionTimeExecution(fib3, inputNumber)}`)