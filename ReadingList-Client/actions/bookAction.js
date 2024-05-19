import axios from 'axios';
//const API_URL = import.meta.env.API_URL
const API_URL = 'http://localhost:4000'

const baseApiResponse = (data, isSuccess) => {
    return {
      success: isSuccess,
      data: data || null,
    };
};

export const getAllBooks = async() => {
    try {
        const response = await axios.get(`${API_URL}/getAllBooks`, {});
        return baseApiResponse(response.data.data, true);
      } catch (error) {
        return baseApiResponse(null, false);
      }
}

export const addBooks = async(bookData) => {
  try {
      const response = await axios.post(`${API_URL}/addBook`, bookData);
      return baseApiResponse(response.data.data, true);
    } catch (error) {
      return baseApiResponse(null, false);
    }
}

export const delBook = async(title) => {
  try {
      const response = await axios.delete(`${API_URL}/deleteBook/${title}`);
      return baseApiResponse(response.data.data, true);
    } catch (error) {
      return baseApiResponse(null, false);
    }
}

/*export const addToReadingList = async (userId, bookId) => {
  try {
    const response = await axios.post(`${API_URL}/addToList`, { userId, bookId });
    return { success: true, data: response.data };
  } catch (error) {
    console.error('Error adding book to reading list:', error);
    return { success: false, error: error.message };
  }
};*/

