import {search} from "spotifyApi";

describe("The search function", () => {
    describe("whilst under development", () => {

        test("should resolve to a 2 item array containing searchTerm with number prefix", () => {
            const result = search("searchTerm");
            let expected = [
                "searchTerm#1",
                "searchTerm#2"
            ];

            expect(result).resolves.toEqual(expected);
        });
    });
});
