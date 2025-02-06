import axios from 'axios';

const API_BASE_URL = 'https://your-api.com/api';

export const fetchProducts = async () => {
  const response = await axios.get(`${API_BASE_URL}/product`);
  return response.data;
};

export const fetchProductById = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/product/${id}`);
  return response.data;
};

export const addToCart = async (productId) => {
  return axios.post(`${API_BASE_URL}/cart`, { productId });
};
