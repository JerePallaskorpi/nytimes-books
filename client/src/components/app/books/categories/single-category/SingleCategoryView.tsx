import React from 'react';
import { Category } from '@server/types/books';

interface IProps {
    category: Category;
    setSelectedCategory: (selectedCategory: string | null) => void;
}

const SingleCategoryView = (props: IProps) => {
    const { category, setSelectedCategory } = props;

    return (
        <div onClick={() => { setSelectedCategory(category.list_name_encoded) }}>
            <p>{ category.display_name }</p>
        </div>
    )
}

export default SingleCategoryView;
