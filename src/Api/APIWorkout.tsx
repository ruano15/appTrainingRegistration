import axios from "axios";

const database = axios.create({
    baseURL: "https://backendworkouts.vercel.app/"
})

export default database