// Given an array of numbers, filter out all even numbers and create a new array with only the odd numbers.
const filter_func = () => {
    const odd = []
    
    arr.filter((ele, index) => {
        if(ele % 2 !== 0) {
            console.log(ele)
            odd.push(ele)
        }
    })

    return odd;
}

let arr = [200, 399, 234, 2230, 20381, 27, 70, 771];
const odd_num = filter_func(arr)

console.log(odd_num)

