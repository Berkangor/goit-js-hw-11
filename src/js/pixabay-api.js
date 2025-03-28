import axios from 'axios';

const PIXABAY_API_KEY = '49573674-5e60749ecaebe48926ac7831a';
const PIXABAY_BASE_URL = 'https://pixabay.com/';

export async function getImages(searchTerm) {
  const result = await axios.get(PIXABAY_BASE_URL, {
    params: {
      key: PIXABAY_API_KEY,
      q: searchTerm,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      lang: 'en',
    },
  });

  if (result.data.hits.length === 0) {
    throw new Error(
      'Sorry, there are no images matching your search query. Please try again!'
    );
  }

  return result.data;
}