import axios from 'axios';

axios.defaults.baseURL = 'https://65984d9e668d248edf246c3c.mockapi.io/contacts';

export const fetchContacts = async () => {
  try {
    const response = await axios.get('/contacts');
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const addContact = async contact => {
  try {
    const response = await axios.post('/contacts', contact);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteContact = async id => {
  try {
    const response = await axios.delete(`/contacts/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
