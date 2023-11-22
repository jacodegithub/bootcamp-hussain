document.addEventListener('DOMContentLoaded', function() {

    const gridContainer = document.querySelector('#grid-container');

    let obj = {}
    async function fetchCountries() {
        try {
            const response = await fetch('https://restcountries.com/v2/all');
            const data = await response.json();

            data.forEach(country => {
                const name = country.name;
                const flag = country.flags.svg;

                obj[name] = flag;
            });

            processCountries(obj);
        } catch (error) {
            console.log('Error fetching data', error);
        }
    }

    function processCountries(obj) {
        
        for(let key in obj) {
            const country = document.createElement('div');
            country.classList.add('country');
            const img = document.createElement('img');
            const name = document.createElement('h3');

            img.src = obj[key];
            img.alt = key;
            // console.log(key);
            name.textContent = key;
            country.appendChild(img);
            country.appendChild(name);
            // console.log('this',key)
            gridContainer.appendChild(country);
        }

    }
    

    console.log(obj);
    fetchCountries()
})