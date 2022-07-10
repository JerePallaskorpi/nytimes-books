import React from 'react';
import { Book } from '../../../../../../../../server/src/types/books';
import StyledSingleCategoryBook
    from '../../../../../ui/block/books/categories/category-books/single-category-book';

interface IProps {
    book: Book;
}

const SingleCategoryBookView = (props: IProps) => {
    const { book } = props;

    return (
        <StyledSingleCategoryBook>
            <StyledSingleCategoryBook.Header>
                <StyledSingleCategoryBook.Header.Image src={book.book_image} alt={book.title} />
                <StyledSingleCategoryBook.Header.Content>
                    <StyledSingleCategoryBook.Header.Content.Title>
                        <span>{ book.title }</span>
                        <span>{ book.author }</span>
                    </StyledSingleCategoryBook.Header.Content.Title>
                    <StyledSingleCategoryBook.Header.Content.Isbn>
                        <span>ISBN: { book.primary_isbn10 }</span>
                    </StyledSingleCategoryBook.Header.Content.Isbn>
                </StyledSingleCategoryBook.Header.Content>
                <StyledSingleCategoryBook.Header.Rank>
                    <span>{ book.rank }</span>
                </StyledSingleCategoryBook.Header.Rank>
            </StyledSingleCategoryBook.Header>
            { book.reviews.length > 0 && book.reviews.map(book => (
                <StyledSingleCategoryBook.Review>
                    <StyledSingleCategoryBook.Review.Summary>
                        <p>{ book.summary }</p>
                        <p>
                            <a href={book.url} target="_blank">Link to review</a>
                        </p>
                    </StyledSingleCategoryBook.Review.Summary>
                    <StyledSingleCategoryBook.Review.By>
                        <span>{ book.byline }</span>
                    </StyledSingleCategoryBook.Review.By>
                </StyledSingleCategoryBook.Review>
            ))}
        </StyledSingleCategoryBook>
    )
}

export default SingleCategoryBookView;
