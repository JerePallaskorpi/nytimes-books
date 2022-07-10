import React from 'react';
import { Category } from '../../../../../../../server/src/types/books';
import StyledSingleCategory from '../../../../ui/block/books/categories/SingleCategory';

interface IProps {
    category: Category;
    setSelectedCategory: (selectedCategory: Category | null) => void;
}

const SingleCategoryView = (props: IProps) => {
    const { category, setSelectedCategory } = props;

    return (
        <StyledSingleCategory
            onClick={() => { setSelectedCategory(category) }}
        >
            <p>{ category.display_name }</p>
        </StyledSingleCategory>
    )
}

export default SingleCategoryView;
