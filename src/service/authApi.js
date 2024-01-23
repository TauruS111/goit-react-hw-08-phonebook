import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const signUp = async data => {
  try {
    const response = await axios.post('/users/signup', data);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const logIn = async data => {
  try {
    const response = await axios.post('/users/login', data);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const logOut = async () => {
  try {
    const response = await axios.post('/users/logout');
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const currentUsers = async () => {
  try {
    const response = await axios.get('/users/current');
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
