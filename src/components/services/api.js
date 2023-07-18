import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/';
const searchParams = new URLSearchParams({
  key: "36982513-bf126f349b94d33a115a611fc",
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
});

export const fetchImages = async (searchQuery, page) => {
  const images = await axios.get(`?q=${searchQuery}&page=${page}&${searchParams}`);
  
  return images.data;
};