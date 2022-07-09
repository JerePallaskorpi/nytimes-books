import React from 'react';
import { Category } from '@server/types/books';

interface IProps {
    loading: boolean;
    list: Category[];
}

const BooksView = (props: IProps) => {
    const { loading, list } = props;
    const text = JSON.stringify(list);

    if (loading) {
        return <p>Loading</p>
    } else {
        return <p>{ text }</p>
    }
}

export default BooksView;
