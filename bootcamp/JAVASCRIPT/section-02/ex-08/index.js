// Given an array of strings, concatenate them into a single string with spaces between each word.

const stringify_func = (arr) => {
    return arr.join(" ");
}

let arr = ['what', 'is', 'happening', 'in', 'todays', 'world?'];

const string = stringify_func(arr);

console.log(string);