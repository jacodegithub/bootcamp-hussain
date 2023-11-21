document.addEventListener('DOMContentLoaded', function() {
    const autoCompleteInput = document.querySelector('#autocomplete');
    const autoCompleteList = document.querySelector('#autocomplete-list')
    
    const autoSuggestion = ['Apple', 'Banana', 'Car', 'Dog', 'Elephant', 'Frog', 'Game', 'Hen', 'Ink', 'Jump', 'King', 'Lion', 'Mountain', 'Nose', 'Owl', 'Parrot', 'Queen', 'Rose', 'Saturn','Time', 'Uranus', 'Vulture', 'Waqhar', 'Xenophone', 'Yalk', 'Zebra']

    autoCompleteInput.addEventListener('input', handleInput);

    function handleInput() {
        const inputText = autoCompleteInput.value.toLowerCase();
        
        // const suggestions = autoSuggestion.filter(suggestion =>
        //     suggestion.toLowerCase().includes(inputText)
        // );
        const suggestions = autoSuggestion.filter(suggestion => {
            return suggestion.toLowerCase().includes(inputText)
        });
        // console.log(suggestions)
        renderSuggestion(suggestions);
    }

    function renderSuggestion(suggestions) {
        autoCompleteList.textContent = ''

        suggestions.forEach(suggestion => {
            const liElement = document.createElement("li");
            liElement.style.listStyleType = 'none';
            liElement.style.cursor = 'pointer';
            liElement.textContent = suggestion;

            liElement.addEventListener('click', () => {
                autoCompleteInput.value = suggestion;
                autoCompleteList.textContent = ''
            })

            autoCompleteList.appendChild(liElement)
        })
    }
})