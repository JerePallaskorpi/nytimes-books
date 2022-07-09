import React from 'react';
import { Book } from '@server/types/books';

interface IProps {
    book: Book;
}

const SingleCategoryBookView = (props: IProps) => {
    const { book } = props;

    return (
        <>
            <p>{ book.title }</p>
        </>
    )
}

export default SingleCategoryBookView;
