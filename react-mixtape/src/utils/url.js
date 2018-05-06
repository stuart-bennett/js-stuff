export const make = (queryString) =>
    Object.keys(queryString)
        .map(x => `${x}=${queryString[x]}`)
        .reduce((acc, x) => acc + "&" + x);
