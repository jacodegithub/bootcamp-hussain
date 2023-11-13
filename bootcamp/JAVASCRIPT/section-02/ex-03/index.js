
const reverse_func = (str) => {
    let reverse = '';
    for(let i=str.length-1; i>=0; i--) {
        reverse += str[i];
    }

    return reverse;
}

let given_str = "Hi, I am learning a great deal!!";
let reverse_str = reverse_func(given_str);

console.log(reverse_str)