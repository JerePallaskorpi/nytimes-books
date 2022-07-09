export type CategoryResponse = {
    results: Category[],
};

export type Category = {
    list_name_encoded: string,
    display_name: string,
};
