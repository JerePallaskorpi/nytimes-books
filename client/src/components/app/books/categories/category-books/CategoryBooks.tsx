import React, { useEffect, useState } from 'react';
import { sleep } from '../../../../../utils';
import { getTopByCategory } from '../../../../../api/books';
import SingleCategoryBookView from './single-category-book/SingleCategoryBookView';
import { Book } from '../../../../../../../server/src/types/books';

interface IProps {
    selectedCategory: string;
    setSelectedCategory: (selectedCategory: string | null) => void;
}

interface IState {
    loading: boolean;
    books: Book[];
    fetchError: boolean;
}

const initialState: IState = {
    loading: false,
    books: [],
    fetchError: false,
}

const CategoryBooks = (props: IProps) => {
    const { selectedCategory, setSelectedCategory } = props;

    const [books, setBooks] = useState(initialState.books);
    const [loading, setLoading] = useState(initialState.loading);
    const [fetchError, setFetchError] = useState(initialState.fetchError);

    useEffect(() => {
        const fetchBooks = async () => {
            setLoading(true);
            await sleep(1000);
            try {
                const res = await getTopByCategory(selectedCategory);
                setBooks(res);
            } catch {
                setFetchError(true);
            } finally {
                setLoading(false);
            }
        }

        fetchBooks();
    }, [selectedCategory]);

    if (loading) {
        return <p>Loading</p>
    }

    if (fetchError) {
        return (
            <>
                <div onClick={() => { setSelectedCategory(null) }}>
                    <p>Go back</p>
                </div>
                <p>Error</p>
            </>
        )
    }

    return (
        <>
            <div onClick={() => { setSelectedCategory(null) }}>
                <p>Go back</p>
            </div>
            <p>Top 10 - { selectedCategory }</p>
            <div>
                {books.map(book => <SingleCategoryBookView key={book.primary_isbn10} book={book} />)}
            </div>
        </>
    )
}

export default CategoryBooks;
