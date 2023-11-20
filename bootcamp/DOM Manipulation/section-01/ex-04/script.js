const addPara = document.querySelector('#addPara')
const negPara = document.querySelector('#negPara')
const container = document.querySelector('.container')


addPara.addEventListener('click', () => {
    const p = document.createElement('p');
    p.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. In quae pariatur fugiat accusantium blanditiis numquam dolores assumenda quo, minus adipisci accusamus nihil quaerat ullam veritatis voluptatum, voluptate ut aperiam. Enim sint consequuntur aut soluta? Fugit deserunt totam, rem deleniti blanditiis eos maxime. Odio aliquam eos distinctio voluptatibus mollitia officiis aut.'
    
    container.appendChild(p);
})

// generate 
negPara.addEventListener('click', () => {
    if(container.lastChild) {
        container.removeChild(container.lastChild)
    }
})