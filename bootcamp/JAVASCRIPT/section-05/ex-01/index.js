// Implement a function called fetchUserData that takes a user ID as an argument and fetches user data from an API endpoint. Use fetch with async/await to make the API call. Log the retrieved user data.

async function fetchUserData(userId) {

    try {
        const userData = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    
        if(!userData.ok) {
            throw new Error('Found no user, check the entered userId!.')
        }
    
        const data = await userData.json();
        console.log(data);
    }
    catch(error) {
        console.log(error);
    }
}

fetchUserData(2);