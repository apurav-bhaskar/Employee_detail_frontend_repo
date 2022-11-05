import axios from "axios";
import { urls } from "../config/env-config";

export default {
  get: async (path) => {
    return axios.get(`${urls.service}/${path}`);
  },
  delete: async (path) => {
    return axios.delete(`${urls.service}/${path}`);
  },
};
