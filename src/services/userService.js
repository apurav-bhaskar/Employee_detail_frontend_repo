import apiService from "../helpers/apiService";

export default {
  verifyUser: async (payload) => {
    const response = await apiService.verifyUser("login", payload);
    return response.data;
  },
};
