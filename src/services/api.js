import axios from 'axios';
axios.defaults.headers.common['Authorization'] = localStorage.getItem('accessToken');
axios.defaults.baseURL = 'http://localhost:8080/admin/api/';

export const isUnique = async (field, value) =>
      await axios.post(`moderator/is-field-unique?field=${field}&value=${value}`);

export const createModerator = async data =>
    await axios.post(`moderator/create`, data);

