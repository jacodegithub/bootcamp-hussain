const world = document.querySelector('.world')
// world.textContent = 'DOM'

function delayPrint() {
    return setTimeout(() => {
        world.textContent = 'DOM'
    }, 2000)
}

delayPrint();