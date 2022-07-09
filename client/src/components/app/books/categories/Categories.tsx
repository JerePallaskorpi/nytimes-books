import React, { useEffect, useState } from 'react';
import CategoriesView from './CategoriesView';
import { getCategories } from '../../../../api/books';
import { Category } from '@server/types/books';
import CategoryBooks from './category-books/CategoryBooks';
import { sleep } from '../../../../utils';

interface IState {
    loading: boolean;
    categories: Category[];
    selectedCategory: string | null;
    fetchError: boolean;
}

const initialState: IState = {
    loading: true,
    categories: [],
    selectedCategory: null,
    fetchError: false,
}

const Categories = () => {
    const [loading, setLoading] = useState(initialState.loading);
    const [categories, setCategories] = useState(initialState.categories);
    const [selectedCategory, setSelectedCategory] = useState(initialState.selectedCategory);
    const [fetchError, setFetchError] = useState(initialState.fetchError);

    useEffect(() => {
        const fetchCategories = async () => {
            setLoading(true);
            await sleep(1000);
            try {
                const res = await getCategories();
                setCategories(res);
            } catch {
                setFetchError(true);
            } finally {
                setLoading(false);
            }
        }

        fetchCategories();
    }, []);

    if (loading) {
        return <p>Loading</p>
    }

    if (fetchError) {
        return <p>Error</p>
    }

    if (selectedCategory === null) {
        return (
            <CategoriesView
                loading={loading}
                categories={categories}
                setSelectedCategory={setSelectedCategory}
            />
        )
    } else {
        return (
            <CategoryBooks
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />
        )
    }
}

export default Categories;
