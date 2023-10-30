import axios from "axios";

export async function getUsers() {
    let res;
    try {
        res = await axios.get('http://localhost:8000/users')
    } catch(err) {
        console.log(err)
    }

    return res;
}