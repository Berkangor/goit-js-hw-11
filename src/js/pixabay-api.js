
import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com';

export const fetchPhotosByQuery = q => {
  const searchParams = {
    q,
    key: '49573674-5e60749ecaebe48926ac7831a',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  return axios.get(`/api/`, { params: searchParams });
};