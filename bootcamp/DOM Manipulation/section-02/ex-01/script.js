const para = document.querySelector('p')

para.addEventListener('mouseover', (e) => {
    let red = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)

    para.style.color = `rgb(${red}, ${green}, ${blue})`
})
para.addEventListener('mouseout', (e) => {

    para.style.color = `rgb(0, 0, 0)`
})