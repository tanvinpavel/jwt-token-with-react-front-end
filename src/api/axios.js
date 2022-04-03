import axios from "axios";

export default axios.create({
    baseURL: 'http://localhost:4500'
});

export const axiosPrivate = axios.create({
    baseURL: 'http://localhost:4500',
    headers: {'Content-Type': 'application-json'},
    withCredentials: true,
});