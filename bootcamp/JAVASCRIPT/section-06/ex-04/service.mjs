

import axios from "axios";


export const fetchUserData = async (userId) => {
    const axiosFetch = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const data = await axiosFetch.data;
    console.log('axios file',data)
    return axiosFetch;
}