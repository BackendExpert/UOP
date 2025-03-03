import axios from "axios";

const Backendurl = "http://localhost/uop_backend"

const getToken = () => localStorage.getItem("token");

export const loginuser = async(user) => {
    const res = await axios.post(`${Backendurl}/functions/login.php`, user, {
        headers: {
            'Content-Type': 'application/json',
        },
    })
    return res.data
}

export const signupuser = async(user) => {
    const res = await axios.post(`${Backendurl}/functions/register.php`, user, {
        headers: {
            'Content-Type': 'application/json',
        },
    })
    return res.data
}


