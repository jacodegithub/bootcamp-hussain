const form = document.querySelector('#textForm')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const text = document.querySelector('#textarea').value.trim();
    const paraContainer = document.querySelector('#para-container')
    const para = document.createElement('p');
    para.textContent = text;
    paraContainer.appendChild(para);

})

