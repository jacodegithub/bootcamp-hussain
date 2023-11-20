const world = document.querySelector('.world')

function delayPrint() {
    return setTimeout(() => {
        world.textContent = 'DOM'
    }, 2000)
}

delayPrint();