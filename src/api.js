import axios from 'axios';



axios.defaults.baseURL = 'https://pixabay.com/api/';
const userKey = '29365931-b63e8f402cdf0b6e76f683c05';

export const getPictures = async (query, page) => {
  const response = await axios.get(
    `?key=${userKey}&q=${query}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`
  );
  return response.data;
};