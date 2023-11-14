// Inside a folder named utils, write a module called stringUtils that exports functions for string manipulation (e.g., reverseString, countCharacters). Import and use this local module in a separate script outside the utils folder.

import { reverseString, countCharacters } from "./utils/stringUtils.mjs";

const reverse_str = reverseString('I am learning JAVASCRIPT');

const cnt_str_char = countCharacters('No Pain, No Gain');

console.log(`reverseString: ${reverse_str}, countCharacters: ${cnt_str_char}`)
