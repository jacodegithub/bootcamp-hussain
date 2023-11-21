function updateFontSize() {
    const slider = document.querySelector('#slider');
    const fontSize = slider.value;
    const text = document.querySelector('#text')
    const sliderOutput = document.querySelector('#sliderOutput')

    text.style.fontSize = fontSize + 'px';
    sliderOutput.textContent = 'Font size: '+ fontSize +'px'
}

updateFontSize();