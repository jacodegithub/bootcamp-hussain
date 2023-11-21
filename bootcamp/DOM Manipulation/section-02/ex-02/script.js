const emailInput = document.querySelector('#email');
const name = document.querySelector('#name')
const errorMessage = document.querySelector('#errorMessage');
const form = document.querySelector('#emailForm')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.querySelector('#email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(emailRegex.test(email)) {
        errorMessage.textContent = 'Valid Email.';
    }
    else {
        errorMessage.textContent = 'Invalid email format.!'
    }
})

