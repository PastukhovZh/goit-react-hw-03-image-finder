import axios from 'axios';
import {toast} from 'react-toastify'


axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.headers.common['x-api-key'] = process.env.REACT_APP_API_KEY;


export const getPictures  = async (input, page) => {
  try {
    const response = await axios.get(
      `/?q=${input}&page=${page}&key=${process.env.REACT_APP_API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    const arrayOfImages = response.data.hits
    return arrayOfImages;
  } catch (error) {
    toast.error('not more such result');
  }
};

// export const getDogByBreed = async breed => {
//   const response = await axios.get('/images/search`', {
//     params: { breed_id: breed }
//   });
//   return response.data[0];
// };