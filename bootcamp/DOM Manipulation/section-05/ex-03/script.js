const body = document.querySelector('body')
const swtch = document.querySelector('.switch')

swtch.addEventListener('click', () => {
    body.classList.toggle('light')
    swtch.classList.toggle('active')
})