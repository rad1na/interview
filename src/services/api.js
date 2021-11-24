import axios from "axios";
const apiUrl = "https://api.itorah.com/api";
export const mainApi = axios.create({
  baseURL: apiUrl,
});
