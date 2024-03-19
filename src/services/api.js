import axios from "axios";

axios.defaults.baseURL = " http://94.131.246.109:5555/";

const classKey = 2;

export const getStudents = async () => {
  const { data } = await axios.get(`v1/${classKey}/Schoolboy`);
  return data;
};

export const getClasses = async () => {
  const { data } = await axios.get(`v1/${classKey}/Column`);
  return data;
};

export const getRates = async () => {
  const { data } = await axios.get(`v1/${classKey}/Rate`);
  return data;
};

export const getRateById = async (id) => {
  const { data } = await axios.get(`v1/${classKey}/Rate?SchoolboyId=${id}`);
  console.log("getRateById data", data);
  return data;
};

export const setRateById = async (creds) => {
  const { data } = await axios.post(`v1/${classKey}/Rate`, {
    SchoolboyId: creds.idStudent,
    ColumnId: creds.idColum,
    Title: "Н",
  });
  return data;
};

export const unsetRateById = async (creds) => {
  const { data } = await axios.post(`v1/${classKey}/UnRate`, {
    SchoolboyId: creds.idStudent,
    ColumnId: creds.idColum,
  });
  return data;
};
