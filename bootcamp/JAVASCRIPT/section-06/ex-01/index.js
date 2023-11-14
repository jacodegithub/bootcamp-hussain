// Write a JavaScript module called mathOperations that exports functions add, subtract, multiply, and divide. Import this module into a separate script and use it to perform arithmetic operations.

import { add, subtract, multiply, divide } from './mathOperations.mjs'

// adding function
const sum = add(44, 2039);

const subtrct = subtract(203, 20);

const multply = multiply(23, 23);

const dvde = divide(22, 7);

console.log(`sum: ${sum}, subtrct: ${subtrct}, multply: ${multply}, dvde: ${dvde}`)
