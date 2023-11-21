const openModalButton = document.querySelector('#openModalButton')
const modal = document.querySelector('#myModal')
const closeButton = document.querySelector('.close-btn')

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
})

openModalButton.addEventListener('click', () => {
    modal.style.display = 'block'
})