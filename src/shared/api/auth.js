import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const forSignup = async data => {
  const { data: result } = await instance.post('/users/signup', data);
  return result;
};

export const forLogin = async data => {
  const { data: result } = await instance.post('/users/login', data);
  return result;
};
