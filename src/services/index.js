import axios from "axios";
import toast from "react-hot-toast";

const BASE_URL = 'http://localhost:8000/';

export async function getUsers() {
    try {
       const res = await axios.get(BASE_URL + 'users')
       if(!res.ok) throw new Error("Unable to fetch users!")

       const { data } = await res.json();
       return data;
    } catch(err) {
        console.log(err)
    }
}

export async function getPackages() {
    try {
        const res = await axios.get(BASE_URL + 'packages');
        if(res.statusText !== "OK") throw new Error("Cannot fetch packages data")
        
        return res.data;
    } catch(err) {
        console.log(err)
    }    
}
export async function getGallery() {
    try {
        const res = await axios.get(BASE_URL + 'gallery');
        if(res.statusText !== "OK") throw new Error("Cannot fetch gallery data")
        
        return res.data;
    } catch(err) {
        console.log(err)
    }    
}
export async function getSingleLocation(id) {
    try {
        const res = await axios.get(`${BASE_URL}packages/${id}`);
        if(res.statusText !== "OK") throw new Error("Could not fetch the current location!")

        return res.data;

    } catch(err) {
        console.log(err)
    }
}
export async function submitMessage(body) {
    try {
        await axios.post(BASE_URL + 'messages', body)
        toast.success(`Thank you for your message, ${body.name}! We will be replying you shortly.`)
    } catch(err) {
        console.log(err)
        toast.error(`Your message cannot get uploaded, ${body.name}! Try again.`)
    }
}