// Modify the fetchUserData function to call processUserData after successfully fetching the data. Ensure that the processing step occurs only if the API call is successful.

async function fetchUserData(userId) {
    try {
        const userData = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)

        if(userData.ok == false) throw new Error("found no user!")

        const data = await userData.json();
        console.log(data);  
    }
    catch(err) {
        console.log(err);
    }
}

fetchUserData();