const arr = [2, 10, 'shift', 'work', 100];

// adding in front side of array
arr.unshift('eggs');

// adding at a particular index
arr.splice(2, 0, 20000);

// adding at the end of array
arr.push('push at end');
console.log(arr)