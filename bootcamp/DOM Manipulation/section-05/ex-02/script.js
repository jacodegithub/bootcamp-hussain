const thumbnail = document.querySelectorAll('.thumbnail')

thumbnail.forEach(thumbnail => {
    thumbnail.addEventListener('click', (e) => {
        console.log(thumbnail.children[0].src)
        document.querySelector('.main-image').children[0].src = thumbnail.children[0].src;
    })
})
