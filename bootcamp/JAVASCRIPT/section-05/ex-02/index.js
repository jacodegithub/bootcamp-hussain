// Extend the problem by adding a function called processUserData that takes user data as an argument and performs some processing. For example, concatenate the user's name and email and log the result.

async function fetchUserData(userId) {

    try {
        const userData = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    
        if(!userData.ok) {
            throw new Error('Found no user, check the entered userId!.')
        }
    
        const data = await userData.json();
        let username = data.username
        let email = data.email
        // let username_email = username +" "+ email;
        console.log(`${username} ${email}`)
        console.log(username_email);
    }
    catch(error) {
        console.log(error);
    }
}

fetchUserData(2);