import axios from 'axios';


/*
 *   Change Auth header
*/

export default function (){
    axios.defaults.baseURL = process.env.VUE_APP_SERVER_URL;
    axios.post("/auth/login",{
        email: "admin@gmail.com",
        password: "123456"
    }).then(result =>{
        axios.defaults.headers.common['Authorization'] = result.data.token;
    });
}
