import { Request, Response } from 'express';
import { Category, CategoryResponse } from 'books';
const fetch = require('node-fetch');

/**
 * Get list of book categories.
 *
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @return {object} 200 - Success response - Contains list of book categories
 * @return {object} 500 - Internal server error if anything goes wrong
 */
export const categories = async (req: Request, res: Response) => {
    const url = 'https://api.nytimes.com/svc/books/v3/lists/names.json';

    try {
        const response = await fetch(`${url}?` + new URLSearchParams({
            'api-key': process.env.NYT_API_KEY,
        }));

        const responseData: CategoryResponse = await response.json();
        const parsedData: Category[] = responseData.results.map((category) => {
            return {
                list_name_encoded: category.list_name_encoded,
                display_name: category.display_name,
            }
        })

        res.status(200).send(parsedData);
    } catch (err) {
        console.error(err);
        res.status(500).send({
            error: 'Something went wrong while fetching book categories.',
        });
    }
};
