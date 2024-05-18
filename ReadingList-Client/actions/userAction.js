import axios from 'axios';
//const API_URL = import.meta.env.API_URL
const API_URL = 'http://localhost:4000'

const baseApiResponse = (data, isSuccess) => {
  return {
    success: isSuccess,
    data: data || null,
  };
};

export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/loginUser`, { username, password });
    return baseApiResponse(response.data.data, true);
  } catch (error) {
    return baseApiResponse(null, false);
  }
};

export const addUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/addUser`, userData);
    return baseApiResponse(response.data.data, true);
  } catch (error) {
    return baseApiResponse("Error menambahkan akun pengguna", false);
  }
};

