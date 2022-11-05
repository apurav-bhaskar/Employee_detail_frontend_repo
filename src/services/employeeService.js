import apiService from "../helpers/apiService";
export default {
  get: async () => {
    const response = await apiService.get("employee");
    console.log(response.data);
    return response.data;
  },
};
