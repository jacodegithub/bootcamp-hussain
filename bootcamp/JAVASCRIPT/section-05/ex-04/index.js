// Expand the problem by creating a function called fetchMultipleUsers that takes an array of user IDs and fetches their data concurrently using Promise.all and async/await. Log the combined result.


const fetchUserData = async (userIds) => {

    try {

        const usersData = userIds.map(userId => 
            fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        )
        // console.log(usersData);
        const responses = await Promise.all(usersData);
        console.log('response ', responses);

        const userDataArray = await Promise.all(
            responses.map(res => {
                if(!res.ok) {
                    throw new Error(`Error fetching user Data!`)
                }
                return res.json();
            })
        )

        console.log('Retrived data: ', userDataArray);
    }
    catch(err) {
        console.log(err);
    }

}

const userIdArr = [2, 4, 5]
fetchUserData(userIdArr);


// async function fetchMultipleUsers(userIds) {
//     try {
//       const userPromises = userIds.map(userId =>
//         fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//       );
        
//       const responses = await Promise.all(userPromises);
//       console.log('responses ',responses);
  
//       const userDataArray = await Promise.all(
//         responses.map(response => {
//           if (!response.ok) {
//             throw new Error(`Error fetching user data: ${response.statusText}`);
//           }
//           return response.json();
//         })
//       );
  
//       console.log('Retrieved User Data:', userDataArray);
//     } catch (error) {
//       console.error(error.message);
//     }
//   }
  
//   // Example usage with an array of user IDs
//   const userIdsArray = [1, 2, 3]; // Replace with the desired user IDs
//   fetchMultipleUsers(userIdsArray);
  