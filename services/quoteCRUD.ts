import { axios } from 'services';

export const createQuote = async (data: FormData) => {
  return axios.post('/api/create-quote', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const deleteQuote = async (quote: number) => {
  return axios.delete(`/api/delete-quote/${quote}`);
};

export const updateQuote = async (data: FormData) => {
  return axios.post('/api/update-quote?_method=put', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};