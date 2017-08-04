const apiBaseUrl = "https://api.spotify.com";

type SearchResponse = {
    title: string
};

const doSearch = (searchTerm: string): Promise<SearchResponse> =>
    fetch(`${apiBaseUrl}/search?type=tracks&q=${searchTerm}`)
        .then(r => r.json())
        .then(j => ({ title: j.title }));

const search = (searchTerm: string):Promise<Array<string>> =>
    doSearch(searchTerm).then(r => [
        searchTerm + "#1",
        searchTerm + "#2",
        r.title
    ]);

export { search };
