
import axios from 'axios';
import { Store } from '../types';

const API_BASE_URL = 'https://interview-task-green.vercel.app/task';
const PRODUCTS_API = 'https://glore-bd-backend-node-mongo.vercel.app/api/product';

export const checkDomainAvailability = async (domain: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/domains/check/${domain}`);
    // The API returns false when the domain is available
    return !response.data;
  } catch (error) {
    throw new Error('Failed to check domain availability');
  }
};

export const createStore = async (storeData: Store) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/stores/create`, storeData);
    return response.data;
  } catch (error) {
    throw new Error('Failed to create store');
  }
};

export const getProducts = async () => {
  try {
    const response = await axios.get(PRODUCTS_API);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch products');
  }
};

export const getProductById = async (id: string) => {
  try {
    const response = await axios.get(`${PRODUCTS_API}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch product');
  }
};