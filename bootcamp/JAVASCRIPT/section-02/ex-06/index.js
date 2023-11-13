// Add an array of addresses for the person, for all the addresses where they stayed. Log an example.
const person = {
    name: 'Jackie',
    age: 76,
    address: ['Germany', 'India', 'China', 'Hong-Kong', 'Japan']
}

for(let i=0; i<person.address.length; ++i) {
    console.log(person.address[i]);
}
