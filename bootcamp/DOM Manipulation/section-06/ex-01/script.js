const numberGrid = document.querySelector('#number-grid')

for(let number=1; number<=100; ++number) {
    const numberElement = document.createElement('div')
    numberElement.classList.add('number')
    console.log(number)
    // checking for even / odd number
    if(number % 2 === 0) {
        numberElement.classList.add('even')
    }
    else {
        numberElement.classList.add('odd')
    }

    // checking for prime numbers
    let isPrime = true;
    for(let divisor=2; divisor<number; ++divisor) {
        if(number % divisor === 0) {
            isPrime = false
            break;
        }
    }

    if(isPrime) {
        numberElement.classList.add('prime')
    }

    numberElement.textContent = number;
    numberGrid.appendChild(numberElement);
}