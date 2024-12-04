import axios from '../axiosConfig';

export const fetchBooks = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/books');
    dispatch({ type: 'FETCH_BOOKS', payload: res.data });
  } catch (error) {
    console.error('Error fetching books:', error);
  }
};
