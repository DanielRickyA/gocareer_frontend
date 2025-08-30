import axios from "axios";
export const BASE_URL = "http://localhost:3000/api/";

const useAxios = axios.create({
  baseURL: `${BASE_URL}`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default useAxios;
