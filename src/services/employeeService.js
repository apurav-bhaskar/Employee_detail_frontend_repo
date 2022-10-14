import apiService from "../helpers/apiService";
export default {
  get: async () => {
    const response = await apiService.get();
    return response;
  },
};
