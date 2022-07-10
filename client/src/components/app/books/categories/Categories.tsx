import React, { useEffect, useState } from 'react';
import CategoriesView from './CategoriesView';
import { getCategories } from '../../../../api/books';
import CategoryBooks from './category-books/CategoryBooks';
import { Category } from '../../../../../../server/src/types/books';
import FullscreenLoading from '../../shared/FullscreenLoading';

interface IState {
    loading: boolean;
    categories: Category[];
    selectedCategory: Category | null;
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

    if (loading) return <FullscreenLoading />

    if (fetchError) return <p>Something went wrong.</p>

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
