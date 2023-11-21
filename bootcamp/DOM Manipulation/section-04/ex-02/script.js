document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#myForm');

    const email = document.querySelector('#email')
    const name = document.querySelector('#name')

    const input = document.getElementsByTagName('input')
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        // console.log('input ',input, input[0].value, input[1].value)
        // const arr = Array.from(input).forEach(item => console.log(item.value))
        // const formData = new FormData(form);
        const formDataObj = {
            name: input[0].value,
            email: input[1].value
        }

        // console.log(formData)
        // formData.forEach((key, value) => {
        //     formDataObj[key] = value
        // })

        console.log('Object', formDataObj)
    })
})