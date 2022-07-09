import React, { useEffect, useState } from 'react';
import BooksView from './BooksView';
import { getCategories } from '../../../api/books';
import { Category } from '@server/types/books';

interface IState {
    loading: boolean;
    list: Category[];
}

const initialState: IState = {
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
