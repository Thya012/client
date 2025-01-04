// import { jwtDecode } from "jwt-decode";
// import Axios from "axios"; // Make sure Axios is imported

// export default async function authHeader() {
//     const user = JSON.parse(localStorage.getItem('activeUser'));

//     // Check if user exists and has accessToken
//     if (user && user.accessToken) {
//         // Decode the token to extract expiration (exp)
//         const decoded = jwtDecode(user.accessToken);
//         const expire = new Date(decoded.exp * 1000);

//         // Check if the token is expired
//         const currentTime = new Date();
//         if (expire < currentTime) {
//             console.log("Token has expired.");

//             try {
//                 // If expired, call the refresh endpoint (ensure you replace 'authStore.refreshToken' with the correct value)
//                 const { data } = await Axios.get('/v1/auth/refresh', {
//                     headers: {
//                         Authorization: `Bearer ${user.refreshToken}`  // Assuming you store the refreshToken in the user object
//                     }
//                 });

//                 // Update localStorage with the new user data (including the new access token)
//                 localStorage.setItem("activeUser", JSON.stringify(data));

//                 // Return the updated Authorization header with the new access token
//                 return {
//                     Authorization: 'Bearer ' + data.accessToken,
//                     'Access-Control-Allow-Origin': '*',
//                     'Accept': 'application/json',
//                 };
//             } catch (error) {
//                 console.error("Error refreshing token:", error);
//                 return {};  // Return empty object or handle error logic
//             }
//         }

//         // Return the Authorization header if the token is valid
//         return {
//             Authorization: 'Bearer ' + user.accessToken,
//             'Access-Control-Allow-Origin': '*',
//             'Accept': 'application/json',
//         };
//     }

//     // Return an empty object if no user or accessToken is found
//     return {};
// }
export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('activeUser'));
    if (user) {
        if (user.accessToken) {
            return {
                Authorization: 'Bearer ' + user.accessToken,
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json',
                //'Content-Type': 'multipart/form-data'
            };
        } 
    }
}
