import apiService from "../helpers/apiService";
export default {

    fetch: async () => {
      const response = await apiService.get("department"); 
      //console.log(response.data);
      return response.data;
    },
  };