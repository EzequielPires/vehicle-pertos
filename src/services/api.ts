import axios from "axios";
import { parseCookies } from "nookies";

export function getApi(ctx?: any) {
    const { 'pertos_vehicles.access_token': token } = parseCookies(ctx);
    const api = axios.create({
        baseURL: process.env.NEXT_PUBLIC_URL_DEFAULT
    })
    if (token) api.defaults.headers['Authorization'] = `Bearer ${token}`;
    return api;
}
export const api = getApi();