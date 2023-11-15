
// import { addThenMultiply } from "https://raw.githubusercontent.com/jacodegithub/bootcamp-hussain/main/bootcamp/JAVASCRIPT/section-06/ex-05/gitModule.mjs";

const addThenMultiply = require('https://github.com/jacodegithub/bootcamp-hussain/blob/main/bootcamp/JAVASCRIPT/section-06/ex-05/gitModule.mjs');

const compose = addThenMultiply(5)(9);

console.log(compose);