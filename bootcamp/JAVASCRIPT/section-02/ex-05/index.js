// Create an object representing a person with properties for name, age, and address. Then, log each property to the console.

const person = {
    name: 'Jackie',
    age: 76,
    address: 'Germany'
}

for(let key in person) {
    console.log(key);
}

