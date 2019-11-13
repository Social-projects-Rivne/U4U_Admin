import request from '../services/request.service';
import axios from 'axios';
const baseUrl = 'http://localhost:8080/admin/api/';

export const isUnique = async (field, value) =>
      await axios.post(`${baseUrl}moderator/is-field-unique?field=${field}&value=${value}`);

export const createModerator = async data =>
    await axios.post(`${baseUrl}api/moderator/create`, data);

