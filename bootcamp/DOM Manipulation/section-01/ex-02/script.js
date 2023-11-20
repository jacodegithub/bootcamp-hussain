const button = document.querySelector('button')
const number = document.querySelector('.number')

button.addEventListener('click', (e) => {
    increment()
})

let cnt = number.textContent
function increment() {
    cnt++;
    number.textContent = cnt;
}