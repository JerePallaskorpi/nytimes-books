interface IResponse {
    status: number;
    statusText: string;
}

/**
 * Creates headers for fetch calls.
 *
 * @returns {Object} Headers data.
 */
export const getHeaders = () => {
    const headers = new Headers();
    headers.append('X-Requested-With', 'XMLHttpRequest');
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return headers;
};

/**
 * Handles fetch error with throwing error or continuing promise chain.
 *
 * @param {Object} response Response from fetch.
 *
 * @throws Will throw an error if response is not ok.
 * @returns {Promise} Promise with response data.
 */
export const handleErrors = (response: IResponse) => {
    if (response.status !== 200) {
        throw Error(response.statusText);
    }

    return response;
};
