import axios from 'axios';
import {toast} from 'react-toastify'


axios.defaults.baseURL = 'https://pixabay.com/api/';



export const getPictures = async (input, page) => {
  try {
    const response = await axios.get(
      `/?q=${input}&page=${page}&key=${process.env.REACT_APP_API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    return response.data.hits
    
  } catch (error) {
    toast.error('It is all..');
  }
};