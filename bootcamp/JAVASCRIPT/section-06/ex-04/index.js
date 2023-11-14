// Utilize an external NPM package (e.g., axios) in a script. Write a function that fetches data from a public API using the imported module and displays the result.

import {fetchUserData} from './service.mjs';

const userId = parseInt(process.argv[2], 10);

fetchUserData(userId)