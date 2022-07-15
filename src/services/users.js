import { API_URL } from '../constants';
import axios from 'axios';

export const getUser = async (user) => {
  await axios
    .get(`${API_URL}${user}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw new Error(err);
    });
};
