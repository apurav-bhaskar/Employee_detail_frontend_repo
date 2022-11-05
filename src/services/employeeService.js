import apiService from "../helpers/apiService";
export default {
  get: async () => {
    const response = await apiService.get("employee");
    console.log(response.data);
    return response.data;
  },
  delete: async (id) => {
    const response = await apiService.delete(`delete/${id}`);
    return response.data;
  },
};
