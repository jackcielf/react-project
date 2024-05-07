import axios, { AxiosResponse } from 'axios';
import type { CollapseProps } from 'antd';

const apiService = axios.create({
  baseURL: 'http://localhost:5000/',
});

export const getDocs = async (): Promise<CollapseProps['items']> => {
  try {
    const response: AxiosResponse<CollapseProps['items']> = await apiService.get('/docs');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    throw error;
  }
};
