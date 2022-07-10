import React from 'react';
import SingleCategoryView from './single-category/SingleCategoryView';
import { Category } from '../../../../../../server/src/types/books';
import StyledCategoryWrapper from '../../../ui/block/books/categories/Categories';
import FullscreenLoading from '../../shared/FullscreenLoading';

interface IProps {
    loading: boolean;
    categories: Category[];
    setSelectedCategory: (selectedCategory: Category | null) => void;
}

const CategoriesView = (props: IProps) => {
    const { loading, categories, setSelectedCategory } = props;

    if (loading) return <FullscreenLoading />

    return (
        <StyledCategoryWrapper>
            {categories.map(category => (
                <SingleCategoryView
                    key={category.list_name_encoded}
                    category={category}
                    setSelectedCategory={setSelectedCategory}
                />
            ))}
        </StyledCategoryWrapper>
    )
}

export default CategoriesView;
