import React, { useEffect, useState } from 'react';
import BooksView from './BooksView';
import { getCategories } from '../../../api/books';

const initialState = {
    loading: false,
    list: [],
}

const Books = () => {
    const [loading, setLoading] = useState(initialState.loading);
    const [list, setList] = useState(initialState.list);

    const getList = async () => {
        setLoading(true);
        try {
            const res = await getCategories();
            setList(res);
        } catch {
            // Show error
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getList();
    }, []);

    return (
        <BooksView
            loading={loading}
            list={list}
        />
    )
}

export default Books;
