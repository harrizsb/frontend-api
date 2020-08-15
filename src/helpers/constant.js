import axios from "axios";

export const apiURL = `http://localhost:8081`;

export const ax = axios.create({
  baseURL: apiURL,
});
