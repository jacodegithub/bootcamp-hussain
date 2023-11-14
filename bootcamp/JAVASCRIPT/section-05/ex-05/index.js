// Provide an example of how to use these functions. Call fetchMultipleUsers with an array of user IDs to demonstrate the asynchronous fetching and processing of user data.

async function fetchMultipleUsers(userIds) {

    try{
        const data = userIds.map(userId => 
            fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)    
        )

        const userPromises = await Promise.all(data);

        const userArray = await Promise.all(userPromises.map(
            res => {
                if(!res.ok) {
                    throw new Error(`Found no user with usre`)
                }

                return res.json();
            }
        ))
         console.log(userArray);
    }
    catch(err) {
        console.log(err);
    }
}