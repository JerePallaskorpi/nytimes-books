import { getHeaders } from '../config';

export const getCategories = () => fetch('/api/categories', {
    method: 'GET',
    headers: getHeaders(),
})
    .then(res => res)
    .then(res => res.json());
