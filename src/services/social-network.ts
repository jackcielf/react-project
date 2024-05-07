import axios, { AxiosResponse } from 'axios';
import { InstadataResponse } from '../app/shared/models/instadata-response';

const apiService = axios.create({
  baseURL: 'http://localhost:5000/',
});

export const getInstaData = async (): Promise<InstadataResponse> => {
  try {
    const response: AxiosResponse<InstadataResponse> = await apiService.get('/instadata');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    throw error;
  }
};
