import axios from "axios";

export const api = axios.create({
    baseURL: 'https://gren-ddt.vercel.app/api',
})