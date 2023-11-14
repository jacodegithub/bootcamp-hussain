// Extend the mathOperations module to include a function for calculating the square root. Create a new module named advancedMath that imports and uses functions from both the mathOperations module and the new square root function.

import { sqrRoot } from "./mathOperations.mjs";

const inputNumber = parseInt(process.argv[2], 10)
const sqrt = sqrRoot(inputNumber);

console.log(`Squre root of the number ${inputNumber}: ${sqrt}`)
