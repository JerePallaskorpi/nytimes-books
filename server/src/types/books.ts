export type CategoriesResponse = {
    results: Category[],
};

export type Category = {
    list_name_encoded: string,
    display_name: string,
};

export type TopByCategoryResponse = {
    results: {
        books: Book[],
    },
};

export type Book = {
    title: string,
    author: string,
    primary_isbn10: string,
    book_image: string,
    rank: number,
}
