import axios from "axios";

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