import { Request, Response } from 'express';
import {
    Book,
    BookReview,
    BookReviewResponse,
    CategoriesResponse,
    Category,
    TopByCategoryResponse,
} from 'books';
import {
    exampleCategoriesResponse,
    exampleHardcoverFictionResponse,
} from '../utils/exampleResponse';
const fetch = require('node-fetch');

/**
 * Get list of book categories.
 *
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @return {Category[]} 200 - Success response - Contains list of book categories
 * @return {ErrorResponse} 500 - Internal server error if anything goes wrong
 */
export const categories = async (req: Request, res: Response) => {
    // const url = 'https://api.nytimes.com/svc/books/v3/lists/names.json';
    //
    // try {
    //     const response = await fetch(`${url}?` + new URLSearchParams({
    //         'api-key': process.env.NYT_API_KEY,
    //     }));
    //
    //     const responseData: CategoriesResponse = await response.json();
    //     const categories: Category[] = responseData.results.map((category) => {
    //         return {
    //             list_name_encoded: category.list_name_encoded,
    //             display_name: category.display_name,
    //         }
    //     })
    //
    //     res.status(200).send(categories);
    // } catch (err) {
    //     console.error(err);
    //     res.status(500).send({
    //         error: 'Something went wrong while fetching book categories.',
    //     });
    // }

    res.send(exampleCategoriesResponse);
};

/**
 * Get top 10 books by category with reviews.
 *
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @return {Book[]} 200 - Success response - Contains list of books with reviews
 * @return {ErrorResponse} 500 - Internal server error if anything goes wrong
 */
export const topByCategory = async (req: Request, res: Response) => {
    // const { category } = req.params;
    // const url = `https://api.nytimes.com/svc/books/v3/lists/current/${category}.json`
    //
    // try {
    //     const response = await fetch(`${url}?` + new URLSearchParams({
    //         'api-key': process.env.NYT_API_KEY,
    //     }));
    //
    //     const responseData: TopByCategoryResponse = await response.json();
    //     let books: Book[] = responseData.results.books.map((book) => {
    //         return {
    //             title: book.title,
    //             author: book.author,
    //             primary_isbn10: book.primary_isbn10,
    //             book_image: book.book_image,
    //             rank: book.rank,
    //             reviews: [],
    //         }
    //     }).slice(0, 10);
    //
    //     books = await Promise.all(books.map(async (book) => {
    //         const url = `https://api.nytimes.com/svc/books/v3/reviews.json`
    //
    //         const response = await fetch(`${url}?` + new URLSearchParams({
    //             'api-key': process.env.NYT_API_KEY,
    //             isbn: book.primary_isbn10,
    //         }));
    //
    //         const responseData: BookReviewResponse = await response.json();
    //         const reviews: BookReview[] = responseData.results.map(review => ({
    //             url: review.url,
    //             byline: review.byline,
    //             summary: review.summary,
    //         }))
    //
    //         return {
    //             ...book,
    //             reviews,
    //         }
    //     }));
    //
    //     res.status(200).send(books);
    // } catch (err) {
    //     console.error(err);
    //     res.status(500).send({
    //         error: 'Something went wrong while fetching top books by category.',
    //     });
    // }

    res.send(exampleHardcoverFictionResponse);
}
