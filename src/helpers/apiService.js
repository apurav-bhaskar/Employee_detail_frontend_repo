const employees = [
  {
    name: "Ram",
    job: "Software",
    hireDate: "8/08/2022",
    department: "ABC",
  },
  {
    name: "Mohan",
    job: "Finance",
    hireDate: "8/08/2022",
    department: "EFGH",
  },
];
export default {
  get: async () => {
    return employees;
  },
};
