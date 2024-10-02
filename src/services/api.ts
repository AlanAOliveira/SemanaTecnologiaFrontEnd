import axios from "axios";

export const api = axios.create({
    /* Digite aqui o seu endereço de IPv4. O caminho é: src/services/api.ts */
    baseURL: "http://192.168.0.11:5000/"
});