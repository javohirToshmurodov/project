import axios from "axios";


export const instance = axios.create({
  baseURL:"http://172.105.103.209:9091/api/v1/",
})
