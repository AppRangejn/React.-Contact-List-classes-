import axios from 'axios'

export const api = axios.create({
    baseURL: 'https//localhost:5000/contacts/',
    headers: { 'Content-Type': 'application/json'},
});