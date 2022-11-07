import apiService from "../helpers/apiService";
export default {

    fetchDept: async () => {
      const response = await apiService.getDept("department"); 
      return response.data;
    },
  };