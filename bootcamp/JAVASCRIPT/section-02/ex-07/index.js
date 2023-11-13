// Create an array of persons. Now, copy that array. Add a new address to one of the persons. See what happens.
const persons = [
    person1 = {
        name: 'Jackie',
        age: 75,
        address: 'Germany',
    },
    person2 = {
        name: 'Somu Hung',
        age: 70,
        address: 'Hong-Kong',
    },
    person3 = {
        name: 'Leonardo Da Vinci',
        age: 80,
        address: 'Italy',
    },
]

const copiedArray = persons.slice();

for(let i=0; i<copiedArray.length; ++i) {
    if(copiedArray[i].name === 'Jackie') {
        copiedArray[i].address = 'China';
    }
}

console.log('persons ',persons);
console.log('changedArr ',copiedArray)