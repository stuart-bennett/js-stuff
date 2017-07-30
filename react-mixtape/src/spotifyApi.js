const search = (searchTerm: string):Promise<Array<string>> =>
    Promise.resolve([
        searchTerm + "#1",
        searchTerm + "#2"
    ]);

export { search };
