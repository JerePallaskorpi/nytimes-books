import { getHeaders } from '../config';

/**
 * Get all book categories.
 *
 * @return {Category[]} List of categories.
 */
export const getCategories = () => fetch('/api/categories', {
    method: 'GET',
    headers: getHeaders(),
})
    .then(res => res)
    .then(res => res.json());

/**
 * Get top 10 books by category with reviews.
 *
 * @param {string} category List name of the category.
 * @return {Book[]} List of books.
 */
export const getTopByCategory = (category: string) => fetch(`/api/categories/${category}`, {
    method: 'GET',
    headers: getHeaders(),
})
    .then(res => res)
    .then(res => res.json());
