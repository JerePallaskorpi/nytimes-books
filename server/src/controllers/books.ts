import { Request, Response } from 'express';
import { Book, CategoriesResponse, Category, TopByCategoryResponse } from 'books';
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

        const responseData: CategoriesResponse = await response.json();
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

/**
 * TODO: doc
 * @param req
 * @param res
 */
export const topByCategory = async (req: Request, res: Response) => {
    const { category } = req.params;
    const url = `https://api.nytimes.com/svc/books/v3/lists/current/${category}.json`

    try {
        const response = await fetch(`${url}?` + new URLSearchParams({
            'api-key': process.env.NYT_API_KEY,
        }));

        const responseData: TopByCategoryResponse = await response.json();

        const parsedData: Book[] = responseData.results.books.map((book) => {
            return {
                title: book.title,
                author: book.author,
                primary_isbn10: book.primary_isbn10,
                book_image: book.book_image,
                rank: book.rank,
            }
        })

        res.status(200).send(parsedData);
    } catch (err) {
        console.error(err);
        res.status(500).send({
            error: 'Something went wrong while fetching top books by category.',
        });
    }
}
