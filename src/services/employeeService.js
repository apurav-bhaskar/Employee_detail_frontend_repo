import apiService from "../helpers/apiService";
export default {
  getEmp: async () => {
    const response = await apiService.getEmp("employee");
    return response.data;
  },
  deleteEmp: async (id) => {
    const response = await apiService.deleteEmp(`delete/${id}`);
    return response.data;
  },
  addEmp: async (payload) => {
    const response = await apiService.addEmp(`add`, payload);
    return response.data;
  },
  updateEmp: async (payload, id) => {
    const response = await apiService.updateEmp(`edit/${id}`, payload);
    return response.data;
  },
};
