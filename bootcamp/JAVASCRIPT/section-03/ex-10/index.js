// Write a function called memoize that takes a function (expensiveOperationFn) as an argument and returns a memoized version of it. The memoized function should cache the results of previous calls to avoid recomputation

let dp = {}

function memoize(expensiveOperatoinFn) {

    return function(x) {
        if(dp[x] !== undefined) {
            return dp[x];   
        }
        else {
            const result = expensiveOperatoinFn(x);

            dp[x] = result;

            return result;
        }
    }
}


const fibonacci = memoize(function(n) {
    if(n <= 1) return 1;
    return fibonacci(n-1) + fibonacci(n-2);
})

const answer = fibonacci(5);

console.log(answer);

// console.log(dp);