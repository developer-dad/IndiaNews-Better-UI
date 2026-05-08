import axios from "axios";

const BACKEND_URL = axios.create({
    baseURL: "https://india-news-backend-u35m.vercel.app/api/v1"
})

export default BACKEND_URL