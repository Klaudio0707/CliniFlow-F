import axios from "axios"; // importou axios 

const api = axios.create({
    baseURL:"http://localhost:3000"
})
export default api;