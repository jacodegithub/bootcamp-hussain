let arr = [20, 39, 17, 11, 48, 20, 97, 47, 43]

let o_arr = [], e_arr = []

arr.map((elem, each) => {
    if(each % 2 == 0) {
        e_arr.push(elem)
    }
    else o_arr.push(elem);
})

console.log(o_arr, e_arr)