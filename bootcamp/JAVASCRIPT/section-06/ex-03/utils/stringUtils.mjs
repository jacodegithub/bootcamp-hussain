
export const reverseString = (string) => {
    return string.split("").reverse().join("");
}

export const countCharacters = (string) => {
    let cnt = 0;
    for(let i of string) {
        if(i !== ' ') {
            cnt++;
        }
    }
    return cnt;
}

