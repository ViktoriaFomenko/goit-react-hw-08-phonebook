import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const forSignup = async data => {
  const { data: result } = await instance.post('/users/signup', data);
  instance.defaults.headers.common.authorization = `Bearer ${result.token}`;
  return result;
};

export const forLogin = async data => {
  const { data: result } = await instance.post('/users/login', data);
  instance.defaults.headers.common.authorization = `Bearer ${result.token}`;
  return result;
};

export const forLogout = async () => {
  const data = await instance.post('/users/logout');
  instance.defaults.headers.common.authorization = '';
  return data;
};

export const getCurrent = async token => {
  const data = await instance.post('/users/logout');
  instance.defaults.headers.common.authorization = '';
  return data;
};
export default instance;
