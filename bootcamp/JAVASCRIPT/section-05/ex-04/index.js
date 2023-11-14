// Modify the fetchUserData function to call processUserData after successfully fetching the data. Ensure that the processing step occurs only if the API call is successful.

async function fetchUserData(userId) {
    await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then((response) => {
        let data = response.data;
        console.log(data);
    }).catch((err0r) => {
        console.log(error);
    })
}

fetchUserData(4);