import React from 'react';
import { Category } from '@server/types/books';
import SingleCategoryView from './single-category/SingleCategoryView';

interface IProps {
    loading: boolean;
    categories: Category[];
    setSelectedCategory: (selectedCategory: string | null) => void;
}

const CategoriesView = (props: IProps) => {
    const { loading, categories, setSelectedCategory } = props;

    if (loading) {
        return <p>Loading</p>
    }

    return (
        <>
            {categories.map(category => (
                <SingleCategoryView
                    key={category.list_name_encoded}
                    category={category}
                    setSelectedCategory={setSelectedCategory}
                />
            ))}
        </>
    )
}

export default CategoriesView;
