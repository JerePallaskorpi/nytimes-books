import React, { useEffect, useState } from 'react';
import { getTopByCategory } from '../../../../../api/books';
import SingleCategoryBookView from './single-category-book/SingleCategoryBookView';
import { Book, Category } from '../../../../../../../server/src/types/books';
import StyledCategoryBooks
    from '../../../../ui/block/books/categories/category-books/CategoryBooks';
import FullscreenLoading from '../../../shared/FullscreenLoading';
import { StyledButton } from '../../../../ui/element/Button';

interface IProps {
    selectedCategory: Category;
    setSelectedCategory: (selectedCategory: Category | null) => void;
}

interface IState {
    loading: boolean;
    books: Book[];
    fetchError: boolean;
}

const initialState: IState = {
    loading: true,
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
            try {
                const res = await getTopByCategory(selectedCategory.list_name_encoded);
                setBooks(res);
            } catch {
                setFetchError(true);
            } finally {
                setLoading(false);
            }
        }

        fetchBooks();
    }, [selectedCategory]);

    if (loading) return <FullscreenLoading />

    if (fetchError) return <p>Something went wrong.</p>

    return (
        <StyledCategoryBooks>
            <StyledCategoryBooks.Header>
                <StyledButton onClick={() => { setSelectedCategory(null) }}>
                    <span>Go back</span>
                </StyledButton>
                <div>
                    <span>{ selectedCategory.display_name }</span>
                </div>
            </StyledCategoryBooks.Header>
            <div>
                {books.map(book => <SingleCategoryBookView key={book.primary_isbn10} book={book} />)}
            </div>
        </StyledCategoryBooks>
    )
}

export default CategoryBooks;
