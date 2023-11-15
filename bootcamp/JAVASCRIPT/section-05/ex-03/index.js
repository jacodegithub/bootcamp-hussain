// Modify the fetchUserData function to call processUserData after successfully fetching the data. Ensure that the processing step occurs only if the API call is successful.

async function fetchUserData(userId) {
    let somedata;
    try {
        const userData = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)

        if(userData.ok == false) throw new Error("found no user!")

        const data = await userData.json();
        somedata = data;
        // console.log(data);  
    }
    catch(err) {
        console.log(err);
    }

    return somedata;
}

fetchUserData(2).then(response => console.log('response ',response));