const baseUrl = "https://api.spotify.com/v1";

const createHeaders = (authToken) => new Headers({
    'Authorization': `Bearer ${authToken}`
});

export function get(url, token) {
    if (!token) {
        throw 'Parameter "token" is required';
    }

    const requestOptions = {
        headers: createHeaders(token)
    };

    return fetch(`${baseUrl}${url}`, requestOptions);
}
