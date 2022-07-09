import React from 'react';

interface IProps {
    loading: boolean;
    list: any; // TODO: Add Custom type
}

const BooksView = (props: IProps) => {
    const { loading, list } = props;
    const text = JSON.stringify(list);

    if (loading) {
        return <p>Loading</p>
    } else {
        return <p>{ text }</p>
    }
}

export default BooksView;
