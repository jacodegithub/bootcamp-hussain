const searchInput = document.querySelector('#input')
const listItem = document.querySelectorAll('li')

searchInput.addEventListener('input', () => {
    const searchItem = searchInput.value.toLowerCase();

    // console.log(searchItem)
    Array.from(listItem).forEach(item => {
        // console.log(item)
        const textContent = item.textContent.toLowerCase();
        const isMatch = textContent.includes(searchItem);

        item.style.display = isMatch ? 'block' : 'none';
    })

})